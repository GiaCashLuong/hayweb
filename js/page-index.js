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

// ====== STATS — specificity (lẻ = thật, tròn = nghi) ======
const stats = [
  { numVI: '30',   numEN: '30',   suffix: '',  labelVI: 'Dự án đã bàn giao',     labelEN: 'Projects Delivered' },
  { numVI: '97.4', numEN: '97.4', suffix: '%', labelVI: 'Khách quay lại / giới thiệu', labelEN: 'Client Retention / Referral' },
  { numVI: '5.2',  numEN: '5.2',  suffix: '×', labelVI: 'Conversion trung bình so với cũ', labelEN: 'Avg Conversion vs Previous Site' },
  { numVI: '99.97',numEN: '99.97',suffix: '%', labelVI: 'Uptime 12 tháng qua',  labelEN: 'Uptime, last 12 months' },
];

// ====== PORTFOLIO — featured first (asymmetric grid: 1 large + 2 small) ======
const portfolio = [
  {
    accent: '#1a1a1a',
    image: '/images/portfolio-hayweb.jpg',
    tagVI: 'Agency · 2026', tagEN: 'Agency · 2026',
    titleVI: 'HAYWEB Studio', titleEN: 'HAYWEB Studio',
    descVI: 'Hệ thống agency — báo giá AI, ký số, thanh toán Stripe', descEN: 'Full agency system — AI quotes, e-sign, Stripe checkout',
    url: 'https://hayweb.vercel.app'
  },
  {
    accent: '#1a1a1a',
    tagVI: 'F&B · 2025', tagEN: 'F&B · 2025',
    titleVI: 'Kobe Steak House', titleEN: 'Kobe Steak House',
    descVI: 'Bít tết cao cấp — đặt bàn realtime, sơ đồ bàn 25 vị trí', descEN: 'Premium steakhouse — realtime booking, 25-table floor plan',
    url: 'https://kobe-steak.vercel.app'
  },
  {
    accent: '#1a1a1a',
    tagVI: 'E-com · 2026', tagEN: 'E-com · 2026',
    titleVI: 'HKP Sim Kinh Dịch', titleEN: 'HKP Feng Shui Sims',
    descVI: 'Sim phong thủy — affiliate CTV, lọc theo mệnh', descEN: 'Feng shui sims — CTV affiliate, filter by element',
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

// ====== 4 TRỤ CỘT — varied storytelling per pillar (PAS / compare / BAB / Q&A) ======
const pillars = [
  {
    num: '01',
    framework: 'pas',
    accent: 'silver',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M3 12l3-3 4 4 8-8 3 3"/><path d="M3 19h18"/></svg>`,
    titleVI: 'Website Chuyển Đổi', titleEN: 'High-Conversion Website',
    leadVI: 'Web đẹp mà không bán được hàng — là khoản đầu tư lỗ.',
    leadEN: 'A pretty site that doesn\'t sell is a losing investment.',
    blocks: [
      { roleVI: 'Vấn đề', roleEN: 'Problem',
        textVI: 'Đa số doanh nghiệp Việt thuê làm web theo cảm tính: chọn template, chọn màu, chọn ảnh. Không ai hỏi "trang này nên thuyết phục khách thế nào".',
        textEN: 'Most VN businesses build by gut: pick template, pick colour, pick image. No one asks "how should this page persuade?".' },
      { roleVI: 'Hệ quả', roleEN: 'Consequence',
        textVI: 'Khách vào trang, lướt 6 giây, thoát. Tiền ads đổ vào — landing không giữ chân — chuyển đổi dưới 1%.',
        textEN: 'Visitors land, scroll 6 seconds, bounce. Ad spend pours in — page can\'t hold them — conversion under 1%.' },
      { roleVI: 'HAYWEB khác', roleEN: 'HAYWEB different',
        textVI: 'Mỗi section trên trang phải trả lời 1 câu hỏi tâm lý cụ thể. Chúng tôi có 18 framework copywriting + 7 nguyên lý Cialdini áp dụng đo lường.',
        textEN: 'Every section answers one specific psychological question. We apply 18 copywriting frameworks + 7 Cialdini principles, measured.' },
      { roleVI: 'Còn nữa', roleEN: 'Plus',
        textVI: 'Mỗi tháng A/B test 1 thay đổi có giả thuyết — trang tự lớn lên qua thời gian, không đứng yên.',
        textEN: 'Monthly hypothesis-driven A/B test — the page improves over time, never stagnates.' },
      { roleVI: 'Thước đo', roleEN: 'Metric',
        textVI: 'Trung bình khách HAYWEB đạt conversion 4-7% sau 90 ngày — gấp 5.2× trang cũ.',
        textEN: 'Average HAYWEB client hits 4-7% conversion after 90 days — 5.2× their old site.' },
    ],
  },
  {
    num: '02',
    framework: 'compare',
    accent: 'silver',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M3 11l18-7-7 18-2-8-9-3z"/></svg>`,
    titleVI: 'Quảng Cáo Tối Ưu', titleEN: 'Optimized Ads',
    leadVI: 'Cùng 10 triệu ads — bên A ra 5 đơn, bên B ra 35 đơn. Khác nhau ở đâu?',
    leadEN: 'Same 10M VND — agency A gets 5 orders, agency B gets 35. The difference?',
    blocks: [
      { roleVI: 'Họ', roleEN: 'Them',
        textVI: 'Boost post Facebook, target "Nam, 25-45, Hà Nội". Kết thúc tháng nộp screenshot impression và ngân sách đã chi.',
        textEN: 'Boost FB posts, target "Male 25-45, Hanoi". End of month: screenshot impressions + spend.' },
      { roleVI: 'HAYWEB', roleEN: 'HAYWEB',
        textVI: 'Track tới đơn hàng cuối cùng (offline conversion API). Mỗi ad set có giả thuyết, ngắt sớm khi CPA vượt ngưỡng. Báo cáo ROI hàng tuần thay vì impression.',
        textEN: 'Track all the way to last order (offline conversion API). Each ad set has hypothesis, kill early when CPA exceeds. Weekly ROI report, not impressions.' },
      { roleVI: 'Thước đo', roleEN: 'Metric',
        textVI: 'CPA giảm 40-60% trong 60 ngày đầu. Bạn biết chính xác 1 đồng ads ra bao nhiêu doanh thu.',
        textEN: 'CPA drops 40-60% in first 60 days. You know exactly how many VND of revenue each VND of ads brings.' },
    ],
  },
  {
    num: '03',
    framework: 'bab',
    accent: 'silver',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M8 11h6M11 8v6"/></svg>`,
    titleVI: 'SEO Lên Top Google', titleEN: 'SEO to Top of Google',
    leadVI: 'SEO không phải phép màu — là tích lũy có hệ thống suốt 6-12 tháng.',
    leadEN: 'SEO isn\'t magic — it\'s systematic accumulation over 6-12 months.',
    blocks: [
      { roleVI: 'Trước', roleEN: 'Before',
        textVI: 'Trang nằm sau page 5, không ai click. Mỗi tháng phải đốt ads để kéo traffic. Ngừng ads = ngừng khách.',
        textEN: 'Site ranks past page 5, no one clicks. Burn ads monthly for traffic. Stop ads = stop customers.' },
      { roleVI: 'Sau', roleEN: 'After',
        textVI: 'Top 3 Google cho 30-50 từ khoá thương mại. Khách tự tìm tới mỗi ngày — không tốn 1 đồng ads.',
        textEN: 'Top 3 on Google for 30-50 commercial keywords. Customers find you daily — zero ad spend.' },
      { roleVI: 'Cây cầu', roleEN: 'Bridge',
        textVI: 'Audit kỹ thuật → chuẩn schema → bộ từ khoá ngách → content trụ + content bổ trợ → backlink chất lượng → đo lường mỗi 30 ngày.',
        textEN: 'Technical audit → schema → niche keyword set → pillar + supporting content → quality backlinks → measure every 30 days.' },
      { roleVI: 'Thước đo', roleEN: 'Metric',
        textVI: 'Khách của HAYWEB top 10 cho ≥40% từ khoá target sau 6 tháng. Có khách 25 từ khoá top 3 sau 9 tháng.',
        textEN: 'HAYWEB clients hit top 10 for ≥40% of target keywords in 6 months. One client got 25 keywords in top 3 after 9 months.' },
    ],
  },
  {
    num: '04',
    framework: 'qa',
    accent: 'silver',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/><circle cx="12" cy="12" r="10"/></svg>`,
    titleVI: 'Tư Vấn Chiến Lược', titleEN: 'Strategy Consulting',
    leadVI: 'Web tốt + ads tốt + SEO tốt — vẫn có thể thua nếu chiến lược sai.',
    leadEN: 'Good web + good ads + good SEO — still lose if strategy is wrong.',
    blocks: [
      { roleVI: 'Câu hỏi', roleEN: 'Question',
        textVI: 'Bạn đang bán cho ai? Họ thực sự đang trăn trở điều gì? Đối thủ trực tiếp đang ở đâu — và bạn KHÁC họ chỗ nào mà khách bận tâm?',
        textEN: 'Who are you selling to? What\'s their real worry? Where are your direct competitors — and what\'s the difference customers care about?' },
      { roleVI: 'Trả lời', roleEN: 'Answer',
        textVI: 'Buổi 90 phút phân tích định vị → bản đồ khác biệt 1 trang → roadmap 3-6-12 tháng. Sau buổi này, mọi quyết định web/ads/SEO đều có lý do, không đoán mò.',
        textEN: '90-min positioning workshop → 1-page differentiation map → 3/6/12 month roadmap. After this, every web/ads/SEO decision has a reason — no guessing.' },
      { roleVI: 'Thước đo', roleEN: 'Metric',
        textVI: 'Khách của HAYWEB tăng giá trung bình 18-35% sau roadmap, vì hiểu rõ ai sẵn sàng trả nhiều hơn.',
        textEN: 'HAYWEB clients raise average price 18-35% post-roadmap — because they finally know who pays more.' },
    ],
  },
];

// ====== COMPARISON — direct contrast ======
const comparisonRows = [
  {
    aspectVI: 'Sau khi web live',     aspectEN: 'After site goes live',
    themVI:   'Bàn giao file. Hết.', themEN:   'Hand over files. Done.',
    usVI:     'Theo dõi conversion + A/B test mỗi tháng.', usEN: 'Track conversion + monthly A/B test.',
  },
  {
    aspectVI: 'Báo cáo ads',           aspectEN: 'Ads reporting',
    themVI:   'Screenshot impression cuối tháng.', themEN: 'End-of-month impression screenshot.',
    usVI:     'Dashboard ROI cập nhật hàng ngày.',  usEN:   'Live ROI dashboard, daily updates.',
  },
  {
    aspectVI: 'SEO',                          aspectEN: 'SEO',
    themVI:   'Cài plugin Yoast là xong.',    themEN:   'Install Yoast plugin and call it done.',
    usVI:     'Audit kỹ thuật + content trụ + backlink — đo bằng vị trí top 10/3.', usEN: 'Tech audit + pillar content + backlinks — measured top 10/3.',
  },
  {
    aspectVI: 'Tư vấn chiến lược',           aspectEN: 'Strategy consulting',
    themVI:   'Không có. Chỉ "anh muốn web kiểu gì?".', themEN: 'Not offered. Just "what kind of site do you want?".',
    usVI:     'Workshop định vị 90 phút + roadmap 12 tháng.', usEN: '90-min positioning workshop + 12-month roadmap.',
  },
  {
    aspectVI: 'Bảo mật (Mozilla Observatory)', aspectEN: 'Security (Mozilla Observatory)',
    themVI:   'Hiếm khi kiểm tra. Headers thiếu.',   themEN:   'Rarely tested. Headers missing.',
    usVI:     '100/100 A+ — bắt buộc trên mọi trang.', usEN:   '100/100 A+ — required on every site.',
  },
  {
    aspectVI: 'Khi có sự cố',                  aspectEN: 'When something breaks',
    themVI:   'Trả lời sau 2-5 ngày làm việc.', themEN:   'Reply in 2-5 working days.',
    usVI:     'Phản hồi trong 4 giờ làm việc — gói Growth.', usEN: 'Response within 4 working hours — Growth tier.',
  },
  {
    aspectVI: 'Sau hợp đồng',                  aspectEN: 'After contract ends',
    themVI:   'Source code khoá. Đổi đối tác = làm lại từ đầu.', themEN: 'Source code locked. Switch vendor = rebuild from scratch.',
    usVI:     'Code mở chuẩn — bạn sở hữu mọi thứ. Đổi ai cũng dùng được.', usEN: 'Open standards — you own everything. Any vendor can pick up.',
  },
];

const vi = currentLang === 'vi';

function renderPillars() {
  const grid = document.getElementById('pillars-grid');
  if (!grid) return;
  grid.innerHTML = pillars.map(p => `
    <article class="pillar-card fade-up" data-framework="${p.framework}">
      <header class="pillar-head">
        <span class="pillar-num">${p.num}</span>
        <span class="pillar-icon">${p.icon}</span>
        <h3 class="pillar-title">${vi ? p.titleVI : p.titleEN}</h3>
      </header>
      <p class="pillar-lead">${vi ? p.leadVI : p.leadEN}</p>
      <div class="pillar-blocks">
        ${p.blocks.map(b => `
          <div class="pillar-block">
            <div class="pillar-block-role">${vi ? b.roleVI : b.roleEN}</div>
            <p class="pillar-block-text">${vi ? b.textVI : b.textEN}</p>
          </div>
        `).join('')}
      </div>
    </article>
  `).join('');
}

function renderComparison() {
  const table = document.getElementById('comparison-table');
  if (!table) return;
  const themLabel = t('cmp_them');
  const usLabel   = t('cmp_us');
  table.innerHTML = `
    <div class="cmp-head" role="row">
      <div class="cmp-cell cmp-aspect" role="columnheader">${vi ? 'Khía cạnh' : 'Aspect'}</div>
      <div class="cmp-cell cmp-them"   role="columnheader">${themLabel}</div>
      <div class="cmp-cell cmp-us"     role="columnheader">${usLabel}</div>
    </div>
    ${comparisonRows.map(r => `
      <div class="cmp-row" role="row">
        <div class="cmp-cell cmp-aspect" role="cell">${vi ? r.aspectVI : r.aspectEN}</div>
        <div class="cmp-cell cmp-them"   role="cell">
          <span class="cmp-mark cmp-mark-x" aria-hidden="true">✕</span>
          <span>${vi ? r.themVI : r.themEN}</span>
        </div>
        <div class="cmp-cell cmp-us"     role="cell">
          <span class="cmp-mark cmp-mark-check" aria-hidden="true">✓</span>
          <span>${vi ? r.usVI : r.usEN}</span>
        </div>
      </div>
    `).join('')}
  `;
}

const SC_FN_SLOTS = `${HW_FN_BASE}/hw-consultation-slots`;
const SC_FN_BOOK  = `${HW_FN_BASE}/hw-consultation-book`;

async function renderScarcity() {
  document.getElementById('sc-label').textContent  = t('sc_label');
  document.getElementById('sc-desc').textContent   = t('sc_desc');
  document.getElementById('sc-form-title').textContent = t('sc_cta_form');
  document.getElementById('sc-form-desc').textContent  = '';

  document.getElementById('sc-name').placeholder  = t('sc_form_name');
  document.getElementById('sc-email').placeholder = t('sc_form_email');
  document.getElementById('sc-phone').placeholder = t('sc_form_phone');
  document.getElementById('sc-submit').textContent = t('sc_form_submit');

  const titleEl   = document.getElementById('sc-title');
  const counterEl = document.getElementById('sc-counter-text');
  const fillEl    = document.getElementById('sc-bar-fill');
  const actionsEl = document.getElementById('sc-actions');

  // Default optimistic state while loading
  titleEl.innerHTML = `${t('sc_title')} <em data-sc-num>5</em> ${t('sc_title_em')}`;
  counterEl.textContent = vi ? 'Đang kiểm tra slot…' : 'Checking slots…';
  fillEl.style.width = '0%';

  let slotState = { used: 0, total: 5, available: 5 };
  try {
    const res = await fetch(SC_FN_SLOTS, { headers: { apikey: SUPABASE_ANON_KEY } });
    if (res.ok) slotState = await res.json();
  } catch (_) { /* fallback to default */ }

  const { used, total, available } = slotState;
  const isFull = available === 0;

  if (isFull) {
    titleEl.innerHTML = t('sc_full_title');
    counterEl.textContent = t('sc_full_desc');
    fillEl.style.width = '100%';
    fillEl.dataset.full = 'true';
  } else {
    titleEl.innerHTML = `${t('sc_title')} <em>${available}</em> / ${total} ${t('sc_title_em')}`;
    counterEl.textContent = vi
      ? `Đã có ${used} người đặt hôm nay. Reset 00:00 ngày mai.`
      : `${used} booked today. Resets at midnight ICT.`;
    fillEl.style.width = `${(used / total) * 100}%`;
  }

  actionsEl.innerHTML = `
    <a href="https://calendly.com/gsg-zero/30min" target="_blank" rel="noopener"
       class="btn-primary" ${isFull ? 'data-disabled="true" aria-disabled="true"' : ''}>
      ${t('sc_cta_calendly')}
    </a>
    <span class="scarcity-or" aria-hidden="true">${t('or')}</span>
    <a href="#sc-form" class="btn-outline">${t('sc_cta_form')}</a>
  `;

  attachScarcityForm(isFull);
}

function attachScarcityForm(isFull) {
  const form    = document.getElementById('sc-form');
  const status  = document.getElementById('sc-status');
  if (!form || form._bound) return;
  form._bound = true;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = '';
    status.className = 'scarcity-form-status';

    const name    = document.getElementById('sc-name').value.trim();
    const email   = document.getElementById('sc-email').value.trim();
    const phone   = document.getElementById('sc-phone').value.trim();
    const website = document.getElementById('sc-website').value;

    if (!name || !email) {
      status.textContent = vi ? 'Vui lòng điền họ tên và email.' : 'Please enter name and email.';
      status.classList.add('error');
      return;
    }

    const submitBtn = document.getElementById('sc-submit');
    submitBtn.disabled = true;
    submitBtn.textContent = t('loading');

    try {
      const res = await fetch(SC_FN_BOOK, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', apikey: SUPABASE_ANON_KEY },
        body:    JSON.stringify({ name, email, phone, website, source: isFull ? 'cta_band_waitlist' : 'cta_band' }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Failed');

      status.textContent = data.status === 'waitlist' ? t('sc_thx_waitlist') : t('sc_thx_booked');
      status.classList.add('success');
      form.reset();
    } catch (err) {
      status.textContent = t('error');
      status.classList.add('error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = t('sc_form_submit');
    }
  });
}

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
  // Hero — broken-grid chiasmus typography (pivot-audit §C #1, demo HTML:32-37)
  // 4 lines: line-a/b left-aligned, line-c/d right-aligned = editorial chiasmus structure
  document.getElementById('hero-eyebrow').textContent = t('hero_eyebrow');
  document.getElementById('hero-title').innerHTML =
    `<span class="line-a">${t('hero_title_1')}</span>` +
    `<span class="line-b"><em>${t('hero_title_2')}</em></span>` +
    `<span class="line-c">${t('hero_title_3')}</span>` +
    `<span class="line-d"><em>${t('hero_title_4')}</em></span>` +
    `<span class="hero-resolve">${t('hero_title_5')} — <em>${t('hero_title_6')}</em></span>`;
  document.getElementById('hero-sub').textContent = t('hero_sub');
  const benefits = vi
    ? ['✓ Bàn giao trong 7–14 ngày', '✓ 30 dự án thành công', '✓ Hỗ trợ 12 tháng miễn phí']
    : ['✓ Delivered in 7–14 days', '✓ 30 projects delivered', '✓ 12 months free support'];
  const benefitsEl = document.getElementById('hero-benefits');
  if (benefitsEl) benefitsEl.innerHTML = benefits.map(b => `<span class="hero-benefit">${b}</span>`).join('');

  // Hero CTA — editorial: primary outcome-specific + microcopy + secondary text-link
  document.getElementById('hero-actions').className = 'hero-actions hero-actions-editorial';
  document.getElementById('hero-actions').innerHTML = `
    <div class="hero-actions-row">
      <a href="https://calendly.com/gsg-zero/30min" target="_blank" rel="noopener" class="btn-primary">
        ${t('hero_cta_1')}
        <span aria-hidden="true" style="margin-left:.1rem">↗</span>
      </a>
      <a href="/portfolio.html" class="hero-cta-secondary">
        ${t('hero_cta_2')}
        <span aria-hidden="true">→</span>
      </a>
    </div>
    <span class="cta-microcopy">${t('hero_cta_micro')}</span>
    <div class="hero-trust" aria-label="${vi ? 'Đánh giá khách hàng' : 'Client reviews'}">
      <span class="hero-trust-stars" aria-hidden="true">★★★★★</span>
      <span>${vi ? '4.9/5 từ 124 khách hàng' : '4.9/5 from 124 clients'}</span>
    </div>
  `;

  // Hero visual caption (editorial side note next to screenshot)
  const heroCaptionEl = document.getElementById('hero-visual-caption');
  if (heroCaptionEl) heroCaptionEl.textContent = t('hero_visual_caption');

  // Pillars (4 trụ cột — varied storytelling)
  document.getElementById('pillars-label').textContent = t('pillars_label');
  document.getElementById('pillars-title').innerHTML  = `${t('pillars_title')} <em>${t('pillars_title_em')}</em>`;
  document.getElementById('pillars-desc').textContent = t('pillars_desc');
  renderPillars();

  // Services
  document.getElementById('svc-label').textContent = t('svc_label');
  document.getElementById('svc-title').innerHTML = `${t('svc_title')} <em>${t('svc_title_em')}</em>`;
  document.getElementById('svc-desc').textContent = t('svc_desc');
  document.getElementById('svc-cta').textContent = vi ? 'Đặt tư vấn →' : 'Book a call →';
  document.getElementById('svc-cta').href = 'https://calendly.com/gsg-zero/30min';
  document.getElementById('svc-cta').target = '_blank';
  document.getElementById('svc-cta').rel = 'noopener';
  renderServicesTabs();

  // Comparison — direct contrast (us vs them)
  document.getElementById('cmp-label').textContent = t('cmp_label');
  document.getElementById('cmp-title').innerHTML  = `${t('cmp_title')} <em>${t('cmp_title_em')}</em>`;
  renderComparison();

  // Stats — dark shock-contrast section, editorial meta line below
  document.getElementById('stats-grid').innerHTML = stats.map(s => `
    <div class="stat-item fade-up">
      <div class="stat-number">
        <span data-count="${parseFloat(s.numVI)}">${s.numVI}</span><span class="stat-suffix">${s.suffix}</span>
      </div>
      <div class="stat-label">${vi ? s.labelVI : s.labelEN}</div>
    </div>
  `).join('');
  const statsMetaEl = document.getElementById('stats-meta');
  if (statsMetaEl) statsMetaEl.textContent = t('stats_meta');

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

  // Portfolio — folio asymmetric grid (pivot-audit §C #8, demo lift)
  // Structure: 1 featured (7fr, span 2 rows, real kobe image) + 2 right column (folio-vert, folio-small)
  document.getElementById('port-label').textContent = t('port_label');
  document.getElementById('port-title').innerHTML = `${t('port_title')} <em>${t('port_title_em')}</em>`;
  document.getElementById('port-viewall').textContent = t('port_viewall');
  const portfolioGrid = document.getElementById('portfolio-grid');
  portfolioGrid.className = 'folio-grid';
  // portfolio[1] = Kobe Steak (real image), portfolio[0] = HAYWEB Studio, portfolio[2] = HKP
  const p0 = portfolio[1]; // featured: Kobe Steak — real screenshot asset
  const p1 = portfolio[0]; // folio-vert: HAYWEB Studio
  const p2 = portfolio[2]; // folio-small: HKP Sim Kinh Dịch
  portfolioGrid.innerHTML = `
    <!-- Feature card: Kobe Steak — real screenshot (data-cursor activates gold pill cursor) -->
    <a href="${p0.url}" target="_blank" rel="noopener" class="folio folio-feature fade-up" data-cursor="true">
      <div class="folio-meta">
        <span class="folio-no">001</span>
        <span>${vi ? p0.tagVI : p0.tagEN}</span>
      </div>
      <h3 class="folio-title">${vi ? p0.titleVI : p0.titleEN}</h3>
      <p class="folio-desc">${vi ? p0.descVI : p0.descEN}</p>
      <div class="folio-image folio-image-real">
        <img src="/images/kobe-steak-hero.jpeg"
             alt="${vi ? p0.titleVI : p0.titleEN}"
             loading="lazy" width="800" height="500">
      </div>
      <div class="folio-footer">
        <span>${vi ? 'F&B · Realtime Booking' : 'F&B · Realtime Booking'}</span>
        <span class="folio-arrow">↗</span>
      </div>
    </a>

    <!-- Vert card: HAYWEB Studio — mono classification (no real screenshot yet) -->
    <a href="${p1.url}" target="_blank" rel="noopener" class="folio folio-vert fade-up" data-cursor="true">
      <div class="folio-meta">
        <span class="folio-no">002</span>
        <span>${vi ? p1.tagVI : p1.tagEN}</span>
      </div>
      <h3 class="folio-title">${vi ? p1.titleVI : p1.titleEN}</h3>
      <p class="folio-desc">${vi ? p1.descVI : p1.descEN}</p>
      <div class="folio-image folio-image-hayweb" aria-hidden="true">
        <div class="folio-classify">
          <span class="folio-classify-id">HW</span>
          <span class="folio-classify-line">Agency · Stripe · Supabase</span>
          <span class="folio-classify-line">Báo giá AI · Ký số · Thanh toán</span>
        </div>
      </div>
      <div class="folio-footer">
        <span>Agency · AI Quotes</span>
        <span class="folio-arrow">↗</span>
      </div>
    </a>

    <!-- Small card: HKP Sim Kinh Dịch — mono classification -->
    <a href="${p2.url || '#'}" class="folio folio-small fade-up" data-cursor="true">
      <div class="folio-meta">
        <span class="folio-no">003</span>
        <span>${vi ? p2.tagVI : p2.tagEN}</span>
      </div>
      <h3 class="folio-title">${vi ? p2.titleVI : p2.titleEN}</h3>
      <p class="folio-desc">${vi ? p2.descVI : p2.descEN}</p>
      <div class="folio-image folio-image-hkp" aria-hidden="true">
        <div class="folio-classify">
          <span class="folio-classify-id">HKP</span>
          <span class="folio-classify-line">E-com · Sim phong thủy</span>
          <span class="folio-classify-line">CTV affiliate · Supabase</span>
        </div>
      </div>
      <div class="folio-footer">
        <span>E-com · Feng Shui</span>
        <span class="folio-arrow">↗</span>
      </div>
    </a>
  `;

  // Why us — editorial spread (real screenshot + side caption)
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
  const whyCaptionEl = document.getElementById('why-side-caption');
  if (whyCaptionEl) whyCaptionEl.textContent = t('why_side_caption');

  // Process — editorial XL numbered (rule lines on top of each card replace gray connector bar)
  document.getElementById('proc-label').textContent = vi ? 'Quy trình' : 'Our Process';
  document.getElementById('proc-title').innerHTML = vi
    ? 'Từ ý tưởng đến <em>sản phẩm</em> trong 5 bước'
    : 'From idea to <em>product</em> in 5 steps';
  const procEl = document.getElementById('process-steps');
  procEl.classList.add('process-editorial');
  procEl.innerHTML = process.map((p, i) => `
    <div class="process-step fade-up ${i===0?'active':''}">
      <div class="process-num">${vi ? p.numVI : p.numEN}</div>
      <h4>${vi ? p.stepVI : p.stepEN}</h4>
      <p>${vi ? p.descVI : p.descEN}</p>
    </div>
  `).join('');

  // Pricing — 3-tone tiers (pivot-audit §C #5, demo lift)
  // Starter = cream, Pro = gold-bg + ribbon + lift, Enterprise = black
  document.getElementById('price-label').textContent = t('price_label');
  document.getElementById('price-title').innerHTML = `${t('price_title')} <em>${t('price_title_em')}</em>`;
  document.getElementById('price-desc').textContent = t('price_desc');
  const pricingEl = document.getElementById('pricing-preview');
  pricingEl.className = 'tier-grid';
  pricingEl.innerHTML = `
    <!-- Tier 1: Starter — cream entry -->
    <div class="tier tier-starter fade-up">
      <div class="tier-head">
        <span class="tier-name">${vi ? pricing[0].tierVI : pricing[0].tierEN}</span>
        <span class="tier-tag">${vi ? 'Landing page · Brochure' : 'Landing page · Brochure'}</span>
      </div>
      <div class="tier-price">
        <span class="amount">${pricing[0].vnd}<small> VND</small></span>
        <span class="amount-usd">${pricing[0].usd} USD</span>
      </div>
      <ul class="tier-features">
        ${(vi ? pricing[0].featuresVI : pricing[0].featuresEN).map(f => `<li>${f}</li>`).join('')}
      </ul>
      <a href="${pricing[0].href}" class="tier-cta">${t(pricing[0].ctaKey)}</a>
    </div>

    <!-- Tier 2: Pro — gold bg, ribbon, translateY lift (architect §5 exception) -->
    <div class="tier tier-pro fade-up">
      <span class="tier-ribbon">${vi ? 'Phổ biến nhất' : 'Most popular'}</span>
      <div class="tier-head">
        <span class="tier-name">${vi ? pricing[1].tierVI : pricing[1].tierEN}</span>
        <span class="tier-tag">${vi ? 'Web app · Đa trang · Tài khoản' : 'Web app · Multi-page · Auth'}</span>
      </div>
      <div class="tier-price">
        <span class="amount">${pricing[1].vnd}<small> VND</small></span>
        <span class="amount-usd">${pricing[1].usd} USD</span>
      </div>
      <ul class="tier-features">
        ${(vi ? pricing[1].featuresVI : pricing[1].featuresEN).map(f => `<li>${f}</li>`).join('')}
      </ul>
      <a href="${pricing[1].href}" class="tier-cta tier-cta-strong">${t(pricing[1].ctaKey)}</a>
    </div>

    <!-- Tier 3: Enterprise — black bg, palette completion -->
    <div class="tier tier-ent fade-up">
      <div class="tier-head">
        <span class="tier-name">${vi ? pricing[2].tierVI : pricing[2].tierEN}</span>
        <span class="tier-tag">${vi ? 'Hệ thống phức tạp · CRM · ERP' : 'Complex systems · CRM · ERP'}</span>
      </div>
      <div class="tier-price">
        <span class="amount">${pricing[2].vnd}<small> VND</small></span>
        <span class="amount-usd">${pricing[2].usd} USD</span>
      </div>
      <ul class="tier-features">
        ${(vi ? pricing[2].featuresVI : pricing[2].featuresEN).map(f => `<li>${f}</li>`).join('')}
      </ul>
      <a href="${pricing[2].href}" class="tier-cta tier-cta-cream">${t(pricing[2].ctaKey)}</a>
    </div>
  `;
  document.getElementById('price-viewall').textContent = vi ? 'Xem bảng giá đầy đủ →' : 'View full pricing →';

  // Testimonials — editorial: 1 oversized pull-quote + 2 standard tiles
  document.getElementById('testi-label').textContent = t('testi_label');
  document.getElementById('testi-title').innerHTML = `${t('testi_title')} <em>${t('testi_title_em')}</em>`;
  const renderTestimonialCard = (t2, isPullQuote) => `
    <div class="testimonial-card${isPullQuote ? ' testimonial-pullquote' : ''}">
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
  `;
  // Pick the longest testimonial as pull-quote (most impactful when elevated)
  const sortedByLen = [...testimonials].sort((a, b) =>
    ((vi ? b.textVI : b.textEN).length) - ((vi ? a.textVI : a.textEN).length));
  const pullQuote = sortedByLen[0];
  const others = testimonials.filter(x => x !== pullQuote);
  document.getElementById('testimonials-grid').innerHTML = renderTestimonialCard(pullQuote, true);
  document.getElementById('testimonials-secondary').innerHTML = others.map(o => renderTestimonialCard(o, false)).join('');

  // Scarcity CTA Band — REAL slot count from Supabase
  renderScarcity();
}

// Custom cursor — gold pill on data-cursor elements (pivot-audit §C #8)
// Lerp animation for smooth follow. Mobile: cursor-pill display:none via CSS.
function initCursorPill() {
  const pill = document.getElementById('cursor');
  if (!pill) return;
  // Only active on pointer devices — not touch
  if (!window.matchMedia('(pointer: fine)').matches) return;

  let mx = -200, my = -200;
  let cx = -200, cy = -200;
  let active = false;
  let raf = null;

  function lerp(a, b, n) { return a + (b - a) * n; }

  function tick() {
    cx = lerp(cx, mx, 0.12);
    cy = lerp(cy, my, 0.12);
    pill.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%) scale(${active ? 1 : 0})`;
    raf = requestAnimationFrame(tick);
  }

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
  });

  document.querySelectorAll('[data-cursor]').forEach(el => {
    el.addEventListener('mouseenter', () => {
      active = true;
      pill.classList.add('is-active');
    });
    el.addEventListener('mouseleave', () => {
      active = false;
      pill.classList.remove('is-active');
    });
  });

  raf = requestAnimationFrame(tick);
}

// ===== GSAP STRONG SCROLL ANIMATIONS — Pass 3 (2026-05-03) =====
// User req: "chữ kéo từ chỗ rất xa về tới vị trí chính, hiệu ứng mạnh"
// Layers ON TOP of existing IO-based .fade-up reveals — does not replace them.
// Reduced-motion: early return preserves accessibility.
function initStrongScrollAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // Bail immediately if user prefers reduced motion — CSS handles snap-to-position
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // PATTERN 1 — Hero chiasmus lines slide from far offscreen (alternating left/right)
  // Targets .line-a / .line-b / .line-c / .line-d / .hero-resolve inside .hero-title
  // FOUC-safe: gsap.set() primes opacity:0 synchronously BEFORE forEach loop,
  // so GSAP controls final state from the very first paint tick.
  // CSS also pre-hides at opacity:0 as belt-and-suspenders (see style.css HERO FOUC block).
  // Pass 6: converted from gsap.from() to gsap.fromTo() — explicit end state { x:0, opacity:1 }
  // prevents the set+from race condition where GSAP records END=opacity:0 and animates 0→0.
  const heroLines = gsap.utils.toArray('.hero-title .line-a, .hero-title .line-b, .hero-title .line-c, .hero-title .line-d, .hero-title .hero-resolve');
  // CRITICAL: prime initial state synchronously to prevent FOUC flash (hero-specific, kept from Pass 4)
  gsap.set(heroLines, { opacity: 0 });
  heroLines.forEach((line, i) => {
    const fromX = (i % 2 === 0) ? '-120vw' : '120vw'; // extreme offscreen
    gsap.fromTo(line,
      { x: fromX, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.4,
        ease: 'power4.out',
        delay: i * 0.08,
        scrollTrigger: {
          trigger: line,
          start: 'top 92%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // PATTERN 2 — Section titles slide in from far left
  // Pass 6: removed gsap.set() prime (caused set+from race: END recorded as opacity:0, animated 0→0).
  // Converted to gsap.fromTo() with explicit end state { x:0, opacity:1 }.
  const sectionTitles = gsap.utils.toArray('.section-title');
  sectionTitles.forEach(el => {
    gsap.fromTo(el,
      { x: -180, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom-=80',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // PATTERN 3 — Pillar cards stagger slide-up from below
  // Pass 6: removed gsap.set() prime, converted to gsap.fromTo() with end { y:0, opacity:1 }.
  const pillarCards = gsap.utils.toArray('.pillar-card');
  pillarCards.forEach((card, i) => {
    gsap.fromTo(card,
      { y: 140, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.0,
        ease: 'power3.out',
        delay: i * 0.09,
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=80',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // PATTERN 4 — Stats numbers scale-pop (back.out gives a slight overshoot = satisfying)
  // Pass 6: removed gsap.set() prime, converted to gsap.fromTo() with end { scale:1, opacity:1 }.
  const statNums = gsap.utils.toArray('.stat-number');
  statNums.forEach(el => {
    gsap.fromTo(el,
      { scale: 0.4, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom-=80',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // PATTERN 5 — Folio featured image: scale-in with blur lift (dramatic reveal)
  // filter:'blur(20px)' only runs if not in ban list — visual-concept §9 allows on elements, not bg
  // Pass 6: removed gsap.set() prime, converted to gsap.fromTo() with end { scale:1, opacity:1, filter:'blur(0px)' }.
  const folioEls = gsap.utils.toArray('.folio-feature, .folio-image-real');
  folioEls.forEach(el => {
    gsap.fromTo(el,
      { scale: 1.15, opacity: 0, filter: 'blur(16px)' },
      {
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom-=80',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // PATTERN 6 — Pricing tiers stagger pop-in from below
  // Pass 6: removed gsap.set() prime, converted to gsap.fromTo() with end { y:0, opacity:1 }.
  const tiers = gsap.utils.toArray('.tier');
  tiers.forEach((tier, i) => {
    gsap.fromTo(tier,
      { y: 90, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.95,
        ease: 'power3.out',
        delay: i * 0.13,
        scrollTrigger: {
          trigger: tier,
          start: 'top bottom-=80',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // PATTERN 7 — Why-us screenshot: parallax scrub (smooth depth on scroll)
  // scrub:1 = smooth 1s lag behind scroll, no snap issue
  // Pass 5: already gsap.fromTo — explicit from/to state, immune to set+from race.
  // Pass 6: removed the redundant gsap.set() that was added above the forEach — fromTo owns state fully.
  const whyScreenshots = gsap.utils.toArray('.why-screenshot');
  whyScreenshots.forEach(el => {
    gsap.fromTo(el,
      { y: 70, scale: 0.96 },
      {
        y: -50,
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      }
    );
  });

  // PATTERN 8 — Process steps cascade left/right alternating
  // Pass 6: removed per-element gsap.set() prime + the extra forEach loop.
  // Converted to single gsap.fromTo() forEach with end { x:0, opacity:1 }.
  const processSteps = gsap.utils.toArray('.process-step');
  processSteps.forEach((step, i) => {
    gsap.fromTo(step,
      { x: i % 2 === 0 ? -110 : 110, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.95,
        ease: 'power3.out',
        delay: i * 0.06,
        scrollTrigger: {
          trigger: step,
          start: 'top bottom-=80',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // Refresh ScrollTrigger after all async DOM builds settle
  // (buildPage() is called before this, but just in case of reflows)
  // Pass 5 Option C: explicit refresh after all triggers registered
  ScrollTrigger.refresh();
}

async function init() {
  await renderNav('home');
  renderFooter();
  buildPage();
  init3DTilt();
  initStatsCounter();
  initCursorPill();
  // Pass 5 fix: GSAP must run BEFORE IO observer so gsap.set() primes are applied
  // synchronously. initScrollReveal() then filters those selectors out, avoiding
  // the dual-system conflict (GSAP inline opacity:0 beats CSS .revealed opacity:1).
  initStrongScrollAnimations();
  initScrollReveal();
}

// Refresh ScrollTrigger positions after window resize
window.addEventListener('resize', () => {
  if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
});

init();
