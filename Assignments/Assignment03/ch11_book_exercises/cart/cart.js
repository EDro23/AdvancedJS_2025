"use strict";

function getLineItems() {
    const lineItems = [];
    lineItems.push(["HTML", 54.5, 5]);
    lineItems.push(["Python Data Analysis", 59.50, 2]);
    lineItems.push(["1984", 15.0, 1]);
    lineItems.push(["Dune", 20.0, 3]);
    return lineItems;
}

function makeCol(text) {
    const col = document.createElement("td");
    const textNode = document.createTextNode(text);
    col.appendChild(textNode);
    return col;
}

function addRow(lineItem) {
    const descr = lineItem[0];
    const price = lineItem[1];
    const quantity = lineItem[2];

    const table = document.querySelector("table");
    const row = document.createElement("tr");

    row.appendChild(makeCol(descr));
    row.appendChild(makeCol("$" + price));
    row.appendChild(makeCol(quantity));
    row.appendChild(makeCol(price * quantity));

    table.appendChild(row);
}

function addSummaryRow(lineItems) {
    let totalAmount = 0;
    let totalQuantity = 0;

    for (let item of lineItems) {
        const price = item[1];
        const quantity = item[2];
        totalQuantity += quantity;
        totalAmount += price * quantity;
    }

    const table = document.querySelector("table");
    const row = document.createElement("tr");

    row.appendChild(makeCol("TOTAL"));
    row.appendChild(makeCol("")); // No total for price column
    row.appendChild(makeCol(totalQuantity));
    row.appendChild(makeCol("$" + totalAmount.toFixed(2)));

    table.appendChild(row);
}

document.addEventListener("DOMContentLoaded", () => {
    // get line items
    const lineItems = getLineItems();

    // Arry.sort and sort by the first column

    lineItems.sort((a, b) => {
        const descrA = a[0].toLowerCase();
        const descrB = b[0].toLowerCase();
        return descrA.localeCompare(descrB)
    })

    // display line items
    lineItems.forEach(lineItem => {
        addRow(lineItem);
    })    


    // add summary row
    addSummaryRow(lineItems);
});