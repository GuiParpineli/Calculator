const selectId = a => document.getElementById(a);
const add = selectId('adicao');
const equal = selectId('btn-equal');
const sub = selectId('subtracao');
var idElement = '';
var numbers = [0];
var classElement = '';
const screenNumber = selectId('screen-numbers');
const resultado = selectId('resultado');
var somaQ = 0;
var subQ = 0;
var arrayNumbers = [];
var result = 0;
var contAdd = 0;
var contSub = 0;

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
        resultado.innerHTML = ''
        screenNumber.innerHTML += `<p class='visor-text'>  ${idElement} </p>`
    }

    else {

        if (idElement === 'adicao') {
            screenNumber.innerHTML += `<p class='visor-text'>  + </p>`
        }
        if (idElement === 'subtracao') {
            screenNumber.innerHTML += `<p class='visor-text'>  - </p>`
        }
    }


    add.onclick = () => {

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

        contAdd += 1;
        somaQ += 1;
        subQ += 1;
    }

    sub.onclick = () => {

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

        screenNumber.innerHTML = ``;

        resultado.innerHTML = `<p class='visor-text' id='resultado'> ${result} </p>`
        console.log(result)

        contSub += 1;
        subQ += 1;
        somaQ += 1;
    }

    equal.onclick = () => {

        if (contAdd > contSub) {

            if (somaQ == 0) {

                console.log('resultado' + result)
                var numberJoin = numbers.join('');
                var numberParse = parseInt(numberJoin, 10);
                arrayNumbers.push(numberParse);
                arrayNumbers.sort((a, b) => (b + a));
                console.log('arraynumbers' + arrayNumbers)
                numbers = [0];
                result = arrayNumbers.reduce((a, b) => (b + a));
                screenNumber.innerHTML = ``;

                resultado.innerHTML = `<p class='visor-text' id='resultado'> ${result} </p>`
                console.log('somba' + result)
            }
            if (contSub > contAdd) {
                console.log('resultado' + result)
                var numberJoin = numbers.join('');
                var numberParse = parseInt(numberJoin, 10);
                arrayNumbers.push(numberParse);
                arrayNumbers.sort((a, b) => (b - a));
                console.log('arraynumbers' + arrayNumbers)
                numbers = [0];
                result = arrayNumbers.reduce((a, b) => (b - a));
                screenNumber.innerHTML = ``;

                resultado.innerHTML = `<p class='visor-text' id='resultado'> ${result} </p>`
                console.log('subtracao' + result)
            }
        }
    }
}
);



