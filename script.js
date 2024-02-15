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
        fixedNavbar.classList.remove('hidden');
        fixedNavbar.classList.add('flex');
    } else {
        fixedNavbar.classList.remove('flex');
        fixedNavbar.classList.add('hidden');
    }
});


