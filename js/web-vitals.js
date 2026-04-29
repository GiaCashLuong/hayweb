'use strict';

// Real User Monitoring — Web Vitals
// Requires /js/web-vitals-lib.js (self-hosted from npm package web-vitals)
// TODO: Download web-vitals library: https://unpkg.com/web-vitals/dist/web-vitals.umd.cjs
// Save as: hayweb/js/web-vitals-lib.js

function gtag() { window.dataLayer = window.dataLayer || []; window.dataLayer.push(arguments); }

function sendVital(metric) {
  gtag('event', metric.name, {
    value: Math.round(metric.value),
    metric_id: metric.id,
    metric_value: metric.value,
    metric_delta: metric.delta,
    page_path: location.pathname
  });

  // Critical alert if LCP > 4s
  if (metric.name === 'LCP' && metric.value > 4000) {
    gtag('event', 'slow_page', { lcp_ms: Math.round(metric.value), page_path: location.pathname });
  }
}

// Only import if lib available
if (typeof window !== 'undefined') {
  import('/js/web-vitals-lib.js')
    .then(({ onCLS, onFID, onLCP, onINP, onTTFB }) => {
      onCLS(sendVital);
      onFID(sendVital);
      onLCP(sendVital);
      onINP?.(sendVital);
      onTTFB(sendVital);
    })
    .catch(() => {
      // Library not available — skip silently
    });
}
