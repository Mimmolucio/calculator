let operand1 = ""
let operand2 = ""
let oper = ""
let displayString = ""
let currentOperand = 1

let display = document.querySelector('.display')

// Define the Operations to calculate
function operate(operator, num1, num2) {
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

// Funtion to show variable on display
function showNumbers() {
    display.innerHTML = displayString

    if (displayString == "") {
        display.innerHTML = "0"
    }
}

// Get input from buttons, store them in variable and display numbers
let buttons = document.querySelectorAll(".number")
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (displayString.length < 9) {
            if (oper != "") {
                operand2 += button.innerHTML
                displayString = operand2
                showNumbers()
                currentOperand = 2
            } else {
                operand1 += button.innerHTML
                displayString = operand1
                showNumbers()
                currentOperand = 1
            }
        }
    }
    )
})

// Wire the Clear-key to clear the variables
let clear = document.querySelector("#clear")
clear.addEventListener('click', () => {
    operand1 = ""
    operand2 = ""
    displayString = ""
    oper = ""
    currentOperand = 1
    showNumbers()
})

// Wire the Delete-key to delete the last entered number
let del = document.querySelector('#delete')
del.addEventListener('click', () => {
    displayString = displayString.slice(0, -1)
    if (currentOperand == 1) {
        operand1 = operand1.slice(0, -1)
    } else if (currentOperand == 2) {
        operand2 = operand2.slice(0, -1)
    }
    showNumbers()

})

// select operators
let operator = document.querySelectorAll('.operator')
operator.forEach((op) => {
    op.addEventListener('click', () => {
        if (oper != "") {
            operand1 = operate(oper, parseInt(operand1), parseInt(operand2))
            operand2 = ""
            displayString = operand1
            showNumbers()
            oper = op.innerHTML
        } else {
            oper = op.innerHTML
            currentOperand = 2
        }

    })
})

// select equal
let equal = document.querySelector('#equal')
equal.addEventListener('click', () => {
    operand1 = operate(oper, parseInt(operand1), parseInt(operand2))
    operand2 = ""
    displayString = operand1
    showNumbers()
    oper = ""

})



showNumbers()



