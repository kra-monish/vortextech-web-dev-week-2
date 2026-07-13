# VortexTech Web Dev Internship — Week 2

## What I Built
A simple interactive web page featuring:

1. **Validated Contact Form** — Name, Email, and Message fields.
   - Shows an inline error if any field is empty.
   - Validates email format using a regex check.
   - On successful validation, displays a success message on the page (no reload) and clears the form.
2. **Dark / Light Mode Toggle** — A button that switches the page's color theme by toggling a `dark-mode` class on `<body>`, styled with CSS custom properties.

All interactivity uses `addEventListener` — no inline `onclick` attributes — and lives in a separate `script.js` file.

## Files
- `index.html` — page structure (form + toggle button)
- `style.css` — styling, including light/dark theme CSS variables
- `script.js` — form validation logic and dark mode toggle logic

## How to Run
1. Download/clone this repository.
2. Open `index.html` directly in your browser (double-click it, or use a tool like VS Code's Live Server extension).
3. Try submitting the form empty, with an invalid email, and with valid data to see validation in action.
4. Click the theme toggle button (top right) to switch between light and dark mode.

No build steps or dependencies required — pure HTML, CSS, and vanilla JavaScript.

## Testing Notes
- Empty fields → each shows its own error message.
- Invalid email (e.g. `test@test`) → shows "Please enter a valid email address."
- Valid input → form clears and a success message appears.
- Theme toggle works correctly across multiple clicks and updates its own label/icon.

---
*Built for the VortexTech Internship Program 2026, Week 2 task.*
