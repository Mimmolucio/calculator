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

// Initialize string to show on the display
let oper = ""
let displayString = ""
let secondNumber = ""


let display = document.querySelector('.display')

// Wire the number-keys and store as String
let buttons = document.querySelectorAll(".number")
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (displayString.length < 9) {
            if (oper != "") {
                secondNumber += button.innerHTML
            } else {
            displayString += button.innerHTML
            }
        }
        display.innerHTML = displayString
    }
    )
})

// Wire the Clear-key to clear the variable
let clear = document.querySelector("#clear")
clear.addEventListener('click', () => {
    displayString = ""
    operator = ""
    showNumbers()
})

// Wire the Delete-key to delete the last entered number
let del = document.querySelector('#delete')
del.addEventListener('click', () => {
    displayString = displayString.slice(0, -1)
    showNumbers()

})



// select operators
let operator = document.querySelectorAll('.operator')
operator.forEach((op), () => {
    op.addEventListener('click', () => {
        if (oper != "") {
            oper = op.innerHTML
            displayString = operate(oper, parseInt(displayString), parseInt(secondNumber))
        } else {
            oper = op.innerHTML
        }
        
    })
})

// select equal
let equal = document.querySelector('#equal')
    equal.addEventListener('click', () => {
        displayString = operate(oper, parseInt(displayString), parseInt(secondNumber))
})



showNumbers()



