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

var target = '';
var idElement = '';

window.addEventListener("click", function (event) {
    if (event.target.className === 'number') {
        target = event.target;
        idElement = target.id
    }
});

