//variaveis globais
const selectId = a => document.getElementById(a);
const add = selectId('+');
const equal = selectId('btn-equal');
const sub = selectId('-');
const mult = selectId('x');
const screenNumber = selectId('screen-numbers');
const resultado = selectId('resultado');
const division = selectId('÷');
var idElement = '';
var numbers = [0];
var classElement = '';
var newresult = 0;
var result = 0;

//objeto com dados de contadores
const count = {
    contOpr: 0,
    contAdd: false,
    contSub: false,
    contMult: false,
    contDiv: false
}

//funcoes matematicas
var soma = () => {

    if (count.contOpr === 0) {

        let numberJoin = numbers.join('');
        let numberParse = parseFloat(numberJoin, 10);
        result = numberParse;
        numbers = [0];
    }
    if (count.contOpr > 0) {
        let numberJoin = numbers.join('');
        let numberParse = parseFloat(numberJoin, 10);
        newresult = numberParse
        result = (newresult) + (result);
        numbers = [0];
    }

    screenNumber.innerHTML = ` `;
    resultado.innerHTML = `<p class='visor-text' id='resultado'> ${result} </p>`

    count.contAdd = true;
    count.contSub = false;
    count.contMult = false;
    count.contDiv = false;
    count.contOpr += 1;

}

var subtract = () => {

    if (count.contOpr === 0) {
        let numberJoin = numbers.join('');
        let numberParse = parseFloat(numberJoin, 10);

        result = numberParse;
        numbers = [0];
    }
    if (count.contOpr > 0) {
        let numberJoin = numbers.join('');
        let numberParse = parseFloat(numberJoin, 10);
        newresult = numberParse
        result = (-newresult) - (-result);
        numbers = [0];
    }

    screenNumber.innerHTML = ` `;

    resultado.innerHTML = `<p class='visor-text' id='resultado'> ${result} </p>`

    count.contSub = true;
    count.contAdd = false;
    count.contMult = false;
    count.contDiv = false;
    count.contOpr += 1;

}
var multiply = () => {

    if (count.contOpr === 0) {
        let numberJoin = numbers.join('');
        let numberParse = parseFloat(numberJoin, 10);
        console.log('entrou no if 0')
        result = numberParse;
        numbers = [0];
    }
    if (count.contOpr > 0) {
        if (numbers.length < 2) {
            numbers = [1];
            let numberJoin = numbers.join('');
            let numberParse = parseFloat(numberJoin, 10);
            newresult = numberParse
            result = (newresult) * (result);
            console.log('entrou no if >0')
        } else {
            let numberJoin = numbers.join('');
            let numberParse = parseFloat(numberJoin, 10);
            newresult = numberParse
            result = (newresult) * (result);
            numbers = [0];
            console.log('entrou no else')
        }
        numbers = [0];
    }

    screenNumber.innerHTML = ` `;

    resultado.innerHTML = `<p class='visor-text' id='resultado'> ${result} </p>`

    count.contMult = true;
    count.contSub = false;
    count.contAdd = false;
    count.contDiv = false;
    count.contOpr += 1;
}
var divis = () => {

    if (count.contOpr === 0) {
        let numberJoin = numbers.join('');
        let numberParse = parseFloat(numberJoin, 10);
        result = numberParse;
        numbers = [0];
    }
    if (count.contOpr > 0) {
        if (numbers.length < 2) {
            numbers = [1];
            let numberJoin = numbers.join('');
            let numberParse = parseFloat(numberJoin, 10);
            newresult = numberParse;
            let newnumber = [];
            newnumber.push(newresult, result)
            newnumber.sort((a, b) => b - a);
            result = newnumber.reduce((a, b) => a / b);
            numbers = [0];

        } else {
            let numberJoin = numbers.join('');
            let numberParse = parseFloat(numberJoin, 10);
            newresult = numberParse;
            let newnumber = [];
            newnumber.push(newresult, result)
            newnumber.sort((a, b) => b - a);
            result = newnumber.reduce((a, b) => a / b);
            numbers = [0];
        }
        numbers = [0];
    }

    screenNumber.innerHTML = ` `;

    resultado.innerHTML = `<p class='visor-text' id='resultado'> ${result} </p>`

    count.contDiv = true;
    count.contAdd = false;
    count.contMult = false;
    count.contSub = false;
    count.contOpr += 1;
}

//eventos de click
window.addEventListener("click", function (event) {

    idElement = event.target.id;
    classElement = event.target.className;

    if (idElement === 'clean') {
        arrayNumbers = [];
        count.contAdd = false;
        count.contSub = false;
        count.contMult = false;
        count.contOpr = 0;
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
        if (idElement === '÷') {
            screenNumber.innerHTML = `<p class='visor-text'>  ${idElement} </p>`
        }
    }
    ;

    add.onclick = () => {
        soma()
    };

    sub.onclick = () => {
        subtract();
    };

    mult.onclick = () => {
        multiply();
    }
    division.onclick = () => {
        divis();
    }
    equal.onclick = () => {

        if (count.contAdd === true) {
            soma()
        }
        if (count.contSub === true) {
            subtract()
        }
        if (count.contMult === true) {
            multiply();
        }
        if (count.contDiv === true) {
            divis();
        }
    };
});



