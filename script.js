document.addEventListener("DOMContentLoaded", () => {
    // Theme Toggle
    const themeToggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        themeToggleBtn.textContent = "🌙";
    }

    themeToggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            themeToggleBtn.textContent = "🌙";
            localStorage.setItem("theme", "dark");
        } else {
            themeToggleBtn.textContent = "☀️";
            localStorage.setItem("theme", "light");
        }
    });

    // Live Clock
    function updateClock() {
        const clockElement = document.getElementById("live-clock");
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
        document.getElementById("current-time").textContent = `${hours}:${minutes}:${seconds}`;
    }

    setInterval(updateClock, 1000);
    updateClock();

    // Dynamic Greeting
    const greetingElement = document.getElementById("greeting");
    const hour = new Date().getHours();
    let greeting = hour < 12 ? "Good morning!" : hour < 18 ? "Good afternoon!" : "Good evening!";
    greetingElement.textContent = greeting;

    // Progress Bar Animation
    function animateProgressBars() {
        const progressBars = document.querySelectorAll(".progress-bar");
        progressBars.forEach(bar => {
            const targetWidth = bar.getAttribute("data-skill");
            bar.style.width = targetWidth + "%";
        });
    }

    animateProgressBars();

    // Contact Form Validation
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            event.preventDefault();
        } else if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            event.preventDefault();
        }
    });

    // Smooth Scrolling (This is the important part)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
