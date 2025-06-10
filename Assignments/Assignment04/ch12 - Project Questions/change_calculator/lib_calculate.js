"use strict";

const centsCalculator = {
    cents: 0,
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,

    isValid(value) {
        const num = parseInt(value);
        return !isNaN(num) && num >= 0 && num <= 99;
    },

    calculate(value) {
        if (!this.isValid(value)) {
            throw new Error("Please enter a valid number between 0 and 99");
        }

        this.cents = Math.floor(parseInt(value));

        this.quarters = Math.floor(this.cents / 25);
        this.cents %= 25;

        this.dimes = Math.floor(this.cents / 10);
        this.cents %= 10;

        this.nickels = Math.floor(this.cents / 5);
        this.pennies = this.cents % 5;
    },
}