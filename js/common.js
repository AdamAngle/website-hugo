var first = true;
var transparent_class = 'navbar-light';
var visible_class = 'navbar-light';
var nav = document.getElementById('navbar-main');
var navToggle = nav.getElementsByClassName('navbar-toggler')[0];
var navItems = document.getElementById('navbar-nav');

var isTransparent = nav.classList.contains('bg-transparent');
function setBg(a, className) {
    nav.classList.remove('bg-transparent', 'bg-light', transparent_class, visible_class);
    nav.classList.add('bg-' + a, className);
}

function handleScroll(e, hidden=null) {
    if (first) {
        if (nav.classList.contains('navbar-dark')) {
            transparent_class = 'navbar-dark';
        }
        first = false;
    }
    var collapsed = hidden === null ? navToggle.classList.contains('collapsed') : hidden;
    if (isTransparent && (!collapsed || window.pageYOffset > 56)) {
        setBg('light', visible_class);
        isTransparent = false;
    } else if (!isTransparent && (collapsed && window.pageYOffset <= 56)) {
        setBg('transparent', transparent_class);
        isTransparent = true;
    }
}

window.addEventListener('scroll', handleScroll, {
    passive: true
});

(function() {

    handleScroll();
})();

navItems.addEventListener('show.bs.collapse', function() {
    handleScroll(null, false);
});
navItems.addEventListener('hide.bs.collapse', function() {
    handleScroll(null, true);
});
