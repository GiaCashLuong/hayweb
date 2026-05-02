// HAYWEB — daily free consultation slot counter.
// GET → returns { used, total, available, slot_date } for today (Asia/Ho_Chi_Minh).
const corsHeaders = {
  "Access-Control-Allow-Origin":  "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const DAILY_LIMIT = 5;

function todayICT(): string {
  // Format YYYY-MM-DD in Asia/Ho_Chi_Minh.
  const fmt = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Ho_Chi_Minh",
    year: "numeric", month: "2-digit", day: "2-digit",
  });
  return fmt.format(new Date());
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const { createClient } = await import("npm:@supabase/supabase-js@2");
    const sb = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const slotDate = todayICT();

    const { count, error } = await sb
      .from("hw_consultations")
      .select("id", { count: "exact", head: true })
      .eq("slot_date", slotDate)
      .eq("status", "booked");

    if (error) throw error;

    const used = count ?? 0;
    const available = Math.max(0, DAILY_LIMIT - used);

    return new Response(
      JSON.stringify({ used, total: DAILY_LIMIT, available, slot_date: slotDate }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type":  "application/json",
          "Cache-Control": "public, max-age=30",
        },
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
