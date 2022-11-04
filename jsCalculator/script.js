const btnClassList = ['.buttons__clear', '.buttons__backspace', '.buttons__operation', '.buttons__numeric']

let display = document.querySelector('.calculator--display')
let firstNum = ''
let secondNum = ''
let result = ''

let numBtn = document.querySelectorAll('.buttons__numeric')
numBtn.forEach(
    el => {
        el.addEventListener('click', () => {
            numBtnPressed(el.textContent)
        })
    }
)

let operateBtn = document.querySelectorAll(['.buttons__clear', '.buttons__backspace', '.buttons__operation'])
operateBtn.forEach(
    el => {
        el.addEventListener('click', () => {
            operationBtnPressed(el.textContent)
        })
    }
)

function numBtnPressed(text) {
    console.log(text)

    display.innerText += text

    firstNum = display.innerText
}

function operationBtnPressed(text) {
    console.log(text)
    if (text === 'C') {
        display.innerText = ''
        firstNum = ''
        secondNum = ''
    }
    if (text === '←') {
        display.innerText = display.innerText.slice(0, -1)
    }

    if (text === '+') {
        display.innerText = ''
        display.innerText += text
        secondNum = display.innerText
        result = firstNum + secondNum
        display.innerText = result
    }

    if (text === '-') {
        display.innerText = ''
        display.innerText += text
        secondNum = display.innerText
        result = firstNum + secondNum
        display.innerText = result
    }
    if (text === '×') {
        display.innerText += '*'
        display.innerText = ''
        display.innerText += text
        secondNum = display.innerText
        result = firstNum + secondNum
        display.innerText = result
    }
    if (text === '÷') {
        display.innerText += '/'
        display.innerText = ''
        display.innerText += text
        secondNum = display.innerText
        result = firstNum + secondNum
        display.innerText = result
    }
    if (text === '=') {
        try {
            display.innerText = String(eval(display.innerText)).slice(0, 10)
        }
        catch {
            display.innerText = display.innerText.replace('×', '*')
            display.innerText = String(eval(display.innerText)).slice(0, 10)
        }
    }

}
