"use strict";

class TestScores {
    #scores = [];

    constructor() {
        this.#scores = [];
    }

    add(score) {
        this.#scores.push(score);
    }

    get avg() {
        if (this.#scores.length === 0) return 0;
        const sum = this.#scores.reduce((total, s) => total + s, 0);
        return (sum / this.#scores.length).toFixed(2);
    }

    toString() {
        return this.#scores.join(", ");
    }

    toLetterString() {
        const grades = this.#scores.map(score => {
            if (score >= 90) return "A";
            else if (score >= 80) return "B";
            else if (score >= 70) return "C";
            else if (score >= 60) return "D";
            else return "F";
        });
        return grades.join(", ");
    }

    toSortedString() {
        return this.#scores
            .slice()
            .sort((a, b) => b - a)
            .join(", ");
    }
}
