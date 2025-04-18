let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = '';
let isNewInput = true;

function appendNumber(num) {
  if (display.innerText === '0' || isNewInput) {
    display.innerText = num;
    isNewInput = false;
  } else {
    display.innerText += num;
  }
  currentInput = display.innerText;
}

function appendOperation(op) {
  firstOperand = display.innerText;
  operator = op;
  isNewInput = true;
}

function calculateResult() {
  let result;
  let secondOperand = display.innerText;

  const a = parseFloat(firstOperand);
  const b = parseFloat(secondOperand);

  if (isNaN(a) || isNaN(b)) return;

  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = b !== 0 ? a / b : 'Error';
      break;
    case '%':
      result = a % b;
      break;
    case '**':
      result = a ** b;
      break;
    default:
      result = b;
  }

  display.innerText = result;
  isNewInput = true;
}

function clearDisplay() {
  display.innerText = '0';
  currentInput = '';
  operator = '';
  firstOperand = '';
  isNewInput = true;
}

function deleteLast() {
  if (display.innerText.length === 1 || isNewInput) {
    display.innerText = '0';
    isNewInput = true;
  } else {
    display.innerText = display.innerText.slice(0, -1);
  }
}