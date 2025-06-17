"use strict";

function isEmpty(str) {
    return !str.trim();
}

function isAnyEmpty(...values) {
    return values.some(isEmpty);
}

function isInvalidNumber(val) {
    return isNaN(val) || Number(val) <= 0;
}

export { isEmpty, isAnyEmpty, isInvalidNumber };