

const calcButton = document.querySelector('.all-buttons');
const expression = 0
const userInput = document.querySelector('#display');
const calculator = document.querySelector('.all-buttons');
const result = document.querySelector('#result');
let arrayDataType = []


calcButton.addEventListener('click', (event) => {
   
    //For specific button clicked
    const currentB = event.target;
    buttonValue = currentB.textContent;

    //variable that stores current type, pushes it to array so that previous key type is stored.
    const { type } = currentB.dataset;
    if (type !== undefined) {
        arrayDataType.push(type)
    }
    
    const previousKeyType = arrayDataType[arrayDataType.length - 2]
    
    let displayEquation = userInput.textContent;
    // allows user to connect to numbers 
    if (type === 'number' && (previousKeyType === 'number' || previousKeyType === undefined || previousKeyType==='backspace')) {
        userInput.textContent += buttonValue
        displayEquation += buttonValue
    }
    // adds space between number and operator
    if (type === 'number' && previousKeyType === 'operator') {
        userInput.textContent += ' ' + buttonValue
    }

    if (type === 'operator' && (previousKeyType === 'number'|| previousKeyType === 'backspace' )) {
        userInput.textContent = displayEquation + ' ' + buttonValue
    }
    if (type === 'number' && previousKeyType === 'backspace') {
        displayEquation = userInput.textContent + buttonValue
    }

    if (type === 'reset') {
        userInput.textContent = ''
        result.textContent = '0'
        arrayDataType = []
    }


    if (type === 'backspace') {
        if (previousKeyType ==='operator') {
            userInput.textContent = displayEquation.substring(0, displayEquation.length -2)
        }
        else if (previousKeyType === 'number') {
            userInput.textContent = displayEquation.substring(0, displayEquation.length - 1)
        }
        else if (previousKeyType === 'backspace') {
            if (displayEquation.endsWith('+') || displayEquation.endsWith('-') || displayEquation.endsWith('÷') || displayEquation.endsWith('×') || displayEquation.endsWith(' ')) {
                userInput.textContent = displayEquation.substring(0, displayEquation.length -2)
            }
        
            else  {
                userInput.textContent = displayEquation.substring(0, displayEquation.length - 1)
            }
        }
    }
    if (type === 'equals') {
        result.textContent = convertToEquation(expression)
        elementArray = [result.textContent]
    }
    
    if (previousKeyType === 'equals' && type === 'operator')
    {

        userInput.textContent = result.textContent + ' ' + buttonValue
    }
    
    console.log(arrayDataType)
    console.log(displayEquation)
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
        if (secondNumber === '0') {
            if (Number(firstNumber) > 0)
                return 'Infinity'
            else if (Number(firstNumber === 0)) {
                return 0
            }
            else return '-Infinity'
        }
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