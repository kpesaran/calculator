

const calcButton = document.querySelector('.all-buttons');
const expression = 0
const userInput = document.querySelector('#display');
const calculator = document.querySelector('.all-buttons');
const result = document.querySelector('#result');
let arrayDataType = []


calcButton.addEventListener('click', (event) => {
    //if (!event.target.closest('button')) return;
    console.log(event)
    const currentB = event.target;
    buttonValue = currentB.textContent;

    const { type } = currentB.dataset;
    arrayDataType.push(type)
    const previousKeyType = arrayDataType[arrayDataType.length - 2]

    
    let displayEquation = userInput.textContent;
    // When first getting to page
    if (type === 'number' && (previousKeyType === 'number' || previousKeyType === undefined || previousKeyType==='backspace')) {
        userInput.textContent += buttonValue
        displayEquation += buttonValue
    }

 
    if (type === 'number' && previousKeyType === 'operator') {
        userInput.textContent += ' ' + buttonValue
    }

    if (type === 'operator' && (previousKeyType === 'number'|| previousKeyType === 'backspace' )) {
        userInput.textContent = displayEquation + ' ' + buttonValue
    }

    if (type === 'reset') {
        userInput.textContent = ''
        arrayDataType = []
    }
    if (type === 'backspace') {
        if (previousKeyType ==='operator') {
            userInput.textContent = displayEquation.substring(0, displayEquation.length -2)
        }
        else if (previousKeyType === 'number') {
            userInput.textContent = displayEquation.substring(0, displayEquation.length - 1)
            arrayDataType = []
        }
    }
    if (type === 'equals') {
        result.textContent = convertToEquation(expression)
    }    
});

function evaluate(firstNumber, currentOperator, secondNumber) {

    if (currentOperator === '+') {
        let resultValue = Number(firstNumber) + Number(secondNumber);
        console.log(resultValue)
        return resultValue
    }
    if (currentOperator === '-') {
        let resultValue = Number(firstNumber) - Number(secondNumber);
        console.log(resultValue)
        return resultValue
    }
    if (currentOperator === '÷') {
        let resultValue = Number(firstNumber) / Number(secondNumber);
        console.log(resultValue)
        return resultValue
    }
    if (currentOperator === '×') {
        let resultValue = Number(firstNumber) * Number(secondNumber);
        console.log(resultValue)
        return resultValue
    }
}


function convertToEquation(equation) {
    let firstNumber;
    let secondNumber;
    let currentOperator;
    
    let elementArray = userInput.textContent.split(' ');
    console.log(elementArray)
    
    let operations = ['÷', '×', '+', '-']
    let formula = 0
    let value = 0
    let operatorIndex
    

    for (let i = 0; i < operations.length; i++) {
       
        while (elementArray.includes(operations[i])) {
            operatorIndex = elementArray.findIndex(element => element === operations[i])
            console.log(operations[i])
            console.log(operatorIndex)

                
                

            if (operatorIndex !== -1) {
                console.log(operatorIndex)
                firstNumber = elementArray[operatorIndex - 1]
                currentOperator = elementArray[operatorIndex]
                secondNumber = elementArray[operatorIndex + 1]
                console.log(firstNumber)
                console.log(secondNumber)
                console.log(currentOperator)
                value = evaluate(firstNumber, currentOperator, secondNumber)
            }
                
            if (operatorIndex > 0) {
                console.log(value)
                elementArray.splice(operatorIndex - 1, 3, value)
                console.log(elementArray)
            }
        }
    }
    console.log(elementArray)
    
    return value
}