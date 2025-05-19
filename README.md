# 📝 Interactive Registration Form

## 💡 Project Overview

This is a client-side interactive user registration form built using **HTML5, CSS, and JavaScript**. It features real-time input validation, uses the Constraint Validation API, and stores the username in `localStorage`. The goal is to simulate a registration flow for a modern web application.

---

## 📁 Project Structure

interactive-registration-form/
├── index.html # Main form HTML
├── styles.css # Styling for layout and error messages
└── script.js # JavaScript logic and validation


---

## 🚀 Getting Started

### ✅ Requirements
- Modern web browser
- Code editor (e.g., VS Code)

### ▶️ How to Run
1. Clone the repository
2. Open `index.html` in your browser
3. Start testing the form

---

## 🔍 Features

- Responsive and styled registration form
- Fields: Username, Email, Password, Confirm Password
- Real-time validation with user-friendly messages
- Password strength rules
- `localStorage` support for username persistence
- Graceful handling of edge cases

---

## 🧪 Testing Checklist

- [x] Valid form submits and shows success
- [x] Username must be at least 3 characters
- [x] Email must be valid format
- [x] Password must have uppercase, lowercase, number, min 8 chars
- [x] Confirm password must match
- [x] Error messages appear in real-time
- [x] localStorage pre-fills username
- [x] Works in incognito (except persistent localStorage)
- [x] JavaScript gracefully handles tampering

---

## ❓ Reflection Questions & Answers

### 1. How did `event.preventDefault()` help in handling form submission?
It prevented the default page reload, allowing us to validate and control form behavior using JavaScript.

### 2. What is the difference between HTML5 and JS-based validation?
- HTML5: Uses attributes like `required`, `pattern`, `type` for basic checks.
- JavaScript: Enables more complex logic (e.g., password matching, regex validation), and allows real-time interaction.
- Why both? HTML5 covers basics; JS provides full control and feedback.

### 3. How did you use `localStorage`?
- On submit, we saved the `username` using `localStorage.setItem`.
- On page load, we retrieved it using `getItem` to pre-fill the input.
