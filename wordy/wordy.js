"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.answer = void 0;
var OPERATORS = {
    plus: "+",
    minus: "-",
    multiplied: "*",
    divided: "/",
};
var answer = function (question) {
    question = question
        .replace("What is", "")
        .replaceAll("by ", "")
        .replace("?", "")
        .trim();
    if (question == "") {
        throw new Error("Syntax error");
    }
    if (/cubed/.test(question)) {
        throw new Error("Unknown operation");
    }
    if (!/\d/.test(question)) {
        throw new Error("Unknown operation");
    }
    try {
    }
    catch (error) {
        throw new Error("Unknown operation");
    }
    var operationStack = [];
    question.split(" ").forEach(function (value, index) {
        if (/\d/.test(value)) {
            operationStack.push(parseInt(value));
        }
        else {
            operationStack.push(OPERATORS[value]);
        }
    });
    if (operationStack.length % 2 == 0) {
        throw new Error("Syntax error");
    }
    var result = 0;
    var operation = "";
    operationStack.forEach(function (value, index) {
        if (index % 2 == 0 && typeof value !== "number") {
            throw new Error("Syntax error");
        }
        else if (index % 2 == 1 && typeof value === "number") {
            throw new Error("Syntax error");
        }
        if (typeof value === "number") {
            if (operation === "") {
                result = value;
            }
            else {
                switch (operation) {
                    case "+":
                        result += value;
                        break;
                    case "-":
                        result -= value;
                        break;
                    case "*":
                        result *= value;
                        break;
                    case "/":
                        result /= value;
                        break;
                }
            }
        }
        else {
            operation = value;
        }
    });
    return result;
};
exports.answer = answer;
// console.log(answer("What is 1 plus?"));
