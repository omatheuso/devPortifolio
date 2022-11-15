const functionButtons = document.querySelectorAll(['.buttons__clear', '.buttons__backspace', '.buttons__operation'])
const numericButtons = document.querySelectorAll('.buttons__numeric')
const display = document.querySelector('.calculator--display')

const math = ['+', '-', '×', '÷']
const operators = ['C', '←', '=']

let equation = ''
let currentNumber = '0'
let equationResult = ''

numericButtons.forEach(
    el => {
        el.addEventListener('click', () => {
            updateCurrentNumber (el.textContent)
            updateDisplay ()
        })
    }
)

functionButtons.forEach(
    el => {
        el.addEventListener('click', () => {
            switch (el.textContent) {
                case 'C':
                    clearAll()
                    updateDisplay ()
                    break
                case '←':
                    backspace()
                    updateDisplay ()
                    break
                case '=':
                    solveMath()
                    updateDisplay ()
                    break
                case '+':
                case '-':
                case '×':
                case '÷':
                    addCurrentNumToEquation(el.textContent)
                    updateDisplay()
                    break
            }
        })
    }
)

function updateDisplay () {
    display.innerHTML = String(currentNumber).slice(0,10)
}

function updateCurrentNumber (value) {
    if (currentNumber === '0') {
        currentNumber = value
    }
    else if (equationResult !== '') {
        currentNumber = ''
        equationResult = ''
        currentNumber += value
    }
    else {
        currentNumber += value
    }
}

function clearAll () {
    equation = ''
    equationResult = ''
    currentNumber = ''
}

function backspace () {
    equation = equation.slice(0,-1)
    currentNumber = currentNumber.slice(0,-1)
}

function addCurrentNumToEquation (value) {
    if (equation.includes('-') || equation.includes('+') || equation.includes('×') || equation.includes('÷')) {
        solveMath()
        equation = currentNumber + value
    }
    else {
        equation = currentNumber + value
        currentNumber = ''
    }

}

function solveMath () {
    equation += currentNumber
    equationResult = eval(equation.replace('×','*').replace('÷','/'))
    currentNumber = equationResult
    equation = ''
}
