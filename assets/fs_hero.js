console.log('hero.js loaded');

function debounce(func, delay) {
    let timeoutId;
    return function () {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, arguments), delay);
    };
}

// Load images function
function loadImages() {
    const desktopImage = document.querySelector('.desktop-image');
    const mobileImage = document.querySelector('.mobile-image');
    const screenWidth = window.innerWidth;

    if (screenWidth > 768) {
        // Load desktop image
        desktopImage.src = desktopImage.getAttribute('data-src');
        mobileImage.style.display = 'none'; // Hide mobile image
    } else {
        // Load mobile image
        mobileImage.src = mobileImage.getAttribute('data-src');
        desktopImage.style.display = 'none'; // Hide desktop image
    }
}

// Debounced resize event listener
// window.addEventListener('resize', debounce(loadImages, 200));

// Initial load
// loadImages();