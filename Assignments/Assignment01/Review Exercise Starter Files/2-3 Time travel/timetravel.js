"use strict";

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {

    const miles = parseInt(prompt("Enter The Distance"))
    const speed = parseInt(prompt("Enter The Speed"))

    let hours = miles / speed
    let minutes = (hours - Math.trunc(hours)) * 60;


    hours = Math.trunc(hours);
    minutes = Math.trunc(minutes);

    let output = `Distance: ${miles} \n` +
    `Speed: ${speed} \n` +
    `Time Travelled: ${hours} hours, ${minutes} minutes`

    alert(output);
});