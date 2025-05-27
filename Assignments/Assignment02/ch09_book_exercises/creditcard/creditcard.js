"use strict";

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const form = getElement("form");

    // attach invalid event handlers
    for (let element of form.elements) {
        element.addEventListener("invalid", evt => {
            evt.preventDefault(); // prevent default browser tooltip
            const elem = evt.currentTarget;
            const msg = elem.title ? elem.title : elem.validationMessage;

            const span = elem.nextElementSibling;
            if (span) span.textContent = msg;
        });
    }

    // handle submit event
    form.addEventListener("submit", evt => {
        clearMessages(form);

        const expiry = getElement("#expdate");
        const dateParts = expiry.value.split('/');

        const expiryDate = new Date("20" + dateParts[1], dateParts[0]);

        const today = new Date();

        if (today > expiryDate) {
            expiry.setCustomValidity("Expiry date must be in the future");
        } else {
            expiry.setCustomValidity("");
        }

        if (!form.checkValidity()) {
            evt.preventDefault();
        }
    });
});