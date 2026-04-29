'use strict';

// A/B Testing — Custom lightweight implementation
// Uses localStorage for sticky assignment (user always sees same variant)
// Integrates with GA4 for reporting

class ABTest {
  constructor(testId, variants) {
    if (!testId || !variants?.length) throw new Error('ABTest: testId and variants required');
    this.testId = testId;
    this.variants = variants;
    this.variant = this._assignVariant();
    this._trackAssignment();
  }

  _assignVariant() {
    const key = `ab_${this.testId}`;
    const stored = localStorage.getItem(key);
    if (stored && this.variants.includes(stored)) return stored;
    const variant = this.variants[Math.floor(Math.random() * this.variants.length)];
    localStorage.setItem(key, variant);
    return variant;
  }

  _trackAssignment() {
    if (typeof gtag === 'function') {
      gtag('event', 'ab_test_assigned', {
        test_id: this.testId,
        variant: this.variant,
        page_path: location.pathname
      });
    }
  }

  apply(handlers) {
    const fn = handlers[this.variant];
    if (typeof fn === 'function') fn();
    return this;
  }

  trackConversion(type = 'primary') {
    if (typeof gtag === 'function') {
      gtag('event', 'ab_test_conversion', {
        test_id: this.testId,
        variant: this.variant,
        conversion_type: type
      });
    }
    return this;
  }

  static reset(testId) {
    localStorage.removeItem(`ab_${testId}`);
  }

  static resetAll() {
    Object.keys(localStorage)
      .filter(k => k.startsWith('ab_'))
      .forEach(k => localStorage.removeItem(k));
  }
}

// Make available globally
window.ABTest = ABTest;

/* ── Usage example (uncomment to activate a test) ──

const heroTest = new ABTest('hero_cta_v1', ['control', 'variant_a']);

heroTest.apply({
  control: () => {
    // Default state — do nothing
  },
  variant_a: () => {
    const cta = document.querySelector('.hero-cta, [data-cta="hero_primary"]');
    if (cta) cta.textContent = 'Xem bảng giá miễn phí →';
  }
});

// Track when user converts (add to form submit handler)
document.querySelector('form')?.addEventListener('submit', () => {
  heroTest.trackConversion();
});

── */
