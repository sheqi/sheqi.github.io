// Homepage scroll reveal: blocks below the fold fade up as they enter the
// viewport. Content is only hidden once this script runs, so crawlers,
// no-JS visitors and reduced-motion users always see everything. Blocks already
// on screen at load are never hidden: fading them in would delay LCP.
(function () {
  var hero = document.querySelector('.home-hero');
  if (!hero || !('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var targets = [];
  for (var el = hero.nextElementSibling; el; el = el.nextElementSibling) {
    if (el.tagName !== 'SCRIPT') targets.push(el);
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var pending = e.target.classList.contains('reveal');
      if (e.isIntersecting || (!pending && e.boundingClientRect.top < window.innerHeight)) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      } else {
        e.target.classList.add('reveal');
      }
    });
  }, { rootMargin: '0px 0px -8% 0px' });

  targets.forEach(function (t) { io.observe(t); });
  document.documentElement.classList.add('reveal-on');
})();
