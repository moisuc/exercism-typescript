export function steps(count: number): number {
  let steps = 0;

  if (count <= 0) {
    throw new Error("Only positive integers are allowed");
  }
  if (Number.isInteger(count) === false) {
    throw new Error("Only positive integers are allowed");
  }

  while (count !== 1) {
    if (count % 2 === 0) {
      count /= 2;
    } else {
      count = count * 3 + 1;
    }
    steps++;
  }
  return steps;
}
