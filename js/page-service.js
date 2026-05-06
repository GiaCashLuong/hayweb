// ====== SERVICE DETAIL PAGE ======
const services = {

  // --- WEBSITE ---
  'website-doanh-nghiep': {
    tagVI: 'Website', tagEN: 'Website',
    timeVI: '3 phút đọc', timeEN: '3 min read',
    img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80&auto=format&fit=crop',
    titleVI: 'Website Doanh Nghiệp — Giao Diện Thuyết Phục, Kết Quả Bền Vững',
    titleEN: 'Business Website — Built to Convert, Built to Last',
    contentVI: `
      <p class="article-lead">Một website doanh nghiệp tốt không chỉ đẹp — nó phải chuyển đổi khách truy cập thành khách hàng, chạy 24/7 và đại diện xứng đáng cho thương hiệu của bạn.</p>
      <h2>Gói này bao gồm gì?</h2>
      <ul>
        <li>Thiết kế giao diện đo ni đóng giày — không template sẵn</li>
        <li>Multi-page: Trang chủ, Giới thiệu, Dịch vụ, Liên hệ (và các trang tùy chỉnh)</li>
        <li>Chuẩn SEO on-page: meta tags, Open Graph, sitemap XML, robots.txt</li>
        <li>Responsive hoàn toàn — mobile, tablet, desktop</li>
        <li>Form liên hệ kết nối email hoặc Supabase</li>
        <li>Tốc độ tải &lt; 2 giây, Lighthouse &gt; 90</li>
      </ul>
      <h2>Phù hợp với ai?</h2>
      <p>Công ty dịch vụ, phòng khám, văn phòng luật, agency, nhà hàng, spa — bất kỳ doanh nghiệp nào cần diện mạo chuyên nghiệp và muốn khách hàng tìm được mình trên Google.</p>
      <h2>Tại sao chọn HAYWEB?</h2>
      <p>Báo giá trong 5 phút. Ký số ngay trên web. Bàn giao đúng hạn hoặc hoàn tiền. Bàn giao toàn bộ source code — bạn sở hữu 100%. Bảo hành 30 ngày sau bàn giao.</p>
      <div class="article-callout">
        <strong>Giá tham khảo</strong>
        <p>Từ <strong>8.000.000đ</strong> ($320) tùy độ phức tạp. Nhận báo giá chi tiết theo yêu cầu thực tế của bạn trong 5 phút.</p>
      </div>`,
    contentEN: `
      <p class="article-lead">A good business website isn't just attractive — it converts visitors into customers, runs 24/7 and represents your brand with authority.</p>
      <h2>What's included?</h2>
      <ul>
        <li>Custom-designed interface — no generic templates</li>
        <li>Multi-page: Home, About, Services, Contact (and custom pages)</li>
        <li>On-page SEO: meta tags, Open Graph, XML sitemap, robots.txt</li>
        <li>Fully responsive — mobile, tablet, desktop</li>
        <li>Contact form connected to email or Supabase</li>
        <li>Load time &lt; 2 seconds, Lighthouse &gt; 90</li>
      </ul>
      <h2>Who is it for?</h2>
      <p>Service firms, clinics, law offices, agencies, restaurants, spas — any business that needs a professional presence and wants customers to find them on Google.</p>
      <h2>Why HAYWEB?</h2>
      <p>Quote in 5 minutes. Sign digitally on the spot. On-time delivery or full refund. Complete source code handover — you own it 100%. 30-day warranty after delivery.</p>
      <div class="article-callout">
        <strong>Pricing guide</strong>
        <p>From <strong>$320</strong> (8,000,000đ) depending on complexity. Get a detailed quote based on your actual needs in 5 minutes.</p>
      </div>`
  },

  'landing-page': {
    tagVI: 'Website', tagEN: 'Website',
    timeVI: '3 phút đọc', timeEN: '3 min read',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop',
    titleVI: 'Landing Page Chuyển Đổi Cao — Biến Click Thành Khách Hàng',
    titleEN: 'High-Conversion Landing Page — Turn Clicks Into Customers',
    contentVI: `
      <p class="article-lead">Landing page không phải website — nó là một trang duy nhất với một mục tiêu duy nhất: chuyển đổi. Được tối ưu từng pixel cho chiến dịch quảng cáo cụ thể.</p>
      <h2>Yếu tố tạo nên landing page chuyển đổi cao</h2>
      <ul>
        <li>Hero section rõ ràng — giá trị đề xuất trong 5 giây đầu</li>
        <li>Social proof: testimonials, số liệu, logo khách hàng</li>
        <li>CTA nổi bật — màu sắc, vị trí, ngôn từ đã A/B test</li>
        <li>Form tối giản — chỉ hỏi thông tin thực sự cần</li>
        <li>Tốc độ cực cao — &lt; 1.5 giây (ảnh hưởng trực tiếp Quality Score Google Ads)</li>
      </ul>
      <h2>Tích hợp analytics ngay từ đầu</h2>
      <p>Google Analytics 4, Meta Pixel, heatmap (Hotjar/Microsoft Clarity) được cài ngay khi launch. Bạn thấy user click ở đâu, rời trang ở bước nào — để tối ưu liên tục.</p>
      <h2>Bàn giao nhanh</h2>
      <p>Landing page đơn: bàn giao trong 3–5 ngày làm việc. Landing page phức tạp (multi-section, animation): 7–10 ngày.</p>
      <div class="article-callout">
        <strong>Giá tham khảo</strong>
        <p>Từ <strong>3.500.000đ</strong> ($140). Gói có A/B test + heatmap từ <strong>6.000.000đ</strong>.</p>
      </div>`,
    contentEN: `
      <p class="article-lead">A landing page is not a website — it's a single page with one goal: convert. Optimized pixel-by-pixel for a specific ad campaign.</p>
      <h2>Elements of a high-converting landing page</h2>
      <ul>
        <li>Clear hero section — value proposition within the first 5 seconds</li>
        <li>Social proof: testimonials, stats, client logos</li>
        <li>Prominent CTA — color, placement, copy that's been A/B tested</li>
        <li>Minimal form — only ask for information you actually need</li>
        <li>Blazing fast — &lt; 1.5 seconds (directly affects Google Ads Quality Score)</li>
      </ul>
      <h2>Analytics built in from day one</h2>
      <p>Google Analytics 4, Meta Pixel, heatmap (Hotjar/Clarity) installed at launch. See where users click, where they drop off — and optimize continuously.</p>
      <h2>Fast turnaround</h2>
      <p>Simple landing page: delivered in 3–5 business days. Complex (multi-section, animation): 7–10 days.</p>
      <div class="article-callout">
        <strong>Pricing guide</strong>
        <p>From <strong>$140</strong> (3,500,000đ). Package with A/B testing + heatmap from <strong>$240</strong>.</p>
      </div>`
  },

  'web-ban-hang': {
    tagVI: 'Website', tagEN: 'Website',
    timeVI: '3 phút đọc', timeEN: '3 min read',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80&auto=format&fit=crop',
    titleVI: 'Web Bán Hàng — Cửa Hàng Online Hoàn Chỉnh',
    titleEN: 'E-commerce Store — Sell Online, Manage Everything',
    contentVI: `
      <p class="article-lead">Cửa hàng online không chỉ là danh sách sản phẩm. Đó là hệ thống quản lý toàn diện: sản phẩm, đơn hàng, tồn kho, thanh toán — tất cả trong một.</p>
      <h2>Tính năng cốt lõi</h2>
      <ul>
        <li>Danh mục sản phẩm, biến thể (màu, size), ảnh gallery</li>
        <li>Giỏ hàng, checkout, quản lý đơn hàng</li>
        <li>Thanh toán: Stripe (thẻ quốc tế) + PayOS/VietQR (QR banking nội địa)</li>
        <li>Quản lý tồn kho, cảnh báo hết hàng</li>
        <li>Mã giảm giá, flash sale, upsell</li>
      </ul>
      <h2>Tích hợp vận chuyển</h2>
      <p>Kết nối GHN, GHTK, ViettelPost — tính phí ship tự động, theo dõi đơn hàng realtime, in phiếu giao hàng một click.</p>
      <h2>Admin panel trực quan</h2>
      <p>Dashboard doanh thu theo ngày/tháng, top sản phẩm, khách hàng mới vs quay lại. Quản lý mọi thứ từ điện thoại.</p>
      <div class="article-callout">
        <strong>Giá tham khảo</strong>
        <p>Từ <strong>15.000.000đ</strong> ($600) cho cửa hàng cơ bản. Hệ thống đầy đủ (tồn kho + ship + loyalty) từ <strong>25.000.000đ</strong>.</p>
      </div>`,
    contentEN: `
      <p class="article-lead">An online store is more than a product list. It's a complete management system: products, orders, inventory, payments — all in one place.</p>
      <h2>Core features</h2>
      <ul>
        <li>Product catalog, variants (color, size), image gallery</li>
        <li>Cart, checkout, order management</li>
        <li>Payments: Stripe (international cards) + PayOS/VietQR (domestic QR banking)</li>
        <li>Inventory tracking, low-stock alerts</li>
        <li>Discount codes, flash sales, upsell</li>
      </ul>
      <h2>Shipping integration</h2>
      <p>Connect GHN, GHTK, ViettelPost — automatic shipping rates, real-time order tracking, one-click label printing.</p>
      <h2>Intuitive admin panel</h2>
      <p>Revenue dashboard by day/month, top products, new vs returning customers. Manage everything from your phone.</p>
      <div class="article-callout">
        <strong>Pricing guide</strong>
        <p>From <strong>$600</strong> (15,000,000đ) for a basic store. Full system (inventory + shipping + loyalty) from <strong>$1,000</strong>.</p>
      </div>`
  },

  'mau-web-24h': {
    tagVI: 'Website', tagEN: 'Website',
    timeVI: '2 phút đọc', timeEN: '2 min read',
    img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&q=80&auto=format&fit=crop',
    titleVI: 'Mẫu Web Triển Khai 24 Giờ — Lên Sóng Nhanh, Giao Diện Đẳng Cấp',
    titleEN: 'Ready-to-Launch Website in 24 Hours — Fast Deploy, Premium Look',
    contentVI: `
      <p class="article-lead">Khi bạn cần website ngay — không phải tuần sau, không phải tháng sau. Bộ template cao cấp của HAYWEB được customize theo thương hiệu bạn và bàn giao trong 24 giờ.</p>
      <h2>Quy trình 24 giờ</h2>
      <ul>
        <li><strong>Sáng:</strong> Bạn cung cấp logo, màu thương hiệu, nội dung</li>
        <li><strong>Trưa:</strong> HAYWEB gửi preview để bạn duyệt</li>
        <li><strong>Tối:</strong> Chỉnh sửa theo góp ý, deploy lên domain của bạn</li>
        <li><strong>Sáng hôm sau:</strong> Website live, bàn giao đầy đủ</li>
      </ul>
      <h2>Template đẳng cấp, không như "mẫu rẻ"</h2>
      <p>Bộ template của HAYWEB được thiết kế chuẩn cao cấp — không phải WordPress theme mua 29$. Responsive, fast, có animation tinh tế. Bạn sẽ không biết đây là template nếu không được nói.</p>
      <h2>Phù hợp với ai?</h2>
      <p>Startup cần website gấp trước sự kiện, doanh nghiệp muốn test thị trường, hoặc budget hạn chế nhưng vẫn cần giao diện đẹp.</p>
      <div class="article-callout">
        <strong>Giá tham khảo</strong>
        <p>Từ <strong>3.000.000đ</strong> ($120) — bàn giao trong 24 giờ làm việc.</p>
      </div>`,
    contentEN: `
      <p class="article-lead">When you need a website now — not next week, not next month. HAYWEB's premium templates are customized to your brand and delivered in 24 hours.</p>
      <h2>The 24-hour process</h2>
      <ul>
        <li><strong>Morning:</strong> You provide logo, brand colors, content</li>
        <li><strong>Noon:</strong> HAYWEB sends a preview for your approval</li>
        <li><strong>Evening:</strong> Revisions applied, deployed to your domain</li>
        <li><strong>Next morning:</strong> Website live, fully handed over</li>
      </ul>
      <h2>Premium templates — not "cheap themes"</h2>
      <p>HAYWEB templates are designed to a premium standard — not a $29 WordPress theme. Responsive, fast, with refined animations. You won't know it's a template unless told.</p>
      <h2>Who is it for?</h2>
      <p>Startups needing a site before an event, businesses testing a market, or those with limited budget but high design standards.</p>
      <div class="article-callout">
        <strong>Pricing guide</strong>
        <p>From <strong>$120</strong> (3,000,000đ) — delivered in 24 business hours.</p>
      </div>`
  },

  'website-da-ngon-ngu': {
    tagVI: 'Website', tagEN: 'Website',
    timeVI: '3 phút đọc', timeEN: '3 min read',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop',
    titleVI: 'Website Đa Ngôn Ngữ — Tiếp Cận Khách Hàng Toàn Cầu',
    titleEN: 'Multilingual Website — Reach Customers Worldwide',
    contentVI: `
      <p class="article-lead">Ngôn ngữ là rào cản lớn nhất trong kinh doanh quốc tế. Website đa ngôn ngữ xóa bỏ rào cản đó — cho phép bạn nói chuyện với khách hàng bằng tiếng của họ.</p>
      <h2>Hơn cả "dịch thuật"</h2>
      <p>Website đa ngôn ngữ tốt không phải Google Translate. Mỗi phiên bản ngôn ngữ được viết tự nhiên, phù hợp văn hóa địa phương. URL riêng cho mỗi ngôn ngữ (/vi/, /en/) giúp SEO indexing chính xác.</p>
      <h2>SEO riêng từng ngôn ngữ</h2>
      <ul>
        <li>hreflang tags để Google hiểu đúng trang nào cho thị trường nào</li>
        <li>Meta title/description riêng từng ngôn ngữ</li>
        <li>Sitemap riêng hoặc kết hợp</li>
        <li>Tên miền: domain.com/en hoặc en.domain.com</li>
      </ul>
      <h2>Toggle mượt, không reload trang</h2>
      <p>Chuyển ngôn ngữ ngay lập tức, lưu vào localStorage — user không phải chọn lại mỗi lần vào. Hỗ trợ RTL (Arabic, Hebrew) nếu cần.</p>
      <div class="article-callout">
        <strong>Giá tham khảo</strong>
        <p>Thêm <strong>3.000.000đ–5.000.000đ</strong> ($120–$200) cho mỗi ngôn ngữ bổ sung vào website hiện có.</p>
      </div>`,
    contentEN: `
      <p class="article-lead">Language is the biggest barrier in international business. A multilingual website removes that barrier — letting you speak to customers in their own language.</p>
      <h2>Beyond just "translation"</h2>
      <p>A good multilingual site isn't Google Translate. Each language version is written naturally, culturally appropriate. Separate URLs per language (/vi/, /en/) ensure accurate SEO indexing.</p>
      <h2>Per-language SEO</h2>
      <ul>
        <li>hreflang tags so Google knows which page serves which market</li>
        <li>Separate meta title/description per language</li>
        <li>Individual or combined sitemaps</li>
        <li>Domain options: domain.com/en or en.domain.com</li>
      </ul>
      <h2>Smooth toggle, no page reload</h2>
      <p>Language switch is instant, saved to localStorage — users don't have to re-select each visit. RTL support (Arabic, Hebrew) available if needed.</p>
      <div class="article-callout">
        <strong>Pricing guide</strong>
        <p>Add <strong>$120–$200</strong> (3,000,000–5,000,000đ) per additional language on an existing website.</p>
      </div>`
  },

  'ui-ux-thuong-hieu': {
    tagVI: 'Website', tagEN: 'Website',
    timeVI: '3 phút đọc', timeEN: '3 min read',
    img: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=1200&q=80&auto=format&fit=crop',
    titleVI: 'UI/UX & Thương Hiệu — Ấn Tượng Đầu Tiên Quyết Định Tất Cả',
    titleEN: 'UI/UX & Branding — First Impressions That Win',
    contentVI: `
      <p class="article-lead">Người dùng mất 50 mili-giây để đánh giá website của bạn. UI/UX tốt không chỉ đẹp — nó hướng dẫn người dùng đến hành động bạn muốn một cách tự nhiên.</p>
      <h2>UI — Giao diện</h2>
      <ul>
        <li>Design system nhất quán: màu sắc, typography, spacing, component</li>
        <li>Figma prototype interactive trước khi lập trình</li>
        <li>Dark/light mode, accessibility (WCAG AA)</li>
        <li>Micro-animation tinh tế — hover, transition, loading state</li>
      </ul>
      <h2>UX — Trải nghiệm</h2>
      <ul>
        <li>User flow mapping — từ landing đến conversion</li>
        <li>Giảm friction: ít click hơn, form ngắn hơn, CTA rõ hơn</li>
        <li>Mobile-first: 70% traffic từ điện thoại — thiết kế cho điện thoại trước</li>
      </ul>
      <h2>Thương hiệu thống nhất</h2>
      <p>Logo, màu sắc, font chữ, giọng điệu — nhất quán từ website đến social media đến card visit. Bộ Brand Guidelines bàn giao kèm theo.</p>
      <div class="article-callout">
        <strong>Giá tham khảo</strong>
        <p>UI/UX audit website hiện có: <strong>3.000.000đ</strong>. Thiết kế brand identity đầy đủ: từ <strong>8.000.000đ</strong>.</p>
      </div>`,
    contentEN: `
      <p class="article-lead">Users take 50 milliseconds to judge your website. Good UI/UX isn't just beautiful — it guides users toward your desired action naturally.</p>
      <h2>UI — Interface</h2>
      <ul>
        <li>Consistent design system: colors, typography, spacing, components</li>
        <li>Interactive Figma prototype before development</li>
        <li>Dark/light mode, accessibility (WCAG AA)</li>
        <li>Refined micro-animations — hover, transitions, loading states</li>
      </ul>
      <h2>UX — Experience</h2>
      <ul>
        <li>User flow mapping — from landing to conversion</li>
        <li>Reduce friction: fewer clicks, shorter forms, clearer CTAs</li>
        <li>Mobile-first: 70% of traffic is mobile — design for phone first</li>
      </ul>
      <h2>Unified brand identity</h2>
      <p>Logo, colors, fonts, tone of voice — consistent from website to social media to business cards. Brand Guidelines document included in handover.</p>
      <div class="article-callout">
        <strong>Pricing guide</strong>
        <p>UI/UX audit of existing site: <strong>$120</strong>. Full brand identity design: from <strong>$320</strong>.</p>
      </div>`
  },

  // --- MARKETING ---
  'seo-tong-the': {
    tagVI: 'Marketing', tagEN: 'Marketing',
    timeVI: '4 phút đọc', timeEN: '4 min read',
    img: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1200&q=80&auto=format&fit=crop',
    titleVI: 'SEO Tổng Thể — Lên Top Google Bền Vững',
    titleEN: 'Full-Stack SEO — Sustainable Google Rankings',
    contentVI: `
      <p class="article-lead">SEO không phải "hack thuật toán" — đó là xây dựng website xứng đáng được xếp hạng cao. Làm đúng, traffic tăng liên tục mà không phụ thuộc tiền quảng cáo.</p>
      <h2>Technical SEO</h2>
      <ul>
        <li>Audit tốc độ tải, Core Web Vitals (LCP, FID, CLS)</li>
        <li>Kiểm tra crawlability: robots.txt, sitemap, canonical tags</li>
        <li>Sửa broken links, redirect chains, duplicate content</li>
        <li>Schema markup (FAQ, Product, LocalBusiness, BreadcrumbList)</li>
      </ul>
      <h2>On-page SEO</h2>
      <ul>
        <li>Nghiên cứu từ khóa theo ý định tìm kiếm (search intent)</li>
        <li>Tối ưu title, meta description, H1-H3, alt text ảnh</li>
        <li>Internal linking strategy — phân phối link juice đúng cách</li>
        <li>Content brief cho từng trang chính</li>
      </ul>
      <h2>Off-page SEO & Backlink</h2>
      <p>Xây dựng backlink từ nguồn uy tín trong ngành (báo điện tử, directory, guest post). Không mua link rác — an toàn lâu dài với Google.</p>
      <div class="article-callout">
        <strong>Giá tham khảo</strong>
        <p>Audit một lần: <strong>4.000.000đ</strong>. Gói tháng (ongoing): từ <strong>6.000.000đ/tháng</strong>. Kết quả thấy rõ sau 3–6 tháng.</p>
      </div>`,
    contentEN: `
      <p class="article-lead">SEO isn't "hacking algorithms" — it's building a website that deserves to rank. Done right, traffic grows continuously without depending on ad spend.</p>
      <h2>Technical SEO</h2>
      <ul>
        <li>Speed audit, Core Web Vitals (LCP, FID, CLS)</li>
        <li>Crawlability check: robots.txt, sitemap, canonical tags</li>
        <li>Fix broken links, redirect chains, duplicate content</li>
        <li>Schema markup (FAQ, Product, LocalBusiness, BreadcrumbList)</li>
      </ul>
      <h2>On-page SEO</h2>
      <ul>
        <li>Keyword research based on search intent</li>
        <li>Optimize title, meta description, H1–H3, image alt text</li>
        <li>Internal linking strategy — proper link juice distribution</li>
        <li>Content brief for each key page</li>
      </ul>
      <h2>Off-page SEO & Backlinks</h2>
      <p>Build backlinks from reputable industry sources (news sites, directories, guest posts). No spammy link buying — safe long-term with Google.</p>
      <div class="article-callout">
        <strong>Pricing guide</strong>
        <p>One-time audit: <strong>$160</strong>. Monthly retainer (ongoing): from <strong>$240/month</strong>. Visible results in 3–6 months.</p>
      </div>`
  },

  'google-facebook-ads': {
    comingSoon: true,
    tagVI: 'Marketing', tagEN: 'Marketing',
    timeVI: '3 phút đọc', timeEN: '3 min read',
    img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80&auto=format&fit=crop',
    titleVI: 'Google & Facebook Ads — Chi Tiêu Thông Minh, Đo Lường Rõ Ràng',
    titleEN: 'Google & Facebook Ads — Spend Smart, Scale Fast',
    contentVI: `
      <p class="article-lead">Chạy quảng cáo đúng cách không phải "nạp tiền và cầu may". Đó là hệ thống targeting chính xác, sáng tạo được test liên tục, và báo cáo ROI minh bạch mỗi tuần.</p>
      <h2>Google Ads</h2>
      <ul>
        <li>Search Ads: hiện đúng lúc khách đang tìm kiếm sản phẩm/dịch vụ của bạn</li>
        <li>Display & YouTube: remarketing khách đã ghé thăm website</li>
        <li>Shopping Ads: cho cửa hàng e-commerce</li>
        <li>Tối ưu Quality Score để giảm CPC</li>
      </ul>
      <h2>Facebook & Instagram Ads</h2>
      <ul>
        <li>Lookalike audience từ data khách hàng hiện có</li>
        <li>Retargeting pixel — nhắm lại user đã xem sản phẩm</li>
        <li>A/B test creative: ảnh, video, copy, CTA</li>
        <li>Funnel đầy đủ: Awareness → Consideration → Conversion</li>
      </ul>
      <h2>Báo cáo hàng tuần</h2>
      <p>Mỗi thứ Hai: báo cáo chi phí, click, lead, conversion, CPA, ROAS — không che giấu số liệu xấu. Từ số liệu thực tế để ra quyết định tiếp theo.</p>
      <div class="article-callout">
        <strong>Giá tham khảo</strong>
        <p>Phí quản lý: <strong>15–20% ngân sách quảng cáo</strong>, tối thiểu <strong>3.000.000đ/tháng</strong>. Ngân sách ads tách riêng (trả thẳng cho Google/Meta).</p>
      </div>`,
    contentEN: `
      <p class="article-lead">Running ads properly isn't "top up and hope." It's precise targeting, continuously tested creative, and transparent weekly ROI reporting.</p>
      <h2>Google Ads</h2>
      <ul>
        <li>Search Ads: appear exactly when customers are searching for what you offer</li>
        <li>Display & YouTube: remarket to visitors who've already been to your site</li>
        <li>Shopping Ads: for e-commerce stores</li>
        <li>Quality Score optimization to reduce CPC</li>
      </ul>
      <h2>Facebook & Instagram Ads</h2>
      <ul>
        <li>Lookalike audiences built from existing customer data</li>
        <li>Retargeting pixel — re-engage users who viewed your products</li>
        <li>A/B test creative: images, video, copy, CTA</li>
        <li>Full funnel: Awareness → Consideration → Conversion</li>
      </ul>
      <h2>Weekly reporting</h2>
      <p>Every Monday: spend, clicks, leads, conversions, CPA, ROAS — no hiding bad numbers. Real data drives the next decision.</p>
      <div class="article-callout">
        <strong>Pricing guide</strong>
        <p>Management fee: <strong>15–20% of ad spend</strong>, minimum <strong>$120/month</strong>. Ad budget is separate (paid directly to Google/Meta).</p>
      </div>`
  },

  'phan-tich-bao-cao': {
    tagVI: 'Marketing', tagEN: 'Marketing',
    timeVI: '3 phút đọc', timeEN: '3 min read',
    img: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1200&q=80&auto=format&fit=crop',
    titleVI: 'Phân Tích & Báo Cáo — Đọc Số Liệu Để Ra Quyết Định Đúng',
    titleEN: 'Analytics & Reporting — Data That Drives Decisions',
    contentVI: `
      <p class="article-lead">Marketing không có data là lái xe không có đèn. HAYWEB thiết lập hệ thống đo lường đầy đủ — để bạn biết chính xác đồng tiền marketing nào đang sinh lời.</p>
      <h2>Cài đặt & cấu hình</h2>
      <ul>
        <li>Google Analytics 4: events, conversions, funnel, audiences</li>
        <li>Meta Pixel + Conversions API (server-side — vượt qua ad blocker)</li>
        <li>Google Tag Manager: quản lý tất cả tracking tags từ một chỗ</li>
        <li>Google Search Console: theo dõi từ khóa, impressions, CTR</li>
      </ul>
      <h2>Dashboard tuỳ chỉnh</h2>
      <p>Looker Studio dashboard tổng hợp toàn bộ kênh (website + ads + social) vào một màn hình. Cập nhật tự động mỗi ngày, share link cho cả team.</p>
      <h2>Báo cáo định kỳ</h2>
      <p>Hàng tháng: phân tích xu hướng, so sánh kỳ trước, top traffic source, top converting page, và đề xuất cụ thể để cải thiện tháng sau.</p>
      <div class="article-callout">
        <strong>Giá tham khảo</strong>
        <p>Setup một lần: <strong>2.500.000đ</strong>. Báo cáo hàng tháng: <strong>1.500.000đ/tháng</strong>.</p>
      </div>`,
    contentEN: `
      <p class="article-lead">Marketing without data is driving without headlights. HAYWEB sets up comprehensive measurement — so you know exactly which marketing dollars are generating returns.</p>
      <h2>Setup & configuration</h2>
      <ul>
        <li>Google Analytics 4: events, conversions, funnels, audiences</li>
        <li>Meta Pixel + Conversions API (server-side — bypasses ad blockers)</li>
        <li>Google Tag Manager: manage all tracking tags from one place</li>
        <li>Google Search Console: track keywords, impressions, CTR</li>
      </ul>
      <h2>Custom dashboard</h2>
      <p>Looker Studio dashboard aggregating all channels (website + ads + social) in one view. Auto-updates daily, shareable link for your whole team.</p>
      <h2>Regular reporting</h2>
      <p>Monthly: trend analysis, period-over-period comparison, top traffic sources, top converting pages, and concrete recommendations for the following month.</p>
      <div class="article-callout">
        <strong>Pricing guide</strong>
        <p>One-time setup: <strong>$100</strong>. Monthly reporting retainer: <strong>$60/month</strong>.</p>
      </div>`
  },

  'content-social': {
    comingSoon: true,
    tagVI: 'Marketing', tagEN: 'Marketing',
    timeVI: '3 phút đọc', timeEN: '3 min read',
    img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80&auto=format&fit=crop',
    titleVI: 'Content & Social Media — Nội Dung Thu Hút, Thương Hiệu Gắn Kết',
    titleEN: 'Content & Social Media — Consistent Voice, Growing Audience',
    contentVI: `
      <p class="article-lead">Content không phải đăng bài cho có. Mỗi bài viết, mỗi post phải phục vụ một mục tiêu — thu hút người mới, giữ chân khách hiện tại, hoặc thúc đẩy mua hàng.</p>
      <h2>Lên kế hoạch nội dung</h2>
      <ul>
        <li>Content calendar 30 ngày — biết trước sẽ đăng gì, khi nào, ở đâu</li>
        <li>Pillar content + cluster: bài gốc dài + nhiều bài ngắn liên kết</li>
        <li>Phân tích đối thủ để tìm content gap</li>
        <li>Cân bằng: 70% giá trị, 20% thương hiệu, 10% bán hàng</li>
      </ul>
      <h2>Sản xuất nội dung</h2>
      <ul>
        <li>Copywriting: post Facebook, caption Instagram, LinkedIn article</li>
        <li>Thiết kế visual: banner, infographic, story template (đồng bộ brand)</li>
        <li>Short video script cho Reels/TikTok</li>
      </ul>
      <h2>Đo lường & tối ưu</h2>
      <p>Theo dõi reach, engagement rate, link clicks, follower growth. Bài nào hiệu quả thì nhân rộng, bài nào không thì dừng — quyết định bằng data, không phải cảm tính.</p>
      <div class="article-callout">
        <strong>Giá tham khảo</strong>
        <p>Gói cơ bản (12 post/tháng + thiết kế): <strong>4.000.000đ/tháng</strong>. Gói đầy đủ (20 post + video + report): <strong>8.000.000đ/tháng</strong>.</p>
      </div>`,
    contentEN: `
      <p class="article-lead">Content isn't posting for the sake of it. Every article, every post must serve a purpose — attract new audiences, retain existing customers, or drive purchases.</p>
      <h2>Content planning</h2>
      <ul>
        <li>30-day content calendar — know what to post, when, and where</li>
        <li>Pillar content + clusters: long-form base + linked shorter pieces</li>
        <li>Competitor analysis to identify content gaps</li>
        <li>Mix: 70% value, 20% brand, 10% sales</li>
      </ul>
      <h2>Content production</h2>
      <ul>
        <li>Copywriting: Facebook posts, Instagram captions, LinkedIn articles</li>
        <li>Visual design: banners, infographics, story templates (on-brand)</li>
        <li>Short video scripts for Reels/TikTok</li>
      </ul>
      <h2>Measurement & optimization</h2>
      <p>Track reach, engagement rate, link clicks, follower growth. Scale what works, cut what doesn't — data-driven, not gut-driven.</p>
      <div class="article-callout">
        <strong>Pricing guide</strong>
        <p>Basic (12 posts/month + design): <strong>$160/month</strong>. Full package (20 posts + video + report): <strong>$320/month</strong>.</p>
      </div>`
  },

  'email-marketing': {
    tagVI: 'Marketing', tagEN: 'Marketing',
    timeVI: '3 phút đọc', timeEN: '3 min read',
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80&auto=format&fit=crop',
    titleVI: 'Email Marketing — Kênh ROI Cao Nhất Trong Digital',
    titleEN: 'Email Marketing — Highest ROI Channel in Digital',
    contentVI: `
      <p class="article-lead">Mỗi đồng chi vào email marketing trung bình thu về 42 đồng. Không kênh nào khác đạt ROI 42:1. Email là tài sản bạn sở hữu — không thuật toán nào cắt reach của bạn.</p>
      <h2>Thiết lập hệ thống</h2>
      <ul>
        <li>Chọn & cấu hình nền tảng phù hợp (Mailchimp, Klaviyo, Brevo)</li>
        <li>Verify domain, cấu hình SPF/DKIM/DMARC — đảm bảo email vào inbox, không spam</li>
        <li>Landing page & form thu thập email (popup, embedded, exit-intent)</li>
        <li>Double opt-in để list chất lượng cao</li>
      </ul>
      <h2>Automation flows</h2>
      <ul>
        <li>Welcome series: 3–5 email chào mừng subscriber mới</li>
        <li>Abandoned cart: nhắc lại khách bỏ giỏ hàng</li>
        <li>Post-purchase: upsell, cross-sell, review request</li>
        <li>Win-back: kích hoạt lại user không mở email 3 tháng</li>
      </ul>
      <h2>Đo lường</h2>
      <p>Open rate (benchmark 20–25%), click rate (2–3%), unsubscribe rate (&lt; 0.5%), revenue per email. A/B test subject line, send time, CTA để cải thiện liên tục.</p>
      <div class="article-callout">
        <strong>Giá tham khảo</strong>
        <p>Setup + 3 automation flow: <strong>4.500.000đ</strong>. Gói quản lý hàng tháng (newsletter + report): <strong>2.500.000đ/tháng</strong>.</p>
      </div>`,
    contentEN: `
      <p class="article-lead">Every dollar spent on email marketing returns an average of $42. No other channel achieves 42:1 ROI. Email is an asset you own — no algorithm can cut your reach.</p>
      <h2>System setup</h2>
      <ul>
        <li>Choose & configure the right platform (Mailchimp, Klaviyo, Brevo)</li>
        <li>Domain verification, SPF/DKIM/DMARC — ensures inbox delivery, not spam</li>
        <li>Landing page & signup forms (popup, embedded, exit-intent)</li>
        <li>Double opt-in for a high-quality list</li>
      </ul>
      <h2>Automation flows</h2>
      <ul>
        <li>Welcome series: 3–5 emails greeting new subscribers</li>
        <li>Abandoned cart: remind customers who left without buying</li>
        <li>Post-purchase: upsell, cross-sell, review request</li>
        <li>Win-back: re-engage users who haven't opened in 3 months</li>
      </ul>
      <h2>Measurement</h2>
      <p>Open rate (benchmark 20–25%), click rate (2–3%), unsubscribe rate (&lt; 0.5%), revenue per email. A/B test subject lines, send times, CTAs to continuously improve.</p>
      <div class="article-callout">
        <strong>Pricing guide</strong>
        <p>Setup + 3 automation flows: <strong>$180</strong>. Monthly management (newsletter + report): <strong>$100/month</strong>.</p>
      </div>`
  },

  'tu-van-chien-luoc-so': {
    comingSoon: true,
    tagVI: 'Marketing', tagEN: 'Marketing',
    timeVI: '4 phút đọc', timeEN: '4 min read',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80&auto=format&fit=crop',
    titleVI: 'Tư Vấn Chiến Lược Số — Lộ Trình Rõ Ràng Cho Tăng Trưởng Online',
    titleEN: 'Digital Strategy Consulting — A Roadmap That Actually Works',
    contentVI: `
      <p class="article-lead">Nhiều doanh nghiệp chi tiền cho từng kênh riêng lẻ mà không có chiến lược tổng thể — kết quả là tiêu tiền nhiều, không biết kênh nào đang hiệu quả. Tư vấn chiến lược giải quyết điều đó.</p>
      <h2>Buổi audit ban đầu (2 giờ)</h2>
      <ul>
        <li>Phân tích hiện trạng: website, SEO, ads, social, email</li>
        <li>Xác định điểm mạnh, điểm yếu, cơ hội, rủi ro (SWOT digital)</li>
        <li>Benchmark so với đối thủ trực tiếp</li>
        <li>Xác định KPI thực tế theo giai đoạn</li>
      </ul>
      <h2>Lộ trình 3–12 tháng</h2>
      <p>Dựa trên ngân sách, nguồn lực, và mục tiêu tăng trưởng — lập lộ trình ưu tiên hóa theo tác động/nỗ lực. Bạn biết tháng nào làm gì, tháng nào kỳ vọng kết quả gì.</p>
      <h2>Không phải "tư vấn cho vui"</h2>
      <p>Mỗi đề xuất đều có cơ sở dữ liệu và case study cụ thể. HAYWEB có thể triển khai trực tiếp hoặc hỗ trợ team nội bộ của bạn thực hiện — tùy chọn.</p>
      <div class="article-callout">
        <strong>Giá tham khảo</strong>
        <p>Buổi tư vấn 2 giờ + báo cáo: <strong>3.000.000đ</strong>. Gói advisor hàng tháng (4 buổi/tháng): <strong>6.000.000đ/tháng</strong>.</p>
      </div>`,
    contentEN: `
      <p class="article-lead">Many businesses spend money on individual channels with no overall strategy — the result is high spend without knowing what's working. Digital strategy consulting fixes that.</p>
      <h2>Initial audit session (2 hours)</h2>
      <ul>
        <li>Current state analysis: website, SEO, ads, social, email</li>
        <li>Identify strengths, weaknesses, opportunities, threats (digital SWOT)</li>
        <li>Benchmark against direct competitors</li>
        <li>Define realistic KPIs per phase</li>
      </ul>
      <h2>3–12 month roadmap</h2>
      <p>Based on budget, resources, and growth goals — a prioritized roadmap by impact/effort. You know what to do each month and what results to expect when.</p>
      <h2>Not just "advice for show"</h2>
      <p>Every recommendation is backed by data and specific case studies. HAYWEB can execute directly or support your internal team — your choice.</p>
      <div class="article-callout">
        <strong>Pricing guide</strong>
        <p>2-hour session + report: <strong>$120</strong>. Monthly advisor retainer (4 sessions/month): <strong>$240/month</strong>.</p>
      </div>`
  },

  // --- HOSTING ---
  'cloud-hosting': {
    tagVI: 'Hosting', tagEN: 'Hosting',
    timeVI: '3 phút đọc', timeEN: '3 min read',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80&auto=format&fit=crop',
    titleVI: 'Cloud Hosting — Tốc Độ, Uptime & Bảo Mật Đỉnh Cao',
    titleEN: 'Cloud Hosting — Speed, Uptime & Security at Scale',
    contentVI: `
      <p class="article-lead">Hosting rẻ đồng nghĩa với website chậm, hay sập, và dữ liệu không an toàn. Cloud hosting chuyên nghiệp là nền tảng mà mọi thứ khác xây lên trên.</p>
      <h2>Thông số kỹ thuật</h2>
      <ul>
        <li>Uptime SLA: 99.9% (không quá 8.7 giờ downtime/năm)</li>
        <li>Tốc độ tải: &lt; 2 giây — server tại Singapore/Việt Nam</li>
        <li>CDN toàn cầu: static files (ảnh, CSS, JS) serve từ server gần user nhất</li>
        <li>SSL miễn phí (Let's Encrypt auto-renew)</li>
        <li>Gzip/Brotli compression bật mặc định</li>
      </ul>
      <h2>Backup tự động hàng ngày</h2>
      <p>Snapshot toàn bộ server lúc 3 giờ sáng mỗi ngày. Lưu 30 phiên bản. Khôi phục 1-click nếu có sự cố — bạn không mất quá 24 giờ dữ liệu trong tình huống xấu nhất.</p>
      <h2>Monitoring & Alert</h2>
      <p>Theo dõi uptime mỗi 1 phút. Nếu website xuống: alert ngay cho team HAYWEB. Thường phát hiện và xử lý trước khi khách hàng của bạn kịp nhận ra.</p>
      <div class="article-callout">
        <strong>Giá tham khảo</strong>
        <p>Từ <strong>1.200.000đ/năm</strong> ($48) cho website nhỏ. Gói business (traffic cao, nhiều domain): từ <strong>3.600.000đ/năm</strong>.</p>
      </div>`,
    contentEN: `
      <p class="article-lead">Cheap hosting means a slow, unreliable website with unsafe data. Professional cloud hosting is the foundation everything else is built on.</p>
      <h2>Technical specs</h2>
      <ul>
        <li>Uptime SLA: 99.9% (no more than 8.7 hours downtime/year)</li>
        <li>Load speed: &lt; 2 seconds — servers in Singapore/Vietnam</li>
        <li>Global CDN: static files (images, CSS, JS) served from nearest server</li>
        <li>Free SSL (Let's Encrypt auto-renew)</li>
        <li>Gzip/Brotli compression enabled by default</li>
      </ul>
      <h2>Daily automated backup</h2>
      <p>Full server snapshot at 3am every day. 30 versions retained. One-click restore if anything goes wrong — you lose at most 24 hours of data in the worst case.</p>
      <h2>Monitoring & alerts</h2>
      <p>Uptime checked every 1 minute. If the site goes down: HAYWEB team is alerted immediately. Usually detected and resolved before your customers even notice.</p>
      <div class="article-callout">
        <strong>Pricing guide</strong>
        <p>From <strong>$48/year</strong> for small sites. Business plan (high traffic, multiple domains): from <strong>$144/year</strong>.</p>
      </div>`
  },

  'email-doanh-nghiep': {
    tagVI: 'Hosting', tagEN: 'Hosting',
    timeVI: '2 phút đọc', timeEN: '2 min read',
    img: 'https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?w=1200&q=80&auto=format&fit=crop',
    titleVI: 'Email Doanh Nghiệp — Địa Chỉ @TênCôngTy Chuyên Nghiệp',
    titleEN: 'Business Email — Professional @YourDomain Address',
    contentVI: `
      <p class="article-lead">Email @gmail.com với đối tác là thiếu chuyên nghiệp. Email @tencongty.vn tạo uy tín ngay lập tức — và khó bị filter spam hơn nhiều.</p>
      <h2>Tính năng</h2>
      <ul>
        <li>50GB dung lượng mỗi địa chỉ email</li>
        <li>Anti-spam, anti-phishing — bảo vệ cả người gửi lẫn người nhận</li>
        <li>Sync realtime trên mọi thiết bị (iOS, Android, Outlook, Gmail app)</li>
        <li>Shared inbox cho team, email alias không giới hạn</li>
        <li>Calendar, contacts, tasks tích hợp</li>
      </ul>
      <h2>Cấu hình kỹ thuật đúng chuẩn</h2>
      <p>SPF, DKIM, DMARC được cấu hình đúng — email của bạn không bị rơi vào spam folder của khách hàng. Đây là điểm nhiều nơi setup sai và không biết tại sao email không đến nơi.</p>
      <h2>Migration từ Gmail/Yahoo</h2>
      <p>Chuyển toàn bộ email cũ sang hệ thống mới — không mất email lịch sử, không downtime trong quá trình chuyển.</p>
      <div class="article-callout">
        <strong>Giá tham khảo</strong>
        <p>Từ <strong>600.000đ/năm</strong> ($24) cho 1 địa chỉ. Gói team 5 địa chỉ: <strong>2.400.000đ/năm</strong>.</p>
      </div>`,
    contentEN: `
      <p class="article-lead">A @gmail.com email with business contacts looks unprofessional. A @yourcompany.com email builds credibility instantly — and is far less likely to be marked as spam.</p>
      <h2>Features</h2>
      <ul>
        <li>50GB storage per email address</li>
        <li>Anti-spam, anti-phishing — protects both sender and receiver</li>
        <li>Real-time sync across all devices (iOS, Android, Outlook, Gmail app)</li>
        <li>Shared inbox for teams, unlimited email aliases</li>
        <li>Integrated calendar, contacts, tasks</li>
      </ul>
      <h2>Correct technical configuration</h2>
      <p>SPF, DKIM, DMARC configured properly — your emails won't land in customers' spam folders. Many setups get this wrong and never know why their emails aren't arriving.</p>
      <h2>Migration from Gmail/Yahoo</h2>
      <p>Migrate all existing emails to the new system — no email history lost, no downtime during the switch.</p>
      <div class="article-callout">
        <strong>Pricing guide</strong>
        <p>From <strong>$24/year</strong> for 1 address. Team of 5 addresses: <strong>$96/year</strong>.</p>
      </div>`
  },

  'ten-mien': {
    tagVI: 'Hosting', tagEN: 'Hosting',
    timeVI: '2 phút đọc', timeEN: '2 min read',
    img: 'https://images.unsplash.com/photo-1480694313141-fce5e697ee25?w=1200&q=80&auto=format&fit=crop',
    titleVI: 'Tên Miền — Địa Chỉ Thương Hiệu Trên Internet',
    titleEN: 'Domain Name — Your Brand\'s Address on the Web',
    contentVI: `
      <p class="article-lead">Tên miền là tài sản số đầu tiên của doanh nghiệp. Chọn đúng ngay từ đầu — vì đổi tên miền sau này tốn kém hơn nhiều (mất SEO, in lại tài liệu, thông báo lại với khách hàng).</p>
      <h2>Các loại tên miền</h2>
      <ul>
        <li><strong>.com</strong> — phổ biến nhất, phù hợp mọi ngành</li>
        <li><strong>.vn</strong> — tên miền Việt Nam, uy tín trong nước, ưu tiên trong Google.com.vn</li>
        <li><strong>.com.vn</strong> — kết hợp cả hai</li>
        <li><strong>.net / .org / .io</strong> — phù hợp tech, cộng đồng, startup</li>
      </ul>
      <h2>Bảo vệ thông tin Whois</h2>
      <p>Khi đăng ký domain, thông tin của bạn (họ tên, địa chỉ, điện thoại) có thể bị công khai. HAYWEB bật Whois Privacy miễn phí — ẩn thông tin cá nhân, tránh spam.</p>
      <h2>Đăng ký nhiều domain</h2>
      <p>Nên đăng ký .com và .vn cùng lúc để tránh đối thủ "chiếm" tên miền tương tự. Redirect tất cả về domain chính.</p>
      <div class="article-callout">
        <strong>Giá tham khảo</strong>
        <p><strong>.com:</strong> ~360.000đ/năm ($14). <strong>.vn:</strong> ~450.000đ/năm ($18). Bảo vệ Whois: miễn phí.</p>
      </div>`,
    contentEN: `
      <p class="article-lead">A domain name is a business's first digital asset. Choose right from the start — because changing later is expensive (lost SEO, reprinting materials, notifying customers).</p>
      <h2>Domain types</h2>
      <ul>
        <li><strong>.com</strong> — most popular, suits any industry</li>
        <li><strong>.vn</strong> — Vietnamese domain, credible locally, favored in Google.com.vn</li>
        <li><strong>.com.vn</strong> — combines both</li>
        <li><strong>.net / .org / .io</strong> — great for tech, community, startups</li>
      </ul>
      <h2>Whois privacy protection</h2>
      <p>When registering a domain, your info (name, address, phone) can be publicly visible. HAYWEB enables Whois Privacy for free — hides personal info, prevents spam.</p>
      <h2>Register multiple domains</h2>
      <p>Register .com and .vn simultaneously to prevent competitors from grabbing similar domain names. Redirect all to your primary domain.</p>
      <div class="article-callout">
        <strong>Pricing guide</strong>
        <p><strong>.com:</strong> ~$14/year. <strong>.vn:</strong> ~$18/year. Whois privacy: free.</p>
      </div>`
  },

  'ssl-bao-mat': {
    tagVI: 'Hosting', tagEN: 'Hosting',
    timeVI: '3 phút đọc', timeEN: '3 min read',
    img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&q=80&auto=format&fit=crop',
    titleVI: 'SSL & Bảo Mật — Bảo Vệ Website Chuẩn Quốc Tế',
    titleEN: 'SSL & Security — Enterprise-Grade Website Protection',
    contentVI: `
      <p class="article-lead">Website không có SSL bị Chrome đánh dấu "Không an toàn" — khách hàng thấy cảnh báo đỏ và rời đi ngay. Bảo mật không còn là tùy chọn.</p>
      <h2>SSL/HTTPS</h2>
      <ul>
        <li>SSL miễn phí (Let's Encrypt) hoặc có phí (DigiCert) tùy nhu cầu</li>
        <li>Auto-renew — không lo hết hạn SSL gây downtime</li>
        <li>HSTS header — buộc browser chỉ kết nối HTTPS, không downgrade</li>
        <li>HTTP → HTTPS redirect tự động</li>
      </ul>
      <h2>Security headers chuẩn Observatory</h2>
      <ul>
        <li>Content Security Policy (CSP) — chặn XSS, injection</li>
        <li>X-Frame-Options — chặn clickjacking</li>
        <li>X-Content-Type-Options — chặn MIME sniffing</li>
        <li>Referrer-Policy — kiểm soát thông tin referrer</li>
      </ul>
      <p>HAYWEB đạt điểm <strong>115/100 A+</strong> trên Mozilla Observatory — top 0.1% website toàn cầu.</p>
      <h2>Web Application Firewall</h2>
      <p>Rate limiting chặn brute force. WAF lọc request độc hại trước khi chạm server. Bot protection.</p>
      <div class="article-callout">
        <strong>Giá tham khảo</strong>
        <p>Cài SSL + cấu hình security headers: <strong>1.500.000đ</strong> (một lần). Included trong tất cả gói web HAYWEB.</p>
      </div>`,
    contentEN: `
      <p class="article-lead">A website without SSL gets marked "Not Secure" in Chrome — customers see a red warning and leave immediately. Security is no longer optional.</p>
      <h2>SSL/HTTPS</h2>
      <ul>
        <li>Free SSL (Let's Encrypt) or paid (DigiCert) based on requirements</li>
        <li>Auto-renew — no risk of SSL expiry causing downtime</li>
        <li>HSTS header — forces browser to use HTTPS only, no downgrade</li>
        <li>Automatic HTTP → HTTPS redirect</li>
      </ul>
      <h2>Observatory-grade security headers</h2>
      <ul>
        <li>Content Security Policy (CSP) — blocks XSS, injection</li>
        <li>X-Frame-Options — blocks clickjacking</li>
        <li>X-Content-Type-Options — blocks MIME sniffing</li>
        <li>Referrer-Policy — controls referrer information</li>
      </ul>
      <p>HAYWEB scores <strong>115/100 A+</strong> on Mozilla Observatory — top 0.1% of websites globally.</p>
      <h2>Web Application Firewall</h2>
      <p>Rate limiting blocks brute force. WAF filters malicious requests before they hit the server. Bot protection included.</p>
      <div class="article-callout">
        <strong>Pricing guide</strong>
        <p>SSL installation + security header configuration: <strong>$60</strong> (one-time). Included in all HAYWEB web packages.</p>
      </div>`
  },

  'backup-khoi-phuc': {
    tagVI: 'Hosting', tagEN: 'Hosting',
    timeVI: '2 phút đọc', timeEN: '2 min read',
    img: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=1200&q=80&auto=format&fit=crop',
    titleVI: 'Backup & Khôi Phục — Không Bao Giờ Mất Dữ Liệu',
    titleEN: 'Backup & Restore — Your Data, Always Safe',
    contentVI: `
      <p class="article-lead">"Tôi chưa cần backup vì chưa bị gì." — đây là câu nói phổ biến nhất trước khi dữ liệu bị mất. Backup không phải chi phí, đó là bảo hiểm.</p>
      <h2>Backup tự động hàng ngày</h2>
      <ul>
        <li>Snapshot toàn bộ: code + database + file upload</li>
        <li>Chạy lúc traffic thấp nhất (3–4 giờ sáng)</li>
        <li>Lưu 30 phiên bản — quay lại bất kỳ ngày nào trong 30 ngày</li>
        <li>Backup offsite: lưu ở storage tách biệt với server chính</li>
      </ul>
      <h2>Khôi phục khi cần</h2>
      <ul>
        <li>Khôi phục 1-click từ dashboard</li>
        <li>Restore một file cụ thể (không cần restore toàn bộ)</li>
        <li>Thời gian khôi phục: &lt; 15 phút trong hầu hết trường hợp</li>
      </ul>
      <h2>Kịch bản cần backup</h2>
      <p>Website bị hack và bị xóa nội dung. Developer xóa nhầm database. Update plugin làm hỏng website. Server hỏng phần cứng. Với backup tốt, tất cả đều giải quyết được trong 15 phút.</p>
      <div class="article-callout">
        <strong>Giá tham khảo</strong>
        <p>Included trong gói Cloud Hosting. Standalone: <strong>600.000đ/năm</strong> ($24).</p>
      </div>`,
    contentEN: `
      <p class="article-lead">"I don't need backup because nothing's gone wrong yet." — the most common thing said before data is lost. Backup isn't a cost, it's insurance.</p>
      <h2>Daily automated backup</h2>
      <ul>
        <li>Full snapshot: code + database + uploaded files</li>
        <li>Runs during lowest traffic (3–4am)</li>
        <li>30 versions retained — restore to any day within 30 days</li>
        <li>Offsite backup: stored on storage separate from the main server</li>
      </ul>
      <h2>Restore when needed</h2>
      <ul>
        <li>One-click restore from dashboard</li>
        <li>Restore a specific file (no need to restore everything)</li>
        <li>Restore time: &lt; 15 minutes in most cases</li>
      </ul>
      <h2>Scenarios that need backup</h2>
      <p>Site hacked and content deleted. Developer accidentally drops the database. Plugin update breaks the site. Server hardware failure. With solid backup, all of these are resolved in 15 minutes.</p>
      <div class="article-callout">
        <strong>Pricing guide</strong>
        <p>Included in Cloud Hosting plan. Standalone: <strong>$24/year</strong>.</p>
      </div>`
  },

  'bao-tri-dinh-ky': {
    tagVI: 'Hosting', tagEN: 'Hosting',
    timeVI: '2 phút đọc', timeEN: '2 min read',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format&fit=crop',
    titleVI: 'Bảo Trì Định Kỳ — Website Luôn Hoạt Động Tốt Nhất',
    titleEN: 'Ongoing Maintenance — Your Site Always at Peak Performance',
    contentVI: `
      <p class="article-lead">Website không phải "làm xong là xong". Như xe hơi cần bảo dưỡng định kỳ, website cần được cập nhật, theo dõi và tối ưu liên tục để không bị lỗi thời hoặc lỗ hổng bảo mật.</p>
      <h2>Gói bảo trì hàng tháng bao gồm</h2>
      <ul>
        <li>Cập nhật bảo mật: vá lỗi plugin/framework mới phát hiện</li>
        <li>Kiểm tra uptime hàng ngày, báo cáo nếu có sự cố</li>
        <li>Kiểm tra tốc độ tải, tối ưu nếu chậm đi</li>
        <li>Kiểm tra form liên hệ, thanh toán hoạt động đúng</li>
        <li>Sao lưu xác nhận: đảm bảo backup thực sự có thể khôi phục</li>
      </ul>
      <h2>Sửa lỗi nhỏ included</h2>
      <p>Lỗi layout nhỏ, typo, link hỏng, ảnh không load — sửa trong vòng 24 giờ làm việc, không tính thêm phí trong gói bảo trì.</p>
      <h2>Báo cáo hàng tháng</h2>
      <p>Tóm tắt những việc đã làm, tình trạng uptime, tốc độ tải, và đề xuất cải thiện nếu cần.</p>
      <div class="article-callout">
        <strong>Giá tham khảo</strong>
        <p>Gói cơ bản: <strong>500.000đ/tháng</strong> ($20). Gói đầy đủ (bao gồm hỗ trợ ưu tiên): <strong>1.500.000đ/tháng</strong> ($60).</p>
      </div>`,
    contentEN: `
      <p class="article-lead">A website isn't "done when done." Like a car needing regular servicing, websites need continuous updates, monitoring, and optimization to stay secure and relevant.</p>
      <h2>Monthly maintenance includes</h2>
      <ul>
        <li>Security updates: patch newly discovered plugin/framework vulnerabilities</li>
        <li>Daily uptime monitoring, incident reports if anything goes wrong</li>
        <li>Load speed checks, optimization if performance degrades</li>
        <li>Contact form and payment flow verification</li>
        <li>Backup verification: confirm backups are actually restorable</li>
      </ul>
      <h2>Minor fixes included</h2>
      <p>Small layout issues, typos, broken links, images not loading — fixed within 24 business hours, no extra charge within the maintenance plan.</p>
      <h2>Monthly report</h2>
      <p>Summary of work done, uptime status, load speed, and improvement suggestions where applicable.</p>
      <div class="article-callout">
        <strong>Pricing guide</strong>
        <p>Basic plan: <strong>$20/month</strong>. Full plan (includes priority support): <strong>$60/month</strong>.</p>
      </div>`
  },

  // --- SOFTWARE ---
  'crm-khach-hang': {
    tagVI: 'Phần mềm', tagEN: 'Software',
    timeVI: '3 phút đọc', timeEN: '3 min read',
    img: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1200&q=80&auto=format&fit=crop',
    titleVI: 'CRM Khách Hàng — Quản Lý Lead & Deal Thông Minh',
    titleEN: 'Customer CRM — Smart Lead & Deal Management',
    contentVI: `
      <p class="article-lead">Không có CRM, thông tin khách hàng nằm rải rác ở Excel, Zalo, email, sổ tay — không ai biết deal nào đang ở đâu. CRM tập trung toàn bộ vào một nơi.</p>
      <h2>Quản lý pipeline bán hàng</h2>
      <ul>
        <li>Kanban board: Lead → Liên lạc → Báo giá → Đàm phán → Chốt</li>
        <li>Giao deal cho salesperson cụ thể, track tiến độ realtime</li>
        <li>Reminder tự động: nhắc follow-up sau 3 ngày không phản hồi</li>
        <li>Forecast doanh thu theo tháng/quý</li>
      </ul>
      <h2>Lịch sử tương tác đầy đủ</h2>
      <p>Mọi email, cuộc gọi, gặp mặt, báo giá đều được ghi lại theo từng khách hàng. Nhân viên mới bắt kịp tức thì mà không cần hỏi lại từ đầu.</p>
      <h2>Tích hợp đa kênh</h2>
      <ul>
        <li>Zalo OA: nhận tin nhắn Zalo trực tiếp vào CRM</li>
        <li>Email: sync với Gmail/Outlook</li>
        <li>SMS: gửi SMS hàng loạt cho nhóm khách hàng</li>
        <li>Website form: lead tự động tạo vào CRM</li>
      </ul>
      <div class="article-callout">
        <strong>Giá tham khảo</strong>
        <p>CRM cơ bản (đến 5 user): <strong>10.000.000đ</strong> phí setup + <strong>500.000đ/tháng</strong> hosting. Tùy chỉnh nâng cao: báo giá riêng.</p>
      </div>`,
    contentEN: `
      <p class="article-lead">Without a CRM, customer info is scattered across Excel, messaging apps, email, notebooks — nobody knows where each deal stands. CRM centralizes everything in one place.</p>
      <h2>Sales pipeline management</h2>
      <ul>
        <li>Kanban board: Lead → Contact → Quote → Negotiation → Closed</li>
        <li>Assign deals to specific salespeople, track progress in real-time</li>
        <li>Auto reminders: nudge follow-up after 3 days without response</li>
        <li>Revenue forecast by month/quarter</li>
      </ul>
      <h2>Complete interaction history</h2>
      <p>Every email, call, meeting, and quote is logged per customer. New team members get up to speed immediately without needing to ask from scratch.</p>
      <h2>Multi-channel integration</h2>
      <ul>
        <li>Zalo OA: receive Zalo messages directly in CRM</li>
        <li>Email: sync with Gmail/Outlook</li>
        <li>SMS: bulk-send SMS to customer segments</li>
        <li>Website form: leads automatically created in CRM</li>
      </ul>
      <div class="article-callout">
        <strong>Pricing guide</strong>
        <p>Basic CRM (up to 5 users): <strong>$400</strong> setup + <strong>$20/month</strong> hosting. Advanced customization: quoted separately.</p>
      </div>`
  },

  'lms-hoc-truc-tuyen': {
    tagVI: 'Phần mềm', tagEN: 'Software',
    timeVI: '3 phút đọc', timeEN: '3 min read',
    img: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=1200&q=80&auto=format&fit=crop',
    titleVI: 'LMS Học Trực Tuyến — Nền Tảng Khoá Học Riêng Của Bạn',
    titleEN: 'Online Learning (LMS) — Your Own Course Platform',
    contentVI: `
      <p class="article-lead">Thay vì phụ thuộc Udemy hay Kyna (và chia hoa hồng 30–50%), bạn có thể sở hữu nền tảng học trực tuyến riêng — 100% doanh thu về tay bạn.</p>
      <h2>Tính năng học viên</h2>
      <ul>
        <li>Video bài giảng, tài liệu PDF, bài kiểm tra</li>
        <li>Theo dõi tiến độ: bài nào đã học, bài nào chưa</li>
        <li>Chứng chỉ hoàn thành tự động cấp sau khi pass bài kiểm tra</li>
        <li>Forum Q&A, bình luận từng bài học</li>
        <li>App mobile (PWA) — học offline được</li>
      </ul>
      <h2>Tính năng quản trị</h2>
      <ul>
        <li>Quản lý học viên, tiến độ, điểm số</li>
        <li>Phân quyền: giảng viên, trợ giảng, admin</li>
        <li>Báo cáo doanh thu, số học viên, tỷ lệ hoàn thành</li>
        <li>Tích hợp thanh toán: Stripe + PayOS</li>
      </ul>
      <h2>Bảo vệ nội dung</h2>
      <p>Video không thể download trực tiếp. Watermark tên học viên lên video. Khóa bài học theo thứ tự — không thể bỏ qua.</p>
      <div class="article-callout">
        <strong>Giá tham khảo</strong>
        <p>LMS cơ bản (1 khoá, không giới hạn học viên): từ <strong>15.000.000đ</strong>. Multi-course platform đầy đủ: từ <strong>25.000.000đ</strong>.</p>
      </div>`,
    contentEN: `
      <p class="article-lead">Instead of relying on Udemy or similar (and paying 30–50% commission), you can own your own online learning platform — 100% of revenue goes to you.</p>
      <h2>Student features</h2>
      <ul>
        <li>Video lectures, PDF materials, quizzes</li>
        <li>Progress tracking: which lessons completed, which remain</li>
        <li>Completion certificates issued automatically after passing quizzes</li>
        <li>Q&A forum, per-lesson comments</li>
        <li>Mobile app (PWA) — works offline</li>
      </ul>
      <h2>Admin features</h2>
      <ul>
        <li>Student management, progress, grades</li>
        <li>Role-based access: instructor, teaching assistant, admin</li>
        <li>Revenue reports, student count, completion rates</li>
        <li>Payment integration: Stripe + PayOS</li>
      </ul>
      <h2>Content protection</h2>
      <p>Videos cannot be directly downloaded. Student name watermarked on video. Lessons locked in sequence — cannot be skipped.</p>
      <div class="article-callout">
        <strong>Pricing guide</strong>
        <p>Basic LMS (1 course, unlimited students): from <strong>$600</strong>. Full multi-course platform: from <strong>$1,000</strong>.</p>
      </div>`
  },

  'pos-nha-hang': {
    tagVI: 'Phần mềm', tagEN: 'Software',
    timeVI: '3 phút đọc', timeEN: '3 min read',
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80&auto=format&fit=crop',
    titleVI: 'POS Nhà Hàng & Cửa Hàng — Quản Lý Bán Hàng Thời Gian Thực',
    titleEN: 'Restaurant & Retail POS — Real-Time Sales Management',
    contentVI: `
      <p class="article-lead">POS (Point of Sale) hiện đại không chỉ là máy tính tiền. Đó là hệ thống quản lý toàn diện — từ order tại bàn đến báo cáo doanh thu cuối ngày.</p>
      <h2>Order & thanh toán</h2>
      <ul>
        <li>Menu digital trên tablet — cập nhật realtime, không cần in lại</li>
        <li>Order tại bàn: nhân viên dùng tablet, đơn tự động gửi vào bếp</li>
        <li>Thanh toán: tiền mặt, thẻ, QR VietQR/PayOS</li>
        <li>In bill nhiệt, chia bill theo người</li>
        <li>Quản lý bàn: sơ đồ bàn, trạng thái trống/có người</li>
      </ul>
      <h2>Quản lý kho & nguyên liệu</h2>
      <p>Tự động trừ nguyên liệu khi có order. Cảnh báo khi nguyên liệu sắp hết. Báo cáo waste (nguyên liệu hỏng/bỏ).</p>
      <h2>Báo cáo & phân tích</h2>
      <ul>
        <li>Doanh thu theo giờ, ngày, tuần, tháng</li>
        <li>Món bán chạy, món ít bán — để tối ưu menu</li>
        <li>Nhân viên nào bán nhiều nhất</li>
        <li>Giờ cao điểm để phân bổ nhân sự đúng</li>
      </ul>
      <div class="article-callout">
        <strong>Giá tham khảo</strong>
        <p>POS nhà hàng cơ bản (1 quầy): từ <strong>12.000.000đ</strong>. Chuỗi nhiều chi nhánh: báo giá riêng.</p>
      </div>`,
    contentEN: `
      <p class="article-lead">A modern POS (Point of Sale) isn't just a cash register. It's a complete management system — from table orders to end-of-day revenue reports.</p>
      <h2>Order & payment</h2>
      <ul>
        <li>Digital menu on tablet — updated in real-time, no reprinting needed</li>
        <li>Table-side ordering: staff use tablet, orders sent to kitchen automatically</li>
        <li>Payment: cash, card, QR VietQR/PayOS</li>
        <li>Thermal receipt printing, split bill by person</li>
        <li>Table management: floor map, occupied/available status</li>
      </ul>
      <h2>Inventory & ingredient management</h2>
      <p>Automatically deduct ingredients when an order is placed. Alert when ingredients run low. Waste reporting (spoiled/discarded ingredients).</p>
      <h2>Reports & analytics</h2>
      <ul>
        <li>Revenue by hour, day, week, month</li>
        <li>Best-selling and slow-moving dishes — to optimize the menu</li>
        <li>Which staff members sell the most</li>
        <li>Peak hours for proper staffing allocation</li>
      </ul>
      <div class="article-callout">
        <strong>Pricing guide</strong>
        <p>Basic restaurant POS (1 terminal): from <strong>$480</strong>. Multi-branch chain: quoted separately.</p>
      </div>`
  },

  'ecommerce-toan-dien': {
    tagVI: 'Phần mềm', tagEN: 'Software',
    timeVI: '3 phút đọc', timeEN: '3 min read',
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80&auto=format&fit=crop',
    titleVI: 'E-commerce Toàn Diện — Hệ Thống Bán Hàng Online Chuyên Nghiệp',
    titleEN: 'Full E-commerce — Complete Online Selling System',
    contentVI: `
      <p class="article-lead">Khác với gói "Web Bán Hàng" cơ bản, E-commerce Toàn Diện là hệ thống đầy đủ dành cho doanh nghiệp muốn scale — tồn kho nhiều kho, đa chi nhánh, loyalty program.</p>
      <h2>Storefront & Admin</h2>
      <ul>
        <li>Giao diện mua sắm tối ưu conversion: quick-view, wishlist, so sánh sản phẩm</li>
        <li>Admin panel đầy đủ: sản phẩm, đơn hàng, tồn kho, khách hàng, báo cáo</li>
        <li>Multi-vendor (nếu cần): nhiều nhà bán hàng trong một platform</li>
      </ul>
      <h2>Logistics</h2>
      <ul>
        <li>Tích hợp GHN, GHTK, ViettelPost — tính phí ship theo địa chỉ thực tế</li>
        <li>In phiếu giao hàng hàng loạt</li>
        <li>Tracking đơn hàng realtime cho khách hàng</li>
        <li>Quản lý hoàn trả, đổi trả</li>
      </ul>
      <h2>Marketing & Loyalty</h2>
      <p>Điểm thưởng, voucher, flash sale countdown, referral program, email automation sau mua hàng. Tất cả trong một hệ thống, không cần tool thứ 3.</p>
      <div class="article-callout">
        <strong>Giá tham khảo</strong>
        <p>Từ <strong>25.000.000đ</strong> ($1,000). Hệ thống đầy đủ multi-vendor + loyalty: từ <strong>45.000.000đ</strong>.</p>
      </div>`,
    contentEN: `
      <p class="article-lead">Unlike the basic "E-commerce Store" package, Full E-commerce is a complete system for businesses ready to scale — multi-warehouse inventory, multiple branches, loyalty programs.</p>
      <h2>Storefront & Admin</h2>
      <ul>
        <li>Conversion-optimized shopping UX: quick-view, wishlist, product comparison</li>
        <li>Full admin panel: products, orders, inventory, customers, reports</li>
        <li>Multi-vendor (optional): multiple sellers in one platform</li>
      </ul>
      <h2>Logistics</h2>
      <ul>
        <li>GHN, GHTK, ViettelPost integration — real-address shipping rates</li>
        <li>Bulk shipping label printing</li>
        <li>Real-time order tracking for customers</li>
        <li>Return and exchange management</li>
      </ul>
      <h2>Marketing & Loyalty</h2>
      <p>Reward points, vouchers, flash sale countdown, referral program, post-purchase email automation. All in one system, no third-party tools needed.</p>
      <div class="article-callout">
        <strong>Pricing guide</strong>
        <p>From <strong>$1,000</strong> (25,000,000đ). Full multi-vendor + loyalty system: from <strong>$1,800</strong>.</p>
      </div>`
  },

  'api-tich-hop': {
    tagVI: 'Phần mềm', tagEN: 'Software',
    timeVI: '3 phút đọc', timeEN: '3 min read',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80&auto=format&fit=crop',
    titleVI: 'API & Tích Hợp Hệ Thống — Kết Nối Mọi Nền Tảng',
    titleEN: 'API & System Integration — Connect Any Platform',
    contentVI: `
      <p class="article-lead">Doanh nghiệp thường dùng nhiều phần mềm riêng lẻ — ERP, kế toán, CRM, kho, vận chuyển. Tích hợp API kết nối tất cả, loại bỏ nhập liệu thủ công.</p>
      <h2>Tích hợp phổ biến</h2>
      <ul>
        <li><strong>Kế toán:</strong> Misa, Fast Accounting — tự động tạo chứng từ khi có đơn hàng</li>
        <li><strong>Vận chuyển:</strong> GHN, GHTK, ViettelPost — book ship tự động</li>
        <li><strong>Thanh toán:</strong> PayOS, Stripe, MoMo, VNPay</li>
        <li><strong>Zalo:</strong> Zalo OA, Zalo Notification Service</li>
        <li><strong>CRM:</strong> HubSpot, Salesforce, hoặc CRM nội bộ</li>
      </ul>
      <h2>Custom API</h2>
      <p>Xây dựng REST API hoặc webhook cho hệ thống nội bộ. Documentation đầy đủ. Bảo mật: JWT authentication, rate limiting, API key management.</p>
      <h2>Quy trình tự động hóa</h2>
      <p>Ví dụ: Đơn hàng tạo trên website → tự động book GHN → tự động tạo phiếu xuất kho trên Misa → tự động gửi SMS cho khách hàng. Không cần nhập tay bất kỳ bước nào.</p>
      <div class="article-callout">
        <strong>Giá tham khảo</strong>
        <p>Tích hợp 1 hệ thống: từ <strong>5.000.000đ</strong>. Automation flow phức tạp: báo giá theo yêu cầu.</p>
      </div>`,
    contentEN: `
      <p class="article-lead">Businesses often run multiple separate software systems — ERP, accounting, CRM, warehouse, shipping. API integration connects them all, eliminating manual data entry.</p>
      <h2>Common integrations</h2>
      <ul>
        <li><strong>Accounting:</strong> Misa, Fast Accounting — auto-create vouchers when orders arrive</li>
        <li><strong>Shipping:</strong> GHN, GHTK, ViettelPost — auto-book shipments</li>
        <li><strong>Payments:</strong> PayOS, Stripe, MoMo, VNPay</li>
        <li><strong>Zalo:</strong> Zalo OA, Zalo Notification Service</li>
        <li><strong>CRM:</strong> HubSpot, Salesforce, or custom internal CRM</li>
      </ul>
      <h2>Custom API</h2>
      <p>Build REST APIs or webhooks for internal systems. Full documentation included. Security: JWT authentication, rate limiting, API key management.</p>
      <h2>Automation workflow example</h2>
      <p>Order created on website → auto-book GHN → auto-create stock-out voucher in Misa → auto-send SMS to customer. No manual input at any step.</p>
      <div class="article-callout">
        <strong>Pricing guide</strong>
        <p>Single system integration: from <strong>$200</strong>. Complex automation flows: quoted on request.</p>
      </div>`
  },

  'web-app-theo-yeu-cau': {
    tagVI: 'Phần mềm', tagEN: 'Software',
    timeVI: '3 phút đọc', timeEN: '3 min read',
    img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80&auto=format&fit=crop',
    titleVI: 'Web App Theo Yêu Cầu — Giải Pháp Số Riêng Cho Bài Toán Của Bạn',
    titleEN: 'Custom Web Apps — Digital Solutions Built for Your Problem',
    contentVI: `
      <p class="article-lead">Khi không có phần mềm có sẵn nào giải quyết đúng bài toán của bạn — đó là lúc cần web app tùy chỉnh. Viết riêng, cho bài toán riêng, không dư thừa tính năng không cần.</p>
      <h2>Loại web app HAYWEB đã xây dựng</h2>
      <ul>
        <li>Hệ thống quản lý nội bộ (intranet, HR, chấm công)</li>
        <li>Dashboard phân tích dữ liệu realtime</li>
        <li>Hệ thống đặt lịch, quản lý appointments</li>
        <li>Portal khách hàng (theo dõi đơn hàng, tải hóa đơn)</li>
        <li>Workflow automation (phê duyệt, ký nháy, luồng công việc)</li>
      </ul>
      <h2>Tech stack</h2>
      <p>Frontend: Vanilla JS hoặc React tùy độ phức tạp. Backend: Supabase (PostgreSQL + Edge Functions) hoặc Node.js. Auth: Supabase Auth (email, Google, SSO). Hosting: Vercel + Supabase Pro.</p>
      <h2>Quy trình phát triển</h2>
      <p>Discovery → Wireframe → Prototype → Development → UAT → Deploy. Bàn giao source code, không vendor lock-in. Bạn sở hữu hoàn toàn.</p>
      <div class="article-callout">
        <strong>Giá tham khảo</strong>
        <p>Web app đơn giản: từ <strong>20.000.000đ</strong>. Hệ thống phức tạp: từ <strong>50.000.000đ</strong>. Liên hệ để được tư vấn miễn phí trước khi báo giá.</p>
      </div>`,
    contentEN: `
      <p class="article-lead">When no off-the-shelf software solves your specific problem — that's when you need a custom web app. Built for your problem, with only the features you actually need.</p>
      <h2>Web apps HAYWEB has built</h2>
      <ul>
        <li>Internal management systems (intranet, HR, attendance)</li>
        <li>Real-time data analytics dashboards</li>
        <li>Booking and appointment management systems</li>
        <li>Customer portals (order tracking, invoice downloads)</li>
        <li>Workflow automation (approvals, sign-offs, process flows)</li>
      </ul>
      <h2>Tech stack</h2>
      <p>Frontend: Vanilla JS or React depending on complexity. Backend: Supabase (PostgreSQL + Edge Functions) or Node.js. Auth: Supabase Auth (email, Google, SSO). Hosting: Vercel + Supabase Pro.</p>
      <h2>Development process</h2>
      <p>Discovery → Wireframe → Prototype → Development → UAT → Deploy. Source code handed over, no vendor lock-in. You own it completely.</p>
      <div class="article-callout">
        <strong>Pricing guide</strong>
        <p>Simple web app: from <strong>$800</strong>. Complex system: from <strong>$2,000</strong>. Contact us for a free consultation before quoting.</p>
      </div>`
  },

  // --- TRAINING ---
  'khoa-lam-web': {
    tagVI: 'Đào tạo', tagEN: 'Training',
    timeVI: '3 phút đọc', timeEN: '3 min read',
    img: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1200&q=80&auto=format&fit=crop',
    titleVI: 'Khoá Làm Web Cơ Bản — Từ Số 0 Đến Landing Page Hoàn Chỉnh',
    titleEN: 'Web Basics Course — Zero to Complete Landing Page in 6 Weeks',
    contentVI: `
      <p class="article-lead">Không cần biết lập trình từ trước. Sau 6 tuần, bạn tự thiết kế và triển khai landing page chuyên nghiệp lên internet — bằng chính đôi tay mình.</p>
      <h2>Chương trình học</h2>
      <ul>
        <li><strong>Tuần 1–2:</strong> HTML cơ bản — cấu trúc trang web, các thẻ quan trọng</li>
        <li><strong>Tuần 3–4:</strong> CSS — layout (Flexbox, Grid), responsive, animation</li>
        <li><strong>Tuần 5:</strong> JavaScript cơ bản — DOM manipulation, sự kiện, form</li>
        <li><strong>Tuần 6:</strong> Git, GitHub, deploy lên Vercel — landing page live</li>
      </ul>
      <h2>Hình thức học</h2>
      <p>Video bài giảng pre-recorded (xem lại bất kỳ lúc nào) + buổi live Q&A hàng tuần với giảng viên HAYWEB. Bài tập thực hành sau mỗi tuần. Group chat hỗ trợ 24/7.</p>
      <h2>Sau khoá học</h2>
      <p>Bạn có thể tự làm website cá nhân/portfolio, tự sửa website công ty, hoặc đủ nền tảng để học framework (React, Vue) tiếp theo.</p>
      <div class="article-callout">
        <strong>Học phí</strong>
        <p><strong>2.500.000đ</strong> ($100) — bao gồm tất cả tài liệu, video, Q&A sessions và chứng chỉ hoàn thành HAYWEB.</p>
      </div>`,
    contentEN: `
      <p class="article-lead">No coding experience required. After 6 weeks, you'll design and deploy a professional landing page to the internet — with your own hands.</p>
      <h2>Curriculum</h2>
      <ul>
        <li><strong>Weeks 1–2:</strong> HTML basics — page structure, key tags</li>
        <li><strong>Weeks 3–4:</strong> CSS — layout (Flexbox, Grid), responsive, animation</li>
        <li><strong>Week 5:</strong> Basic JavaScript — DOM manipulation, events, forms</li>
        <li><strong>Week 6:</strong> Git, GitHub, deploy to Vercel — landing page live</li>
      </ul>
      <h2>Format</h2>
      <p>Pre-recorded video lectures (rewatch anytime) + weekly live Q&A session with a HAYWEB instructor. Practical exercises after each week. Group chat support 24/7.</p>
      <h2>After the course</h2>
      <p>You can build your own personal/portfolio website, edit your company's site yourself, or have the foundation to continue with frameworks (React, Vue).</p>
      <div class="article-callout">
        <strong>Tuition</strong>
        <p><strong>$100</strong> (2,500,000đ) — includes all materials, videos, Q&A sessions and HAYWEB completion certificate.</p>
      </div>`
  },

  'tu-van-ky-thuat-1-1': {
    tagVI: 'Đào tạo', tagEN: 'Training',
    timeVI: '2 phút đọc', timeEN: '2 min read',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80&auto=format&fit=crop',
    titleVI: 'Tư Vấn Kỹ Thuật 1-1 — Giải Đáp Đúng Vấn Đề, Đúng Người',
    titleEN: '1-on-1 Technical Consulting — Expert Answers for Your Specific Questions',
    contentVI: `
      <p class="article-lead">Bạn đang stuck ở một vấn đề kỹ thuật cụ thể? Không muốn mất tuần tìm kiếm trên Stack Overflow? Buổi 1-1 với chuyên gia HAYWEB giải quyết đúng vấn đề của bạn.</p>
      <h2>Phù hợp với ai?</h2>
      <ul>
        <li>Developer tự học cần review code và tư vấn kiến trúc</li>
        <li>Startup founder muốn chọn tech stack đúng từ đầu</li>
        <li>Doanh nghiệp muốn đánh giá hệ thống IT hiện tại</li>
        <li>Team leader cần tư vấn quy trình phát triển phần mềm</li>
      </ul>
      <h2>Buổi tư vấn 90 phút</h2>
      <ul>
        <li>15 phút: bạn mô tả vấn đề, context, đã thử gì</li>
        <li>60 phút: HAYWEB phân tích, giải quyết, hướng dẫn trực tiếp (screen share)</li>
        <li>15 phút: câu hỏi, recap, bước tiếp theo cụ thể</li>
      </ul>
      <h2>Sau buổi tư vấn</h2>
      <p>Nhận bản tóm tắt bằng văn bản — những gì đã thảo luận, quyết định, và action items. Có thể book follow-up session với giá ưu đãi.</p>
      <div class="article-callout">
        <strong>Giá</strong>
        <p><strong>800.000đ</strong> ($32) / buổi 90 phút online. Gói 5 buổi: <strong>3.500.000đ</strong>.</p>
      </div>`,
    contentEN: `
      <p class="article-lead">Stuck on a specific technical problem? Don't want to spend a week trawling Stack Overflow? A 1-on-1 session with a HAYWEB expert resolves your exact issue.</p>
      <h2>Who is it for?</h2>
      <ul>
        <li>Self-taught developers who need code review and architecture advice</li>
        <li>Startup founders wanting to choose the right tech stack from the start</li>
        <li>Businesses wanting an assessment of their current IT system</li>
        <li>Team leads needing guidance on software development processes</li>
      </ul>
      <h2>The 90-minute session</h2>
      <ul>
        <li>15 min: you describe the problem, context, what you've tried</li>
        <li>60 min: HAYWEB analyzes, solves, guides hands-on (screen share)</li>
        <li>15 min: questions, recap, specific next steps</li>
      </ul>
      <h2>After the session</h2>
      <p>Written summary of what was discussed, decisions made, and action items. Follow-up sessions available at a discounted rate.</p>
      <div class="article-callout">
        <strong>Pricing</strong>
        <p><strong>$32</strong> (800,000đ) / 90-min online session. Pack of 5 sessions: <strong>$140</strong>.</p>
      </div>`
  },

  'workshop-doanh-nghiep': {
    comingSoon: true,
    tagVI: 'Đào tạo', tagEN: 'Training',
    timeVI: '3 phút đọc', timeEN: '3 min read',
    img: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=1200&q=80&auto=format&fit=crop',
    titleVI: 'Workshop Doanh Nghiệp — Nâng Cấp Kỹ Năng Số Cho Cả Team',
    titleEN: 'Corporate Workshop — Level Up Your Team\'s Digital Skills',
    contentVI: `
      <p class="article-lead">Một team marketing biết dùng công cụ đúng cách có thể làm được công việc của 3 người. Workshop thực chiến của HAYWEB đào tạo ngay trên bài toán thực tế của doanh nghiệp bạn.</p>
      <h2>Các chủ đề workshop</h2>
      <ul>
        <li><strong>SEO thực chiến:</strong> audit, keyword, content strategy, link building</li>
        <li><strong>Chạy ads hiệu quả:</strong> setup, targeting, creative, đọc báo cáo</li>
        <li><strong>Web hiện đại:</strong> hiểu codebase, làm việc với developer, Figma cơ bản</li>
        <li><strong>Data & Analytics:</strong> GA4, Looker Studio, đọc số liệu để quyết định</li>
        <li><strong>Email Marketing:</strong> setup, automation, A/B test</li>
      </ul>
      <h2>Hình thức</h2>
      <p>Online (Zoom) hoặc offline tại văn phòng của bạn. Thời lượng: nửa ngày (4 giờ) hoặc cả ngày (8 giờ). Tối đa 20 người/buổi để đảm bảo chất lượng tương tác.</p>
      <h2>Tài liệu & toolkit</h2>
      <p>Bộ tài liệu slide + checklist + template được bàn giao sau workshop. Team có thể dùng ngay lập tức. Recording video (nếu online).</p>
      <div class="article-callout">
        <strong>Giá tham khảo</strong>
        <p>Workshop nửa ngày (đến 10 người): <strong>5.000.000đ</strong>. Cả ngày (đến 20 người): <strong>9.000.000đ</strong>.</p>
      </div>`,
    contentEN: `
      <p class="article-lead">A marketing team that uses the right tools properly can do the work of three people. HAYWEB's hands-on workshops are built around your business's actual problems.</p>
      <h2>Workshop topics</h2>
      <ul>
        <li><strong>Practical SEO:</strong> audit, keywords, content strategy, link building</li>
        <li><strong>Effective ads:</strong> setup, targeting, creative, reading reports</li>
        <li><strong>Modern web:</strong> understanding codebases, working with developers, basic Figma</li>
        <li><strong>Data & Analytics:</strong> GA4, Looker Studio, using data to decide</li>
        <li><strong>Email Marketing:</strong> setup, automation, A/B testing</li>
      </ul>
      <h2>Format</h2>
      <p>Online (Zoom) or in-person at your office. Duration: half-day (4 hours) or full-day (8 hours). Maximum 20 participants per session to ensure quality interaction.</p>
      <h2>Materials & toolkit</h2>
      <p>Slide deck + checklists + templates handed over after the workshop. Team can use immediately. Video recording (if online).</p>
      <div class="article-callout">
        <strong>Pricing guide</strong>
        <p>Half-day workshop (up to 10 people): <strong>$200</strong>. Full day (up to 20 people): <strong>$360</strong>.</p>
      </div>`
  },

  'chung-chi-hoan-thanh': {
    tagVI: 'Đào tạo', tagEN: 'Training',
    timeVI: '2 phút đọc', timeEN: '2 min read',
    img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80&auto=format&fit=crop',
    titleVI: 'Chứng Chỉ Hoàn Thành — Xác Nhận Năng Lực, Tăng Uy Tín',
    titleEN: 'Certificate of Completion — Verified Achievement, Added Credibility',
    contentVI: `
      <p class="article-lead">Hoàn thành khoá học của HAYWEB và nhận chứng chỉ có giá trị — không phải để treo tường, mà để chứng minh với nhà tuyển dụng, khách hàng, và đối tác.</p>
      <h2>Chứng chỉ bao gồm gì?</h2>
      <ul>
        <li>Tên đầy đủ người học, khoá học đã hoàn thành</li>
        <li>Ngày hoàn thành, điểm bài kiểm tra cuối khoá</li>
        <li>Mã QR verify online — ai cũng có thể xác minh tính xác thực</li>
        <li>Chữ ký số của HAYWEB Studio</li>
        <li>File PDF chất lượng cao để in ấn hoặc đính kèm hồ sơ</li>
      </ul>
      <h2>Cách nhận chứng chỉ</h2>
      <p>Hoàn thành 100% bài học và đạt tối thiểu 70% điểm bài kiểm tra cuối khoá. Chứng chỉ cấp tự động trong vòng 24 giờ sau khi pass.</p>
      <h2>Giá trị thực tế</h2>
      <p>LinkedIn badges, CV đính kèm, portfolio showcase. Với freelancer: tăng uy tín với khách hàng mới. Với nhân viên: bằng chứng upskilling cho buổi review lương.</p>
      <div class="article-callout">
        <strong>Lưu ý</strong>
        <p>Chứng chỉ hoàn thành <strong>included miễn phí</strong> trong tất cả khoá học HAYWEB. Không có phí riêng cho chứng chỉ.</p>
      </div>`,
    contentEN: `
      <p class="article-lead">Complete a HAYWEB course and receive a certificate with real value — not for the wall, but to demonstrate your skills to employers, clients, and partners.</p>
      <h2>What the certificate includes</h2>
      <ul>
        <li>Learner's full name, course completed</li>
        <li>Completion date, final exam score</li>
        <li>Online-verifiable QR code — anyone can confirm authenticity</li>
        <li>HAYWEB Studio digital signature</li>
        <li>High-quality PDF for printing or attaching to applications</li>
      </ul>
      <h2>How to receive it</h2>
      <p>Complete 100% of lessons and score at least 70% on the final assessment. Certificate issued automatically within 24 hours of passing.</p>
      <h2>Real-world value</h2>
      <p>LinkedIn badges, CV attachments, portfolio showcase. For freelancers: builds credibility with new clients. For employees: proof of upskilling for salary reviews.</p>
      <div class="article-callout">
        <strong>Note</strong>
        <p>Completion certificate is <strong>included free</strong> in all HAYWEB courses. No separate certificate fee.</p>
      </div>`
  }
};

// ====== BUILD PAGE ======
const vi = currentLang === 'vi';

function renderComingSoon(s, title) {
  document.getElementById('article-back').textContent = vi ? '← Dịch vụ' : '← Services';
  document.getElementById('article-back').href = '/#services';
  document.getElementById('article-tag').textContent = vi ? s.tagVI : s.tagEN;
  document.getElementById('article-time').textContent = vi ? '— Sắp ra mắt' : '— Coming soon';
  document.getElementById('article-title').textContent = title;

  const imgWrap = document.getElementById('article-hero-img-wrap');
  imgWrap.querySelector('.article-cover').classList.add('article-cover-blur');
  const img = document.getElementById('article-cover-img');
  img.src = s.img; img.alt = title;

  document.getElementById('article-content').innerHTML = `
    <div class="svc-coming-soon">
      <div class="svc-coming-soon-badge">${vi ? 'Sắp ra mắt' : 'Coming soon'}</div>
      <h2 style="font-size:1.6rem;margin-bottom:1rem">${title}</h2>
      <p>${vi
        ? 'Dịch vụ này đang được xây dựng và sẽ sớm ra mắt. Đăng ký email để nhận thông báo ngay khi có.'
        : 'This service is in development and launching soon. Sign up to be notified the moment it\'s ready.'}</p>
      <div class="svc-coming-soon-form">
        <input type="email" id="cs-email" placeholder="${vi ? 'Email của bạn' : 'Your email'}" />
        <button class="btn-primary" id="cs-submit">${vi ? 'Đăng ký' : 'Notify me'}</button>
      </div>
      <a href="/#services" class="svc-coming-soon-back">${vi ? '← Xem các dịch vụ hiện có' : '← Browse available services'}</a>
    </div>
  `;

  document.getElementById('sidebar-label').textContent = vi ? 'Muốn biết khi ra mắt?' : 'Want to know when it launches?';
  document.getElementById('sidebar-btn').textContent = vi ? 'Đăng ký nhận tin' : 'Get notified';
  document.getElementById('sidebar-btn').addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('cs-email').focus();
  });
  document.getElementById('article-toc').innerHTML = '';

  document.getElementById('cta-title').innerHTML = vi
    ? 'Khám phá <em>dịch vụ hiện có</em>'
    : 'Explore <em>available services</em>';
  document.getElementById('cta-desc').textContent = vi
    ? 'Chúng tôi có nhiều dịch vụ đang hoạt động ngay hôm nay — báo giá trong 5 phút.'
    : 'We have many services live today — get a quote in 5 minutes.';
  document.getElementById('cta-btn').textContent = vi ? 'Xem tất cả dịch vụ' : 'View all services';
  document.getElementById('cta-btn').href = '/#services';

  setTimeout(() => {
    const btn = document.getElementById('cs-submit');
    if (btn) btn.addEventListener('click', () => {
      const email = document.getElementById('cs-email').value.trim();
      if (email && email.includes('@')) {
        btn.textContent = vi ? '✓ Đã đăng ký' : '✓ Registered';
        btn.disabled = true;
        document.getElementById('cs-email').disabled = true;
      }
    });
  }, 50);
}

function buildPage() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug') || '';
  const s = services[slug];

  if (!s) {
    document.getElementById('article-title').textContent = vi ? 'Dịch vụ không tồn tại' : 'Service not found';
    document.getElementById('article-content').innerHTML = `<p><a href="/#services">${vi ? '← Quay lại dịch vụ' : '← Back to services'}</a></p>`;
    return;
  }

  const title = vi ? s.titleVI : s.titleEN;

  if (s.comingSoon) { renderComingSoon(s, title); return; }
  document.title = `${title} – HAYWEB`;
  document.getElementById('page-title').textContent = `${title} – HAYWEB`;
  document.getElementById('page-desc').setAttribute('content', title);

  document.getElementById('article-back').textContent = vi ? '← Dịch vụ' : '← Services';
  document.getElementById('article-back').href = '/#services';
  document.getElementById('article-tag').textContent = vi ? s.tagVI : s.tagEN;
  document.getElementById('article-time').textContent = vi ? s.timeVI : s.timeEN;
  document.getElementById('article-title').textContent = title;

  const img = document.getElementById('article-cover-img');
  img.src = s.img;
  img.alt = title;

  document.getElementById('article-content').innerHTML = vi ? s.contentVI : s.contentEN;

  // ── Mid-content inline CTA + end-content trust strip (info + kích cầu) ──
  injectServiceInlineCTA(title);
  injectServiceEndStrip();

  document.getElementById('sidebar-label').textContent = vi
    ? 'Sẵn sàng triển khai dịch vụ này?'
    : 'Ready to ship this service?';
  document.getElementById('sidebar-btn').textContent = vi ? 'Báo giá 5 phút →' : 'Get a 5-min quote →';

  const h2s = document.querySelectorAll('.article-content h2');
  if (h2s.length > 0) {
    let tocHTML = `<h4>${vi ? 'Nội dung' : 'Contents'}</h4><ul>`;
    h2s.forEach((h, i) => {
      const id = `section-${i}`;
      h.id = id;
      tocHTML += `<li><a href="#${id}">${h.textContent}</a></li>`;
    });
    tocHTML += '</ul>';
    document.getElementById('article-toc').innerHTML = tocHTML;
  }

  document.getElementById('cta-title').innerHTML = vi
    ? 'Sẵn sàng triển khai <em>dịch vụ này?</em>'
    : 'Ready to ship <em>this service?</em>';
  document.getElementById('cta-desc').textContent = vi
    ? 'Báo giá tự động 5 phút · Đặt cọc 30% · Bàn giao đúng hạn · Trễ → hoàn tiền theo điều khoản hợp đồng.'
    : 'Auto-quote in 5 min · 30% deposit · On-time delivery · Late → refund per contract clause.';
  document.getElementById('cta-btn').textContent = vi ? 'Báo giá ngay →' : 'Get a quote →';
}

// Mid-service inline CTA — kích cầu after readers see scope
function injectServiceInlineCTA(serviceTitle) {
  const content = document.getElementById('article-content');
  if (!content) return;
  const h2s = content.querySelectorAll('h2');
  if (h2s.length < 3) return;

  const targetH2 = h2s[Math.min(2, h2s.length - 2)];
  const cta = document.createElement('aside');
  cta.className = 'article-inline-cta service-inline-cta';
  cta.innerHTML = vi ? `
    <div class="inline-cta-body">
      <span class="inline-cta-kicker">DỊCH VỤ NÀY · BÁO GIÁ TỰ ĐỘNG</span>
      <strong class="inline-cta-headline">Đã hình dung được scope. Giờ là lúc xem giá thực.</strong>
      <p>Điền form 5 phút → nhận báo giá chi tiết PDF kèm timeline + tier suggestion. Không cần đợi "tư vấn viên liên hệ", không phí ẩn ở phase 2, trễ deadline → hoàn tiền.</p>
    </div>
    <a href="/new-project.html" class="btn-primary inline-cta-btn">Nhận báo giá 5 phút →</a>
  ` : `
    <div class="inline-cta-body">
      <span class="inline-cta-kicker">THIS SERVICE · AUTO-QUOTE</span>
      <strong class="inline-cta-headline">You've seen the scope. Now see the real price.</strong>
      <p>Fill the 5-minute form → get a detailed PDF quote with timeline + tier suggestion. No "wait for a sales rep", no hidden phase-2 fees, late delivery → refund.</p>
    </div>
    <a href="/new-project.html" class="btn-primary inline-cta-btn">Get a 5-min quote →</a>
  `;
  targetH2.parentNode.insertBefore(cta, targetH2);
}

function injectServiceEndStrip() {
  const content = document.getElementById('article-content');
  if (!content) return;
  const strip = document.createElement('div');
  strip.className = 'article-end-strip';
  strip.innerHTML = vi ? `
    <div class="end-strip-row">
      <div class="end-strip-cell"><strong>3-14 ngày</strong><span>Bàn giao tùy gói</span></div>
      <div class="end-strip-cell"><strong>30/30</strong><span>Dự án đúng hạn</span></div>
      <div class="end-strip-cell"><strong>100%</strong><span>Source code thuộc về bạn</span></div>
    </div>
  ` : `
    <div class="end-strip-row">
      <div class="end-strip-cell"><strong>3-14 days</strong><span>Delivery per tier</span></div>
      <div class="end-strip-cell"><strong>30/30</strong><span>Projects on time</span></div>
      <div class="end-strip-cell"><strong>100%</strong><span>You own the source</span></div>
    </div>
  `;
  content.appendChild(strip);
}

async function init() {
  await renderNav('');
  renderFooter();
  buildPage();
  initScrollReveal();
}

init();
