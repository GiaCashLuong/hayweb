const corsHeaders = {
  "Access-Control-Allow-Origin":  "*",
  "Access-Control-Allow-Headers": "authorization, stripe-signature, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const body = await req.text();
    const sig  = req.headers.get("stripe-signature");
    const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET")!;

    const Stripe = (await import("npm:stripe@14")).default;
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY")!, { apiVersion: "2024-06-20" });

    let event;
    try {
      event = stripe.webhooks.constructEvent(body, sig!, webhookSecret);
    } catch {
      return new Response("Webhook signature invalid", { status: 400 });
    }

    if (event.type === "checkout.session.completed") {
      const session    = event.data.object as { metadata?: { project_id?: string }; id: string };
      const project_id = session.metadata?.project_id;
      if (!project_id) return new Response("No project_id", { status: 200 });

      const { createClient } = await import("npm:@supabase/supabase-js@2");
      const sb = createClient(
        Deno.env.get("SUPABASE_URL")!,
        Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
      );

      await sb.from("hw_projects").update({ status: "paid" }).eq("id", project_id);
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Unknown" }),
      { status: 500, headers: corsHeaders }
    );
  }
});
