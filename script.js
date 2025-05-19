// script.js

// Select form and input elements
const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// Select error message spans
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Load saved username from localStorage
window.addEventListener('DOMContentLoaded', () => {
  const savedUsername = localStorage.getItem('username');
  if (savedUsername) {
    username.value = savedUsername;
  }
});

// Validate input on real-time (input event)
username.addEventListener('input', () => {
  if (username.validity.valueMissing) {
    usernameError.textContent = 'Username is required.';
  } else if (username.value.length < 3) {
    usernameError.textContent = 'Username must be at least 3 characters.';
  } else {
    usernameError.textContent = '';
  }
});

email.addEventListener('input', () => {
  if (email.validity.valueMissing) {
    emailError.textContent = 'Email is required.';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Please enter a valid email address.';
  } else {
    emailError.textContent = '';
  }
});

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

confirmPassword.addEventListener('input', () => {
  if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = 'Passwords do not match.';
  } else {
    confirmPasswordError.textContent = '';
  }
});

// Final validation on submit
form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent default submission

  let isValid = true;

  // Trigger all validations
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

  if (isValid) {
    alert('Registration successful!');
    localStorage.setItem('username', username.value);
    form.reset();
  }
});
