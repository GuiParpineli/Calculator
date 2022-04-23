const selectId = a => document.getElementById(a);

const clean = selectId('clean');
const seven = selectId(7);
const eight = selectId(8);
const nine = selectId(9);
const mult = selectId('mult');
const four = selectId(4);
const five = selectId(5);
const six = selectId(6);
const sub = selectId('subtracao');
const one = selectId(1);
const two = selectId(2);
const three = selectId(3);
const add = selectId('adicao');
const porcent = selectId('porcent');
const zero = selectId(0);
const done = selectId('btn-equal');
const division = selectId('division');
const dot = selectId('dot');
const hundred = selectId(00);


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
        screen.innerHTML = ''
    }


    if (classElement === 'number') {
        numbers.push(idElement);
        //appends
        screen.innerHTML = `<p class='visor-text'> ${idElement} </p>`
    }

    add.onclick = () => {
        
        ptext = document.createTextNode('+')
        p.appendChild(ptext)
        p.classList.add('visor-text')
        screen.appendChild(p)

        var numberJoin = numbers.join('');
        var numberSoma = parseInt(numberJoin, 10);



        newNumber.push(numberSoma);

        var soma = () => {
            if (newNumber.length >= 2) {
                screen.innerHTML = '';
                var result = newNumber.reduce((a, b) => a + b);
               
                screen.innerHTML = `<p class='visor-text'> ${result} </p>`
                console.log(result)
            }
        }

        numbers = [];

        soma();
    }
}
);



