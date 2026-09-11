# Personal Portfolio Website

## Project Overview
This project is a beginner-friendly Personal Portfolio Website built exclusively with HTML5 as part of a Week 1 internship assignment. It highlights my academic background, career goals, technical skills, and provides a functional contact form.

## Objectives
Through this project, I practiced and demonstrated mastery of:
- Proper HTML5 document structure
- Semantic HTML tags (`header`, `nav`, `main`, `section`, `footer`)
- Internal anchor navigation (`#about`, `#skills`, `#contact`)
- Working with images and descriptive `alt` attributes
- Structuring content using HTML lists
- Building accessible forms with validation attributes (`required`, `type="email"`, `maxlength`)
- Using global attributes like `id` and `class`

## Technologies Used
- HTML5 (Pure HTML, no CSS/JS frameworks)

## Project Structure
personal-portfolio/
├── index.html
├── README.md
└── images/
    └── profile.jpg

## Features
- **Semantic Navigation:** Clean internal linking to jump between sections.
- **About Section:** Overview of my MCA education and Full-Stack development aspirations.
- **Skills Section:** Categorized technical skill sets represented via HTML lists.
- **Contact Form:** Fully structured input fields, textareas, and submission buttons with built-in validation.
- **Accessible Design:** Meaningful `alt` text for images and semantic landmark elements.

## Setup Instructions
1. Download or clone this repository to your local computer.
2. Open the project folder in **VS Code**.
3. Ensure you place your profile photo inside the `images/` folder and name it `profile.jpg`.
4. Right-click `index.html` and select **Open with Live Server** (or simply double-click `index.html` to open it in any web browser).

## Testing
- **Navigation Links:** Click on About, Skills, and Contact in the navigation menu to verify smooth jumping to the correct sections.
- **Image Loading:** Ensure `profile.jpg` renders correctly and inspect the element to confirm proper `alt` text.
- **Form Fields:** Try submitting the contact form while leaving fields empty to test the `required` attribute validation, and test entering an invalid email format to verify `type="email"`.
- **HTML Validation:** Copy the code into the W3C Markup Validation Service to verify syntax correctness.

## Learning Outcomes
After completing this project, I gained a solid foundational understanding of how web pages are structured using pure HTML5 semantic elements, how documents are organized logically, and how user input forms are constructed safely.

## Technical Details
- **HTML Document Structure:** Uses standard standard-compliant HTML5 boilerplate.
- **Semantic Elements:** Replaces generic divs with meaningful landmarks like `<header>`, `<main>`, and `<section>`.
- **Section-Based Organization:** Content is neatly separated into distinct sections (`#about`, `#skills`, `#contact`).
- **Internal Anchor Navigation:** Hyperlinks point directly to page fragment identifiers.
- **Form Structure:** Utilizes standard form controls with built-in browser validation rules. (Note: Data storage, backend processing, styling sheets, and algorithms are **not applicable** for this HTML-only project).