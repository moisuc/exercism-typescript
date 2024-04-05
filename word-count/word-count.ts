export function count(sentence: string): Map<string, number> {
  let words = sentence.toLowerCase().match(/\b\w+\b/g);
  if (words) {
    for (let i = 1; i < words.length; i++) {
      if (words[i] == "t" || words[i] == "re") {
        words[i - 1] += "'" + words[i];
        delete words[i];
      }
    }
  }

  let wordCount = new Map<string, number>();
  if (words) {
    words.forEach((word) => {
      let count = wordCount.get(word);
      if (count) {
        wordCount.set(word, count + 1);
      } else {
        wordCount.set(word, 1);
      }
    });
  }
  return wordCount;
}

console.log(count("'First: don't laugh. Then: don't cry. You're getting it.'"));
