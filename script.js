function animateProgressBars() {
    const progressBars = document.querySelectorAll(".progress-bar");

    progressBars.forEach(bar => {
        const targetWidth = bar.getAttribute("data-skill");
        bar.style.width = targetWidth + "%";
    });
}

// Run animation when the page loads
window.addEventListener("load", animateProgressBars);
function updateClock() {
    const clockElement = document.getElementById("live-clock");
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Format time to always have two digits
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call to display the clock immediately

document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    // Check if the user has a saved theme preference
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }

    // Toggle theme on button click
    themeToggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        // Save theme preference
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    // Dynamic Greeting Based on Time of Day
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
});
