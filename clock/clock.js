/* eslint-disable default-param-last */
export class Clock {
    hour;
    minutes;
    constructor(hour = 0, minutes) {
        let date = new Date(2024, 3, 18, hour, minutes ?? 0);
        this.hour = date.getHours();
        this.minutes = date.getMinutes();
    }
    toString() {
        return ((this.hour < 10 ? "0" + this.hour.toString() : this.hour.toString()) +
            ":" +
            (this.minutes < 10
                ? "0" + this.minutes.toString()
                : this.minutes.toString()));
    }
    plus(minutes) {
        this.minutes += minutes;
        let date = new Date(2024, 3, 18, this.hour, this.minutes);
        this.hour = date.getHours();
        this.minutes = date.getMinutes();
        return this;
    }
    minus(minutes) {
        this.minutes -= minutes;
        let date = new Date(2024, 3, 18, this.hour, this.minutes);
        this.hour = date.getHours();
        this.minutes = date.getMinutes();
        return this;
    }
    equals(other) {
        return other.hour === this.hour && other.minutes === this.minutes;
    }
}
console.log(new Clock(8, -4820).toString());
