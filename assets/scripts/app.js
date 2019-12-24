const defaultResult=0;
let currentResult=defaultResult;
let logEntries=[];

function getUserInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBefore, calcNumber) {
    const calcDesc=`${resultBefore} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDesc);
}

function writeToLog(operation, prevResult, calcNumber, newResult) {
  const logEntry={
    operation: operation,
    prevResult: prevResult,
    number: calcNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
    const enteredNumnber=getUserInput();
    const initialResult=currentResult;
    currentResult += enteredNumnber;
    createAndWriteOutput('+', initialResult, enteredNumnber);
    writeToLog('ADD', initialResult, enteredNumnber, currentResult);
}

function subtract() {
    const enteredNumnber=getUserInput();
    const initialResult=currentResult;
    currentResult -= enteredNumnber;
    createAndWriteOutput('-', initialResult, enteredNumnber);
    writeToLog('SUB', initialResult, enteredNumnber, currentResult);
}

function divide() {
    const enteredNumnber=getUserInput();
    const initialResult=currentResult;
    currentResult /= enteredNumnber;
    createAndWriteOutput('/', initialResult, enteredNumnber);
    writeToLog('DIVIDE', initialResult, enteredNumnber, currentResult);
}

function multiply() {
    const enteredNumnber=getUserInput();
    const initialResult=currentResult;
    currentResult *= enteredNumnber;
    createAndWriteOutput('*', initialResult, enteredNumnber);
    writeToLog('MULTIPLY', initialResult, enteredNumnber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
divideBtn.addEventListener('click', divide);
multiplyBtn.addEventListener('click', multiply);


