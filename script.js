document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    if (form) { 
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Your form has been sent successfully!");
            this.reset();
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const bars = document.querySelector(".menu-btn"); 
    const menu = document.querySelector(".menu-ul");

    bars.addEventListener("click", function () {
        menu.classList.toggle("active");  
    });
    window.addEventListener("resize", function () {
        if (window.innerWidth > 800) { 
            menu.classList.remove("active");  
        }
    });
});