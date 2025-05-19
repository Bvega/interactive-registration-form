

````markdown
# 📚 Interactive Registration Form Tutorial

Welcome! In this tutorial, you'll learn how to build an interactive registration form using HTML, CSS, and JavaScript. We’ll cover validation, real-time feedback, storing data with `localStorage`, and edge case handling.

---

## 🛠️ Part 1: Project Setup

1. **Create a project folder**:
   ```bash
   mkdir interactive-registration-form
   cd interactive-registration-form
````

2. **Create these files**:

   ```bash
   touch index.html styles.css script.js
   ```

3. **Initialize Git (optional)**:

   ```bash
   git init
   git add .
   git commit -m "chore: initialize project folder and base files"
   ```

---

## 🧱 Part 2: HTML Form

1. Open `index.html` and build the basic form structure.
2. Include inputs for: Username, Email, Password, and Confirm Password.
3. Add `required`, `minlength`, `pattern`, etc. for HTML5 validation.
4. Include `<span>` elements for error messages.

🟢 **Commit**:

```bash
git commit -am "feat: add initial HTML structure for registration form"
```

---

## 🎨 Part 3: Styling with CSS

1. Open `styles.css`.
2. Style the layout, form, inputs, and error messages.
3. Ensure responsive design with max-width and flexible containers.

🟢 **Commit**:

```bash
git commit -am "style: add base CSS for layout and form fields"
```

---

## 🧠 Part 4: JavaScript Validation

1. Open `script.js`.
2. Use `document.getElementById()` to select elements.
3. Add input event listeners for real-time validation.
4. Use the Constraint Validation API and RegEx.
5. Compare `password` and `confirmPassword` fields.
6. Add a submit listener, prevent default, and validate all fields.
7. Use `localStorage.setItem` and `getItem` for username persistence.

🟢 **Commit**:

```bash
git commit -am "feat: add JavaScript for validation, error display, and localStorage"
```

---

## 🧪 Part 5: Testing & Edge Cases

1. Test form field-by-field (required, minlength, pattern, matches).
2. Open browser DevTools > Application > Local Storage to inspect data.
3. Try invalid values and JavaScript-disabled environments.
4. Test:

   * Incognito/private mode
   * DevTools input manipulation
   * Storage quota limits

🟢 **Commit**:

```bash
git commit -am "test: complete manual and edge case testing"
```

---

## 📄 Part 6: Add Documentation

1. Create a `README.md` file with:

   * Overview
   * Features
   * Instructions
   * Reflection answers
2. Ensure clear formatting and beginner-friendly language.

🟢 **Commit**:

```bash
git commit -am "docs: add complete README with setup, features, and reflection answers"
```

---

## 🚀 Final Step: Push to GitHub

1. Create a new GitHub repo (name: `interactive-registration-form`).
2. Push your code:

   ```bash
   git remote add origin https://github.com/your-username/interactive-registration-form.git
   git branch -M main
   git push -u origin main
   ```

---

## ✅ Done!

You’ve now built and documented a fully functioning registration form with client-side validation and data persistence!

---

```

📘 **Git Commit Message:**
```

docs: add full tutorial walkthrough in TUTORIAL.md

```
REFERENCE FILES:

Index.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="stylesheet" href="styles.css" />
  <title>Interactive Registration Form</title>
</head>
<body>
  <div class="container">
    <h1>Register</h1>
    <!-- Registration form starts -->
    <form id="registrationForm" novalidate>
      
      <!-- Username Field -->
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required minlength="3"/>
        <span class="error-message" id="usernameError"></span>
      </div>

      <!-- Email Field -->
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <span class="error-message" id="emailError"></span>
      </div>

      <!-- Password Field -->
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password"
               pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$" required />
        <small>Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, and a number.</small>
        <span class="error-message" id="passwordError"></span>
      </div>

      <!-- Confirm Password Field -->
      <div class="form-group">
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" required />
        <span class="error-message" id="confirmPasswordError"></span>
      </div>

      <!-- Submit Button -->
      <button type="submit">Register</button>
    </form>
  </div>

  <!-- Link JavaScript -->
  <script src="script.js"></script>
</body>
</html>

--------------------------------------------------------------------------

styles.css

/* Global body styles */
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

/* Form container styles */
.container {
  background-color: #fff;
  padding: 20px 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

/* Heading */
h1 {
  text-align: center;
  color: #333;
}

/* Form groups */
.form-group {
  margin-bottom: 15px;
}

/* Label styling */
.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

/* Input styling */
.form-group input {
  width: calc(100% - 22px);
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

/* Style invalid input */
.form-group input:invalid {
  border-color: #e74c3c;
}

/* Error message */
.form-group .error-message {
  color: #e74c3c;
  font-size: 0.9em;
  margin-top: 5px;
  min-height: 1em;
}

/* Small hints */
.form-group small {
  font-size: 0.8em;
  color: #777;
  margin-top: 3px;
}

/* Submit button */
button[type="submit"] {
  width: 100%;
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

/* Hover effect */
button[type="submit"]:hover {
  background-color: #2980b9;
}

--------------------------------------------------------------------------
script.js

// Get DOM elements
const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Pre-fill username from localStorage if available
window.addEventListener('DOMContentLoaded', () => {
  const savedUsername = localStorage.getItem('username');
  if (savedUsername) {
    username.value = savedUsername;
  }
});

// Real-time username validation
username.addEventListener('input', () => {
  if (username.validity.valueMissing) {
    usernameError.textContent = 'Username is required.';
  } else if (username.value.length < 3) {
    usernameError.textContent = 'Username must be at least 3 characters.';
  } else {
    usernameError.textContent = '';
  }
});

// Real-time email validation
email.addEventListener('input', () => {
  if (email.validity.valueMissing) {
    emailError.textContent = 'Email is required.';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Please enter a valid email address.';
  } else {
    emailError.textContent = '';
  }
});

// Real-time password validation
password.addEventListener('input', () => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (password.validity.valueMissing) {
    passwordError.textContent = 'Password is required.';
  } else if (!regex.test(password.value)) {
    passwordError.textContent = 'Must include 8+ chars, uppercase, lowercase, and a number.';
  } else {
    passwordError.textContent = '';
  }
});

// Confirm password match check
confirmPassword.addEventListener('input', () => {
  if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = 'Passwords do not match.';
  } else {
    confirmPasswordError.textContent = '';
  }
});

// Final validation on submit
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Stop default form submission

  let isValid = true;

  // Manual field checks
  if (username.value.trim().length < 3) {
    usernameError.textContent = 'Username must be at least 3 characters.';
    username.focus();
    isValid = false;
  }

  if (!email.checkValidity()) {
    emailError.textContent = 'Please enter a valid email address.';
    email.focus();
    isValid = false;
  }

  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordPattern.test(password.value)) {
    passwordError.textContent = 'Must include 8+ chars, uppercase, lowercase, and a number.';
    password.focus();
    isValid = false;
  }

  if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = 'Passwords do not match.';
    confirmPassword.focus();
    isValid = false;
  }

  // Submit success
  if (isValid) {
    alert('Registration successful!');
    try {
      localStorage.setItem('username', username.value);
    } catch (e) {
      console.warn('Could not store username:', e);
    }
    form.reset();
  }
});

