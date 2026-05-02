// HAYWEB — book a free 30-min consultation slot.
// POST { name, email, phone?, source?, website? (honeypot), notes? }
// → returns { ok, status: 'booked' | 'waitlist', slot_remaining, slot_date }
const corsHeaders = {
  "Access-Control-Allow-Origin":  "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const DAILY_LIMIT = 5;

function todayICT(): string {
  const fmt = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Ho_Chi_Minh",
    year: "numeric", month: "2-digit", day: "2-digit",
  });
  return fmt.format(new Date());
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json();
    const name   = String(body.name   ?? "").trim().slice(0, 200);
    const email  = String(body.email  ?? "").trim().slice(0, 200);
    const phone  = String(body.phone  ?? "").trim().slice(0, 40);
    const source = String(body.source ?? "cta_band").slice(0, 40);
    const notes  = String(body.notes  ?? "").slice(0, 1000);
    const honeypot = String(body.website ?? "");

    // Honeypot — silent fake-success for bots
    if (honeypot) {
      return new Response(
        JSON.stringify({ ok: true, status: "booked", slot_remaining: 4, slot_date: todayICT() }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!name || !email || !EMAIL_RE.test(email)) {
      return new Response(
        JSON.stringify({ error: "Tên và email hợp lệ là bắt buộc." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { createClient } = await import("npm:@supabase/supabase-js@2");
    const sb = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const slotDate = todayICT();

    const { count, error: countErr } = await sb
      .from("hw_consultations")
      .select("id", { count: "exact", head: true })
      .eq("slot_date", slotDate)
      .eq("status", "booked");

    if (countErr) throw countErr;

    const used   = count ?? 0;
    const status = used >= DAILY_LIMIT ? "waitlist" : "booked";

    const { error: insertErr } = await sb.from("hw_consultations").insert({
      name, email, phone, source, notes, status, slot_date: slotDate,
    });

    if (insertErr) throw insertErr;

    const slot_remaining = status === "booked"
      ? Math.max(0, DAILY_LIMIT - used - 1)
      : 0;

    return new Response(
      JSON.stringify({ ok: true, status, slot_remaining, slot_date: slotDate }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
