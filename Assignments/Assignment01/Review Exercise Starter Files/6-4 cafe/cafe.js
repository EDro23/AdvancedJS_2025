"use strict";
const getElement = selector => document.querySelector(selector);

const getSelectedProduct = alt => {
    if (alt == "espresso") {
        return [1.95, "Espresso"]
    }
    else if (alt == "latte") {
        return [2.95, "Latte"]
    }
    else if (alt == "cappuccino") {
        return [3.45, "Cappuccino"]
    }
    else if (alt == "coffee") {
        return [1.75, "Coffee"]
    }
    else if (alt == "biscotti") {
        return [1.95, "Biscotti"]
    }
    else if (alt == "scone") {
        return [2.95, "Scone"]
    }
};

document.addEventListener("DOMContentLoaded", () => {
    let images = document.querySelectorAll("#menu-list img");

    let totalPrice = 0;

    for (let image of images) {
        let originalImageURL = image.src;

        let infoImageURL = image.id
        image.addEventListener("mouseover", () => {
            image.src = infoImageURL;
        })

        image.addEventListener("mouseout", () => {
            image.src = originalImageURL
        })

        image.addEventListener("click", () => {

            let product = getSelectedProduct(image.alt);
            let productText = `$${product[0]} - ${product[1]}`
            let price = parseFloat(product[0]);

            let selectElement = getElement("#order");
            let option = document.createElement("option");
            let text = document.createTextNode(productText)
            option.appendChild(text);

            selectElement.appendChild(option);

            totalPrice += price;
            document.getElementById("total").textContent = `Total: $${totalPrice.toFixed(2)}`;
        })
    }

    document.getElementById('place_order').addEventListener("click", () => {
        window.location.href = 'checkout.html'
    })

    document.getElementById('clear_order').addEventListener("click", () => {
        let selectElement = getElement("#order");
        selectElement.innerHTML = "";

        totalPrice = 0;
        document.getElementById("total").textContent = "Total: $0.00";
    })
}); 