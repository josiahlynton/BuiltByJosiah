
document.addEventListener("DOMContentLoaded", function () {
    // MOBILE NAVIGATION
    const menuToggle = document.getElementById("menu-toggle");
    const navigation = document.getElementById("main-navigation");

    if (menuToggle && navigation) {
        menuToggle.addEventListener("click", function () {
            navigation.classList.toggle("active");

            const isOpen = navigation.classList.contains("active");

            menuToggle.setAttribute("aria-expanded", isOpen);
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );

            menuToggle.textContent = isOpen ? "✕" : "☰";
        });

        navigation.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navigation.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Open navigation menu");
                menuToggle.textContent = "☰";
            });
        });
    }

    // CONTACT FORM
    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function () {
            const submitButton = contactForm.querySelector(
                'button[type="submit"], input[type="submit"]'
            );

            if (submitButton) {
                submitButton.disabled = true;

                if (submitButton.tagName === "BUTTON") {
                    submitButton.textContent = "Sending...";
                } else {
                    submitButton.value = "Sending...";
                }
            }
        });
    }

    // BACK BUTTONS
    const backNavigation = document.createElement("div");
    backNavigation.className = "back-navigation";

    const backButton = document.createElement("button");
    backButton.type = "button";
    backButton.className = "back-button";
    backButton.textContent = "← Back";

    backButton.addEventListener("click", function () {
        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.location.href = "/";
        }
    });

    backNavigation.appendChild(backButton);

    // BACK TO PORTFOLIO BUTTON ON DEMO PROJECT PAGES
    const isProjectPage = window.location.pathname.includes("/projects/");

    if (isProjectPage) {
        const portfolioButton = document.createElement("a");
        portfolioButton.className = "back-portfolio-button";
        portfolioButton.href = "../index.html#portfolio";
        portfolioButton.textContent = "Back to Portfolio";

        backNavigation.appendChild(portfolioButton);
    }

    document.body.prepend(backNavigation);
});
