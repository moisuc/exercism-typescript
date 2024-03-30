export function decodedValue(codes: string[]): number {
  let value: number = 0;

  value += COLORS.indexOf(codes[0]) * 10;
  value += COLORS.indexOf(codes[1]);

  return value;
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
