const PlANETS_YEARS = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};
export function age(planet: string, seconds: number): number {
  let diff = seconds * 1000;
  let year_miliseconds = 31557600000;
  let planet_mls =
    (PlANETS_YEARS as { [key: string]: number })[planet] * year_miliseconds;
  return parseFloat((diff / planet_mls).toFixed(2));
}
