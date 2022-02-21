
let display = document.querySelector('.display')
let buffer = ""
let operand1 = ""
let operator = ""
let firstOperator = true
let lastCharOperator = true
let clickedEqual = false
const maxChars = 9

let numbers = document.querySelectorAll('.number')
numbers.forEach((number) => {
    number.addEventListener('click', () => {

        if (buffer.length < maxChars) {
            storeInput(number.innerHTML)
        }
        showNumbers(buffer)
        lastCharOperator = false
    })
})

let operators = document.querySelectorAll('.operator')
operators.forEach((op) => {
    op.addEventListener('click', () => {
        // Update Operator if wrongly clicked or just evaluated
        if (lastCharOperator == true || clickedEqual == true) {
            operator = op.innerHTML
            clickedEqual = false
        }
        if (operator == "") {

            operand1 = buffer
            buffer = ""
            operator = op.innerHTML
            lastCharOperator = true
        } else if (buffer != "") {
            operand1 = operate(operator, operand1, buffer)
            buffer = ""
            operator = op.innerHTML
            lastCharOperator = true
            showNumbers(operand1)
        }
    })
})

let equal = document.querySelector('#equal')
equal.addEventListener('click', () => {
    if (operand1 != "" && buffer != "" && operator != "") {
        operand1 = operate(operator, operand1, buffer)
        buffer = ""
        showNumbers(operand1)
        clickedEqual = true
    }

})

let clear = document.querySelector('#clear')
clear.addEventListener('click', () => {
    operand1 = ""
    buffer = ""
    operator = ""
    lastCharOperator = true
    clickedEqual = false
    showNumbers(buffer)
})

let del = document.querySelector('#delete')
del.addEventListener('click', () => {
    if (clickedEqual == true) {
        operand1 = ""
        buffer = ""
        operator = ""
        lastCharOperator = true
        clickedEqual = false
        showNumbers(buffer)
    }
    buffer = buffer.slice(0, -1)
    showNumbers(buffer)
})




function showNumbers(string) {
    if (string == "") {
        string = "0"
    }
    display.textContent = string
}

function storeInput(string) {
    buffer += string
}

// Define the Operations to calculate
function operate(operator, num1, num2) {
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    switch (operator) {
        case "+":
            return num1 + num2
            break
        case "-":
            return num1 - num2
            break
        case "/":
            // Rule out Division by Zero
            if (num2 == 0) {
                return "Err. Div0"
            }
            return num1 / num2
            break
        case "*":
            return num1 * num2
            break
    }
}

showNumbers("0")