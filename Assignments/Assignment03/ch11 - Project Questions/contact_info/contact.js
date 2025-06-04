"use strict";
const getElement = selector => document.querySelector(selector);

const padNum = num => num.toString().padStart(2, "0");

const clearContact = () => {
    sessionStorage.removeItem("contact");
};

const saveContact = () => {
    const contact = [
        getElement("#name").value,
        getElement("#email").value,
        getElement("#phone").value,  // ← fixed typo here
        getElement("#zip").value,
        getElement("#dob").value
    ];
    sessionStorage.setItem("contact", JSON.stringify(contact));
};

const displayContact = () => {
    const contactStr = sessionStorage.getItem("contact");
    if (contactStr) {
        const contact = JSON.parse(contactStr);
        getElement("#name").value = contact[0];
        getElement("#email").value = contact[1];
        getElement("#phone").value = contact[2];
        getElement("#zip").value = contact[3];
        const dt = new Date(contact[4] + "T00:00:00");
        if (!(dt.toString() == "Invalid Date")) {
            const str = `${dt.getFullYear()}-${padNum(dt.getMonth() + 1)}-${padNum(dt.getDate())}`;
            getElement("#dob").value = str;
        }
    }
};

const displayConfirmPage = () => {
    const contactStr = sessionStorage.getItem("contact");
    if (contactStr) {
        const contact = JSON.parse(contactStr);
        getElement("#name").textContent = contact[0];
        getElement("#email").textContent = contact[1];
        getElement("#phone").textContent = contact[2];
        getElement("#zip").textContent = contact[3];
        getElement("#dob").textContent = new Date(contact[4] + "T00:00:00").toDateString();
    }
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

    if (form) {  // index.html
        form.noValidate = true;

        for (let element of form.elements) {
            element.addEventListener("invalid", evt => {
                const elem = evt.currentTarget;
                const msg = elem.title ? elem.title : elem.validationMessage;
                const span = elem.nextElementSibling;
                if (span) span.textContent = msg;
            });
        }

        displayContact();

        form.addEventListener("submit", evt => {
            clearMessages();  

            const email = getElement("#email");
            const phone = getElement("#phone");

            let msg = (email.value == "" && phone.value == "") ? "Please enter an email or phone." : "";
            email.setCustomValidity(msg);

            const dob = getElement("#dob"); 
            const dobValue = new Date(dob.value + "T00:00:00");
            if (dobValue.toString() == "Invalid Date") {
                msg = "Please enter a valid DOB.";
            } else {
                let today = new Date();
                today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
                msg = (today <= dobValue) ? "DOB must be in the past." : "";
            }
            dob.setCustomValidity(msg);

            if (!form.checkValidity()) { 
                evt.preventDefault();
            } else {
                saveContact();
            }
        });

        form.addEventListener("reset", () => {
            clearMessages();
            clearContact();
        });
    } else {  // confirm.html
        displayConfirmPage();
    }
});
