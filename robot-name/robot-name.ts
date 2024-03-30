const nameCache = new Set();
export class Robot {
  private _name: string;
  constructor() {
    this._name = this.generateName();
  }

  public get name(): string {
    return this._name;
  }
  generateName() {
    return this.getRandomLetters() + this.getRandomArbitrary();
  }

  resetName() {
    let name = this.generateName();
    while (nameCache.has(name)) {
      name = this.generateName();
    }
    nameCache.add(name);
    this._name = name;
  }
  getRandomLetters() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < 2; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
  getRandomArbitrary() {
    return Math.floor(Math.random() * (999 - 100) + 100);
  }
  public static releaseNames() {
    nameCache.clear();
  }
}
