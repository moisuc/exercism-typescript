"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.count = void 0;
function count(sentence) {
    var words = sentence.toLowerCase().match(/\b\w+\b/g);
    if (words) {
        for (var i = 1; i < words.length; i++) {
            if (words[i] == "t" || words[i] == "re") {
                words[i - 1] += "'" + words[i];
                delete words[i];
            }
        }
    }
    var wordCount = new Map();
    if (words) {
        words.forEach(function (word) {
            var count = wordCount.get(word);
            if (count) {
                wordCount.set(word, count + 1);
            }
            else {
                wordCount.set(word, 1);
            }
        });
    }
    return wordCount;
}
exports.count = count;
console.log(count("'First: don't laugh. Then: don't cry. You're getting it.'"));
