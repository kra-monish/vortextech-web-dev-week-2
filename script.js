// ------------------------------
// VortexTech Week 2 - script.js
// ------------------------------

// ---- Dark / Light Mode Toggle ----
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = '☀️ Light Mode';
  } else {
    themeToggle.textContent = '🌙 Dark Mode';
  }
});

// ---- Contact Form Validation ----
const contactForm = document.getElementById('contactForm');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMessage = document.getElementById('successMessage');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setError(input, errorEl, message) {
  input.classList.add('invalid');
  errorEl.textContent = message;
}

function clearError(input, errorEl) {
  input.classList.remove('invalid');
  errorEl.textContent = '';
}

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  successMessage.textContent = '';

  let isValid = true;

  // Name validation
  const nameValue = nameInput.value.trim();
  if (nameValue === '') {
    setError(nameInput, nameError, 'Please enter your name.');
    isValid = false;
  } else {
    clearError(nameInput, nameError);
  }

  // Email validation
  const emailValue = emailInput.value.trim();
  if (emailValue === '') {
    setError(emailInput, emailError, 'Please enter your email.');
    isValid = false;
  } else if (!emailRegex.test(emailValue)) {
    setError(emailInput, emailError, 'Please enter a valid email address.');
    isValid = false;
  } else {
    clearError(emailInput, emailError);
  }

  // Message validation
  const messageValue = messageInput.value.trim();
  if (messageValue === '') {
    setError(messageInput, messageError, 'Please enter a message.');
    isValid = false;
  } else {
    clearError(messageInput, messageError);
  }

  if (isValid) {
    successMessage.textContent = `Thanks, ${nameValue}! Your message has been sent successfully.`;
    contactForm.reset();
  }
});

// Clear individual field errors as the user types (nice UX touch)
nameInput.addEventListener('input', () => clearError(nameInput, nameError));
emailInput.addEventListener('input', () => clearError(emailInput, emailError));
messageInput.addEventListener('input', () => clearError(messageInput, messageError));
