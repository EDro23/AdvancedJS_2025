"use strict";

const clearForm = () => {
    document.querySelector("#cents").value = "";
    document.querySelector("#quarters").value = "";
    document.querySelector("#dimes").value = "";
    document.querySelector("#nickels").value = "";
    document.querySelector("#pennies").value = "";
    document.querySelector("#cents").focus();
};

const calculateChange = () => {
    const input = document.querySelector("#cents").value;

    try {
        // Use the object literal to validate and calculate
        centsCalculator.calculate(input);

        // Display the results
        document.querySelector("#quarters").value = centsCalculator.quarters;
        document.querySelector("#dimes").value = centsCalculator.dimes;
        document.querySelector("#nickels").value = centsCalculator.nickels;
        document.querySelector("#pennies").value = centsCalculator.pennies;
    } catch (err) {
        alert(err.message);
        document.querySelector("#cents").select();
    }
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#calculate").addEventListener("click", calculateChange);
    document.querySelector("#clear").addEventListener("click", clearForm);
    document.querySelector("#cents").focus();
});
