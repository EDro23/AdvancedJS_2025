"use strict";

const get = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const inputs = form.querySelectorAll("input");

    // ✅ 1. Prevent HTML5 validation
    form.noValidate = true; // Disable HTML5 validation
  

  // ✅ 2. Add 'invalid' event listeners to all inputs
  inputs.forEach(input => {
    input.addEventListener("invalid", () => {
      const span = input.nextElementSibling;
      if (span) span.textContent = input.validationMessage;
    });
  });

  // ✅ 3. Add custom validation logic in the form submit handler
  form.addEventListener("submit", evt => {
    let valid = true;

    // Clear all error spans
    inputs.forEach(input => {
      const span = input.nextElementSibling;
      if (span) span.textContent = "";
      input.setCustomValidity(""); // clear old messages
    });

    const email = get("#email");
    const birth = get("#birth");

    // TODO: Check if email ends with "@school.ca"
    if (!email.value.endsWith("@school.ca")) {
      email.setCustomValidity("Email must end with @school.ca");
      valid = false;
    }
    

    // TODO: Check if user is at least 13 years old
    const birthDate = new Date(birth.value);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if (age < 13) {
      birth.setCustomValidity("You must be at least 13 years old.");
      valid = false;
    }
    

    // ✅ Final check: if form is not valid, prevent submission
    if (!form.checkValidity() || !valid) {
      evt.preventDefault();
    }
  });
});
