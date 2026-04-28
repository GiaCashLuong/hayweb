// ====== GUIDES — bilingual resource hub ======
const guides = [
  {
    tone: '1',
    tagVI: 'Nhập môn', tagEN: 'Beginners',
    minutesVI: '5 phút đọc', minutesEN: '5 min read',
    art: `<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
    titleVI: 'Tại sao doanh nghiệp 2026 vẫn cần một website riêng?',
    titleEN: 'Why every 2026 business still needs its own website',
    excerptVI: 'Mạng xã hội đến rồi đi, nhưng website là tài sản số duy nhất bạn thực sự sở hữu. 7 lý do website vẫn là nền móng của thương hiệu.',
    excerptEN: 'Social platforms come and go, but your website is the only digital asset you truly own. 7 reasons it still matters.'
  },
  {
    tone: '2',
    tagVI: 'Chi phí', tagEN: 'Pricing',
    minutesVI: '7 phút đọc', minutesEN: '7 min read',
    art: `<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    titleVI: 'Chi phí làm website thực sự là bao nhiêu?',
    titleEN: 'How much does a website really cost in 2026?',
    excerptVI: 'Bóc tách chi phí: domain, hosting, thiết kế, lập trình, bảo trì. Cảnh báo các chiêu giảm giá ảo của agency rẻ tiền.',
    excerptEN: 'Breaking down domain, hosting, design, dev, maintenance. Red flags of "cheap agency" pricing tricks.'
  },
  {
    tone: '3',
    tagVI: 'SEO', tagEN: 'SEO',
    minutesVI: '8 phút đọc', minutesEN: '8 min read',
    art: `<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
    titleVI: 'SEO là gì? Bộ khung tối thiểu cho người mới',
    titleEN: 'What is SEO? The minimum framework for newcomers',
    excerptVI: 'Technical SEO, On-page, Off-page giải thích bằng ngôn ngữ thường ngày — và checklist 12 mục bạn có thể tự làm hôm nay.',
    excerptEN: 'Technical, On-page, Off-page explained plainly — plus a 12-item checklist you can run today.'
  },
  {
    tone: '4',
    tagVI: 'Marketing', tagEN: 'Marketing',
    minutesVI: '6 phút đọc', minutesEN: '6 min read',
    art: `<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 16l4-4 4 4 6-6"/></svg>`,
    titleVI: 'Landing page khác gì với website? Khi nào nên dùng cái nào?',
    titleEN: 'Landing page vs website — when to use which?',
    excerptVI: 'Hai công cụ giải quyết hai bài toán khác nhau. Hướng dẫn chọn đúng cho từng giai đoạn của doanh nghiệp.',
    excerptEN: 'Two tools, two problems. A guide to choosing the right one for each business stage.'
  },
  {
    tone: '5',
    tagVI: 'Hạ tầng', tagEN: 'Infrastructure',
    minutesVI: '6 phút đọc', minutesEN: '6 min read',
    art: `<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="8" rx="2"/><rect x="2" y="13" width="20" height="8" rx="2"/><line x1="6" y1="7" x2="6.01" y2="7"/><line x1="6" y1="17" x2="6.01" y2="17"/></svg>`,
    titleVI: 'Chọn hosting thế nào? So sánh shared / VPS / Cloud',
    titleEN: 'How to choose hosting — shared vs VPS vs Cloud',
    excerptVI: 'Tốc độ, uptime, bảo mật, chi phí — bảng so sánh thực tế cho doanh nghiệp Việt Nam, không quảng cáo.',
    excerptEN: 'Speed, uptime, security, cost — a real comparison for Vietnamese businesses, no sponsorships.'
  },
  {
    tone: '6',
    tagVI: 'Quy trình', tagEN: 'Process',
    minutesVI: '4 phút đọc', minutesEN: '4 min read',
    art: `<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12l2 2 4-4"/><path d="M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3a9 9 0 0 1 6.36 2.64"/></svg>`,
    titleVI: 'Quy trình thiết kế web tại HAYWEB — từ A đến Z',
    titleEN: 'The HAYWEB design process — A to Z',
    excerptVI: '5 bước rõ ràng: brief → báo giá → ký số → triển khai → bàn giao. Có gì khác với "agency truyền thống"?',
    excerptEN: '5 clear steps: brief → quote → digital sign → build → deliver. What sets us apart from traditional agencies?'
  },
  {
    tone: '7',
    tagVI: 'Bảo mật', tagEN: 'Security',
    minutesVI: '5 phút đọc', minutesEN: '5 min read',
    art: `<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    titleVI: '7 lỗ hổng bảo mật website phổ biến — và cách bịt',
    titleEN: '7 common website security holes — and how to plug them',
    excerptVI: 'XSS, SQL injection, CSRF... giải thích bằng ví dụ cụ thể và cách HAYWEB xử lý ngay từ ngày đầu.',
    excerptEN: 'XSS, SQL injection, CSRF... explained with concrete examples and how HAYWEB handles each from day one.'
  },
  {
    tone: '8',
    tagVI: 'Hiệu năng', tagEN: 'Performance',
    minutesVI: '6 phút đọc', minutesEN: '6 min read',
    art: `<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    titleVI: 'Tăng tốc website xuống dưới 2 giây — kỹ thuật thực chiến',
    titleEN: 'Cut website load time below 2 seconds — practical techniques',
    excerptVI: 'Tối ưu ảnh, font, CSS, lazy load, CDN. Checklist Lighthouse 100/100 không phải là điều xa vời.',
    excerptEN: 'Image, font, CSS optimization, lazy load, CDN. Lighthouse 100/100 is closer than you think.'
  }
];

const vi = currentLang === 'vi';

function buildPage() {
  document.getElementById('guides-label').textContent = vi ? 'Hướng dẫn' : 'Guides';
  document.getElementById('guides-title').innerHTML = vi
    ? 'Kiến thức nền tảng để <em>đầu tư web đúng</em>'
    : 'Foundations for <em>investing in web wisely</em>';
  document.getElementById('guides-desc').textContent = vi
    ? 'Tổng hợp các bài viết ngắn gọn, dễ đọc — giúp doanh nghiệp ra quyết định sáng suốt khi chọn đối tác làm web.'
    : 'A curated set of short, readable posts to help businesses make smart decisions when choosing a web partner.';

  document.getElementById('guides-grid').innerHTML = guides.map(g => {
    // Inject our class + viewBox into g.art SVG
    const art = g.art.replace('<svg ', '<svg class="guide-thumb-art" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true" ');
    return `
    <article class="guide-card fade-up">
      <div class="guide-thumb" data-tone="${g.tone}">${art}</div>
      <div class="guide-body">
        <div class="guide-meta">
          <span>${vi ? g.tagVI : g.tagEN}</span>
          <span class="dot"></span>
          <span class="reading">${vi ? g.minutesVI : g.minutesEN}</span>
        </div>
        <h3>${vi ? g.titleVI : g.titleEN}</h3>
        <p>${vi ? g.excerptVI : g.excerptEN}</p>
        <a href="/contact.html" class="guide-link">
          ${vi ? 'Đọc tiếp' : 'Read more'}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </article>
  `;
  }).join('');

  // CTA
  document.getElementById('cta-title').innerHTML = vi
    ? 'Cần tư vấn cụ thể cho <em>dự án của bạn?</em>'
    : 'Need specific advice for <em>your project?</em>';
  document.getElementById('cta-desc').textContent = vi
    ? 'Đội ngũ HAYWEB sẵn sàng phân tích miễn phí trong 30 phút đầu tiên.'
    : 'Our team is ready for a free 30-minute analysis of your project.';
  document.getElementById('cta-btn').textContent = vi ? 'Đặt lịch tư vấn' : 'Book a consultation';
}

async function init() {
  await renderNav('guides');
  renderFooter();
  buildPage();
  initScrollReveal();
}

init();
