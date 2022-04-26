const selectId = a => document.getElementById(a);
const add = selectId('+');
const equal = selectId('btn-equal');
const sub = selectId('-');
var idElement = '';
var numbers = [0];
var classElement = '';
const screenNumber = selectId('screen-numbers');
const resultado = selectId('resultado');
var somaQ = 0;
var subQ = 0;
var arrayNumbers = [];
var result = 0;
var contAdd = false;
var contSub = false;


var soma = () => {
    arrayNumbers = [0];

    if (somaQ == 0) {

        var numberJoin = numbers.join('');
        var numberParse = parseInt(numberJoin, 10);
        arrayNumbers.push(numberParse);
        result = arrayNumbers.reduce((a, b) => (b + a));
        numbers = [0];
    }
    if (somaQ > 0) {
        var numberJoin = numbers.join('');
        var numberParse = parseInt(numberJoin, 10);
        arrayNumbers.push(numberParse);
        numbers = [0];
        newresult = arrayNumbers.reduce((a, b) => b + a);
        result = (newresult) + (result);

    }
    screenNumber.innerHTML = ` `;

    resultado.innerHTML = `<p class='visor-text' id='resultado'> ${result} </p>`
    console.log(result)

    contAdd = true;
    contSub = false;
    somaQ += 1;
    subQ += 1;
}

var subtract = () => {

    arrayNumbers = [0];

    if (subQ == 0) {
        var numberJoin = numbers.join('');
        var numberParse = parseInt(numberJoin, 10);
        arrayNumbers.push(numberParse);
        result = arrayNumbers.reduce((a, b) => (b - a));
        numbers = [0];
    }
    if (subQ > 0) {
        var numberJoin = numbers.join('');
        var numberParse = parseInt(numberJoin, 10);
        arrayNumbers.push(numberParse);

        numbers = [0];
        newresult = arrayNumbers.reduce((a, b) => b - a);
        result = (-newresult) - (-result);
    }

    screenNumber.innerHTML = ` `;

    resultado.innerHTML = `<p class='visor-text' id='resultado'> ${result} </p>`
    console.log(result)

    contSub = true;
    contAdd = false;
    subQ += 1;
    somaQ += 1;
}

window.addEventListener("click", function (event) {

    idElement = event.target.id;
    classElement = event.target.className;

    if (idElement === 'clean') {
        arrayNumbers = [];
        somaQ = 0;
        subQ = 0;
        numbers = [];
        screenNumber.innerHTML = '';
        resultado.innerHTML = '';
    }

    if (classElement === 'number') {
        numbers.push(idElement);
        //appends

        screenNumber.innerHTML += `<p class='visor-text'>  ${idElement} </p>`
    }

    else {
        if (idElement === '+') {
            screenNumber.innerHTML += `<p class='visor-text'>  ${idElement} </p>`
        }
        if (idElement === '-') {
            screenNumber.innerHTML = `<p class='visor-text'>  ${idElement} </p>`
        }
    }

    add.onclick = () => {
        soma()
    }

    sub.onclick = () => {
        subtract();
    }

    equal.onclick = () => {

        if (contAdd === true) {
            soma()
        }
        if (contSub === true) {
            subtract()
        }
    }
});



