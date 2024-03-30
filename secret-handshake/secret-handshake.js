"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commands = void 0;
var WORDS = ["wink", "double blink", "close your eyes", "jump", "reverse"];
function commands(decimal) {
    var bin = decimal.toString(2);
    var isReverse = false;
    var actions = [];
    var j = 0;
    var i = bin.length - 1;
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
exports.commands = commands;
