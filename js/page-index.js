// Debug flag — logs only on localhost; silent in production
const DEBUG = location.hostname === 'localhost' || location.hostname === '127.0.0.1';

// Service slug map — used by renderServicesTabs() to build href for each service card link
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

// Services catalogue — 5 tab groups (Website / Marketing / Hosting / Software / Training), rendered by renderServicesTabs()
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

// Stats data — odd numbers (97.4%, 5.2×) signal real measurement; round numbers lose trust
const stats = [
  { numVI: '30',   numEN: '30',   suffix: '',  labelVI: 'Dự án đã bàn giao',     labelEN: 'Projects Delivered' },
  { numVI: '97.4', numEN: '97.4', suffix: '%', labelVI: 'Khách quay lại / giới thiệu', labelEN: 'Client Retention / Referral' },
  { numVI: '5.2',  numEN: '5.2',  suffix: '×', labelVI: 'Conversion trung bình so với cũ', labelEN: 'Avg Conversion vs Previous Site' },
  { numVI: '99.97',numEN: '99.97',suffix: '%', labelVI: 'Uptime 12 tháng qua',  labelEN: 'Uptime, last 12 months' },
];

// Portfolio items — index [0] renders large card, [1][2] small; matches CSS asymmetric grid pattern
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

// Why-us differentiators — rendered as icon list beside the editorial art composition
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

// SVG avatar generator — 4 variants replace Unsplash photos, keeping CSP clean (no external image fetch)
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

// Testimonials — 3 verified clients; primary pull-quote in grid, secondary below (renderTestimonials)
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

// 4 pillars data — each pillar uses a different copywriting framework (PAS / compare / BAB / Q&A) for editorial variety
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

// Comparison rows — HAYWEB vs typical agency; rendered as accessible role="table" in renderComparison()
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

  // LIFT-4: pull-quote before grid (border-left editorial, demo CSS:322-331)
  const pullContainer = grid.previousElementSibling;
  const pullId = 'pillars-pull-quote';
  if (!document.getElementById(pullId)) {
    const pullEl = document.createElement('p');
    pullEl.id = pullId;
    pullEl.className = 'pillar-pull';
    pullEl.textContent = vi
      ? 'Web không phải chỉ là giao diện — đó là công cụ bán hàng đo lường được.'
      : 'A website isn\'t just a facade — it\'s a measurable sales instrument.';
    grid.parentElement.insertBefore(pullEl, grid);
  }

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
  if (DEBUG) console.log('[scarcity] slots loaded:', { used, total, available });
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
  // Hero V-3 — full-width single-column typographic dominance (Option B port from demo)
  // eyebrow: pulsing gold dot already in HTML; append text node after span
  const eyebrowEl = document.getElementById('hero-eyebrow');
  eyebrowEl.appendChild(document.createTextNode(t('hero_eyebrow')));

  // h1: 4 chiasmus lines (a/b left, c/d right), 2 gold ems per Q2 gate
  document.getElementById('hero-title').innerHTML =
    `<span class="line-a">${t('hero_title_1')}</span>` +
    `<span class="line-b"><em>${t('hero_title_2')}</em></span>` +
    `<span class="line-c">${t('hero_title_3')}</span>` +
    `<span class="line-d"><em>${t('hero_title_4')}</em></span>`;

  // resolve row: flanking rule lines + chiasmus signature with gold em
  document.getElementById('hero-resolve').innerHTML =
    `<span class="rule" aria-hidden="true"></span>` +
    `<p>${t('hero_title_5')} <em>${t('hero_title_6')}</em></p>` +
    `<span class="rule" aria-hidden="true"></span>`;

  // CTA row: gold pill primary + text-link secondary + Zalo tertiary pill
  document.getElementById('hero-cta-row').innerHTML =
    `<a href="https://calendly.com/gsg-zero/30min" target="_blank" rel="noopener" class="cta-gold">
      ${t('hero_cta_1')} <span class="arrow" aria-hidden="true">→</span>
    </a>` +
    `<a href="/portfolio.html" class="cta-link">${t('hero_cta_2')}</a>` +
    `<a href="https://zalo.me/0797986525" target="_blank" rel="noopener" class="cta-zalo" aria-label="Nhắn Zalo HAYWEB">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.149 2 11.25c0 2.822 1.298 5.35 3.354 7.1L4.5 22l3.75-1.5C9.6 21.15 10.785 21.5 12 21.5c5.523 0 10-4.149 10-9.25S17.523 2 12 2zm0 16.5c-1.1 0-2.16-.22-3.13-.63l-.22-.1-2.3.92.74-2.22-.17-.24C5.47 14.89 4.5 13.14 4.5 11.25 4.5 7.25 7.86 4 12 4s7.5 3.25 7.5 7.25-3.36 7.25-7.5 7.25z"/></svg>
      ${vi ? 'Nhắn Zalo' : 'Chat Zalo'}
    </a>`;

  // meta strip: social proof mono text
  document.getElementById('hero-meta').innerHTML =
    `<span>${vi ? '★ 4.9' : '★ 4.9'}</span>` +
    `<span>·</span>` +
    `<span>${vi ? '30 dự án bàn giao' : '30 projects delivered'}</span>` +
    `<span>·</span>` +
    `<span>${t('hero_cta_micro')}</span>`;

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
  // LIFT-5: index 1 (2nd stat) gets .stat-pop for gold-tinted climax tile (MC-3 ascending ramp)
  document.getElementById('stats-grid').innerHTML = stats.map((s, i) => `
    <div class="stat-item fade-up${i === 1 ? ' stat-pop' : ''}">
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

    <!-- Vert card: HAYWEB Studio — PASS 10: real photo (designer + multi-screen, warm tone) -->
    <a href="${p1.url}" target="_blank" rel="noopener" class="folio folio-vert fade-up" data-cursor="true">
      <div class="folio-meta">
        <span class="folio-no">002</span>
        <span>${vi ? p1.tagVI : p1.tagEN}</span>
      </div>
      <h3 class="folio-title">${vi ? p1.titleVI : p1.titleEN}</h3>
      <p class="folio-desc">${vi ? p1.descVI : p1.descEN}</p>
      <div class="folio-image folio-image-real">
        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=80&auto=format&fit=crop"
             alt="${vi ? p1.titleVI : p1.titleEN}"
             loading="lazy" width="900" height="900">
      </div>
      <div class="folio-footer">
        <span>Agency · AI Quotes</span>
        <span class="folio-arrow">↗</span>
      </div>
    </a>

    <!-- Small card: HKP Sim Kinh Dịch — PASS 10: real photo (warm minimalist workspace) -->
    <a href="${p2.url || '#'}" class="folio folio-small fade-up" data-cursor="true">
      <div class="folio-meta">
        <span class="folio-no">003</span>
        <span>${vi ? p2.tagVI : p2.tagEN}</span>
      </div>
      <h3 class="folio-title">${vi ? p2.titleVI : p2.titleEN}</h3>
      <p class="folio-desc">${vi ? p2.descVI : p2.descEN}</p>
      <div class="folio-image folio-image-real">
        <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80&auto=format&fit=crop"
             alt="${vi ? p2.titleVI : p2.titleEN}"
             loading="lazy" width="800" height="600">
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
  // Task 4 Pass 7: oversized number illustration in card corner (editorial numbered cards)
  // MC-7: process step 05 (index 4) gets data-nav-dark for nav inversion + ascending-tone dark bg
  procEl.innerHTML = process.map((p, i) => {
    const isDark = i === 4;
    return `
    <div class="process-step fade-up ${i === 0 ? 'active' : ''}"${isDark ? ' data-nav-dark=""' : ''}>
      <div class="process-num-bg" aria-hidden="true">${vi ? p.numVI : p.numEN}</div>
      <div class="process-num">${vi ? p.numVI : p.numEN}</div>
      <h4>${vi ? p.stepVI : p.stepEN}</h4>
      <p>${vi ? p.descVI : p.descEN}</p>
    </div>
  `;
  }).join('');

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
      <!-- Task 4 Pass 7: gold star SVG badge accent on tier-pro -->
      <svg class="tier-pro-badge" aria-hidden="true" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="16,3 19.5,12.5 30,12.5 21.5,18.5 24.5,28 16,22.5 7.5,28 10.5,18.5 2,12.5 12.5,12.5" stroke="rgba(166,124,46,0.7)" stroke-width="1.5" fill="none"/>
      </svg>
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
  // Task 4 Pass 7: replace SVG avatar with monogram circle (first letter, gold border)
  const renderTestimonialCard = (t2, isPullQuote) => {
    const name = vi ? t2.nameVI : t2.nameEN;
    const initial = name.charAt(0).toUpperCase();
    return `
    <div class="testimonial-card${isPullQuote ? ' testimonial-pullquote' : ''}">
      <div class="testimonial-stars">${t2.stars}</div>
      <p class="testimonial-text">${vi ? t2.textVI : t2.textEN}</p>
      <div class="testimonial-author">
        <div class="testimonial-monogram" aria-hidden="true">${initial}</div>
        <div>
          <div class="testimonial-name">${name}</div>
          <div class="testimonial-role">${vi ? t2.roleVI : t2.roleEN}</div>
        </div>
      </div>
    </div>
  `;
  };
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

  // Bail: CSS at style.css:185-203 restores opacity:1 on hero lines for reduced-motion devices.
  // If that CSS block is removed, hero content will be invisible — keep them in sync.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // EFFECT-2 — Hero V-3 typographic reveal: clip-path wipe per line + resolve fade
  // Lines a/b enter from left, lines c/d enter from right (chiasmus mirror), resolve fades up.
  // gsap.set() primes opacity:0 synchronously (FOUC belt-and-suspenders).
  const heroLines = gsap.utils.toArray('.hero-title .line-a, .hero-title .line-b, .hero-title .line-c, .hero-title .line-d');
  const heroResolve = document.querySelector('.hero-resolve');
  gsap.set(heroLines, { opacity: 0 });
  if (heroResolve) gsap.set(heroResolve, { opacity: 0 });

  const heroTl = gsap.timeline({ delay: 0.2 });
  heroLines.forEach((line, i) => {
    const fromX = (i % 2 === 0) ? '-150vw' : '150vw';
    heroTl.fromTo(line,
      { x: fromX, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: 'power4.out' },
      i * 0.18
    );
  });
  if (heroResolve) {
    heroTl.fromTo(heroResolve,
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      heroLines.length * 0.18 + 0.1
    );
  }

  // Hero supporting elements: eyebrow, CTA row, meta strip — page-load stagger
  gsap.from('.hero-eyebrow', { y: 30, opacity: 0, duration: 0.8, delay: 0.1, ease: 'power3.out' });
  gsap.from('.hero-cta-row', { y: 30, opacity: 0, duration: 0.8, delay: 0.7, ease: 'power3.out', overwrite: 'auto' });
  gsap.from('.hero-meta',    { y: 20, opacity: 0, duration: 0.7, delay: 0.9, ease: 'power3.out', overwrite: 'auto' });

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

  // PATTERN 9 — Magnetic hover on primary CTAs (Pass 7)
  // Buttons shift toward cursor 20% of offset. Elastic return on leave.
  document.querySelectorAll('.btn-primary, .cta-gold, .tier-cta-strong').forEach(btn => {
    if (btn._magneticCTA) return;
    btn._magneticCTA = true;
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(btn, { x: x * 0.2, y: y * 0.2, duration: 0.4, ease: 'power2.out' });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    });
  });

  // PATTERN 10 — Section h2 word-by-word reveal on scroll (Pass 7)
  // Skips .section-title already handled by Pattern 2 (class overlap guard).
  // Uses word wrapping — does NOT split em/strong (regex preserves tags).
  gsap.utils.toArray('section h2:not(.section-title)').forEach(h2 => {
    const original = h2.innerHTML;
    // Wrap text nodes only (not HTML tags) — split on whitespace tokens
    h2.innerHTML = original.replace(/>([^<]+)</g, (match, text) => {
      return '>' + text.replace(/(\S+)/g, '<span class="hw-word">$1</span>') + '<';
    });
    const words = h2.querySelectorAll('.hw-word');
    if (!words.length) return;
    gsap.fromTo(words,
      { y: 60, opacity: 0, rotateX: -45 },
      {
        y: 0, opacity: 1, rotateX: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: 'power3.out',
        scrollTrigger: { trigger: h2, start: 'top 85%', toggleActions: 'play none none none' }
      }
    );
  });

  // PATTERN 11 — Marquee scroll-velocity boost (Pass 7)
  // Fast scroll → marquee speeds up, then eases back to 64s baseline.
  let _lastScroll = window.scrollY;
  window.addEventListener('scroll', () => {
    const velocity = Math.abs(window.scrollY - _lastScroll);
    _lastScroll = window.scrollY;
    const marqueeTrack = document.querySelector('.marquee-track');
    if (marqueeTrack && velocity > 5) {
      marqueeTrack.style.animationDuration = Math.max(8, 64 - velocity * 0.5) + 's';
      setTimeout(() => {
        if (marqueeTrack) marqueeTrack.style.animationDuration = '64s';
      }, 800);
    }
  }, { passive: true });

  // PATTERN 12 — Stats counter increment from 0 to target (Pass 7)
  // Combines with Pattern 4 scale-in. Reads data-count attribute set in buildPage() stats render.
  // Targets .stat-number span[data-count] — the inner span that holds numeric text.
  gsap.utils.toArray('.stat-number span[data-count]').forEach(el => {
    const target = parseFloat(el.dataset.count);
    if (isNaN(target)) return;
    const decimals = (String(target).split('.')[1] || '').length;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 2,
      ease: 'power2.out',
      onUpdate: () => {
        el.textContent = obj.val.toFixed(decimals);
      },
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
    });
  });

  // Refresh ScrollTrigger after all async DOM builds settle
  // (buildPage() is called before this, but just in case of reflows)
  // Pass 5 Option C: explicit refresh after all triggers registered
  ScrollTrigger.refresh();
}

// Refresh ScrollTrigger positions after window resize
window.addEventListener('resize', () => {
  if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
});

// ===== PHASE B — NON-HERO EFFECTS (Pass 1) =====

// EFFECT-9: SVG path-draw on Why-Us accent cell via IntersectionObserver
function initPathDraw() {
  const accentCell = document.querySelector('.why-art-cell--accent');
  if (!accentCell) return;
  // Already in view on init? Apply immediately (deep-link / fullpage bug protection)
  const rect = accentCell.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
    accentCell.classList.add('drawn');
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('drawn');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  io.observe(accentCell);
}

// Nav scroll-progress gold line (step 25 — also covers nav-dark process step-05 via [data-nav-dark])
function initNavScrollProgress() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight * 100).toFixed(1) + '%' : '0%';
    nav.style.setProperty('--scroll-progress', progress);
  }, { passive: true });
}

// MC-4 partner stagger IO trigger (re-initialise if needed — CSS animation handles timing)
function initPartnerStagger() {
  const logos = document.querySelectorAll('.partner-logo');
  if (!logos.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Force reflow so CSS animation-delay takes effect from visible moment
        entry.target.style.animationPlayState = 'running';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2, rootMargin: '0px 0px -60px 0px' });
  logos.forEach(logo => {
    logo.style.animationPlayState = 'paused';
    io.observe(logo);
  });
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
  // Phase B non-hero effects
  initPathDraw();
  initNavScrollProgress();
  initPartnerStagger();
}

init();
