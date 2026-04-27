const corsHeaders = {
  "Access-Control-Allow-Origin":  "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const { project_id } = await req.json();
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

    const orderCode = Date.now();
    const amount    = Math.round(project.amount_vnd || 5000000);

    const PAYOS_CLIENT_ID  = Deno.env.get("PAYOS_CLIENT_ID")!;
    const PAYOS_API_KEY    = Deno.env.get("PAYOS_API_KEY")!;
    const PAYOS_CHECKSUM   = Deno.env.get("PAYOS_CHECKSUM_KEY")!;

    // Build checksum (SHA256 of sorted params)
    const dataStr = `amount=${amount}&cancelUrl=${siteUrl}/quote.html?id=${project_id}&description=HAYWEB ${orderCode}&orderCode=${orderCode}&returnUrl=${siteUrl}/success.html?id=${project_id}`;
    const encoder  = new TextEncoder();
    const keyData  = encoder.encode(PAYOS_CHECKSUM);
    const msgData  = encoder.encode(dataStr);
    const cryptoKey = await crypto.subtle.importKey("raw", keyData, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
    const sig = await crypto.subtle.sign("HMAC", cryptoKey, msgData);
    const signature = Array.from(new Uint8Array(sig)).map(b => b.toString(16).padStart(2, "0")).join("");

    const resp = await fetch("https://api-merchant.payos.vn/v2/payment-requests", {
      method:  "POST",
      headers: {
        "Content-Type":  "application/json",
        "x-client-id":   PAYOS_CLIENT_ID,
        "x-api-key":     PAYOS_API_KEY,
      },
      body: JSON.stringify({
        orderCode,
        amount,
        description: `HAYWEB ${orderCode}`,
        items: [{ name: project.project_name || "Website", quantity: 1, price: amount }],
        cancelUrl:  `${siteUrl}/quote.html?id=${project_id}`,
        returnUrl:  `${siteUrl}/success.html?id=${project_id}`,
        signature,
      }),
    });

    const payosData = await resp.json();
    if (payosData.code !== "00") throw new Error(payosData.desc || "PayOS error");

    await sb.from("hw_projects").update({
      payos_order_code: String(orderCode),
      payment_method: "payos",
    }).eq("id", project_id);

    return new Response(
      JSON.stringify({ checkout_url: payosData.data.checkoutUrl, qr_code: payosData.data.qrCode }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
