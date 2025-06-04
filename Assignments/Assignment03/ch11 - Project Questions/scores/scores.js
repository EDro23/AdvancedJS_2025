"use strict";

const getElement = selector => document.querySelector(selector);

let scores = []; // Each item is: [firstName, lastName, score]

const displayScores = scoresArray => {
    const sortBy = getElement("#sort").value;
    const filterBy = parseInt(getElement("#filter").value);

    // Filter
    let filtered = scoresArray.filter(s => s[2] >= filterBy);

    // Sort
    if (sortBy === "fname") {
        filtered.sort((a, b) => a[0].localeCompare(b[0]));
    } else if (sortBy === "lname") {
        filtered.sort((a, b) => a[1].localeCompare(b[1]));
    } else if (sortBy === "score") {
        filtered.sort((a, b) => b[2] - a[2]);
    }

    // Display
    let displayStr = "";
    let total = 0;

    for (let score of filtered) {
        displayStr += `${score[0]} ${score[1]}: ${score[2]}\n`;
        total += score[2];
    }

    // Show results
    getElement("#score_list").value = displayStr;
    getElement("#avg").textContent = filtered.length > 0 ? (total / filtered.length).toFixed(2) : "";
};

document.addEventListener("DOMContentLoaded", () => {
    getElement("#add_score").addEventListener("click", () => {
        const first = getElement("#first_name").value.trim();
        const last = getElement("#last_name").value.trim();
        const score = parseInt(getElement("#score").value);

        if (first === "" || last === "" || isNaN(score)) {
            alert("Please enter valid first name, last name, and score.");
            return;
        }

        scores.push([first, last, score]);

        getElement("#first_name").value = "";
        getElement("#last_name").value = "";
        getElement("#score").value = "";
        getElement("#first_name").focus();

        displayScores(scores);
    });

    getElement("#clear_scores").addEventListener("click", () => {
        scores = [];
        getElement("#score_list").value = "";
        getElement("#avg").textContent = "";
        getElement("#first_name").focus();
    });

    getElement("#sort").addEventListener("change", () => {
        displayScores(scores);
    });

    getElement("#filter").addEventListener("change", () => {
        displayScores(scores);
    });

    getElement("#first_name").focus();
});
