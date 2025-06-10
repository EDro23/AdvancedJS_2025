"use strict";

const validation = {
    isNumeric(value) {
        return !isNaN(value) && value !== null && value !== "";
    },

    isInRange(value, min, max) {
        if (!this.isNumeric(value)) return false;
        value = parseFloat(value);
        return value >= min && value <= max;
    }
};
