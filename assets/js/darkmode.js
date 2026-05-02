var DARK_CLASS = 'dark';
var COOKIE_DAYS = 365;

function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

function setCookie(name, value, days) {
    var d = new Date();
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
    document.cookie = name + "=" + value + ";path=/;SameSite=strict;expires=" + d.toGMTString();
}

function toggleDarkMode() {
    var body = document.querySelector("body");
    if (body.classList.contains(DARK_CLASS)) {
        setCookie('theme', 'light', COOKIE_DAYS);
        body.classList.remove(DARK_CLASS);
    } else {
        setCookie('theme', 'dark', COOKIE_DAYS);
        body.classList.add(DARK_CLASS);
    }
}

// Apply persisted/preferred theme as early as possible to avoid flash.
(function applyInitialTheme() {
    var theme = getCookie('theme');
    var userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (theme === 'dark' || (theme === null && userPrefersDark)) {
        document.documentElement.classList.add('pre-dark');
        document.addEventListener('DOMContentLoaded', function () {
            document.body.classList.add(DARK_CLASS);
        });
    }
})();

// Bind toggle buttons (replaces inline onclick).
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.dark-mode-toggle').forEach(function (btn) {
        btn.addEventListener('click', toggleDarkMode);
    });
});
