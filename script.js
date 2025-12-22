document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm) {
        contactForm.addEventListener("submit", async function(event) {
            event.preventDefault();

            const data = new FormData(contactForm);

            try {
                const response = await fetch("https://formspree.io/f/xrezaaew", {
                    method: "POST",
                    body: data,
                    headers: { "Accept": "application/json" }
                });

                if (response.ok) {
                    formMessage.style.color = "green";
                    formMessage.textContent = `Thank you ${document.getElementById("name").value}! Your message has been sent.`;
                    contactForm.reset();
                } else {
                    formMessage.style.color = "red";
                    formMessage.textContent = "Oops! Something went wrong. Please try again.";
                }
            } catch (error) {
                formMessage.style.color = "red";
                formMessage.textContent = "Network error. Please try again later.";
            }
        });
    }

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

// Dynamic Footer Year
const yearElement = document.querySelector("footer #currentYear");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
};
