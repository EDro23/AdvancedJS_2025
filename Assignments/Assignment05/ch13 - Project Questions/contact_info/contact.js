"use strict";
import { Contact } from "./contact-class.js";

const getElement = selector => document.querySelector(selector);

const clearContact = () => sessionStorage.removeItem("contact");

const saveContact = (contact) => {
    sessionStorage.setItem("contact", JSON.stringify(contact.toJSON()));
};

const getStoredContact = () => {
    const data = sessionStorage.getItem("contact");
    if (!data) return null;
    return Contact.fromJSON(JSON.parse(data));
};

const displayContact = () => {
    const contact = getStoredContact();
    if (!contact) return;

    getElement("#name").value = contact.name;
    getElement("#email").value = contact.email;
    getElement("#phone").value = contact.phone;
    getElement("#zip").value = contact.zip;
    getElement("#dob").value = contact.dob.toFormattedString();
};

const displayConfirmPage = () => {
    const contact = getStoredContact();
    if (!contact) return;

    getElement("#lbl_name").textContent = contact.name;
    getElement("#lbl_email").textContent = contact.email;
    getElement("#lbl_phone").textContent = contact.phone;
    getElement("#lbl_zip").textContent = contact.zip;
    getElement("#lbl_dob").textContent = contact.dob.toDateString();
};

const clearMessages = () => {
    const inputs = document.querySelectorAll("input");
    for (let input of inputs) {
        const span = input.nextElementSibling;
        if (span) span.textContent = "";
    }
    inputs[0].focus();
};

document.addEventListener("DOMContentLoaded", () => {
    const form = getElement("form");

    if (form) {
        form.noValidate = true;

        for (let element of form.elements) {
            element.addEventListener("invalid", evt => {
                const elem = evt.currentTarget;
                const msg = elem.title || elem.validationMessage;
                const span = elem.nextElementSibling;
                if (span) span.textContent = msg;
            });
        }

        displayContact();

        form.addEventListener("submit", evt => {
            clearMessages();

            const name = getElement("#name").value;
            const email = getElement("#email").value;
            const phone = getElement("#phone").value;
            const zip = getElement("#zip").value;
            const dobStr = getElement("#dob").value;

            const contact = new Contact(name, email, phone, zip, dobStr);

            if (!contact.dob.isValid()) {
                getElement("#dob").setCustomValidity("Please enter a valid DOB.");
            } else if (!contact.dob.isInPast()) {
                getElement("#dob").setCustomValidity("DOB must be in the past.");
            } else {
                getElement("#dob").setCustomValidity("");
            }

            getElement("#email").setCustomValidity(
                email === "" && phone === "" ? "Please enter an email or phone." : ""
            );

            if (!form.checkValidity()) {
                evt.preventDefault();
            } else {
                saveContact(contact);
            }
        });

        form.addEventListener("reset", () => {
            clearMessages();
            clearContact();
        });

    } else {
        displayConfirmPage();
    }
});
