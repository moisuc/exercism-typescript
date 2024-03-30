export class Rational {
    numerator;
    denominator;
    constructor(numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
    }
    add(other) {
        const numerator = this.numerator * other.denominator + other.numerator * this.denominator;
        const denominator = this.denominator * other.denominator;
        return new Rational(numerator, denominator).reduce();
    }
    sub(other) {
        const numerator = this.numerator * other.denominator - other.numerator * this.denominator;
        const denominator = this.denominator * other.denominator;
        return new Rational(numerator, denominator).reduce();
    }
    mul(other) {
        return new Rational(this.numerator * other.numerator, this.denominator * other.denominator);
    }
    div(other) {
        return new Rational(this.numerator * other.denominator, other.denominator * this.denominator);
    }
    abs() {
        const numerator = Math.abs(this.numerator);
        const denominator = Math.abs(this.denominator);
        return new Rational(numerator, denominator);
    }
    exprational(exponent) {
        return new Rational(this.numerator ** exponent, this.denominator ** exponent);
    }
    expreal(n) {
        let numerator;
        let denominator;
        if (n % 1 !== 0) {
            // n is floating point
            // (a^x)/(b^x)
            numerator = this.numerator ** n;
            denominator = this.denominator ** n;
        }
        else {
            if (n >= 0) {
                // (a^n)/(b^n)
                numerator = this.numerator ** n;
                denominator = this.denominator ** n;
            }
            else {
                // (b^m)/(a^m) where m = |n|
                const m = Math.abs(n);
                numerator = this.denominator ** m;
                denominator = this.numerator ** m;
            }
        }
        return new Rational(numerator, denominator);
    }
    reduce() {
        let a = this.numerator;
        let b = this.denominator;
        while (b) {
            let c = a % b;
            a = b;
            b = c;
        }
        return new Rational(this.numerator / a, this.denominator / a);
    }
}
