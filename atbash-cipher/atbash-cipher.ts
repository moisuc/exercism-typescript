let alphabet = "abcdefghijklmnopqrstuvwxyz";
let reverseAlphabet = "zyxwvutsrqponmlkjihgfedcba";

export function encode(plainText: string): string {
  let cipher = "";
  let countGroups = 0;
  for (let i = 0; i < plainText.length; i++) {
    let char = plainText[i].toLowerCase();
    if (/[0-9]/i.test(char)) {
      cipher += char;
      countGroups++;
      continue;
    }
    if (!/[a-z]/i.test(char)) {
      continue;
    }

    if (countGroups == 5) {
      cipher += " ";
      countGroups = 0;
    }

    cipher += reverseAlphabet[alphabet.indexOf(char)];
    countGroups++;
  }
  return cipher;
}

export function decode(cipherText: string): string {
  let plain = "";
  for (let char of cipherText) {
    char = char.toLowerCase();
    if (/[0-9]/i.test(char)) {
      plain += char;
      continue;
    }
    if (!/[a-z]/i.test(char)) {
      continue;
    }
    plain += reverseAlphabet[alphabet.indexOf(char)];
  }
  return plain;
}
