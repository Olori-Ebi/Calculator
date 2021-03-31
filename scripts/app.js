const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Get input from input field
function getUserInput () {
  return +userInput.value;
}

// Remove input from input field
function removeUserInput () {
  return (userInput.value = '');
}

// Generates and writes calculation logs
function createAndWriteOutput (operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult (currentResult, calcDescription); // From info.js file
}

function writeToLog (
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult,
    number: operationNumber,
    result: newResult,
  };

  logEntries.push (logEntry);
  console.log (logEntries);
}

function add () {
  const enteredNumber = getUserInput ();
  removeUserInput ();
  const initialResult = currentResult;
  currentResult += +enteredNumber;
  createAndWriteOutput ('+', initialResult, enteredNumber);

  writeToLog ('ADD', initialResult, enteredNumber, currentResult);
}

function subtract () {
  const enteredNumber = getUserInput ();
  removeUserInput ();
  const initialResult = currentResult;
  currentResult -= +enteredNumber;
  createAndWriteOutput ('-', initialResult, enteredNumber);

  writeToLog ('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply () {
  const enteredNumber = getUserInput ();
  removeUserInput ();
  const initialResult = currentResult;
  currentResult *= +enteredNumber;
  createAndWriteOutput ('*', initialResult, enteredNumber);

  writeToLog ('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide () {
  const enteredNumber = getUserInput ();
  removeUserInput ();
  const initialResult = currentResult;
  currentResult /= +enteredNumber;
  createAndWriteOutput ('/', initialResult, enteredNumber);

  writeToLog ('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener ('click', add);
subtractBtn.addEventListener ('click', subtract);
multiplyBtn.addEventListener ('click', multiply);
divideBtn.addEventListener ('click', divide);
