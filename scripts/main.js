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
        if ((somaQ == 0) || (subQ == 0)) {
            resultado.innerHTML = ''
            screenNumber.innerHTML += `<p class='visor-text'> ${idElement} </p>`
        }

        if (somaQ > 1) {
            resultado.innerHTML = '+'
            screenNumber.innerHTML += `<p class='visor-text'>  ${idElement} </p>`
        }

        if (subQ > 1) {
            resultado.innerHTML = ''
            screenNumber.innerHTML += `<p class='visor-text'>  ${idElement} </p>`
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
        
        if (arrayNumbers.length > 1) {
            screenNumber.innerHTML = ` `;
            resultado.innerHTML = '';
            resultado.innerHTML = `<p class='visor-text' id='resultado'> ${result} </p>`
            console.log(result)
        }
        if (arrayNumbers.length < 2) {
            screenNumber.innerHTML = '';
            resultado.innerHTML = '';
            console.log(arrayNumbers)
        }
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
        
        if (arrayNumbers.length > 1) {
            screenNumber.innerHTML = ` `;
            resultado.innerHTML = '';
            resultado.innerHTML = `<p class='visor-text' id='resultado'> ${result} </p>`
            console.log(result)
        }
        if (arrayNumbers.length < 2) {
            screenNumber.innerHTML = '';
            resultado.innerHTML = '';
            console.log(arrayNumbers)
        }
        subQ += 1;
        somaQ += 1;
    }

  /*   equal.onclick = () => {

        if (somaQ >= 1) {
            screenNumber.innerHTML = `<p class='visor-text'> + </p>`;
            var numberJoin = numbers.join('');
            var numberParse = parseInt(numberJoin, 10);
            arrayNumbers.push(numberParse);
            numbers = [0];
            let result = arrayNumbers.reduce((a, b) => a + b);

            if (arrayNumbers.length > 1) {
                screenNumber.innerHTML = ` `;
                resultado.innerHTML = '';
                resultado.innerHTML = `<p class='visor-text' id='resultado'> ${result} </p>`
                console.log(result)
            }
            if (arrayNumbers.length < 2) {
                screenNumber.innerHTML = '+';
                resultado.innerHTML = '';
                console.log(arrayNumbers)
            }
        }

        if (subQ >= 1) {
            screenNumber.innerHTML = `<p class='visor-text'>  </p>`;
            var numberJoin = numbers.join('');
            var numberParse = parseInt(numberJoin, 10);
            arrayNumbers.push(numberParse);
            numbers = [0];
            let result = arrayNumbers.reduce((a, b) => a - b);
            subQ += 1

            if (arrayNumbers.length > 1) {
                screenNumber.innerHTML = ` `;
                resultado.innerHTML = '';
                resultado.innerHTML = `<p class='visor-text' id='resultado'> ${result} </p>`
                console.log(result)
            }
            if (arrayNumbers.length < 2) {
                screenNumber.innerHTML = '';
                resultado.innerHTML = '';
                console.log(arrayNumbers)
            }
        }
    } */
}
);



