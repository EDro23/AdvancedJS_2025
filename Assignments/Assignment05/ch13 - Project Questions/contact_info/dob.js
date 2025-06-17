export class Dob extends Date {
    constructor(dateStr) {
        super(dateStr + "T00:00:00");
    }

    isValid() {
        return this.toString() !== "Invalid Date";
    }

    isInPast() {
        const today = new Date();
        const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        return this < todayMidnight;
    }

    toFormattedString() {
        const y = this.getFullYear();
        const m = String(this.getMonth() + 1).padStart(2, '0');
        const d = String(this.getDate()).padStart(2, '0');
        return `${y}-${m}-${d}`;
    }
}