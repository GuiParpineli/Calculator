//variaveis globais
const screenNumber = document.getElementById('screen-numbers');
var operador = '';
var classElement = '';
var result = 0;

const clean = () => screenNumber.value = '';

window.onload = clean();

const convert = () => {
    result = parseFloat(screenNumber.value, 10);
    if (screenNumber.value.includes(operador)) {
        let indexOpr = screenNumber.value.indexOf(operador)
        let newResult = parseFloat(screenNumber.value.slice(indexOpr + 1));
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
            case '%':
                if (screenNumber.value.includes('+')) {
                    result / 100 + newResult
                }
                if (screenNumber.value.includes('-')) {
                    result / 100 - newResult
                }
                if (screenNumber.value.includes('x')) {
                    (result / 100) * newResult
                }
                if (screenNumber.value.includes('÷')) {
                    (result / 100) / newResult
                }
                break;
        }
    } else {
        result = parseFloat(screenNumber.value, 10);
    }
    screenNumber.value = result
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