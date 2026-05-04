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
        document.documentElement.classList.remove('pre-dark');
    } else {
        setCookie('theme', 'dark', COOKIE_DAYS);
        body.classList.add(DARK_CLASS);
        document.documentElement.classList.add('pre-dark');
    }
    updateToggleState();
}

function updateToggleState() {
    var isDark = document.body && document.body.classList.contains(DARK_CLASS);
    document.querySelectorAll('.dark-mode-toggle').forEach(function (btn) {
        btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
        btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    });
}

// Apply persisted/preferred theme as early as possible to avoid flash.
(function applyInitialTheme() {
    var theme = getCookie('theme');
    var userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (theme === 'dark' || (theme === null && userPrefersDark)) {
        document.documentElement.classList.add('pre-dark');
        if (document.body) {
            document.body.classList.add(DARK_CLASS);
        } else {
            document.addEventListener('DOMContentLoaded', function () {
                document.body.classList.add(DARK_CLASS);
            });
        }
    } else {
        document.documentElement.classList.remove('pre-dark');
    }
})();

// Bind toggle buttons (replaces inline onclick).
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.dark-mode-toggle').forEach(function (btn) {
        btn.addEventListener('click', toggleDarkMode);
    });
    updateToggleState();
});
