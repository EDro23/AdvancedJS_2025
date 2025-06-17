// craps.js
// import statement(s)
import { StreetCraps } from "./lib_street_craps.js";

const getElement = selector => document.querySelector(selector);

// create game object
const game = new StreetCraps();

document.addEventListener("DOMContentLoaded", () => {
    getElement("#new_game").addEventListener("click", () => {
        // start new game
        game.newGame();

        // update page
        getElement("#roll").disabled = false;
        getElement("#new_game").disabled = true;
        getElement("#point").textContent = "0";
        getElement("#current_roll").textContent = "0";
        getElement("#message").textContent = "";
        getElement("#message").style.color = "black";
    });

    getElement("#roll").addEventListener("click", () => {
        // roll, check if users wins or loses
        const result = game.rollDice();

        // update page
        getElement("#current_roll").textContent = result.total;
        getElement("#point").textContent = result.point || 0;
        getElement("#message").textContent = result.message;
        getElement("#message").style.color = result.isGameOver ? "red" : "black";

        if (result.isGameOver) {
            getElement("#roll").disabled = true;
            getElement("#new_game").disabled = false;
        }
    });
});
