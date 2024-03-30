export function isLeap(year: number): boolean {
  if (year % 100 === 0) {
    year /= 100;
  }
  return year % 4 === 0;
}
