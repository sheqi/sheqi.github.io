// Scroll progress bar
(function () {
  var bar = document.getElementById('scroll-progress');
  if (!bar) return;
  function updateProgress() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    bar.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
})();

// Publication image shimmer: mark images loaded when they finish fetching
(function () {
  function markLoaded(img) {
    img.classList.add('loaded');
  }
  function initPubImages() {
    document.querySelectorAll('.pub-h-thumb img, .pub-thumb img').forEach(function (img) {
      if (img.complete && img.naturalWidth > 0) {
        markLoaded(img);
      } else {
        img.addEventListener('load', function () { markLoaded(img); });
        img.addEventListener('error', function () { markLoaded(img); }); // hide shimmer even on 404
      }
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPubImages);
  } else {
    initPubImages();
  }
})();

document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.createElement('button');
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '↑';
    backToTopButton.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTopButton);

    function toggleBackToTopButton() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    window.addEventListener('scroll', toggleBackToTopButton);
    backToTopButton.addEventListener('click', scrollToTop);

    toggleBackToTopButton();
});
