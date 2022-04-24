const selectId = a => document.getElementById(a);

const add = selectId('adicao');

var idElement = '';
var numbers = [];
var classElement = '';
const screen = document.querySelector('.visor')


var newNumber = [];

window.addEventListener("click", function (event) {
    const screen = document.querySelector('.visor')
    idElement = event.target.id;
    classElement = event.target.className;
    var p = document.createElement('p');
    var ptext = document.createTextNode(idElement);

    if (idElement === 'clean') {
        const screen = document.querySelector('.visor')
        newNumber = [];
        numbers = [];
        screen.innerHTML = ''
    }


    if (classElement === 'number') {
        numbers.push(idElement);
        //appends

        if (newNumber.length < 2) {
            screen.innerHTML += `<p class='visor-text'> ${idElement} </p>`
        } else {
            const resultado = document.getElementById('resultado')
            resultado.innerHTML = '+'
            screen.innerHTML += `<p class='visor-text'>  ${idElement} </p>`

        }
    }


    add.onclick = () => {

        screen.innerHTML = `<p class='visor-text' id='resultado'> + </p>`;

        var numberJoin = numbers.join('');
        var numberSoma = parseInt(numberJoin, 10);
        newNumber.push(numberSoma);

        var soma = () => {

            if (newNumber.length >= 2) {
                screen.innerHTML = '';
                var result = newNumber.reduce((a, b) => a + b);

                screen.innerHTML = `<p class='visor-text' id='resultado'> ${result} </p>`
                console.log(result)
            }
        }
        numbers = [];
        soma();
    }
}
);



