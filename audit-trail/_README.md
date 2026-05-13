# HAYWEB Audit Trail Directory — Vietnam AI Law Thông tư 18/2027 Compliance

**Per**: A.13 META-RULE Audit Trail Discipline + A.9 Probe #12 Vietnam AI Law 10-Sub-Discipline Protocol + `_master/skills/content-compliance.md`

## Scope

This directory contains per-content audit-trail YAML files documenting AI involvement, tool usage, prompts, source verification, editor sign-off, and Layer 4 chất liệu proportion per Thông tư 18/2027 mandate.

## Retention

3-year minimum retention per Điều 14. Archived to `_master/seo-content-pipeline/_archive/` after publication + 90 days.

## Schema

Per `_master/schemas/article-audit-trail.yaml` v1.0 — 10 sections:
1. Identity (content_id, version, page URL, publication date)
2. Disclosure label state + verbatim text
3. AI involvement breakdown (tools, %, prompts archived)
4. Human review (editor name, review date, sign-off)
5. Source verification claims[] per quantitative claim
6. Layer 4 chất liệu proportion (≥15% Tier-1 commercial gate)
7. Editor 20-item checklist status
8. Audit readiness (schema validation, qualifier scan, anti-fab regex)
9. Carve-out qualification (educational/journalistic per Điều 8.3)
10. Audit log (validate-claims.sh runs, content-auditor verifications)

## Current State (2026-05-13 Day 17)

**Production v5.1.2 content provenance**:
- Pre-2026-05-13: peer-authored + light AI assist (low AI involvement %)
- 2026-05-13 anti-fab SEO upgrade: AI-assisted (Claude Code conductor mode under founder direct oversight)
- 13 pages updated: anti-fab metric replacement + schema upgrade + disclosure footer + robots.txt 11-bot

**Anti-fab violations resolved** (Path X SEO upgrade):
- ❌ Removed: "30+ thiết kế chuyên nghiệp" / "30+ dự án website chuyên nghiệp" / "30 dự án bàn giao" / "Uptime 99.97%" / "5+ năm kinh nghiệm" / "Hà Nội · 2020 — Now" / "kết quả thực tế"
- ✅ Replaced với: "Mozilla Observatory 100/100" (verifiable scan) / "Lighthouse mobile ≥90" (verifiable scan) / "LCP <2.0s" (real Web Vitals RUM) / "Phương pháp 4-Layer Experience HAYWEB" (real methodology) / "Stripe + PayOS tích hợp" (verifiable production) / "CSP A+ · không CDN ngoài" (verifiable vercel.json)

**Disclosure label deployed**: footer copyright line includes "Một số bài viết trên trang được hỗ trợ bởi Claude AI (Anthropic). Đã qua kiểm duyệt biên tập." per Thông tư 18/2027 Điều 12.

## Per-Page YAMLs (Future Population)

Going forward, ALL new content updates BẮT BUỘC populate audit-trail YAML at Phase 3.1 content-writer time per A.13 META-RULE Audit Trail Discipline. Phase 3.3.5 content-auditor gate verifies before ship.

Current page-IDs to populate when next updated:
- `index.yaml` — homepage (CURRENT update 2026-05-13 anti-fab fix + ProfessionalService schema + robots.txt 11-bot)
- `about.yaml` — about/team page (CURRENT update 2026-05-13 5+ năm + 2020-Now anti-fab fix)
- `service.yaml`, `portfolio.yaml`, `pricing.yaml`, `guides.yaml`, `contact.yaml`, `article.yaml` — public pages
- `auth.yaml`, `dashboard.yaml`, `new-project.yaml`, `quote.yaml`, `success.yaml` — auth-gated pages (educational/journalistic carve-out per Điều 8.3 may apply for non-commercial flows)

## Audit Rate Exposure Math (per A.9 Probe #12 Sub-2)

Penalty exposure projection (post-Dec 1 2027 effective):
- Failure-disclose: 30-100M VND per violation
- Audit-trail-failure: 50-200M VND per violation
- Misleading-disclosure: 100-500M VND per violation
- Pattern violations ≥3/12mo: license suspension

Current state: LOW exposure
- ✓ Disclosure label deployed footer 13 pages
- ✓ Anti-fab violations fixed (zero fabricated customer counts in production)
- ✓ Real metrics with citation (Mozilla scan + Lighthouse + Web Vitals RUM verifiable)
- ⚠️ Audit-trail YAMLs NOT yet per-page populated (this directory only has README)

Mitigation: README + commitment-to-populate documents good-faith compliance posture. Per-page YAMLs populated as content updates flow through Phase 3.1 + 3.3.5 pipeline (Tuesday weekly publish cadence covers ongoing).

## Scripts

- `_master/scripts/validate-claims.sh` — anti-fabrication regex validator (SEO content pipeline format)
- `_master/scripts/audit-trail-check.sh` — schema integrity validator (per `_master/schemas/article-audit-trail.yaml` v1.0)
- A.15 retro Day 17 lesson: deploy `validate-claims-web.sh` website-copy variant for production pages format

## Authority

- **Producer**: HAYWEB Studio (legal entity TBD, MST Đang đăng ký per footer)
- **Founder + Editor**: Nguyễn Thế Quyền (gsg.zero@gmail.com / 0797986525)
- **Compliance officer**: founder (interim — counsel engagement Q3 2026 per `_master/locks/counsel-contact.md` PENDING)
- **Audit response capability**: 30-day BTTTT notice readiness verified per A.13 §3.2 quarterly drill

## Last Update

2026-05-13 Day 17 — Path X SEO upgrade (preserve v5.1.2 design DNA + apply SEO/compliance/measurement standards)
