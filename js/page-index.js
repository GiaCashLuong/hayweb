// ====== SERVICE SLUG MAP ======
const svcSlugMap = {
  'Website Doanh Nghiệp': 'website-doanh-nghiep',
  'Landing Page Chuyển Đổi': 'landing-page',
  'Web Bán Hàng': 'web-ban-hang',
  'Mẫu Web Triển Khai 24h': 'mau-web-24h',
  'Website Đa Ngôn Ngữ': 'website-da-ngon-ngu',
  'UI/UX & Thương Hiệu': 'ui-ux-thuong-hieu',
  'SEO Tổng Thể': 'seo-tong-the',
  'Google / Facebook Ads': 'google-facebook-ads',
  'Phân Tích & Báo Cáo': 'phan-tich-bao-cao',
  'Content & Social': 'content-social',
  'Email Marketing': 'email-marketing',
  'Tư Vấn Chiến Lược Số': 'tu-van-chien-luoc-so',
  'Cloud Hosting': 'cloud-hosting',
  'Email Doanh Nghiệp': 'email-doanh-nghiep',
  'Tên Miền': 'ten-mien',
  'SSL & Bảo Mật': 'ssl-bao-mat',
  'Backup & Khôi Phục': 'backup-khoi-phuc',
  'Bảo Trì Định Kỳ': 'bao-tri-dinh-ky',
  'CRM Khách Hàng': 'crm-khach-hang',
  'LMS Học Trực Tuyến': 'lms-hoc-truc-tuyen',
  'POS Nhà Hàng / Cửa Hàng': 'pos-nha-hang',
  'E-commerce Toàn Diện': 'ecommerce-toan-dien',
  'API & Tích Hợp': 'api-tich-hop',
  'Web App Theo Yêu Cầu': 'web-app-theo-yeu-cau',
  'Khoá Làm Web Cơ Bản': 'khoa-lam-web',
  'Tư Vấn Kỹ Thuật 1-1': 'tu-van-ky-thuat-1-1',
  'Workshop Doanh Nghiệp': 'workshop-doanh-nghiep',
  'Chứng Chỉ Hoàn Thành': 'chung-chi-hoan-thanh',
};

// ====== SERVICES — TAB-BASED CATALOGUE ======
// 5 nhóm dịch vụ: Website / Marketing / Hosting / Software / Training
const svcCategories = [
  {
    key: 'website',
    labelVI: 'Website', labelEN: 'Websites',
    icon: `<svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="14" rx="2"/><path d="M2 9h20M7 14h4"/></svg>`,
    items: [
      {
        accent: 'website',
        icon: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 8h18M8 3v18"/></svg>`,
        titleVI: 'Website Doanh Nghiệp', titleEN: 'Business Website',
        descVI: 'Giao diện chuyên nghiệp, chuẩn SEO, multi-page. Phù hợp công ty, dịch vụ chuyên sâu.',
        descEN: 'Professional multi-page sites, SEO-ready. Ideal for companies & service brands.'
      },
      {
        accent: 'website',
        icon: `<svg viewBox="0 0 24 24"><path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`,
        titleVI: 'Landing Page Chuyển Đổi', titleEN: 'High-conversion Landing Page',
        descVI: 'Tối ưu chuyển đổi cho từng chiến dịch quảng cáo. A/B test, heatmap tích hợp.',
        descEN: 'Conversion-optimized for every ad campaign. A/B testing & heatmap built in.'
      },
      {
        accent: 'website',
        icon: `<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
        titleVI: 'Web Bán Hàng', titleEN: 'E-commerce Store',
        descVI: 'Cửa hàng online, quản lý sản phẩm, đơn hàng, tích hợp Stripe + PayOS/VietQR.',
        descEN: 'Online stores with product/order management, Stripe + PayOS/VietQR ready.'
      },
      {
        accent: 'website',
        icon: `<svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
        titleVI: 'Mẫu Web Triển Khai 24h', titleEN: 'Ready-made Templates (24h)',
        descVI: 'Bộ template cao cấp, customize logo + nội dung — bàn giao trong 24 giờ.',
        descEN: 'Premium template library, customize logo + content — delivered in 24 hours.'
      },
      {
        accent: 'website',
        icon: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
        titleVI: 'Website Đa Ngôn Ngữ', titleEN: 'Multilingual Website',
        descVI: 'Tiếng Việt / Tiếng Anh / hoặc nhiều ngôn ngữ. Chuyển đổi mượt, SEO riêng từng ngôn ngữ.',
        descEN: 'VI / EN or multi-language toggle. Smooth switch, locale-specific SEO.'
      },
      {
        accent: 'website',
        icon: `<svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
        titleVI: 'UI/UX & Thương Hiệu', titleEN: 'UI/UX & Branding',
        descVI: 'Nghiên cứu trải nghiệm người dùng, thiết kế nhận diện thương hiệu thống nhất.',
        descEN: 'User research, design system & cohesive brand identity across touchpoints.'
      }
    ]
  },
  {
    key: 'marketing',
    labelVI: 'Marketing', labelEN: 'Marketing',
    icon: `<svg viewBox="0 0 24 24"><path d="M3 11l18-7-7 18-2-8-9-3z"/></svg>`,
    items: [
      {
        accent: 'marketing',
        icon: `<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
        titleVI: 'SEO Tổng Thể', titleEN: 'Full-stack SEO',
        descVI: 'Audit kỹ thuật, từ khoá, content, backlink. Tăng thứ hạng Google bền vững.',
        descEN: 'Technical audit, keywords, content, backlinks. Sustainable Google ranking growth.'
      },
      {
        accent: 'marketing',
        icon: `<svg viewBox="0 0 24 24"><path d="M22 12A10 10 0 1 1 12 2"/><path d="M22 2L12 12"/><path d="M16 2h6v6"/></svg>`,
        titleVI: 'Google / Facebook Ads', titleEN: 'Google / Facebook Ads',
        descVI: 'Setup, vận hành, tối ưu chi phí quảng cáo. Báo cáo ROI minh bạch hàng tuần.',
        descEN: 'Setup, manage and optimize ad spend. Transparent weekly ROI reports.'
      },
      {
        accent: 'marketing',
        icon: `<svg viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M7 16l4-4 4 4 6-6"/></svg>`,
        titleVI: 'Phân Tích & Báo Cáo', titleEN: 'Analytics & Reporting',
        descVI: 'Cài Google Analytics 4, Meta Pixel, dashboard tuỳ chỉnh. Đọc số liệu để ra quyết định.',
        descEN: 'GA4, Meta Pixel & custom dashboards. Data-driven decision making.'
      },
      {
        accent: 'marketing',
        icon: `<svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
        titleVI: 'Content & Social', titleEN: 'Content & Social',
        descVI: 'Lên kế hoạch nội dung, viết bài, thiết kế post Facebook/Instagram theo tháng.',
        descEN: 'Content planning, copywriting and Facebook/Instagram post design — monthly.'
      },
      {
        accent: 'marketing',
        icon: `<svg viewBox="0 0 24 24"><path d="M4 4h16v12H5.17L4 17.17z"/></svg>`,
        titleVI: 'Email Marketing', titleEN: 'Email Marketing',
        descVI: 'Thiết kế template, tự động hoá luồng email, đo lường tỷ lệ mở & click.',
        descEN: 'Email templates, automation flows, open/click rate tracking.'
      },
      {
        accent: 'marketing',
        icon: `<svg viewBox="0 0 24 24"><path d="M2 3h20M2 9h20M9 15h13M2 15l4 4 4-4"/></svg>`,
        titleVI: 'Tư Vấn Chiến Lược Số', titleEN: 'Digital Strategy Consulting',
        descVI: 'Lộ trình 3-6-12 tháng cho doanh nghiệp muốn chuyển đổi số bài bản.',
        descEN: '3-6-12 month digital roadmap for businesses scaling online.'
      }
    ]
  },
  {
    key: 'hosting',
    labelVI: 'Hosting', labelEN: 'Hosting',
    icon: `<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="8" rx="2"/><rect x="2" y="13" width="20" height="8" rx="2"/><path d="M6 7h.01M6 17h.01"/></svg>`,
    items: [
      {
        accent: 'hosting',
        icon: `<svg viewBox="0 0 24 24"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
        titleVI: 'Cloud Hosting', titleEN: 'Cloud Hosting',
        descVI: 'Uptime 99.9%, tốc độ < 2s, backup hàng ngày. CDN toàn cầu, SSL miễn phí.',
        descEN: '99.9% uptime, < 2s load. Daily backups, global CDN, free SSL.'
      },
      {
        accent: 'hosting',
        icon: `<svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><path d="M4 8l8 5 8-5"/></svg>`,
        titleVI: 'Email Doanh Nghiệp', titleEN: 'Business Email',
        descVI: 'Email @tencongty.vn chuyên nghiệp. 50GB / mỗi địa chỉ, anti-spam, mobile sync.',
        descEN: 'Pro @yourcompany.com email. 50GB per address, anti-spam, mobile sync.'
      },
      {
        accent: 'hosting',
        icon: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"/></svg>`,
        titleVI: 'Tên Miền', titleEN: 'Domain Name',
        descVI: 'Đăng ký .vn, .com, .net, .com.vn — bảo vệ thông tin Whois, miễn phí năm đầu.',
        descEN: 'Register .vn, .com, .net, .com.vn. Free Whois privacy & first-year discount.'
      },
      {
        accent: 'hosting',
        icon: `<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
        titleVI: 'SSL & Bảo Mật', titleEN: 'SSL & Security',
        descVI: 'HTTPS, firewall, rate-limit, header bảo mật chuẩn quốc tế (Mozilla Observatory 100/100).',
        descEN: 'HTTPS, WAF, rate limits, security headers (Mozilla Observatory 100/100).'
      },
      {
        accent: 'hosting',
        icon: `<svg viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>`,
        titleVI: 'Backup & Khôi Phục', titleEN: 'Backup & Restore',
        descVI: 'Sao lưu tự động hàng ngày, lưu 30 phiên bản. Khôi phục 1-click khi cần.',
        descEN: 'Daily auto backups, 30 versions retained. One-click restore.'
      },
      {
        accent: 'hosting',
        icon: `<svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/></svg>`,
        titleVI: 'Bảo Trì Định Kỳ', titleEN: 'Ongoing Maintenance',
        descVI: 'Cập nhật bảo mật, theo dõi uptime 24/7, sửa lỗi nhỏ — gói tháng / năm.',
        descEN: 'Security patches, 24/7 uptime monitoring, minor fixes — monthly / yearly.'
      }
    ]
  },
  {
    key: 'software',
    labelVI: 'Phần mềm', labelEN: 'Software',
    icon: `<svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    items: [
      {
        accent: 'software',
        icon: `<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
        titleVI: 'CRM Khách Hàng', titleEN: 'Customer CRM',
        descVI: 'Quản lý lead, deal, hợp đồng, công nợ. Tích hợp Zalo OA, email, SMS.',
        descEN: 'Manage leads, deals, contracts, AR. Zalo OA, email & SMS integration.'
      },
      {
        accent: 'software',
        icon: `<svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
        titleVI: 'LMS Học Trực Tuyến', titleEN: 'Online Learning (LMS)',
        descVI: 'Khoá học, bài kiểm tra, chứng chỉ. Quản lý học viên & tiến độ học.',
        descEN: 'Courses, quizzes, certificates. Student & progress management.'
      },
      {
        accent: 'software',
        icon: `<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
        titleVI: 'POS Nhà Hàng / Cửa Hàng', titleEN: 'Restaurant / Retail POS',
        descVI: 'Order tại bàn, in bill, tích hợp thanh toán QR. Báo cáo doanh thu realtime.',
        descEN: 'Table orders, receipt print, QR payments. Real-time revenue reports.'
      },
      {
        accent: 'software',
        icon: `<svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
        titleVI: 'E-commerce Toàn Diện', titleEN: 'Full E-commerce',
        descVI: 'Cửa hàng online + admin panel + tồn kho + đơn hàng + ship + thanh toán Việt Nam.',
        descEN: 'Storefront + admin + inventory + orders + shipping + VN payments.'
      },
      {
        accent: 'software',
        icon: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
        titleVI: 'API & Tích Hợp', titleEN: 'API & Integrations',
        descVI: 'Kết nối ERP, kế toán Misa, vận chuyển GHN/GHTK, thanh toán PayOS — bất kỳ hệ thống nào.',
        descEN: 'Connect ERP, accounting (Misa), shipping (GHN/GHTK), payments (PayOS) — anything.'
      },
      {
        accent: 'software',
        icon: `<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
        titleVI: 'Web App Theo Yêu Cầu', titleEN: 'Custom Web Apps',
        descVI: 'Hệ thống quản lý nội bộ, dashboard, workflow tự động — viết riêng cho bài toán của bạn.',
        descEN: 'Internal management, dashboards, automation — built for your specific workflow.'
      }
    ]
  },
  {
    key: 'training',
    labelVI: 'Đào tạo', labelEN: 'Training',
    icon: `<svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
    items: [
      {
        accent: 'training',
        icon: `<svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5z"/><path d="M2 17l10 5 10-5"/></svg>`,
        titleVI: 'Khoá Làm Web Cơ Bản', titleEN: 'Web Basics Course',
        descVI: 'HTML, CSS, JS, Git — từ con số 0 đến tự làm landing page hoàn chỉnh trong 6 tuần.',
        descEN: 'HTML, CSS, JS, Git — zero to complete landing page in 6 weeks.'
      },
      {
        accent: 'training',
        icon: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
        titleVI: 'Tư Vấn Kỹ Thuật 1-1', titleEN: '1-on-1 Technical Consulting',
        descVI: 'Buổi 90 phút online — review code, kiến trúc hệ thống, hoặc lộ trình học của bạn.',
        descEN: '90-min online session — code review, architecture or learning roadmap.'
      },
      {
        accent: 'training',
        icon: `<svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
        titleVI: 'Workshop Doanh Nghiệp', titleEN: 'Corporate Workshop',
        descVI: 'Đào tạo team marketing / IT của công ty bạn — chuyên đề SEO, ads, web hiện đại.',
        descEN: 'Train your marketing / IT team — topics: SEO, ads, modern web stack.'
      },
      {
        accent: 'training',
        icon: `<svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4"/><path d="M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3a9 9 0 0 1 6.36 2.64"/></svg>`,
        titleVI: 'Chứng Chỉ Hoàn Thành', titleEN: 'Certificate of Completion',
        descVI: 'Cấp chứng chỉ HAYWEB sau khi hoàn thành khoá học — verified online.',
        descEN: 'HAYWEB certificate after course completion — online verifiable.'
      }
    ]
  }
];

// ====== STATS ======
const stats = [
  { numVI: '120', numEN: '120', suffix: '+', labelVI: 'Dự án đã bàn giao', labelEN: 'Projects Delivered' },
  { numVI: '98', numEN: '98', suffix: '%', labelVI: 'Khách hàng hài lòng', labelEN: 'Client Satisfaction' },
  { numVI: '5', numEN: '5', suffix: '+', labelVI: 'Năm kinh nghiệm', labelEN: 'Years Experience' },
  { numVI: '99.9', numEN: '99.9', suffix: '%', labelVI: 'Uptime cam kết', labelEN: 'Uptime Guaranteed' },
];

// ====== PORTFOLIO ======
const portfolio = [
  {
    accent: '#A67C2E',
    titleVI: 'Kobe Steak House', titleEN: 'Kobe Steak House',
    descVI: 'Nhà hàng bít tết cao cấp', descEN: 'Premium steakhouse website',
    url: 'https://kobe-steak.vercel.app'
  },
  {
    accent: '#C8C8C8',
    titleVI: 'HAYWEB Studio', titleEN: 'HAYWEB Studio',
    descVI: 'Web agency — hệ thống hoàn chỉnh', descEN: 'Full-stack web agency system',
    url: 'https://hayweb.vercel.app'
  },
  {
    accent: '#6495ED',
    titleVI: 'HKP Sim Kinh Dịch', titleEN: 'HKP Feng Shui Sims',
    descVI: 'Thương mại điện tử phong thủy', descEN: 'Feng shui e-commerce platform',
    url: '#'
  },
];

// ====== WHY US ======
const whyItems = [
  {
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="var(--silver)" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
    titleVI: 'Báo giá trong 5 phút', titleEN: 'Quote in 5 Minutes',
    descVI: 'Hệ thống báo giá chuẩn — không phải chờ 2–3 ngày như các đơn vị khác.', descEN: 'Our pricing system delivers instantly — no 2-3 day wait like competitors.'
  },
  {
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="var(--silver)" stroke-width="1.5" stroke-linecap="round"><path d="M15 3H9a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
    titleVI: 'Ký số ngay trên web', titleEN: 'Sign Online Instantly',
    descVI: 'Xác nhận hợp đồng bằng chữ ký số ngay trên trình duyệt — không fax, không email qua lại.', descEN: 'Confirm agreements with digital signature right in your browser — no fax, no back-and-forth emails.'
  },
  {
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="var(--silver)" stroke-width="1.5" stroke-linecap="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
    titleVI: 'Thanh toán đa phương thức', titleEN: 'Multi-method Payments',
    descVI: 'Thẻ quốc tế Visa/Mastercard và QR Banking nội địa — thanh toán ngay, không chờ chuyển khoản.', descEN: 'International Visa/Mastercard and domestic QR banking — pay instantly, no wire transfer delays.'
  },
  {
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="var(--silver)" stroke-width="1.5" stroke-linecap="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
    titleVI: 'Cam kết đúng hạn', titleEN: 'On-time Delivery Guarantee',
    descVI: 'Theo dõi tiến độ realtime qua dashboard. Cam kết bàn giao đúng hạn hoặc hoàn tiền 100%.', descEN: 'Track progress in real-time via dashboard. On-time delivery guaranteed or full refund.'
  },
];

const process = [
  { numVI: '01', numEN: '01', stepVI: 'Yêu cầu', stepEN: 'Brief', descVI: 'Điền form mô tả dự án', descEN: 'Fill project brief form' },
  { numVI: '02', numEN: '02', stepVI: 'Báo giá', stepEN: 'Quote', descVI: 'Nhận báo giá chi tiết ngay', descEN: 'Get detailed quote instantly' },
  { numVI: '03', numEN: '03', stepVI: 'Xác nhận', stepEN: 'Sign', descVI: 'Ký số và thanh toán online', descEN: 'Digital sign & pay online' },
  { numVI: '04', numEN: '04', stepVI: 'Triển khai', stepEN: 'Build', descVI: 'Đội ngũ bắt đầu thi công', descEN: 'Our team starts building' },
  { numVI: '05', numEN: '05', stepVI: 'Bàn giao', stepEN: 'Deliver', descVI: 'Nhận sản phẩm hoàn chỉnh', descEN: 'Receive your finished product' },
];

const pricing = [
  {
    tierVI: 'Starter', tierEN: 'Starter',
    vnd: '5.000.000₫', usd: '$200',
    featuresVI: ['1 trang landing page', '3–5 sections', 'Form liên hệ Supabase', 'Responsive mobile', 'SEO cơ bản', 'Bàn giao trong 3 ngày'],
    featuresEN: ['1 landing page', '3–5 sections', 'Contact form (Supabase)', 'Mobile responsive', 'Basic SEO', 'Delivered in 3 days'],
    featured: false, ctaKey: 'price_cta_s', href: '/new-project.html'
  },
  {
    tierVI: 'Professional', tierEN: 'Professional',
    vnd: '15.000.000₫', usd: '$600',
    featuresVI: ['Multi-page (5–8 trang)', 'Đăng nhập / Tài khoản', 'Thanh toán tích hợp', 'Dashboard khách hàng', 'Hiệu ứng nâng cao', 'Bàn giao trong 7 ngày'],
    featuresEN: ['Multi-page (5–8 pages)', 'Login / User accounts', 'Payment integration', 'Client dashboard', 'Advanced animations', 'Delivered in 7 days'],
    featured: true, ctaKey: 'price_cta_p', href: '/new-project.html'
  },
  {
    tierVI: 'Enterprise', tierEN: 'Enterprise',
    vnd: '35.000.000₫', usd: '$1,400',
    featuresVI: ['Hệ thống toàn diện', 'API tùy chỉnh', 'Tích hợp CRM/ERP', 'Admin panel', 'Bảo trì 12 tháng', 'Bàn giao linh hoạt'],
    featuresEN: ['Complete system', 'Custom API', 'CRM/ERP integration', 'Admin panel', '12-month maintenance', 'Flexible delivery'],
    featured: false, ctaKey: 'price_cta_e', href: '/contact.html'
  }
];

// ====== SVG AVATARS (replaces unsplash people images) ======
function svgAvatar(variant) {
  // 4 variants — minimalist, monochromatic
  const variants = {
    a: `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ga" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2a2a2a"/><stop offset="1" stop-color="#161616"/></linearGradient></defs><circle cx="20" cy="20" r="20" fill="url(#ga)"/><circle cx="20" cy="16" r="6.2" fill="#9a9a9a"/><path d="M8.5 34c1.5-5.6 6.3-9 11.5-9s10 3.4 11.5 9z" fill="#9a9a9a"/></svg>`,
    b: `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gb" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#252028"/><stop offset="1" stop-color="#15131a"/></linearGradient></defs><circle cx="20" cy="20" r="20" fill="url(#gb)"/><path d="M14 13.5c0-3.3 2.7-6 6-6s6 2.7 6 6V17H14z" fill="#b8a896"/><circle cx="20" cy="17" r="5.5" fill="#cdbcab"/><path d="M9 35c1.7-5.4 6.3-8.6 11-8.6s9.3 3.2 11 8.6z" fill="#3a3340"/></svg>`,
    c: `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1f2a2a"/><stop offset="1" stop-color="#11181a"/></linearGradient></defs><circle cx="20" cy="20" r="20" fill="url(#gc)"/><path d="M13 14c0-3.7 3.1-7 7-7s7 3.3 7 7v3l-3-1c-2.7 1.4-5.3 1.4-8 0l-3 1z" fill="#3a2a1a"/><circle cx="20" cy="17" r="5.3" fill="#c69b75"/><path d="M9.5 34.5c1.7-5.3 6.2-8.5 10.5-8.5s8.8 3.2 10.5 8.5z" fill="#1f2f3a"/></svg>`,
    d: `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gd" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2a242a"/><stop offset="1" stop-color="#181318"/></linearGradient></defs><circle cx="20" cy="20" r="20" fill="url(#gd)"/><path d="M12 16c0-4.4 3.6-8 8-8s8 3.6 8 8v6l-4-2c-2.7 1.4-5.3 1.4-8 0l-4 2z" fill="#5a4a55"/><circle cx="20" cy="17" r="5.4" fill="#d8c4ad"/><path d="M9 35c1.6-5.5 6.3-8.7 11-8.7s9.4 3.2 11 8.7z" fill="#3a3038"/></svg>`
  };
  const svg = variants[variant] || variants.a;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// ====== TESTIMONIALS ======
const testimonials = [
  {
    stars: '★★★★★',
    textVI: '"HAYWEB đã biến tầm nhìn của chúng tôi thành thực tế trong 5 ngày. Chất lượng vượt xa những gì chúng tôi kỳ vọng — đặc biệt là trải nghiệm người dùng."',
    textEN: '"HAYWEB turned our vision into reality in 5 days. Quality far exceeded our expectations — especially the user experience."',
    nameVI: 'Nguyễn Minh Tâm', nameEN: 'Nguyen Minh Tam',
    roleVI: 'CEO, Kobe Steak House', roleEN: 'CEO, Kobe Steak House',
    avatarVariant: 'a'
  },
  {
    stars: '★★★★★',
    textVI: '"Quy trình cực kỳ chuyên nghiệp. Từ lúc điền form đến khi nhận sản phẩm — mọi thứ đều minh bạch và đúng hạn. Tôi đã giới thiệu cho 3 đối tác khác."',
    textEN: '"Extremely professional process. From form submission to final delivery — everything was transparent and on time. I have since referred 3 other business partners."',
    nameVI: 'Trần Thị Lan Anh', nameEN: 'Tran Thi Lan Anh',
    roleVI: 'Founder, HKP Sim Kinh Dịch', roleEN: 'Founder, HKP Feng Shui',
    avatarVariant: 'b'
  },
  {
    stars: '★★★★★',
    textVI: '"Website của chúng tôi bây giờ nhận được nhiều lời khen từ khách hàng hơn bao giờ hết. Tỷ lệ chuyển đổi tăng 340% trong tháng đầu tiên."',
    textEN: '"Our website now receives more compliments from customers than ever before. Conversion rate increased 340% in the first month."',
    nameVI: 'Phạm Văn Đức', nameEN: 'Pham Van Duc',
    roleVI: 'Director, Ecopark Investments', roleEN: 'Director, Ecopark Investments',
    avatarVariant: 'c'
  }
];

const vi = currentLang === 'vi';

function renderServicesTabs() {
  const tabsBar = document.getElementById('services-tabs');
  const panelsHost = document.getElementById('services-panels');
  if (!tabsBar || !panelsHost) return;

  tabsBar.innerHTML = svcCategories.map((c, i) => `
    <button type="button" class="services-tab ${i===0?'active':''}" data-tab="${c.key}">
      ${c.icon}
      <span>${vi ? c.labelVI : c.labelEN}</span>
    </button>
  `).join('');

  panelsHost.innerHTML = svcCategories.map((c, i) => `
    <div class="services-panel ${i===0?'active':''}" data-panel="${c.key}">
      <div class="services-panel-grid">
        ${c.items.map(it => `
          <article class="svc-tab-card magnetic" data-accent="${it.accent}">
            <div class="svc-tab-icon">${it.icon}</div>
            <h4>${vi ? it.titleVI : it.titleEN}</h4>
            <p>${vi ? it.descVI : it.descEN}</p>
            <a href="/service?slug=${svcSlugMap[it.titleVI] || ''}" class="svc-tab-link">
              ${vi ? 'Tìm hiểu' : 'Learn more'}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </article>
        `).join('')}
      </div>
    </div>
  `).join('');

  // Tab switching
  tabsBar.querySelectorAll('.services-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.tab;
      tabsBar.querySelectorAll('.services-tab').forEach(b => b.classList.toggle('active', b === btn));
      panelsHost.querySelectorAll('.services-panel').forEach(p => {
        const isActive = p.dataset.panel === key;
        p.classList.toggle('active', isActive);
        if (isActive) {
          // Re-trigger stagger animation
          p.querySelectorAll('.svc-tab-card').forEach(card => {
            card.style.animation = 'none';
            // force reflow
            void card.offsetWidth;
            card.style.animation = '';
          });
        }
      });
      attachMagnetic();
    });
  });

  attachMagnetic();
}

function attachMagnetic() {
  document.querySelectorAll('.magnetic').forEach(el => {
    if (el._magneticBound) return;
    el._magneticBound = true;
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / (r.width / 2);
      const y = (e.clientY - r.top - r.height / 2) / (r.height / 2);
      el.style.transform = `translate(${x * 6}px, ${y * 6}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
}

function buildPage() {
  // Hero
  document.getElementById('hero-eyebrow').textContent = t('hero_eyebrow');
  document.getElementById('hero-title').innerHTML =
    `${t('hero_title_1')} <em>${t('hero_title_2')}</em><br>${t('hero_title_3')} <em>${t('hero_title_4')}</em>`;
  document.getElementById('hero-sub').textContent = t('hero_sub');
  document.getElementById('hero-actions').innerHTML = `
    <a href="/new-project.html" class="btn-primary">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      ${t('hero_cta_1')}
    </a>
    <a href="/portfolio.html" class="btn-outline">${t('hero_cta_2')}</a>
    <div class="hero-trust" aria-label="${vi ? 'Đánh giá khách hàng' : 'Client reviews'}">
      <span class="hero-trust-stars" aria-hidden="true">★★★★★</span>
      <span>${vi ? '4.9/5 từ 120+ khách hàng' : '4.9/5 from 120+ clients'}</span>
    </div>
  `;

  // Services
  document.getElementById('svc-label').textContent = t('svc_label');
  document.getElementById('svc-title').innerHTML = `${t('svc_title')} <em>${t('svc_title_em')}</em>`;
  document.getElementById('svc-desc').textContent = t('svc_desc');
  document.getElementById('svc-cta').textContent = vi ? 'Nhận báo giá →' : 'Get a Quote →';
  renderServicesTabs();

  // Stats
  document.getElementById('stats-grid').innerHTML = stats.map(s => `
    <div class="stat-item fade-up">
      <div class="stat-number">
        <span data-count="${parseFloat(s.numVI)}">${s.numVI}</span><span class="stat-suffix">${s.suffix}</span>
      </div>
      <div class="stat-label">${vi ? s.labelVI : s.labelEN}</div>
    </div>
  `).join('');

  // Tech partners bar
  const partners = [
    { name: 'Vercel', mark: 'V' },
    { name: 'Supabase', mark: 'S' },
    { name: 'Stripe', mark: '§' },
    { name: 'PayOS', mark: 'P' },
    { name: 'Anthropic', mark: 'A' },
    { name: 'Cloudflare', mark: '☁' },
  ];
  const partnersEl = document.getElementById('partners-bar');
  if (partnersEl) {
    partnersEl.innerHTML = `
      <p class="partners-label">${vi ? 'Công nghệ tin dùng' : 'Powered by'}</p>
      <div class="partners-logos">
        ${partners.map(p => `<span class="partner-logo" title="${p.name}">${p.name}</span>`).join('')}
      </div>
    `;
  }

  // Portfolio
  document.getElementById('port-label').textContent = t('port_label');
  document.getElementById('port-title').innerHTML = `${t('port_title')} <em>${t('port_title_em')}</em>`;
  document.getElementById('port-viewall').textContent = t('port_viewall');
  document.getElementById('portfolio-grid').innerHTML = portfolio.map(p => `
    <div class="portfolio-card fade-up" style="--port-accent:${p.accent}">
      <div class="portfolio-card-visual" aria-hidden="true"></div>
      <div class="portfolio-overlay">
        <h3>${vi ? p.titleVI : p.titleEN}</h3>
        <p>${vi ? p.descVI : p.descEN}</p>
        <a href="${p.url}" target="_blank" rel="noopener" class="portfolio-link">
          ${vi ? 'Xem dự án' : 'View project'}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  `).join('');

  // Why us
  document.getElementById('why-label').textContent = t('why_label');
  document.getElementById('why-title').innerHTML = `${t('why_title')} <em>${t('why_title_em')}</em>`;
  document.getElementById('why-desc').textContent = t('why_desc');
  document.getElementById('why-items').innerHTML = whyItems.map(w => `
    <div class="why-item fade-up">
      <div class="why-icon">${w.icon}</div>
      <div class="why-text">
        <h4>${vi ? w.titleVI : w.titleEN}</h4>
        <p>${vi ? w.descVI : w.descEN}</p>
      </div>
    </div>
  `).join('');
  document.getElementById('why-badge-text').textContent = vi
    ? '"Chúng tôi không làm web. Chúng tôi kiến tạo di sản số."'
    : '"We don\'t build websites. We craft digital legacies."';
  document.getElementById('why-badge-sub').textContent = vi ? '— Phương châm của HAYWEB' : '— The HAYWEB philosophy';

  // Process
  document.getElementById('proc-label').textContent = vi ? 'Quy trình' : 'Our Process';
  document.getElementById('proc-title').innerHTML = vi
    ? 'Từ ý tưởng đến <em>sản phẩm</em> trong 5 bước'
    : 'From idea to <em>product</em> in 5 steps';
  document.getElementById('process-steps').innerHTML = process.map((p, i) => `
    <div class="process-step fade-up ${i===0?'active':''}">
      <div class="process-num">${vi ? p.numVI : p.numEN}</div>
      <h4>${vi ? p.stepVI : p.stepEN}</h4>
      <p>${vi ? p.descVI : p.descEN}</p>
    </div>
    ${i < process.length - 1 ? '<div class="step-line" style="height:1px;background:var(--border);align-self:center;margin-top:-3rem"></div>' : ''}
  `).join('');

  // Pricing
  document.getElementById('price-label').textContent = t('price_label');
  document.getElementById('price-title').innerHTML = `${t('price_title')} <em>${t('price_title_em')}</em>`;
  document.getElementById('price-desc').textContent = t('price_desc');
  document.getElementById('pricing-preview').innerHTML = pricing.map(p => `
    <div class="price-card ${p.featured ? 'featured' : ''} fade-up">
      <div class="price-tier">${vi ? p.tierVI : p.tierEN}</div>
      <div class="price-amount">${p.vnd}</div>
      <div class="price-amount-usd">${p.usd}</div>
      <div class="price-divider"></div>
      <ul class="price-features">
        ${(vi ? p.featuresVI : p.featuresEN).map(f => `
          <li>
            <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
            ${f}
          </li>
        `).join('')}
      </ul>
      <a href="${p.href}" class="${p.featured ? 'btn-primary' : 'btn-outline'}">${t(p.ctaKey)}</a>
    </div>
  `).join('');
  document.getElementById('price-viewall').textContent = vi ? 'Xem bảng giá đầy đủ →' : 'View full pricing →';

  // Testimonials
  document.getElementById('testi-label').textContent = t('testi_label');
  document.getElementById('testi-title').innerHTML = `${t('testi_title')} <em>${t('testi_title_em')}</em>`;
  document.getElementById('testimonials-grid').innerHTML = testimonials.map(t2 => `
    <div class="testimonial-card">
      <div class="testimonial-stars">${t2.stars}</div>
      <p class="testimonial-text">${vi ? t2.textVI : t2.textEN}</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar svg-avatar"><img src="${svgAvatar(t2.avatarVariant)}" alt="" loading="lazy"></div>
        <div>
          <div class="testimonial-name">${vi ? t2.nameVI : t2.nameEN}</div>
          <div class="testimonial-role">${vi ? t2.roleVI : t2.roleEN}</div>
        </div>
      </div>
    </div>
  `).join('');

  // CTA
  document.getElementById('cta-title').innerHTML = `${t('cta_title')} <em>${t('cta_title_em')}</em>`;
  document.getElementById('cta-desc').textContent = t('cta_desc');
  document.getElementById('cta-btn').textContent = t('cta_btn');
}

async function init() {
  await renderNav('home');
  renderFooter();
  buildPage();
  initScrollReveal();
  init3DTilt();
  initStatsCounter();
}

init();
