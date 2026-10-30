// Homepage scroll reveal: blocks after the hero fade up as they enter the
// viewport. Content is only hidden once this script runs, so crawlers,
// no-JS visitors and reduced-motion users always see everything.
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
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px' });

  targets.forEach(function (t) {
    t.classList.add('reveal');
    io.observe(t);
  });
  document.documentElement.classList.add('reveal-on');
})();
