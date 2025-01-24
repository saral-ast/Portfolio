

// active navLinks using window.scroll and offsetTOp

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.onscroll = () => {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 80) {
            currentSection =  section.getAttribute("id");
        }
        // console.log(currentSection);
    });

    navLinks.forEach((link) => {
        // console.log(link.classList);
        link.classList.remove("active");
        if (link.classList.contains(currentSection)) {
            // console.log(link.classList);
            link.classList.add("active");
        }
    });
};

document.getElementById("contact").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");
    let valid = true;
    // Clear existing error messages
    document.querySelectorAll(".error").forEach((el) => el.remove());
    // Validate Name
    if (name.value.trim() === "") {
        showError(name, "Name is required : ");
        valid = false;
    }
    // Validate Email
    if (email.value.trim() === "") {
        showError(email, "Email is required : ");
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        showError(email, "Enter a valid email");
        valid = false;
    }
    // Validate Message
    if (message.value.trim() === "") {
        showError(message, "Message is required :");
        valid = false;
    }
    if (valid) {
        showNotification("Form submitted successfully!", "success");
        e.target.reset();
    }
});
// Function to show error messages
function showError(input, message) {
    const error = document.createElement("small");
    error.classList.add("error");
    error.textContent = message;
    input.parentElement.appendChild(error);
}
// Notifications
function showNotification(message, type) {
    const notification = document.createElement("div");
    notification.textContent = message;
    notification.style.position = "fixed";
    notification.style.bottom = "20px";
    notification.style.right = "20px";
    notification.style.padding = "10px";
    notification.style.color = "#fff";
    notification.style.backgroundColor = type === "success" ? "#28a745" : "#dc3545";
    notification.style.borderRadius = "5px";
    notification.style.zIndex = "1000";
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

