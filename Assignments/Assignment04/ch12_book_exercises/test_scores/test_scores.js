"use strict";

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const testScores = new TestScores();

    getElement("#add_score").addEventListener("click", () => {
        // Clear previous error
        getElement("#add_score").nextElementSibling.textContent = "";

        // Get input as string and validate it
        const scoreInput = getElement("#score").value;

        if (!validation.isInRange(scoreInput, 0, 100)) {
            const msg = "Score must be from 0 to 100.";
            getElement("#add_score").nextElementSibling.textContent = msg;
        } else {
            const score = parseFloat(scoreInput);
            testScores.add(score);

            // Display outputs
            getElement("#all").textContent = testScores.toString();
            getElement("#grades").textContent = testScores.toLetterString();
            getElement("#avg").textContent = testScores.avg;
            getElement("#sort").textContent = testScores.toSortedString();
        }

        // Reset input
        getElement("#score").value = "";
        getElement("#score").focus();
    });

    getElement("#score").focus();
});
