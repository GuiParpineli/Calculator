//variaveis globais
const selectId = a => document.getElementById(a);
const add = selectId('+');
const equal = selectId('btn-equal');
const sub = selectId('-');
const mult = selectId('x')
var idElement = '';
var numbers = [0];
var classElement = '';
const screenNumber = selectId('screen-numbers');
const resultado = selectId('resultado');
var contOpr = 0;
var newresult = 0;
var result = 0;
var contAdd = false;
var contSub = false;
var contMult = false;
//funcoes matematicas
var soma = () => {

    if (contOpr === 0) {

        let numberJoin = numbers.join('');
        let numberParse = parseInt(numberJoin, 10);
        result = numberParse;
        numbers = [0];
    }
    if (contOpr > 0) {
        let numberJoin = numbers.join('');
        let numberParse = parseInt(numberJoin, 10);
        newresult = numberParse
        result = (newresult) + (result);
        numbers = [0];
    }

    screenNumber.innerHTML = ` `;
    resultado.innerHTML = `<p class='visor-text' id='resultado'> ${result} </p>`

    contAdd = true;
    contSub = false;
    contMult = false;
    contOpr += 1;

}

var subtract = () => {

    if (contOpr === 0) {
        let numberJoin = numbers.join('');
        let numberParse = parseInt(numberJoin, 10);

        result = numberParse;
        numbers = [0];
    }
    if (contOpr > 0) {
        let numberJoin = numbers.join('');
        let numberParse = parseInt(numberJoin, 10);
        newresult = numberParse
        result = (-newresult) - (-result);
        numbers = [0];
    }

    screenNumber.innerHTML = ` `;

    resultado.innerHTML = `<p class='visor-text' id='resultado'> ${result} </p>`

    contSub = true;
    contAdd = false;
    contMult = false;
    contOpr += 1;

}
var multiply = () => {

    if (contOpr === 0) {
        let numberJoin = numbers.join('');
        let numberParse = parseInt(numberJoin, 10);

        result = numberParse;
        numbers = [0];
    }
    if (contOpr > 0) {
        let numberJoin = numbers.join('');
        let numberParse = parseInt(numberJoin, 10);
        newresult = numberParse
        result = (newresult) * (result);
        numbers = [0];
    }

    screenNumber.innerHTML = ` `;

    resultado.innerHTML = `<p class='visor-text' id='resultado'> ${result} </p>`

    contMult = true;
    contSub = false;
    contAdd = false;
    contOpr += 1;
}

//eventos de click
window.addEventListener("click", function (event) {

    idElement = event.target.id;
    classElement = event.target.className;

    if (idElement === 'clean') {
        arrayNumbers = [];
        contOpr = 0;
        numbers = [];
        screenNumber.innerHTML = '';
        resultado.innerHTML = '';
    }

    if (classElement === 'number') {
        numbers.push(idElement);
        screenNumber.innerHTML += `<p class='visor-text'>  ${idElement} </p>`
    } else {
        if (idElement === '+') {
            screenNumber.innerHTML += `<p class='visor-text'>  ${idElement} </p>`
        }
        if (idElement === '-') {
            screenNumber.innerHTML = `<p class='visor-text'>  ${idElement} </p>`
        }
        if (idElement === 'x') {
            screenNumber.innerHTML = `<p class='visor-text'>  ${idElement} </p>`
        }
    }

    add.onclick = () => {
        soma()
    };

    sub.onclick = () => {
        subtract();
    };

    mult.onclick = () => {
        multiply();
    }
    equal.onclick = () => {

        if (contAdd === true) {
            soma()
        }
        if (contSub === true) {
            subtract()
        }
        if (contMult === true) {
            multiply();
        }
    };
});



