// Dynamic Greeting Based on Time of Day
function updateGreeting() {
    const greetingElement = document.getElementById("greeting");
    const hour = new Date().getHours();
    let greeting;
    if (hour < 12) {
        greeting = "Good morning!";
    } else if (hour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }
    greetingElement.textContent = greeting;
}
updateGreeting();

// Form Validation
document.getElementById("contact-form").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        event.preventDefault();
    } else if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    // Check and apply saved theme
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }

    // Toggle theme on button click
    themeToggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        // Save user preference
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
});

