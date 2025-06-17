import { Dob } from "./dob.js";

export class Contact {
    constructor(name, email, phone, zip, dobStr) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.zip = zip;
        this.dob = new Dob(dobStr);
    }

    isValid() {
        return (
            this.name &&
            (this.email || this.phone) &&
            /^\d{5}$/.test(this.zip) &&
            this.dob.isValid() &&
            this.dob.isInPast()
        );
    }

    toJSON() {
        return {
            name: this.name,
            email: this.email,
            phone: this.phone,
            zip: this.zip,
            dob: this.dob.toISOString()
        };
    }

    static fromJSON(json) {
        return new Contact(json.name, json.email, json.phone, json.zip, json.dob);
    }
}
