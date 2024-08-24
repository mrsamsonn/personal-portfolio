// -----------Emailjs config.js-------------
const emailjsServiceId = process.env.SERVICEID;
const emailjsTemplateId = process.env.TEMPLATEID;
const emailjsPublicKey = process.env.PUBLICKEY;

 // Emailjs initialization
 (function(){
    emailjs.init({
        publicKey: emailjsPublicKey,
    });
})();

// ------------------------

// ----- Chat Function --------

// scroll up when textarea is deselected in iphone
if(window.innerWidth < 430){
    document.getElementById('email-input').addEventListener('blur', function() {
        // Scroll the textarea back to the top
        this.scrollTop = 0;
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.querySelector(".btn-outline");
    const inputField = document.querySelector("#email-input");
    const chatArea = document.querySelector("#chat-area");
    let notReplied = false;

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
                        <img alt="User's avatar" src="static/avatar.png" />
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

            notReplied = true;
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
                        <img alt="User's avatar" src="static/avatar.png" />
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

            notReplied = true;
        } else {
            // Create user's chat bubble RETURNING INVALID EMAIL
            const userChatBubble = document.createElement("div");
            userChatBubble.classList.add("chat", "chat-end"); // Add chat-end class for positioning
            userChatBubble.innerHTML = `
                <div class="chat-image avatar">
                    <div class="w-10 rounded-full">
                        <img alt="User's avatar" src="static/avatar.png" />
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
                        <img alt="User's avatar" src="static/avatar.png" />
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
