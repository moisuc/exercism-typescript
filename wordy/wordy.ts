const OPERATORS = {
  plus: "+",
  minus: "-",
  multiplied: "*",
  divided: "/",
};

export const answer = (question: string) => {
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
  } catch (error) {
    throw new Error("Unknown operation");
  }
  let operationStack: (number | string)[] = [];
  question.split(" ").forEach((value, index) => {
    if (/\d/.test(value)) {
      operationStack.push(parseInt(value));
    } else {
      operationStack.push(OPERATORS[value as keyof typeof OPERATORS]);
    }
  });
  if (operationStack.length % 2 == 0) {
    throw new Error("Syntax error");
  }
  let result = 0;
  let operation = "";

  operationStack.forEach((value, index) => {
    if (index % 2 == 0 && typeof value !== "number") {
      throw new Error("Syntax error");
    } else if (index % 2 == 1 && typeof value === "number") {
      throw new Error("Syntax error");
    }
    if (typeof value === "number") {
      if (operation === "") {
        result = value;
      } else {
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
    } else {
      operation = value;
    }
  });
  return result;
};

// console.log(answer("What is 1 plus?"));
