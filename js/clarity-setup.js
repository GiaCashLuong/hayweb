'use strict';

// Microsoft Clarity — Session Recording + Heatmaps (FREE)
// TODO: Get project ID from clarity.microsoft.com
// 1. Go to clarity.microsoft.com
// 2. Create new project for hayweb.vercel.app
// 3. Copy the project ID below

const CLARITY_ID = 'XXXXXXXXXX'; // ← REPLACE THIS

// Self-hosted Clarity script
// TODO: Download clarity.js from the Clarity dashboard embed code and save to hayweb/js/clarity.js
(function(c, l, a, r, i, t, y) {
  c[a] = c[a] || function() { (c[a].q = c[a].q || []).push(arguments); };
  t = l.createElement(r); t.async = 1; t.src = '/js/clarity.js';
  y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
})(window, document, 'clarity', 'script', CLARITY_ID);

// Initialize Clarity project ID
if (typeof clarity === 'function') clarity('set', 'project_id', CLARITY_ID);

// Custom tags for better session filtering
document.addEventListener('DOMContentLoaded', () => {
  // User segment
  const isReturning = document.cookie.includes('_ga');
  if (typeof clarity === 'function') {
    clarity('set', 'user_type', isReturning ? 'returning' : 'new');
    clarity('set', 'industry', 'b2b_webagency');

    // Tag page type
    const path = location.pathname;
    const section = path === '/' ? 'home' :
                    path.includes('pricing') ? 'pricing' :
                    path.includes('about') ? 'about' :
                    path.includes('contact') ? 'contact' : 'other';
    clarity('set', 'page_section', section);
  }
});

// Tag on key actions
document.querySelectorAll('[data-cta]').forEach(el => {
  el.addEventListener('click', () => {
    if (typeof clarity === 'function') {
      clarity('set', 'clicked_cta', el.dataset.cta);
    }
  });
});

document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', () => {
    if (typeof clarity === 'function') {
      clarity('set', 'form_submitted', form.id || 'unnamed');
    }
  });
});
