"use strict";

class Trip {
    constructor(destination, miles, gallons) {
        this.destination = destination;
        this.miles = parseFloat(miles);
        this.gallons = parseFloat(gallons);
    }
    get mpg() {                  // a read-only property        
        return this.miles / this.gallons;
    }

    toString() {                 // override existing method
        const mpg = this.mpg.toFixed(1);
        return `${this.destination}: Miles - ${this.miles}; MPG - ${mpg}`;
    }
}

export { Trip };  // export the Trip class for use in other modules
export default Trip;  // also export as default for convenience