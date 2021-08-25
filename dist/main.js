const calculator = document.querySelector(".calculator");
const modeBtn = document.querySelector(".mode");
const modeBall = document.querySelector(".mode__ball");
const input = document.querySelector(".calculator__input");
const output = document.querySelector(".calculator__output");
const clear = document.querySelector("#clear");
const del = document.querySelector("#del");
const equal = document.querySelector("#equal");
const operands = document.querySelectorAll(".operands");
const numbers = document.querySelectorAll(".numbers");
const body = document.getElementsByTagName("BODY")[0];

modeBtn.addEventListener("click", () => {
  calculator.classList.toggle("dark");
  modeBall.classList.toggle("active");
  if (calculator.classList.contains("dark")) {
    body.style.backgroundColor = "hsl(0, 0%, 10%)";
  } else {
    body.style.backgroundColor = "hsl(0, 0%, 95%)";
  }
});

let currentInput;
let currentOutput;
let result;

// logic behind delete button
del.addEventListener("click", () => {
  if (input.innerHTML) {
    input.innerHTML = input.innerHTML.slice(0, -1);
  }
});

// logic behind equal sign
equal.addEventListener("click", () => {
  if (currentInput) {
    input.innerHTML = eval(output.innerHTML + currentInput);
    output.innerHTML = "";
    currentOutput = "";
    currentInput = "";
  }
});

clear.addEventListener("click", () => {
  input.innerHTML = "";
  output.innerHTML = "";
  currentInput = "";
});

// looping and displaying every number individually
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", () => {
    let num = numbers[i].innerHTML;
    currentInput = input.innerHTML + num;
    input.innerHTML = currentInput;
  });
}

// looping through operands and applying logic
for (let i = 0; i < operands.length; i++) {
  operands[i].addEventListener("click", () => {
    let operand = operands[i].innerHTML;

    if (input.innerHTML) {
      currentInput = input.innerHTML;
    } else {
      console.log("theres no inputinnerhtml");
    }

    if (currentInput) {
      if (operand) {
        if (output.innerHTML) {
          result = eval(output.innerHTML + currentInput);
          output.innerHTML = result + operand;
          currentInput = "";
          input.innerHTML = "";
        } else {
          output.innerHTML = currentInput + operand;
          currentOutput = currentInput;
          currentInput = "";
          input.innerHTML = "";
        }
      }
    } else {
      console.log("there is no input");
    }
  });
}
