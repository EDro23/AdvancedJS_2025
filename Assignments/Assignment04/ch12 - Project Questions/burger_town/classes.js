"use strict";

class Burger {
    constructor(type = "regular", size = "single", toppings = []) {
        this.type = type;
        this.size = size;
        this.toppings = toppings;
    }

    getPrice() {
        const basePrice = (this.type === "cheese") ? 6 : 5;
        return this.size === "double" ? basePrice + 1 : basePrice;
    }

    toHTML() {
        const price = this.getPrice().toFixed(2);
        const burgerLabel = `${this.capitalize(this.size)} ${this.capitalize(this.type)} burger`;
        const toppingsList = this.toppings.map(t => `<li>${this.capitalize(t)}</li>`).join("");
        
        return `
            <div class="order-item">
                <div class="order-title">${burgerLabel}</div>
                ${this.toppings.length ? `<ul class="order-list">${toppingsList}</ul>` : ""}
                <div class="order-price">$${price}</div>
            </div>
        `;
    }

    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

class Drink {
    constructor(type = "water", size = "small") {
        this.type = type;
        this.size = size;
    }

    getPrice() {
        if (this.type === "water") return 0.0;

        const prices = {
            tea: { small: 2.5, medium: 3.0, large: 3.5 },
            soda: { small: 2.75, medium: 3.25, large: 3.75 },
        };

        return prices[this.type]?.[this.size] || 0;
    }

    toHTML() {
        const price = this.getPrice().toFixed(2);
        const drinkLabel = `${this.capitalize(this.size)} ${this.capitalize(this.type)}`;
        
        return `
            <div class="order-item">
                <div class="order-title">${drinkLabel}</div>
                <div class="order-price">$${price}</div>
            </div>
        `;
    }

    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

class Fries {
    constructor(type = "regular", size = "small") {
        this.type = type;
        this.size = size;
    }

    getPrice() {
        const prices = {
            regular: { small: 2.0, medium: 3.0, large: 3.5 },
            curly: { small: 2.5, medium: 3.25, large: 3.75 },
        };

        return prices[this.type]?.[this.size] || 0;
    }

    toHTML() {
        const price = this.getPrice().toFixed(2);
        const friesLabel = `${this.capitalize(this.size)} ${this.capitalize(this.type)} Fries`;

        return `
            <div class="order-item">
                <div class="order-title">${friesLabel}</div>
                <div class="order-price">$${price}</div>
            </div>
        `;
    }

    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

class Order {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    clear() {
        this.items = [];
    }

    getTotal() {
        return this.items.reduce((sum, item) => sum + item.getPrice(), 0);
    }

    toHTML() {
        const itemsHTML = this.items.map(item => item.toHTML()).join("");
        const total = this.getTotal().toFixed(2);

        return `
            <div class="order-summary">
                ${itemsHTML}
                <div class="order-total"><strong>Total: $${total}</strong></div>
            </div>
        `;
    }
}

