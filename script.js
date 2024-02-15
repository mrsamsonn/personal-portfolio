const toggleCheckbox = document.getElementById('Toggle3');
const techySection = document.getElementById('techySection');
const nonTechySection = document.getElementById('nonTechySection');

toggleCheckbox.addEventListener('change', function() {
    if (this.checked) {
        nonTechySection.classList.remove('hidden');
        techySection.classList.add('hidden');
    } else {
        nonTechySection.classList.add('hidden');
        techySection.classList.remove('hidden');
    }
});

function scrollToTarget(elementId) {
    var element = document.getElementById(elementId);
    var offset = element.getBoundingClientRect().top + window.pageYOffset - 100;
    window.scrollTo({ top: offset, behavior: "smooth" });
}

window.addEventListener('scroll', function() {
    var fixedNavbar = document.getElementById('fixedNavbar');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 300) {
        // Remove hidden class and add transition and opacity classes for fade-in effect
        fixedNavbar.classList.remove('hidden', 'opacity-0', 'transition-opacity', 'duration-300');
        fixedNavbar.classList.add('opacity-100', 'duration-1000'); // Adjust duration as needed
    } else {
        // Add hidden class and transition and opacity classes for fade-out effect
        fixedNavbar.classList.add('opacity-0', 'transition-opacity', 'duration-1000'); // Adjust duration as needed
        fixedNavbar.classList.remove('opacity-100', 'duration-300');
    }
});


