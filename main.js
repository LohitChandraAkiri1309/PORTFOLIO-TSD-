// Get the Contact Me button
let contactButton = document.getElementById("contactBtn");

// When the button is clicked
if (contactButton) {
    contactButton.addEventListener("click", function() {
        // Move to Contact section
        document.getElementById("contact").scrollIntoView({
            behavior: "smooth"
        });
    });
}

// Contact Form Handling
let contactForm = document.getElementById("contactForm");
let formStatus = document.getElementById("formStatus");

if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let city = document.getElementById("city").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name && phone && city && message) {
            formStatus.className = "form-status success";
            formStatus.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
            contactForm.reset();

            setTimeout(function() {
                formStatus.style.display = "none";
                formStatus.className = "form-status";
            }, 5000);
        }
    });
}