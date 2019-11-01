// Detecting the orientation of the support logo
function dynamicFooterLogoOrientation() {
    const logoContainers = document.querySelectorAll('.js-dynamic-footer');

    logoContainers.forEach(container => {
        const logo = container.querySelector('.js-support-logo');
        if (logo === null) return;
        logo.addEventListener('load', dynamicFooterLogoOrientation);
        if (logo.offsetWidth == 0) return;
        if (logo.offsetWidth < logo.offsetHeight) {
            container.classList.add('has-portrait-support-logo');
        }
    });
}

dynamicFooterLogoOrientation();