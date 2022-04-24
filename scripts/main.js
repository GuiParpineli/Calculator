const selectId = a => document.getElementById(a);
const add = selectId('adicao');
const equal = selectId('btn-equal');
const sub = selectId('subtracao');
var idElement = '';
var numbers = [];
var classElement = '';
const screenNumber = selectId('screen-numbers');
const resultado = selectId('resultado');
var arraySub = [];
var arraySoma = [];

window.addEventListener("click", function (event) {

    idElement = event.target.id;
    classElement = event.target.className;

    if (idElement === 'clean') {
        arraySoma = [];
        arraySub = [];
        numbers = [];
        screenNumber.innerHTML = '';
        resultado.innerHTML = '';
    }

    if (classElement === 'number') {
        numbers.push(idElement);
        //appends
        if ((arraySoma.length < 2) || (arraySoma.length < 2)) {
            screenNumber.innerHTML += `<p class='visor-text'> ${idElement} </p>`
        }

        if (arraySoma.length > 2) {
            resultado.innerHTML = '+'
            screenNumber.innerHTML += `<p class='visor-text'>  ${idElement} </p>`
        }

        if (arraySub.length > 2) {
            resultado.innerHTML = '-'
            screenNumber.innerHTML += `<p class='visor-text'>  ${idElement} </p>`
        }
    }

    var soma = () => {

        if (arraySoma.length >= 2) {
            screenNumber.innerHTML = '';
            resultado.innerHTML = '';
            let result = arraySoma.reduce((a, b) => a + b);
            resultado.innerHTML = `<p class='visor-text' id='resultado'> ${result} </p>`
            console.log(result)
        }
    }

    var subtract = () => {
        if (arraySub.length >= 2) {
            screenNumber.innerHTML = '';
            let result = arraySub.reduce((a, b) => a - b);
            resultado.innerHTML = `<p class='visor-text' > ${result} </p>`
            console.log(result)
        }
    }

    add.onclick = () => {
        screenNumber.innerHTML = `<p class='visor-text'> + </p>`;
        let numberJoin = numbers.join('');
        let numberSoma = parseInt(numberJoin, 10);
        arraySoma.push(numberSoma);
        numbers = [];
        soma();
    }

    sub.onclick = () => {
        screenNumber.innerHTML = `<p class='visor-text'> - </p>`;
        let numberJoin = numbers.join('');
        let numberSub = parseInt(numberJoin, 10);
        arraySub.push(numberSub);
        numbers = [];
        subtract();
    }

    equal.onclick = () => {

        if (arraySoma.length > 0) {
            resultado.innerHTML = `<p class='visor-text'> + </p>`;
            var numberJoin = numbers.join('');
            var numberSoma = parseInt(numberJoin, 10);
            arraySoma.push(numberSoma);
            numbers = [0];
            soma();
        }


    }
}
);



