"use strict";

const contacts = [
    "1|Scott|scott@murach.com|1-559-555-5555",
    "2|Joel|joel@murach.com|1-409-555-5555",
    "3|Mike|mike@murach.com|1-363-555-5555"
];

const menuString = "COMMAND MENU\n" +
    "list - List all contacts\n" +
    "get # - Get contact with the specified number\n" +
    "exit - Exit program";


    document.addEventListener("DOMContentLoaded", () => {

        while(true) {
            let option = prompt(menuString)
            let output = ""

            if (option == "exit") break;

            if (option == "list") {
                for(let contact of contacts) {
                    let contactInfo = contact.split("|");
                    output += `${contactInfo[0]} - ${contactInfo[1]}`
                }
                alert(output);
            }

            if (option.startsWith("get")) {
                let inputList = option.split(" ");
                let contactIndex = inputList[1];

                for (let contact of contacts) {
                    let contactInfo = contact.split("|");
                    if(contactInfo[0] == contactIndex) {
                        let output = `Contact info for: ${contactInfo[1]} \n ` +
                                    `Email: ${contactInfo[2]} \n` +
                                    `Phone: ${contactInfo[3]}`
                    alert(output);
                    break;
                    }
                }
                if (!found) {
                    let output = `No one found for user ${contactIndex}`;
                    alert(output);
                }
            }
        }
    })