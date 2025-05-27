"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const zip = document.getElementById("zip");
  const dob = document.getElementById("dob");

  const resetBtn = document.getElementById("reset");

  form.addEventListener("submit", (e) => {

    e.preventDefault();
    let isValid = true;

    // Remove existing error messages
    document.querySelectorAll(".error").forEach(el => el.remove());

    // NAME: required
    if (name.value.trim() === "") {
      const error = document.createElement("span");
      error.className = "error";
      error.textContent = "Name is required.";
      name.parentNode.appendChild(error);
      isValid = false;
    }

    // EMAIL/PHONE: at least one required
    if (email.value.trim() === "" && phone.value.trim() === "") {
      const error1 = document.createElement("span");
      error1.className = "error";
      error1.textContent = "Enter either an email or a phone number.";
      email.parentNode.appendChild(error1);

      const error2 = document.createElement("span");
      error2.className = "error";
      error2.textContent = "Enter either a phone number or an email.";
      phone.parentNode.appendChild(error2);

      isValid = false;
    }

    // ZIP: required (browser handles pattern, we just show a message if empty)
    if (zip.value.trim() === "") {
      const error = document.createElement("span");
      error.className = "error";
      error.textContent = "ZIP code is required.";
      zip.parentNode.appendChild(error);
      isValid = false;
    }

    // DOB: required + must be in the past
    if (dob.value === "") {
        const error = document.createElement("span");
        error.className = "error";
        error.textContent = "Date of birth is required.";
        dob.parentNode.appendChild(error);
        isValid = false;
      } else {
        const enteredDate = new Date(dob.value + "T00:00:00");
        const today = new Date();
        today.setHours(0, 0, 0, 0); // remove time from today
  
        if (enteredDate >= today) {
          const error = document.createElement("span");
          error.className = "error";
          error.textContent = "Date of birth must be in the past.";
          dob.parentNode.appendChild(error);
          isValid = false;
        }
      }

    if (!isValid) {
      e.preventDefault(); // prevent navigation to confirm.html
    }
  });

  // RESET: clear inputs and error messages
  resetBtn.addEventListener("click", () => {
    document.querySelectorAll(".error").forEach(el => el.remove());
  });
});
