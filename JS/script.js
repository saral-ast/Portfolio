// Handle active nav links on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".hidden a");
const h1 = document.getElementById("header-h1");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 80; // Offset for header height
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.classList.contains(currentSection)) {
            link.classList.add("active");
        }
    });
});

// Contact form validation
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
        showError(name, "Name is required.");
        valid = false;
    }

    // Validate Email
    if (email.value.trim() === "") {
        showError(email, "Email is required.");
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        showError(email, "Enter a valid email.");
        valid = false;
    }

    // Validate Message
    if (message.value.trim() === "") {
        showError(message, "Message is required.");
        valid = false;
    }

    // Show notification if valid
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

// Toggle mobile menu with smooth animation
const toggleButton = document.querySelector(".fa-bars");
const cancelButton = document.querySelector(".fa-x");
const navMenu = document.querySelector(".hidden");

toggleButton.addEventListener("click", () => {
    navMenu.classList.add("open");
    navMenu.style.display = "grid"; // Set display to grid
    navMenu.style.gridTemplateColumns = "repeat(3, 1fr)"; // 3-column grid
    navMenu.style.animation = "fadeIn 0.5s ease-in-out";
    
    toggleButton.style.display = "none"; // Hide menu icon
    cancelButton.style.display = "block"; // Show close icon
    h1.style.display = "none";
     // Hide h1 while menu is open
});

cancelButton.addEventListener("click", () => {
    navMenu.classList.remove("open");
    navMenu.style.display = "none";
    toggleButton.style.display = "block"; // Show menu icon
    cancelButton.style.display = "none"; // Hide close icon
    h1.style.display = "block"; // Show h1 again when menu is closed
});

// Close menu on link click
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if(navMenu.classList.contains("open")) {
            console.log("link clicked");
            navMenu.classList.remove("open");
            navMenu.style.display = "none";
            cancelButton.style.display = "none";
            toggleButton.style.display = "block";
            h1.style.display = "block"; // Show h1 when menu is closed
        }
    });
});
