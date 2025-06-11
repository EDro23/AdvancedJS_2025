"use strict";

const getElement = selector => document.querySelector(selector);

const getCheckedValue = name => {
    const checked = document.querySelector(`input[name="${name}"]:checked`);
    return checked ? checked.value : null;
};

const getCheckedToppings = () => {
    return [...document.querySelectorAll("#toppings input[type=checkbox]:checked")]
        .map(cb => cb.value);
};

document.addEventListener("DOMContentLoaded", () => {
    const order = new Order();

    getElement("#add_order").addEventListener("click", () => {
        const burgerType = getCheckedValue("burger_type");
        const burgerSize = getCheckedValue("burger_size");
        const toppings = getCheckedToppings();

        // Add burger only if type or size or toppings exist, but skip if only toppings
        if (burgerType || burgerSize || toppings.length > 0) {
            const finalType = burgerType || "regular";
            const finalSize = burgerSize || "single";
            if (burgerType || burgerSize) {
                order.addItem(new Burger(finalType, finalSize, toppings));
            }
        }

        // Add drink only if user selected a drink type
        const drinkType = getCheckedValue("drink_type");
        if (drinkType) {
            const drinkSize = getCheckedValue("drink_size") || "small";
            order.addItem(new Drink(drinkType, drinkSize));
        }

        // Add fries only if user selected a fry type
        const fryType = getCheckedValue("fry_type");
        if (fryType) {
            const frySize = getCheckedValue("fry_size") || "small";
            order.addItem(new Fries(fryType, frySize));
        }

        getElement("#order_details").innerHTML = order.toHTML();
    });

    getElement("#clear_order").addEventListener("click", () => {
        order.clear();
        getElement("#order_details").innerHTML = "";

        // Clear all radio buttons and checkboxes
        document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
        document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    });
});
