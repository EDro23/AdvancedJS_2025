"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form"); // 👈 Fill: select the form
  const inputs = document.querySelectorAll("input"); // 👈 Fill: select all inputs

  // Disable built-in HTML validation
  form.noValidate = true; // 👈 Fill: disable HTML validation

  // Loop through inputs and add invalid event listeners
  inputs.forEach(input => {
    input.addEventListener("invalid", () => {
      const span = input.nextElementSibling; // 👈 Fill: get the <span> after the input
      span.textContent = input.validationMessage; // 👈 Fill: show default message
    });
  });

  form.addEventListener("submit", evt => {
    let valid = true;

    // Clear all error messages
    inputs.forEach(input => {
      input.setCustomValidity("");
      const span = input.nextElementSibling;
      span.textContent = "";
    });

    const email = document.querySelector("#email");

    // Add custom validation: email must include "@"
    if (!email.value.includes("@")) { // 👈 Fill: what should email include?
      email.setCustomValidity("Email must include @"); // 👈 Fill: add error
      email.nextElementSibling.textContent = email.validationMessage;
      valid = false;
    }

    // Stop the form if something’s wrong
    if (!form.checkValidity() || !valid) { // 👈 Fill: call built-in check method
      evt.preventDefault(); // 👈 Fill: stop the form from submitting
    }
  });
});
