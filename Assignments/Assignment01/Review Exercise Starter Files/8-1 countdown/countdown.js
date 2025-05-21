"use strict";

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {

    getElement("#countdown").addEventListener("click", () => {
        const eventName = getElement("#event").value;
        const eventDateString = getElement("#date").value;  
        const messageLbl = getElement("#message");  

        // make sure user entered event and date 
        if (eventName == "" || eventDateString == "") {
            messageLbl.textContent = "Please enter both a name and a date.";
            return;
        }

        // convert event date string to Date object and check for validity
        const eventDate = new Date(eventDateString);
        if (eventDate.toString() == "Invalid Date") {
            messageLbl.textContent = "Please enter a valid date.";
            return;
        }

        // calculate days
        const today = new Date();
        const msFromToday = eventDate.getTime() - today.getTime();
        const msForOneDay = 24 * 60 * 60 * 1000; // hrs * mins * secs * milliseconds  
        const daysToDate = Math.ceil( msFromToday / msForOneDay ); 

        // Hours, minutes and seconds
        const hours = Math.floor((msFromToday % msForOneDay) / (1000 * 60 * 60));
        const minutes = Math.floor((msFromToday % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((msFromToday % (1000 * 60)) / 1000);


        // create and display message 
        const displayDate = eventDate.toDateString();
        let msg = "";
        if (daysToDate == 0) {
            msg = `Hooray! Today is ${eventName}! (${displayDate})`;
        } else if (daysToDate > 0) {
            msg = `${daysToDate} day(s), ${hours} hour(s), ${minutes} minute(s) and ${seconds} second(s) until ${eventName}! (${displayDate})`;
        } else if (daysToDate < 0) {
            msg = `${eventName} happened ${Math.abs(daysToDate)} 
                   day(s) ago. (${displayDate})`;
        }
        messageLbl.textContent = msg;
    });

    // set focus on first text box
    getElement("#event").focus();
});