// lib_street_craps.js
// import statement(s)
import { Dice } from "./lib_dice.js";

// private
// (nothing needed here for now)

// public
export class StreetCraps {
    constructor() {
        this.dice = new Dice();
        this.point = 0;
        this.isGameOver = false;
        this.message = "";
    }

    newGame() {
        this.point = 0;
        this.isGameOver = false;
        this.message = "";
    }

    rollDice() {
        const { value1, value2, total } = this.dice.roll();

        if (this.point === 0) {
            // Come out roll
            if (total === 7 || total === 11) {
                this.message = `You rolled ${total}. You win! 🎉`;
                this.isGameOver = true;
            } else if (total === 2 || total === 3 || total === 12) {
                this.message = `You rolled ${total}. You lose. 💀`;
                this.isGameOver = true;
            } else {
                this.point = total;
                this.message = `You rolled ${total}. Point is set to ${total}. Keep rolling.`;
            }
        } else {
            // Point phase
            if (total === this.point) {
                this.message = `You rolled ${total} and matched your point. You win! 🎉`;
                this.isGameOver = true;
            } else if (total === 7) {
                this.message = `You rolled 7 before your point. You lose. 💀`;
                this.isGameOver = true;
            } else {
                this.message = `You rolled ${total}. Keep rolling.`;
            }
        }

        return {
            value1,
            value2,
            total,
            point: this.point,
            isGameOver: this.isGameOver,
            message: this.message
        };
    }
}
