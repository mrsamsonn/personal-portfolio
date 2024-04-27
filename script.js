var navbar = document.getElementById('navbar');
var themeDiv = document.getElementById('theme-div');
var svgScroll = document.getElementById('svgScrolldown');
var navbarWidth = navbar.offsetWidth;
var isCentered = false;
var isOpened = false;

// -----------Emailjs config.js-------------
const emailjsServiceId = config.emailjs.serviceId;
const emailjsTemplateId = config.emailjs.templateId;
const emailjsPublicKey = config.emailjs.publicKey;

 // Emailjs initialization
 (function(){
    emailjs.init({
        publicKey: emailjsPublicKey,
    });
})();

// ------------------------

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

// ----- Chat Function --------

document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.querySelector(".btn-outline");
    const inputField = document.querySelector("#email-input");
    const chatArea = document.querySelector("#chat-area");
    // let notReplied = false;

    // Variables to temporarily store input
    let Email = "";
    let Message = "";
    let Name = "";

    // Function to get the current time in HH:MM format
    function getCurrentTime() {
        const currentTime = new Date();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    }

    // Emailjs Function
    function sendMail(){
        let parms = {
            name : Name,
            email : Email,
            message : Message,
        }
        emailjs.send(emailjsServiceId, emailjsTemplateId, parms);
    }

    const RequestName = function() {
        if (!Name && !Email && !Message) {

            // Store the email
            Name = inputField.value;

            // Create user's chat bubble
            const userChatBubble = document.createElement("div");
            userChatBubble.classList.add("chat", "chat-end"); // Add chat-end class for positioning
            userChatBubble.innerHTML = `
                <div class="chat-image avatar">
                    <div class="w-10 rounded-full">
                        <img alt="User's avatar" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div class="chat-header">
                    You
                    <time class="text-xs opacity-50">${getCurrentTime()}</time>
                </div>
                <div class="chat-bubble">${Name}</div>
                <div class="chat-footer opacity-50">
                    Sent at ${getCurrentTime()}
                </div>
            `;
            // Insert the user's chat bubble at the end of the chat area
            chatArea.appendChild(userChatBubble);
            scrollToBottom();
            
            // Clear input field
            inputField.value = "";

            // Reply back after a short delay
            setTimeout(() => {
                // Create system's reply chat bubble
                const systemReplyBubble = document.createElement("div");
                systemReplyBubble.classList.add("chat", "chat-start"); // Add chat-start class for positioning
                systemReplyBubble.innerHTML = `
                    <div class="chat-image avatar">
                        <div class="w-10 rounded-full">
                            <img alt="System's avatar" src="static/myPhoto.jpg" />
                        </div>
                    </div>
                    <div class="chat-header">
                        John
                        <time class="text-xs opacity-50">${getCurrentTime()}</time>
                    </div>
                    <div class="chat-bubble">Hi ${Name}, what's your email so we can keep in touch!</div>
                    <div class="chat-footer opacity-50">
                        Delivered
                    </div>
                `;
                // Insert the system's reply chat bubble after the user's chat bubble
                chatArea.appendChild(systemReplyBubble);
                scrollToBottom();

            }, 1000); // Delay of 1000 milliseconds (1 second)

            // notReplied = true;
        } else {
            console.log("No reply state found");
        }
    };


    const RequestEmail = function() {
        const email = inputField.value.trim();

        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (emailRegex.test(email) && Name && !Message) {

            // Store the email
            Email = inputField.value;

            // Create user's chat bubble
            const userChatBubble = document.createElement("div");
            userChatBubble.classList.add("chat", "chat-end"); // Add chat-end class for positioning
            userChatBubble.innerHTML = `
                <div class="chat-image avatar">
                    <div class="w-10 rounded-full">
                        <img alt="User's avatar" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div class="chat-header">
                    You
                    <time class="text-xs opacity-50">${getCurrentTime()}</time>
                </div>
                <div class="chat-bubble">${email}</div>
                <div class="chat-footer opacity-50">
                    Sent at ${getCurrentTime()}
                </div>
            `;
            // Insert the user's chat bubble at the end of the chat area
            chatArea.appendChild(userChatBubble);
            scrollToBottom();
            
            // Clear input field
            inputField.value = "";

            // Reply back after a short delay
            setTimeout(() => {
                // Create system's reply chat bubble
                const systemReplyBubble = document.createElement("div");
                systemReplyBubble.classList.add("chat", "chat-start"); // Add chat-start class for positioning
                systemReplyBubble.innerHTML = `
                    <div id="message-reply" class="chat-image avatar">
                        <div class="w-10 rounded-full">
                            <img alt="System's avatar" src="static/myPhoto.jpg" />
                        </div>
                    </div>
                    <div class="chat-header">
                        John
                        <time class="text-xs opacity-50">${getCurrentTime()}</time>
                    </div>
                    <div class="chat-bubble">Awesome! What would you like to say?</div>
                    <div class="chat-footer opacity-50">
                        Delivered
                    </div>
                `;
                // Insert the system's reply chat bubble after the user's chat bubble
                chatArea.appendChild(systemReplyBubble);
                scrollToBottom();

            }, 1000); // Delay of 1000 milliseconds (1 second)

            // notReplied = true;
        } else {
            // Create user's chat bubble RETURNING INVALID EMAIL
            const userChatBubble = document.createElement("div");
            userChatBubble.classList.add("chat", "chat-end"); // Add chat-end class for positioning
            userChatBubble.innerHTML = `
                <div class="chat-image avatar">
                    <div class="w-10 rounded-full">
                        <img alt="User's avatar" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div class="chat-header">
                    You
                    <time class="text-xs opacity-50">${getCurrentTime()}</time>
                </div>
                <div class="chat-bubble">${email}</div>
                <div class="chat-footer opacity-50">
                    Sent at ${getCurrentTime()}
                </div>
            `;
            // Insert the user's chat bubble at the end of the chat area
            chatArea.appendChild(userChatBubble);
            scrollToBottom();

            // Clear input field
            inputField.value = "";

            // Reply back after a short delay
            setTimeout(() => {
                // Create system's reply chat bubble
                const systemReplyBubble = document.createElement("div");
                systemReplyBubble.classList.add("chat", "chat-start"); // Add chat-start class for positioning
                systemReplyBubble.innerHTML = `
                    <div class="chat-image avatar">
                        <div class="w-10 rounded-full">
                            <img alt="System's avatar" src="static/myPhoto.jpg" />
                        </div>
                    </div>
                    <div class="chat-header">
                        John
                        <time class="text-xs opacity-50">${getCurrentTime()}</time>
                    </div>
                    <div class="chat-bubble">Sorry ${Name}, unfortunately the email you sent was invalid, 
                    can you send a valid email?</div>
                    <div class="chat-footer opacity-50">
                        Delivered
                    </div>
                `;
                // Insert the system's reply chat bubble after the user's chat bubble
                chatArea.appendChild(systemReplyBubble);
                scrollToBottom();
            }, 1000); // Delay of 1000 milliseconds (1 second)
        }
    };

    const RequestMessage = function() {
        // Check if the chat element with id "message-reply" exists
        if (document.querySelector("#message-reply") && Email && Name) {
            // Store the email
            Message = inputField.value;
            
            // Create user's chat bubble
            const userChatBubble = document.createElement("div");
            userChatBubble.classList.add("chat", "chat-end"); // Add chat-end class for positioning
            userChatBubble.innerHTML = `
                <div class="chat-image avatar">
                    <div class="w-10 rounded-full">
                        <img alt="User's avatar" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div class="chat-header">
                    You
                    <time class="text-xs opacity-50">${getCurrentTime()}</time>
                </div>
                <div class="chat-bubble">${inputField.value}</div>
                <div class="chat-footer opacity-50">
                    Sent at ${getCurrentTime()}
                </div>
            `;
            // Insert the user's chat bubble at the end of the chat area
            chatArea.appendChild(userChatBubble);
            scrollToBottom();
            
            // Clear input field
            inputField.value = "";

            // Reply back after a short delay
            setTimeout(() => {
                // Create system's reply chat bubble
                const systemReplyBubble = document.createElement("div");
                systemReplyBubble.classList.add("chat", "chat-start"); // Add chat-start class for positioning
                systemReplyBubble.innerHTML = `
                    <div class="chat-image avatar">
                        <div class="w-10 rounded-full">
                            <img alt="System's avatar" src="static/myPhoto.jpg" />
                        </div>
                    </div>
                    <div class="chat-header">
                        John
                        <time class="text-xs opacity-50">${getCurrentTime()}</time>
                    </div>
                    <div class="chat-bubble">Thanks, I'll get back to you as soon as possible!</div>
                    <div class="chat-footer opacity-50">
                        Delivered
                    </div>
                `;
                // Insert the system's reply chat bubble after the user's chat bubble
                chatArea.appendChild(systemReplyBubble);
                scrollToBottom();

            }, 1000); // Delay of 1000 milliseconds (1 second)
        } else {
            // Handle if there's no reply state
            console.log("No reply state found");
        }
    };

    // Event listener for the "Send" button click
    sendButton.addEventListener("click", function(event) {
        if (document.querySelector("#message-reply") && Email && Name) {
            RequestMessage();
            sendMail();
        } else if (!Message && !Email && Name){
            RequestEmail();
        }else{
            RequestName();
        }
    });

    // Event listener for the "Enter" key press in the input field
    inputField.addEventListener("keypress", function(event) {
        // Check if the pressed key is the "Enter" key (key code 13)
        if (event.keyCode === 13) {
            if (document.querySelector("#message-reply") && Email && Name) {
                // Prevent the default behavior (new line insertion)
                event.preventDefault();
                // Scroll the textarea to the top
                this.scrollTop = 0;
                RequestMessage();
                sendMail();
                Email="";
                Message="";
            } else if(!Message && !Email && Name) {
                // Prevent the default behavior (new line insertion)
                event.preventDefault();
                // Scroll the textarea to the top
                this.scrollTop = 0;
                RequestEmail();
            }else{
                // Prevent the default behavior (new line insertion)
                event.preventDefault();
                // Scroll the textarea to the top
                this.scrollTop = 0;
                RequestName();
            }
        }
    });
});




// --time
// Function to get the current time and display it with AM or PM
function getCurrentTime() {
    // Get the current time
    const currentTime = new Date();
    
    // Extract hours and minutes
    let hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    
    // Determine if it's AM or PM
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert hours to 12-hour format
    hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour clock
    
    // Format hours and minutes
    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${amOrPm}`; // Add leading zero if minutes is single digit
    
    // Update the content of the HTML element with the formatted time
    document.getElementById("current-time").textContent = formattedTime;
}

// Call getCurrentTime function when DOM content is loaded
document.addEventListener("DOMContentLoaded", getCurrentTime);

// Function to scroll to the bottom of the chat area
function scrollToBottom() {
    const chatArea = document.getElementById("chat-area");
    chatArea.scrollTop = chatArea.scrollHeight;
}

// ----------------------------------


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
        showResume();
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


function showResume() {
    hideContent("resumeContainer");
    var resumeContainer = document.getElementById("resumeContainer");
    resumeContainer.classList.toggle('hidden');
}

function showWaymo() {
    hideContent("waymoContainer");
    var waymoContainer = document.getElementById("waymoContainer");
    waymoContainer.classList.toggle('hidden');
}