"use strict";

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    
    
    const form = getElement("form");
    
    //prevent html validation



    // attach invalid event handlers
    

    form.addEventListener("submit", evt => {
        //clear error messages
        
        
        //perform custom validation so birth date is at least 16 years ago
        
    
        // trigger check form and if error, prevent default submission
        
    });

});