const selectId = a => document.getElementById(a);
//variaveis globais
const equal = selectId('btn-equal');
const screenNumber = selectId('screen-numbers');
var operador = '';
var numbers = [0];
var classElement = '';
var result = 0;

const clean = () => {
    screenNumber.value = '';
}
window.onload = clean();
//objeto com dados de contadores
const count = {
    contOpr: 0,
    contAdd: false,
    contSub: false,
    contMult: false,
    contDiv: false
}
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
            case '*':
                result *= newResult
                break;
            case '/':
                result /= newResult
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