export function decodedResistorValue(codes: string[]): string {
  let value: number =
    (COLORS.indexOf(codes[0]) * 10 + COLORS.indexOf(codes[1])) *
    10 ** COLORS.indexOf(codes[2]);
  let exponent = COLORS.indexOf(codes[2]);
  let prefix: string = "";

  if (value < 1000) {
    return "" + value + " ohms";
  }
  if (value < 10 ** 6) {
    value /= 10 ** 3;
    return "" + value + " kiloohms";
  }
  if (value < 10 ** 9) {
    value /= 10 ** 6;
    return "" + value + " megaohms";
  }
  value /= 10 ** 9;
  return "" + value + " gigaohms";
}

const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];
