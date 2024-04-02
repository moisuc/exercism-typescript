export class SimpleCipher {
  alphabet: string;
  key: string = "";
  constructor(key?: string) {
    this.alphabet = "abcdefghijklmnopqrstuvwxyz";
    if (key === undefined) {
      this.key = this.generateKey();
    } else {
      this.key = key;
    }
  }

  generateKey(length = 100): string {
    return Array.from(
      { length },
      () => this.alphabet[Math.floor(Math.random() * this.alphabet.length)]
    ).join("");
  }

  encode(input: string): string {
    let encoded: string = "";
    if (this.key.length < input.length) {
      this.matchKeyLength(input.length);
    }

    for (let i = 0; i < input.length; i++) {
      let offset = this.alphabet.indexOf(this.key[i]);
      let letterPosition = this.alphabet.indexOf(input[i]);
      let sum = letterPosition + offset;
      if (sum >= 26) {
        sum = sum - 26;
      }
      encoded += this.alphabet.at(sum);
    }
    return encoded;
  }

  decode(encoded: string): string {
    let decoded: string = "";
    if (this.key.length < encoded.length) {
      this.matchKeyLength(encoded.length);
    }
    for (let i = 0; i < encoded.length; i++) {
      let offset = this.alphabet.indexOf(this.key[i]);
      let letterPosition = this.alphabet.indexOf(encoded[i]);
      decoded += this.alphabet.at(letterPosition - offset);
    }

    return decoded;
  }
  matchKeyLength(length: number) {
    while (this.key.length < length) {
      this.key += this.key;
    }
  }
}
