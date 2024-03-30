const WORDS = ["wink", "double blink", "close your eyes", "jump", "reverse"];
export function commands(decimal: number): string[] {
  let bin = decimal.toString(2);
  let isReverse: boolean = false;
  let actions: string[] = [];
  let j = 0;
  let i = bin.length - 1;
  if (bin.length === 5 && Number(bin[0]) === 1) {
    isReverse = true;
    bin = "0" + bin.substring(1);
  }
  for (; i >= 0; i--) {
    if (Number(bin[i]) === 1) {
      actions.push(WORDS[j]);
    }
    j++;
  }
  return isReverse ? actions.reverse() : actions;
}
