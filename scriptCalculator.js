
/* Pseudo-Code for Calculator
breaking it down....

1) When I click a number, that number is displayed on the result container...
    if I hit another number then it will add number to end of the first number creating a new value... 

    create a function that will concatenate all the integers pressed until a non-number pressed which will store last value as variable (? should i put into an array? )

    true as long as I don't hit a non-number button...
    
       else if the user hits an operation... then value is displayed until another number is chosen which then stores previous number and allows user to buildt he new number and adds to the end of the previous number as long as number button pressed.


    if user hit the del button, the previous number displayed will be erased and 0 will be displayed....

 
    continues as long as operation buttons are pressed and numbers pressed.
    
    once = button pressed, previous stored values and operations execute to calculate new value which is displayed on the result display


*/

const oneB = document.getElementById('1')
const twoB = document.getElementById('2')
const threeB = document.getElementById('3')
const fourB = document.getElementById('4')
const fiveB = document.getElementById('5')
const sixB = document.getElementById('6')
const sevenB = document.getElementById('7')
const eightB = document.getElementById('8')
const nineB = document.getElementById('9')
const zeroB = document.getElementById('0')
const dotB = document.getElementById('dot')
let display = document.getElementById('display')
let result = document.getElementById('result')


// Stringing numerical values for display
let value1 = '';
// number for array
let number = '';
display.textContent = '0'



oneB.addEventListener('click', () => {
    if (display.textContent === '0') {
        display.textContent = '1'
    }
    else {
        value1 = '1'
        console.log(value1)
        display.textContent = display.textContent + value1
    }

    number += '1'
});

twoB.addEventListener('click', () => {
    if (display.textContent === '0') {
        display.textContent = '2'
    }
    else {
        value1 = '2'
        console.log(value1)
        display.textContent = display.textContent + value1
    }
    number +='2'
});

threeB.addEventListener('click', () => {
    if (display.textContent === '0') {
        display.textContent = '3'
    }
    else {
        value1 = '3'
        console.log(value1)
        display.textContent = display.textContent + value1
    }
    number +='3'
});

fourB.addEventListener('click', () => {
    if (display.textContent === '0') {
        display.textContent = '4'
    }
    else {
        value1 = '4'
        console.log(value1)
        display.textContent = display.textContent + value1
    }
    number +='4'
});

fiveB.addEventListener('click', () => {
    if (display.textContent === '0') {
        display.textContent = '95'
    }
    else {
        value1 = '5'
        console.log(value1)
        display.textContent = display.textContent + value1
    }
    number +='5'
});

sixB.addEventListener('click', () => {
    if (display.textContent === '0') {
        display.textContent = '6'
    }
    else {
        value1 = '6'
        console.log(value1)
        display.textContent = display.textContent + value1
    }
    number +='6'
});

sevenB.addEventListener('click', () => {
    if (display.textContent === '0') {
        display.textContent = '7'
    }
    else {
        value1 = '7'
        console.log(value1)
        display.textContent = display.textContent + value1
    }
    number +='7'
});

eightB.addEventListener('click', () => {
    if (display.textContent === '0') {
        display.textContent = '8'
    }
    else {
        value1 = '8'
        console.log(value1)
        display.textContent = display.textContent + value1
    }
    number +='8'
});

nineB.addEventListener('click', () => {
    if (display.textContent === '0') {
        display.textContent = '9'
    }
    else {
        value1 = '9'
        console.log(value1)
        display.textContent = display.textContent + value1
    }
    number +='9'
});

zeroB.addEventListener('click', () => {
    if (display.textContent === '0') {
        display.textContent = 0
    }
    else {
        value1 = '0'
        console.log(value1)
        display.textContent = display.textContent + value1
    }
    number +='0'
});

dotB.addEventListener('click', () => {
    if (value1 === '') {
        value1 = '0.';
    }
    else {
        value1 = '.';
        display.textContent = display.textContent + value1
    }
    
});

//Storing the value after + - x or divie hit

const addB = document.getElementById('add');
const subB = document.getElementById('sub');
const multB = document.getElementById('mult');
const divideB = document.getElementById('divide');
const equalB = document.getElementById('equals')
const clearB = document.getElementById('clear')
let numberList = []
let operationList = []

// converts string to number
function convertToInt(x) {
    let numb = parseInt(number)
    value1 = ''
    return numb
}


addB.addEventListener('click', () => {
    const addSymbol = '+';
    display.textContent = display.textContent + ' + '
    numberList.push(convertToInt(number))
    operationList.push('+')
    value1 = ''
    number =''
})

subB.addEventListener('click', () => {
    display.textContent = display.textContent + ' - '
    numberList.push(convertToInt(number))
    operationList.push('-')
    value1 = ''
    number =''
})

multB.addEventListener('click', () => {
    const multSymbol = '×';
    display.textContent = display.textContent + ' × '
    numberList.push(convertToInt(number))
    operationList.push('*')
    value1 = ''
    number=''
})

divideB.addEventListener('click', () => {
    display.textContent = display.textContent + ' ÷ '
    numberList.push(convertToInt(number));
    operationList.push('/')
    value1 = ''
    number = ''
})





// Clear: resets display to display 0, resets lists
const clear = clearB.addEventListener('click', () => {
    value1 = '0'
    number = ''
    display.textContent = value1
    numberList = []
    operationList = []
    console.log(numberList)
})

equalB.addEventListener('click', () => {
    console.log(display.textContent)

    numberList.push(convertToInt(number))
    console.log(numberList)
    console.log(operationList)
    //evaluate(numberList,operationList)
})

function operation(arrayNumbs, arrayOps) {
    
}


//function evaluate(numbers, operations)


// addB.onclick = function() {
//     console.log('add button clicked')
//     let firstNumb = parseInt(value1)
//     numberList.push(firstNumb)
//     value1 = ''
//     console.log(numberList)
//     if (numberList.length > 1) {
//         let add = numberList.reduce((a, b) => a + b)
//         console.log(add)
//         display.textContent = add
//     }
// }



function sum(a, b) {
    return a + b
}


// equalB.onclick = function () {
//     console.log('equal button clicked')
//     console.log(sum(numberList[0], numberList[1]))
//     let secondNumb = parseInt(value1)
//     numberList.push(secondNumb)
//     let sumT = sum(numberList[0], numberList[1])
//     display.textContent = sumT
// };





// Multiplication
// function mult(array) {
//     console.log(numberList)
//     const multiply = array.reduce((accumlator, nextNumber) => accumlator * nextNumber, 1)
//     console.log('should multiply numbers')
//     console.log(multiply)
//     display.textContent = multiply
//}

// multB.addEventListener('click', () => {
//     console.log('mult button clicked');
//     numberList.push(convertToStr(value1));
//     mult(numberList);
// }) 


