// lib_dice.js
// Dice and Die classes

export class Die {
    constructor(sides = 6) {
        this.sides = sides;
        this.value = 1;
    }

    roll() {
        this.value = Math.floor(Math.random() * this.sides) + 1;
        return this.value;
    }
}

export class Dice {
    constructor() {
        this.die1 = new Die();
        this.die2 = new Die();
    }

    roll() {
        const value1 = this.die1.roll();
        const value2 = this.die2.roll();
        return {
            value1,
            value2,
            total: value1 + value2
        };
    }
}
