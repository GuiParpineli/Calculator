const screenNumber = document.getElementById('screen-numbers');
var operador = '';
var classElement = '';
var result = 0;
const clean = () => screenNumber.value = '';
onload = clean();
const backspace = () => {
    let total = screenNumber.value.length
    screenNumber.value = screenNumber.value.slice(0, total - 1);
}
const convert = () => {
    result = parseFloat(screenNumber.value, 10);
    if (screenNumber.value.includes(operador)) {
        let indexOpr = screenNumber.value.indexOf(operador)
        let newResult = parseFloat(screenNumber.value.slice(indexOpr + 1));
        if (isNaN(result)) {
            screenNumber.value = '';
        }
        switch (operador) {
            case '+':
                result += newResult;
                break;
            case '-':
                result -= newResult
                break;
            case 'x':
                result *= newResult
                break;
            case '÷':
                result /= newResult
                break;
        }
    }
    if (isNaN(result)) {
        screenNumber.value = '';
    } else {
        screenNumber.value = result
    }
}
//eventos de click
window.addEventListener("click", function (event) {
    valueElement = event.target.value;
    classElement = event.target.className;
    switch (classElement) {
        case 'number' :
            screenNumber.value += valueElement
            break;
        case 'operador' :
            operador = valueElement
            screenNumber.value += valueElement
    }
});