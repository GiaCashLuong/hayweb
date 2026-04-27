import Anthropic from "npm:@anthropic-ai/sdk@0.27.1";

const corsHeaders = {
  "Access-Control-Allow-Origin":  "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const { brief, user_id } = await req.json();
    if (!brief || !user_id) throw new Error("Missing brief or user_id");

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) throw new Error("Unauthorized");

    const { createClient } = await import("npm:@supabase/supabase-js@2");
    const sb = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const anthropic = new Anthropic({ apiKey: Deno.env.get("ANTHROPIC_API_KEY")! });

    const lang = brief.lang || "vi";
    const isVi = lang === "vi";

    const systemPrompt = isVi
      ? `Bạn là chuyên viên tư vấn thiết kế web cao cấp của HAYWEB. Hãy tạo một báo giá chi tiết và chuyên nghiệp dựa trên yêu cầu dự án. QUAN TRỌNG: Không đề cập đến AI, ChatGPT, hay bất kỳ công cụ AI nào. Báo giá phải có vẻ như được chuẩn bị thủ công bởi đội ngũ tư vấn chuyên nghiệp. Trả về JSON thuần.`
      : `You are a senior web design consultant at HAYWEB. Create a detailed, professional quote based on the project requirements. IMPORTANT: Do not mention AI, ChatGPT, or any AI tools. The quote must appear to be manually prepared by a professional consulting team. Return pure JSON only.`;

    const userPrompt = isVi
      ? `Tạo báo giá cho dự án sau:\n${JSON.stringify(brief, null, 2)}\n\nTrả về JSON với cấu trúc:\n{\n  "project_name": string,\n  "summary": string (2-3 câu tóm tắt),\n  "timeline_days": number,\n  "line_items": [{ "item": string, "description": string, "amount_vnd": number, "amount_usd": number }],\n  "total_vnd": number,\n  "total_usd": number,\n  "included": [string] (danh sách bao gồm),\n  "excluded": [string] (danh sách không bao gồm),\n  "notes": string (ghi chú thêm),\n  "warranty": string (điều khoản bảo hành)\n}`
      : `Create a quote for this project:\n${JSON.stringify(brief, null, 2)}\n\nReturn JSON with structure:\n{\n  "project_name": string,\n  "summary": string (2-3 sentence summary),\n  "timeline_days": number,\n  "line_items": [{ "item": string, "description": string, "amount_vnd": number, "amount_usd": number }],\n  "total_vnd": number,\n  "total_usd": number,\n  "included": [string],\n  "excluded": [string],\n  "notes": string,\n  "warranty": string\n}`;

    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 2048,
      system: systemPrompt,
      messages: [{ role: "user", content: userPrompt }],
    });

    const raw = message.content[0].type === "text" ? message.content[0].text : "";
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("Invalid quote format");

    const quote = JSON.parse(jsonMatch[0]);

    const { data: project, error: dbErr } = await sb
      .from("hw_projects")
      .insert({
        user_id,
        project_name: quote.project_name || brief.project_name,
        brief,
        quote,
        status: "pending",
        amount_vnd: quote.total_vnd,
        amount_usd: quote.total_usd,
      })
      .select()
      .single();

    if (dbErr) throw dbErr;

    return new Response(
      JSON.stringify({ project_id: project.id, quote }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
