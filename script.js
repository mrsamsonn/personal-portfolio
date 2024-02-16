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
    var offset = element.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: offset, behavior: "smooth" });
}

window.addEventListener('scroll', function() {
    var fixedNavbar = document.getElementById('fixedNavbar');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 500) {
        fixedNavbar.classList.remove('opacity-0', 'transition-opacity', 'duration-300');
        fixedNavbar.classList.add('opacity-100', 'duration-1000');
    } else {
        fixedNavbar.classList.add('opacity-0', 'transition-opacity', 'duration-1000');
        fixedNavbar.classList.remove('opacity-100', 'duration-300');
    }
});


