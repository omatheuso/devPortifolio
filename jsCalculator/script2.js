const btnClassList = ['.buttons__clear', '.buttons__backspace', '.buttons__operation', '.buttons__numeric']
const allButtons = document.querySelectorAll(btnClassList)
const display = document.querySelector('.calculator--display')

let btnToCalculate = ''
let btnToDisplay= '0'
let calculatorResult = ''

function showDisplay () {
    display.innerText = btnToDisplay
}

function toCalculate (pressedBtn) {
    btnToCalculate += pressedBtn
}

function numToDisplay (pressedBtn) {
    if (btnToDisplay === '0') {
        btnToDisplay = pressedBtn
    }
    else {
        btnToDisplay += pressedBtn
    }
}

function operatorClicked (pressedBtn){
    let operands = ['+', '-', '×', '÷']
    if (operands.indexOf(pressedBtn) >= 0) {
        btnToDisplay = ''
    }
    if (pressedBtn === 'C') {
        btnToDisplay = ''
        btnToCalculate = ''
    }
    if (pressedBtn === '←') {
        btnToDisplay = btnToDisplay.slice(0,-2)
        btnToCalculate = btnToCalculate.slice(0,-2)
    }
    if (pressedBtn === '=') {
        btnToDisplay = String(calculatorResult).slice(0, 10)
        btnToCalculate = ''
    }
}

function calculate (pressedBtn) {
    if (pressedBtn === '=') {
        try {
            changedSymbols = btnToCalculate.replace('×','*').replace('÷','/').slice(0,-1)
            calculatorResult = eval(changedSymbols)
        }
        catch{
            display.innerText = 'ERROR'
        }
        btnToCalculate = ''
    }
}

function action () {
    allButtons.forEach(
        el => {
            el.addEventListener('click', () => {
                toCalculate(el.textContent)
                calculate(el.textContent)
                numToDisplay(el.textContent)
                operatorClicked(el.textContent)
                showDisplay()
            })
        }
    )
}

action()
