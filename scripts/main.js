const selectId = a => document.getElementById(a);

const add = selectId('adicao');
const equal = selectId('btn-equal');

var idElement = '';
var numbers = [];
var classElement = '';
const screen = document.querySelector('.visor')


var arraySoma = [];

window.addEventListener("click", function (event) {
    const screen = document.querySelector('.visor')
    idElement = event.target.id;
    classElement = event.target.className;
    var p = document.createElement('p');
    var ptext = document.createTextNode(idElement);

    if (idElement === 'clean') {
        const screen = document.querySelector('.visor')
        arraySoma = [];
        numbers = [];
        screen.innerHTML = ''
    }


    if (classElement === 'number') {
        numbers.push(idElement);
        //appends

        if (arraySoma.length < 2) {
            screen.innerHTML += `<p class='visor-text'> ${idElement} </p>`
        }
        if (arraySoma.length >= 2) {
            const resultado = document.getElementById('resultado')
            resultado.innerHTML = '+'
            screen.innerHTML += `<p class='visor-text'>  ${idElement} </p>`

        }
    }



    var soma = () => {

        if (arraySoma.length >= 2) {
            screen.innerHTML = '';
            var result = arraySoma.reduce((a, b) => a + b);

            screen.innerHTML = `<p class='visor-text' id='resultado'> ${result} </p>`
            console.log(result)
        }
    }
    add.onclick = () => {
        screen.innerHTML = `<p class='visor-text' id='resultado'> + </p>`;

        var numberJoin = numbers.join('');
        var numberSoma = parseInt(numberJoin, 10);
        arraySoma.push(numberSoma);
        numbers = [];

        soma();
    }

    equal.onclick = () => {

        if (arraySoma.length > 0) {
            screen.innerHTML = `<p class='visor-text' id='resultado'> + </p>`;
            var numberJoin = numbers.join('');
            var numberSoma = parseInt(numberJoin, 10);
            arraySoma.push(numberSoma);
            numbers = [0];

            soma();
        }


    }
}
);



