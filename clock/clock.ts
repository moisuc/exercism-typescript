/* eslint-disable default-param-last */
export class Clock {
  hour: number;
  minutes: number;
  constructor(hour: number = 0, minutes?: number) {
    let date = new Date(2024, 3, 18, hour, minutes ?? 0);

    this.hour = date.getHours();
    this.minutes = date.getMinutes();
  }

  toString(): string {
    return (
      (this.hour < 10 ? "0" + this.hour.toString() : this.hour.toString()) +
      ":" +
      (this.minutes < 10
        ? "0" + this.minutes.toString()
        : this.minutes.toString())
    );
  }

  plus(minutes: number): Clock {
    this.minutes += minutes;
    let date = new Date(2024, 3, 18, this.hour, this.minutes);
    this.hour = date.getHours();
    this.minutes = date.getMinutes();
    return this;
  }

  minus(minutes: number): Clock {
    this.minutes -= minutes;
    let date = new Date(2024, 3, 18, this.hour, this.minutes);
    this.hour = date.getHours();
    this.minutes = date.getMinutes();
    return this;
  }

  equals(other: Clock): boolean {
    return other.hour === this.hour && other.minutes === this.minutes;
  }
}

console.log(new Clock(8, -4820).toString());
