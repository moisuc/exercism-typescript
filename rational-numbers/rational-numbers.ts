export class Rational {
  numerator: number;
  denominator: number;
  constructor(numerator: number, denominator: number) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

  add(other: Rational): Rational {
    const numerator =
      this.numerator * other.denominator + other.numerator * this.denominator;
    const denominator = this.denominator * other.denominator;
    return new Rational(numerator, denominator).reduce();
  }

  sub(other: Rational): Rational {
    const numerator =
      this.numerator * other.denominator - other.numerator * this.denominator;
    const denominator = this.denominator * other.denominator;
    return new Rational(numerator, denominator).reduce();
  }

  mul(other: Rational): Rational {
    return new Rational(
      this.numerator * other.numerator,
      this.denominator * other.denominator
    );
  }

  div(other: Rational): Rational {
    return new Rational(
      this.numerator * other.denominator,
      other.denominator * this.denominator
    );
  }

  abs(): Rational {
    const numerator = Math.abs(this.numerator);
    const denominator = Math.abs(this.denominator);
    return new Rational(numerator, denominator);
  }

  exprational(exponent: number) {
    if (exponent > 0) {
      return new Rational(
        this.numerator ** exponent,
        this.denominator ** exponent
      );
    } else {
      return new Rational(
        this.denominator ** Math.abs(exponent),
        this.numerator ** Math.abs(exponent)
      );
    }
  }

  expreal(n: number): Rational {
    return new Rational(this.numerator ** n, this.denominator ** n).reduce();
  }
  gcd(a: number, b: number): number {
    if (b === 0) {
      return a;
    }
    return this.gcd(b, a % b);
  }

  reduce() {
    let gcd = this.gcd(this.numerator, this.denominator);
    return new Rational(this.numerator / gcd, this.denominator / gcd);
  }
}
