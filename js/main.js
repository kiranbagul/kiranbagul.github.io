document.addEventListener('DOMContentLoaded', ready, false);

function ready() {
    feather.replace({ 'stroke-width': 1, width: 20, height: 20 });

    // Elements to inject
    const svgsToInject = document.querySelectorAll('img.svg-inject');
    // Do the injection
    SVGInjector(svgsToInject);

    // Hamburger menu toggle
    const hamburgerToggle = document.getElementById('hamburger-menu-toggle');
    if (hamburgerToggle) {
        hamburgerToggle.addEventListener('click', () => {
            const hamburgerMenu = document.getElementsByClassName('nav-hamburger-list')[0];
            if (hamburgerMenu) {
                hamburgerMenu.classList.toggle('visibility-hidden');
            }
        });
    }
}

// Header shadow on scroll
window.addEventListener('scroll', () => {
    const scrollThreshold = window.innerWidth <= 820 ? 50 : 100;
    const headers = document.querySelectorAll('.header');
    
    if (window.scrollY > scrollThreshold) {
        headers.forEach(header => header.classList.add('header-shadow'));
    } else {
        headers.forEach(header => header.classList.remove('header-shadow'));
    }
});
