const toggleCheckbox = document.getElementById('Toggle3');
const techySection = document.getElementById('techySection');
const nonTechySection = document.getElementById('nonTechySection');

var navbar = document.getElementById('navbar');
var navbarWidth = navbar.offsetWidth;
var isCentered = false;

// Store the list of sections and their corresponding buttons
var sections = [
    { id: 'intro', label: 'John' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
];

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
    var breadcrumbList = document.getElementById('breadcrumbList');
    breadcrumbList.innerHTML = ''; // Clear the breadcrumb list
    var scrollPosition = window.scrollY;

    if (scrollPosition > 500) {
        fixedNavbar.classList.remove('opacity-0', 'transition-opacity', 'duration-300');
        fixedNavbar.classList.add('opacity-100', 'duration-1000');
    } else {
        fixedNavbar.classList.add('opacity-0', 'transition-opacity', 'duration-1000');
        fixedNavbar.classList.remove('opacity-100', 'duration-300');
    }

    if (window.scrollY > 0) {
        // Add background and text color
        navbar.classList.add('bg-black', 'text-white', 'text-xs');
        navbar.classList.remove('mr-5','mt-5');
        if (!isCentered) {
                // Move the navbar to the center
                // navbar.style.right = 'calc(50% - ' + (navbarWidth / 2) + 'px)';
                // navbar.style.right = 0;
                isCentered = true;
            }
        } else {
            // Remove background and text color
            navbar.classList.remove('bg-black', 'text-white', 'text-xs');
            navbar.classList.add('mr-5','mt-5');
            // Move the navbar back to the right
            navbar.style.right = '0';
            isCentered = false;
        }

    // Loop through sections and add buttons dynamically based on scroll position
    for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var sectionElement = document.getElementById(section.id);
        var button = document.createElement('button');
        button.innerText = section.label;
        button.classList.add('nav-link');

        // Add event listener to scroll to the section on button click
        button.addEventListener('click', function(sectionId) {
            return function() {
                scrollToTarget(sectionId);
            };
        }(section.id));

        // Check if the section is currently visible in the viewport
        if (sectionElement.getBoundingClientRect().top + window.scrollY <= scrollPosition + 100) {
            // Add the button to the breadcrumb list
            var listItem = document.createElement('li');
            listItem.appendChild(button);
            breadcrumbList.appendChild(listItem);
        }
    }
});

// Add an event listener to each collapse content to detect when it expands
document.querySelectorAll('.collapse').forEach(function(collapseContent) {
    collapseContent.addEventListener('change', function() {
        // Check if the collapse content is expanded
        if (this.querySelector('input[type="checkbox"]').checked) {
            // Add Tailwind classes to move the projects section downward
            document.getElementById('projects').classList.add('translate-y-full');
            document.getElementById('contact').classList.add('translate-y-full');
        } else {
            // Remove Tailwind classes if the collapse content is collapsed again
            document.getElementById('projects').classList.remove('translate-y-full');
            document.getElementById('contact').classList.remove('translate-y-full');
        }
    });
});

// const cursorDot = document.querySelector(".cursor-dot");
// // const cursorOutline = document.querySelector(".cursor-outline");

// window.addEventListener("mousemove", function(e) {
//     const posX = e.clientX;
//     const posY = e.clientY;

//     cursorDot.style.transform = `translate(${posX}px, ${posY}px)`;
//     // cursorOutline.style.transform = `translate(${posX}px, ${posY}px)`;
// });

const cursorDot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", function(e) {
    const dotSize = 0; // Adjust this value if needed
    const halfDotSize = dotSize / 2;

    const posX = e.clientX - halfDotSize;
    const posY = e.clientY - halfDotSize; // Adjust this value based on the margin

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
});

// Get all video elements
const videos = document.querySelectorAll('.video-hover');

// Loop through each video element
videos.forEach(video => {
    // Add event listener for mouseenter event
    video.addEventListener('mouseenter', function() {
        // Set the opacity of the cursor dot to 100
        cursorDot.style.opacity = '100';
    });

    // Add event listener for mouseleave event
    video.addEventListener('mouseleave', function() {
        // Set the opacity of the cursor dot to 0
        cursorDot.style.opacity = '0';
    });
});

