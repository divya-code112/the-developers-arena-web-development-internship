// ============================================================
// WEEK 3 - INTERACTIVE PORTFOLIO
// Vanilla JavaScript
// ============================================================

"use strict";

// ============================================================
// 1. DOM ELEMENTS
// ============================================================

const body = document.body;
const nav = document.querySelector("nav");
const form = document.querySelector("#contact form");

const nameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const skillsSection = document.getElementById("skills");

// ============================================================
// 2. HELPER FUNCTIONS
// ============================================================

function createElement(tag, className, text = "") {
    const element = document.createElement(tag);

    element.className = className;

    if (text) {
        element.textContent = text;
    }

    return element;
}


// Remove existing validation error
function clearError(input) {
    input.classList.remove("input-error");
    input.classList.remove("input-valid");

    const error = input.parentElement.querySelector(".form-error");

    if (error) {
        error.remove();
    }

    input.removeAttribute("aria-invalid");
    input.removeAttribute("aria-describedby");
}


// Display validation error
function showError(input, message) {
    clearError(input);

    input.classList.add("input-error");

    input.setAttribute("aria-invalid", "true");

    const error = createElement(
        "span",
        "form-error",
        message
    );

    error.id = input.id + "-error";

    input.setAttribute(
        "aria-describedby",
        error.id
    );

    input.parentElement.appendChild(error);
}


// Mark input as valid
function markValid(input) {
    clearError(input);

    input.classList.add("input-valid");
}


// ============================================================
// 3. JAVASCRIPT GENERATED STYLES
// ============================================================

const style = document.createElement("style");

style.textContent = `

/* =========================
   THEME TOGGLE
========================= */

.theme-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    margin-left: 8px;

    padding: 10px 14px;

    border: 1px solid rgba(148, 163, 184, 0.15);

    border-radius: 9px;

    background: rgba(15, 23, 42, 0.75);

    color: #cbd5e1;

    font: inherit;

    font-size: 0.9rem;

    font-weight: 600;

    cursor: pointer;

    transition: 0.3s ease;
}


.theme-toggle:hover {
    color: #ffffff;

    transform: translateY(-2px);

    border-color: rgba(96, 165, 250, 0.35);
}


/* =========================
   LIGHT MODE
========================= */

body.light-mode {
    background: #eef4ff;

    color: #1e293b;
}


body.light-mode header {
    background:
        linear-gradient(
            180deg,
            #ffffff,
            #eef4ff
        );
}


body.light-mode section {
    background: rgba(255, 255, 255, 0.94);

    border-color: rgba(59, 130, 246, 0.18);
}


body.light-mode section h2,
body.light-mode .skill-card h3 {
    color: #172033;
}


body.light-mode section p,
body.light-mode .skill-description {
    color: #475569;
}


body.light-mode .skill-card {
    background:
        linear-gradient(
            145deg,
            #f8fbff,
            #eef4ff
        );
}


body.light-mode .skill-card li {
    background: rgba(255, 255, 255, 0.8);

    color: #334155;
}


body.light-mode input,
body.light-mode textarea {
    background: #ffffff;

    color: #172033;
}


body.light-mode label {
    color: #334155;
}


body.light-mode nav ul {
    background: rgba(255, 255, 255, 0.9);
}


body.light-mode nav a {
    color: #334155;
}


body.light-mode footer {
    background: #e8f0ff;
}


/* =========================
   FORM VALIDATION
========================= */

.form-error {
    display: block;

    margin-top: 6px;

    color: #f87171;

    font-size: 0.8rem;

    line-height: 1.4;
}


.input-error {
    border-color: #ef4444 !important;

    box-shadow:
        0 0 0 3px rgba(239, 68, 68, 0.1)
        !important;
}


.input-valid {
    border-color: #22c55e !important;
}


.form-success {
    margin-top: 18px;

    padding: 12px 15px;

    border:
        1px solid rgba(34, 197, 94, 0.3);

    border-radius: 10px;

    background:
        rgba(34, 197, 94, 0.08);

    color: #4ade80;

    font-size: 0.9rem;

    font-weight: 600;
}


/* =========================
   BACK TO TOP
========================= */

.back-to-top {
    position: fixed;

    right: 24px;

    bottom: 24px;

    z-index: 1000;

    width: 46px;

    height: 46px;

    display: none;

    align-items: center;

    justify-content: center;

    border:
        1px solid rgba(96, 165, 250, 0.3);

    border-radius: 50%;

    background:
        rgba(15, 23, 42, 0.92);

    color: #ffffff;

    font-size: 1.1rem;

    cursor: pointer;

    transition: 0.3s ease;
}


.back-to-top.visible {
    display: flex;
}


.back-to-top:hover {
    transform: translateY(-4px);
}


/* =========================
   INTERACTIVE SKILLS
========================= */

.skill-category-title {
    cursor: pointer;

    user-select: none;
}


.skill-category-title::after {
    content: "  −";

    color: #22d3ee;
}


.skill-card.collapsed
.skill-category-title::after {
    content: "  +";
}


.skill-card.collapsed ul,
.skill-card.collapsed .skill-description {
    display: none;
}


.skill-card.collapsed {
    min-height: auto;
}


/* =========================
   MOBILE
========================= */

@media (max-width: 600px) {

    .theme-toggle {
        margin-left: 0;

        width: 100%;
    }


    .back-to-top {
        right: 16px;

        bottom: 16px;
    }

}

`;

document.head.appendChild(style);


// ============================================================
// 4. FEATURE 1 - DARK / LIGHT MODE
// ============================================================

// Create theme button dynamically

const themeButton = createElement(
    "button",
    "theme-toggle",
    "☀️ Light Mode"
);

themeButton.type = "button";

themeButton.setAttribute(
    "aria-label",
    "Toggle dark and light mode"
);


// Add button to navigation

if (nav) {
    nav.appendChild(themeButton);
}


// Update button text

function updateThemeButton() {

    if (body.classList.contains("light-mode")) {

        themeButton.textContent = "🌙 Dark Mode";

    } else {

        themeButton.textContent = "☀️ Light Mode";

    }
}


// Toggle theme

function toggleTheme() {

    body.classList.toggle("light-mode");

    const theme =
        body.classList.contains("light-mode")
            ? "light"
            : "dark";

    localStorage.setItem(
        "portfolioTheme",
        theme
    );

    updateThemeButton();
}


// Add click event

themeButton.addEventListener(
    "click",
    toggleTheme
);


// Load saved theme

const savedTheme =
    localStorage.getItem("portfolioTheme");


if (savedTheme === "light") {

    body.classList.add("light-mode");

}


updateThemeButton();


// ============================================================
// 5. FEATURE 2 - CONTACT FORM VALIDATION
// ============================================================

// Email validation function

function validEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}


// Validate name

function validateName() {

    const value =
        nameInput.value.trim();


    if (value === "") {

        showError(
            nameInput,
            "Please enter your full name."
        );

        return false;
    }


    if (value.length < 2) {

        showError(
            nameInput,
            "Name must contain at least 2 characters."
        );

        return false;
    }


    markValid(nameInput);

    return true;
}


// Validate email

function validateEmail() {

    const value =
        emailInput.value.trim();


    if (value === "") {

        showError(
            emailInput,
            "Please enter your email address."
        );

        return false;
    }


    if (!validEmail(value)) {

        showError(
            emailInput,
            "Please enter a valid email address."
        );

        return false;
    }


    markValid(emailInput);

    return true;
}


// Validate message

function validateMessage() {

    const value =
        messageInput.value.trim();


    if (value === "") {

        showError(
            messageInput,
            "Please enter a message."
        );

        return false;
    }


    if (value.length < 10) {

        showError(
            messageInput,
            "Message must be at least 10 characters."
        );

        return false;
    }


    markValid(messageInput);

    return true;
}


// Show success message

function showSuccess() {

    const oldSuccess =
        form.querySelector(".form-success");


    if (oldSuccess) {
        oldSuccess.remove();
    }


    const success =
        createElement(
            "div",
            "form-success",
            "✓ Your message has been validated successfully!"
        );


    success.setAttribute(
        "role",
        "status"
    );


    form.appendChild(success);
}


// Validate complete form

function validateForm(event) {

    event.preventDefault();


    const nameOK =
        validateName();


    const emailOK =
        validateEmail();


    const messageOK =
        validateMessage();


    if (
        nameOK &&
        emailOK &&
        messageOK
    ) {

        showSuccess();


        console.log(
            "Contact form validation successful."
        );


        form.reset();


        nameInput.classList.remove(
            "input-valid"
        );


        emailInput.classList.remove(
            "input-valid"
        );


        messageInput.classList.remove(
            "input-valid"
        );

    }

}


// Add submit event

if (form) {

    form.addEventListener(
        "submit",
        validateForm
    );


    // Real-time validation

    nameInput.addEventListener(
        "input",
        validateName
    );


    emailInput.addEventListener(
        "input",
        validateEmail
    );


    messageInput.addEventListener(
        "input",
        validateMessage
    );

}


// ============================================================
// 6. FEATURE 3 - INTERACTIVE SKILL CATEGORIES
// ============================================================

function setupSkillInteractions() {

    if (!skillsSection) {
        return;
    }


    const cards =
        skillsSection.querySelectorAll(
            ".skill-card"
        );


    cards.forEach((card) => {

        const title =
            card.querySelector("h3");


        if (!title) {
            return;
        }


        title.classList.add(
            "skill-category-title"
        );


        title.setAttribute(
            "role",
            "button"
        );


        title.setAttribute(
            "tabindex",
            "0"
        );


        title.setAttribute(
            "aria-expanded",
            "true"
        );


        // Toggle skill card

        function toggleCard() {

            const collapsed =
                card.classList.toggle(
                    "collapsed"
                );


            title.setAttribute(
                "aria-expanded",
                String(!collapsed)
            );

        }


        // Click event

        title.addEventListener(
            "click",
            toggleCard
        );


        // Keyboard event

        title.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    toggleCard();

                }

            }
        );

    });

}


setupSkillInteractions();


// ============================================================
// 7. FEATURE 4 - BACK TO TOP BUTTON
// ============================================================

const backToTop =
    createElement(
        "button",
        "back-to-top",
        "↑"
    );


backToTop.type = "button";


backToTop.setAttribute(
    "aria-label",
    "Back to top"
);


backToTop.title =
    "Back to top";


document.body.appendChild(
    backToTop
);


// Show/hide button while scrolling

function updateBackToTop() {

    if (window.scrollY > 400) {

        backToTop.classList.add(
            "visible"
        );

    } else {

        backToTop.classList.remove(
            "visible"
        );

    }

}


// Scroll to top

function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// Scroll event

window.addEventListener(
    "scroll",
    updateBackToTop
);


// Click event

backToTop.addEventListener(
    "click",
    scrollToTop
);


// ============================================================
// 8. NAVIGATION EVENT LISTENERS
// ============================================================

const navigationLinks =
    document.querySelectorAll(
        'nav a[href^="#"]'
    );


navigationLinks.forEach((link) => {

    link.addEventListener(
        "click",
        () => {

            console.log(
                "Navigation clicked:",
                link.textContent.trim()
            );

        }
    );

});


// ============================================================
// 9. INITIALIZATION MESSAGE
// ============================================================

console.log(
    "Interactive Portfolio loaded successfully."
);

console.log(
    "Features enabled:"
);

console.log(
    "1. Dark / Light Mode"
);

console.log(
    "2. Local Storage Theme Preference"
);

console.log(
    "3. Contact Form Validation"
);

console.log(
    "4. Real-Time Form Feedback"
);

console.log(
    "5. Interactive Skill Categories"
);

console.log(
    "6. Back-to-Top Button"
);