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

function calculateResult(calculationType) {
    if(
        calculationType!='ADD' &&
        calculationType!='SUB' &&
        calculationType!='DIVIDE' &&
        calculationType!='MULTIPLY'
    ) {
        return;
    }

    const enteredNumnber=getUserInput();
    const initialResult=currentResult;
    let mathOperator;
    if(calculationType=='ADD') {
        currentResult += enteredNumnber;
        mathOperator='+';
    } else if(calculationType=='SUB') {
        currentResult -=enteredNumnber;
        mathOperator='-';
    } else if(calculationType=='DIVIDE') {
        currentResult /=enteredNumnber;
        mathOperator='/';
    } else if(calculationType=='MULTIPLY') {
        currentResult *=enteredNumnber;
        mathOperator='*';
    }
    
    createAndWriteOutput(mathOperator, initialResult, enteredNumnber);
    writeToLog(calculationType, initialResult, enteredNumnber, currentResult);
}

function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUB');
}

function divide() {
    calculateResult('DIVIDE');
}

function multiply() {
    calculateResult('MULTIPLY');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
divideBtn.addEventListener('click', divide);
multiplyBtn.addEventListener('click', multiply);


