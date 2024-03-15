let sum = 0;

const display = document.querySelector('.display');
const clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
    sum = 0;
    return display.innerText = sum;
})

display.innerText = sum;

function add (... numArray) {

    numArray.map((number) => {
        sum += number
    })
    
    console.log(sum);
    return display.innerText = sum;
}

function subtract () {

}

function multiply () {

}

function divide () {

}




