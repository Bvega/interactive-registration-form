// Get all the form elements
const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// Get error message span elements
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Load saved username from localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedUsername = localStorage.getItem('username');
  if (savedUsername) {
    username.value = savedUsername;
  }
});

// Validate username in real-time
username.addEventListener('input', () => {
  if (username.validity.valueMissing) {
    usernameError.textContent = 'Username is required.';
  } else if (username.value.length < 3) {
    usernameError.textContent = 'Username must be at least 3 characters.';
  } else {
    usernameError.textContent = '';
  }
});

// Validate email in real-time
email.addEventListener('input', () => {
  if (email.validity.valueMissing) {
    emailError.textContent = 'Email is required.';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Please enter a valid email address.';
  } else {
    emailError.textContent = '';
  }
});

// Validate password in real-time
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

// Check if confirm password matches
confirmPassword.addEventListener('input', () => {
  if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = 'Passwords do not match.';
  } else {
    confirmPasswordError.textContent = '';
  }
});

// Handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent page reload

  let isValid = true; // Flag for validation state

  // Username check
  if (username.value.trim().length < 3) {
    usernameError.textContent = 'Username must be at least 3 characters.';
    username.focus();
    isValid = false;
  }

  // Email check using built-in validity
  if (!email.checkValidity()) {
    emailError.textContent = 'Please enter a valid email address.';
    email.focus();
    isValid = false;
  }

  // Password regex check
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordPattern.test(password.value)) {
    passwordError.textContent = 'Must include 8+ chars, uppercase, lowercase, and a number.';
    password.focus();
    isValid = false;
  }

  // Confirm password check
  if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = 'Passwords do not match.';
    confirmPassword.focus();
    isValid = false;
  }

  // If all checks pass
  if (isValid) {
    alert('Registration successful!');
    try {
      // Save username locally
      localStorage.setItem('username', username.value);
    } catch (e) {
      console.warn('Could not save to localStorage:', e);
    }
    form.reset(); // Clear form inputs
  }
});
