const toggleCheckbox = document.getElementById('Toggle3');
const techySection = document.getElementById('techySection');
const nonTechySection = document.getElementById('nonTechySection');

toggleCheckbox.addEventListener('change', function() {
    if (this.checked) {
        // Show techy side and hide non-techy side
        nonTechySection.classList.remove('hidden');
        techySection.classList.add('hidden');
    } else {
        // Show non-techy side and hide techy side
        nonTechySection.classList.add('hidden');
        techySection.classList.remove('hidden');
    }
});

function scrollToTarget(elementId) {
    var element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    element.style.marginTop = '100px';
}
