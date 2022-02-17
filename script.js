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
let displayString = ""

let display = document.querySelector('.display')

// Wire the number-keys and store as String
let buttons = document.querySelectorAll(".number")
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (displayString.length < 9) {
            displayString += button.innerHTML
        }
        display.innerHTML = displayString
    }
    )
})

// Wire the Clear-key to clear the variable
let clear = document.querySelector("#clear")
clear.addEventListener('click', () => {
    displayString = ""
    showNumbers()
})

// Wire the Delete-key to delete the last entered number
let del = document.querySelector('#delete')
del.addEventListener('click', () => {
    displayString = displayString.slice(0, -1)
    showNumbers()

})

showNumbers()



