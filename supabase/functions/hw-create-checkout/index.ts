const corsHeaders = {
  "Access-Control-Allow-Origin":  "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const { project_id, currency } = await req.json();
    const siteUrl = Deno.env.get("SITE_URL") || "https://hayweb.vercel.app";

    const { createClient } = await import("npm:@supabase/supabase-js@2");
    const sb = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { data: project, error } = await sb
      .from("hw_projects")
      .select("*")
      .eq("id", project_id)
      .single();

    if (error || !project) throw new Error("Project not found");

    const Stripe = (await import("npm:stripe@14")).default;
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY")!, { apiVersion: "2024-06-20" });

    const isVND = currency === "vnd";
    const amount = isVND
      ? Math.round(project.amount_vnd)
      : Math.round((project.amount_usd || 0) * 100);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{
        price_data: {
          currency: isVND ? "vnd" : "usd",
          product_data: {
            name: `HAYWEB – ${project.project_name || "Dự án website"}`,
            description: `Project ID: ${project_id}`,
          },
          unit_amount: amount,
        },
        quantity: 1,
      }],
      mode: "payment",
      success_url: `${siteUrl}/success.html?id=${project_id}`,
      cancel_url:  `${siteUrl}/quote.html?id=${project_id}`,
      metadata:    { project_id },
    });

    await sb.from("hw_projects").update({
      stripe_session_id: session.id,
      payment_method: "stripe",
    }).eq("id", project_id);

    return new Response(
      JSON.stringify({ url: session.url }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
