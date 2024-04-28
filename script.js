var navbar = document.getElementById('navbar');
var themeDiv = document.getElementById('theme-div');
var svgScroll = document.getElementById('svgScrolldown');
var navbarWidth = navbar.offsetWidth;
var isCentered = false;
var isOpened = false;

// Store the list of sections and their corresponding buttons
var sections = [
    { id: 'intro', label: 'John' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
];

//Reveal Contact Chat
const introSection = document.getElementById('intro-title');
const contactButton = document.getElementById('contactButton');
const contactButtonNav = document.getElementById('contactButton-nav');
const closeChat = document.getElementById('close-chat');
const contactInput = document.getElementById('contact-input');
const chatStart = document.getElementById('init-chat');

function toggleContactText() {
    // Check if the opacity of the contact input div is 100
    const computedStyle = window.getComputedStyle(contactInput);
    const opacity = computedStyle.getPropertyValue('opacity');

    if (opacity === '1') {
        contactButton.textContent = 'Contact';
        contactButtonNav.textContent = 'Contact';
    } else {
        contactButton.textContent = 'X';
        // Do not change the text content of contactButtonNav
    }
}

contactButton.addEventListener('click', function() {
    // Toggle the CSS class to move the intro section to the left
    introSection.classList.toggle('-translate-x-2/3');
    contactInput.classList.toggle('z-10');
    contactInput.classList.toggle('opacity-100');
    
     if(!isOpened){
        // Delay the toggle of chatStart by 350 milliseconds (for example)
     setTimeout(function() {
        // Add opacity
        chatStart.classList.toggle('opacity-100');

        // Add translate-x with bounce effect
        chatStart.style.transition = 'transform 0.5s ease-in-out';
        chatStart.style.transform = 'translateX(-10px)';

        // Remove translate-x and bounce effect after a short delay
        setTimeout(function() {
            chatStart.style.transition = 'transform 0.5s ease-in-out';
            chatStart.style.transform = 'translateX(0)';
        }, 500); // Adjust timing if necessary
    }, 350); // Adjust timing if necessary
    isOpened = true;
     }


    // Toggle contact buttons' text content
    toggleContactText();
});

contactButtonNav.addEventListener('click', function() {
    // Toggle the CSS class to move the intro section to the left
    introSection.classList.toggle('-translate-x-2/3');
    contactInput.classList.toggle('z-10');
    contactInput.classList.toggle('opacity-100');
    
     if(!isOpened){
        // Delay the toggle of chatStart by 350 milliseconds (for example)
     setTimeout(function() {
        // Add opacity
        chatStart.classList.toggle('opacity-100');

        // Add translate-x with bounce effect
        chatStart.style.transition = 'transform 0.5s ease-in-out';
        chatStart.style.transform = 'translateX(-10px)';

        // Remove translate-x and bounce effect after a short delay
        setTimeout(function() {
            chatStart.style.transition = 'transform 0.5s ease-in-out';
            chatStart.style.transform = 'translateX(0)';
        }, 500); // Adjust timing if necessary
    }, 350); // Adjust timing if necessary
    isOpened = true;
     }


    // Toggle contact buttons' text content
    toggleContactText();
});

closeChat.addEventListener('click', function() {
    // Toggle the CSS class to move the intro section to the left
    introSection.classList.toggle('-translate-x-2/3');
    contactInput.classList.toggle('z-10');
    contactInput.classList.toggle('opacity-100');
    
     if(!isOpened){
        // Delay the toggle of chatStart by 350 milliseconds (for example)
     setTimeout(function() {
        // Add opacity
        chatStart.classList.toggle('opacity-100');

        // Add translate-x with bounce effect
        chatStart.style.transition = 'transform 0.5s ease-in-out';
        chatStart.style.transform = 'translateX(-10px)';

        // Remove translate-x and bounce effect after a short delay
        setTimeout(function() {
            chatStart.style.transition = 'transform 0.5s ease-in-out';
            chatStart.style.transform = 'translateX(0)';
        }, 500); // Adjust timing if necessary
    }, 350); // Adjust timing if necessary
    isOpened = true;
     }


    // Toggle contact buttons' text content
    toggleContactText();
});

// --------------------------------------



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


// ------ Nav Bar -----
    if (window.scrollY > 0) {
        // Add background and text color
        navbar.classList.add('bg-black', 'text-white', 'text-xs');
        navbar.classList.remove('mr-5','mt-5');
        themeDiv.classList.add('p-3');
        themeDiv.classList.remove('p-5');
        svgScroll.classList.add('opacity-0');
        svgScroll.classList.remove('opacity-100');
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
            themeDiv.classList.remove('p-3');
            themeDiv.classList.add('p-5');
            svgScroll.classList.remove('opacity-0');
        svgScroll.classList.add('opacity-100');
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
const project = document.querySelectorAll('.project-hover');

// Loop through each video element
project.forEach(project => {
    // Add event listener for mouseenter event
    project.addEventListener('mouseenter', function() {
        // Get the text from the data attribute
        const text = project.getAttribute('data-hover-text');
        // Set the text of the cursor dot
        cursorDot.textContent = text;

        // Set the opacity of the cursor dot to 100
        cursorDot.style.opacity = '100';
    });

    // Add event listener for mouseleave event
    project.addEventListener('mouseleave', function() {
        // Set the opacity of the cursor dot to 0
        cursorDot.style.opacity = '0';

    });
});

// ------- Resume Button ----------
function scrollToAboutAndShowResume() {
    // Scroll to the "about" section
    document.getElementById("about").scrollIntoView({ behavior: 'smooth' });

    // Check if the PDF container is hidden, then show it
    var resumeContainer = document.getElementById("resumeContainer");
    if (resumeContainer.classList.contains("hidden")) {
        showContent('resumeContainer');
    }
}

// ------WindowMenu----------

// check if anything is unhidden
function hideContent(idToShow) {
    var windowContent = document.getElementById("windowContent");
    var elements = windowContent.getElementsByClassName("theContent");

    // Hide all visible content except the one specified by idToShow
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].id !== idToShow && !elements[i].classList.contains('hidden')) {
            elements[i].classList.add('hidden');
        }
    }
}

function showContent(idToShow) {
    hideContent(idToShow); // Hide other content
    var container = document.getElementById(idToShow);
    container.classList.toggle('hidden');
}