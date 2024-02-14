const toggleCheckbox = document.getElementById('Toggle3');
        const techySection = document.getElementById('techySection');
        const nonTechySection = document.getElementById('nonTechySection');

        toggleCheckbox.addEventListener('change', function() {
            if (this.checked) {
                // Show techy side and hide non-techy side
                techySection.classList.remove('hidden');
                nonTechySection.classList.add('hidden');
            } else {
                // Show non-techy side and hide techy side
                techySection.classList.add('hidden');
                nonTechySection.classList.remove('hidden');
            }
        });