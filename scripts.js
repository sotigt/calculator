let sum = 0;
let addedNumbers = [];
let currentOperator; 

const display = document.querySelector('.display');
display.innerText = sum;

/*---- Operator buttons ----*/
let operatorBtns = Array.from(document.querySelectorAll('.operatorButton'));
operatorBtns.map((op) => {
    op.addEventListener('click', () => {
        if(currentOperator) removeClass();

        op.classList.add("operatorButtonActive");
        currentOperator = op.id;
    });
});

/*---- Number buttons ----*/
let numBtns = document.querySelectorAll('.numButton');
Array.from(numBtns).map((number) => {
    number.addEventListener('click', () => {
        if(currentOperator) {
            removeClass();  
        }   

        addedNumbers.push(Number(number.id));
        
        display.innerText = number.id;
    });
});


const sumBtn = document.querySelector('#sum');
sumBtn.addEventListener('click', () => operate());

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
    sum = 0;
    addedNumbers = [];
    currentOperator;

    if(currentOperator) removeClass();

    return display.innerText = sum;
});


function add () {
    return display.innerText = sum = addedNumbers.reduce((total, currentNumber) => total + currentNumber);
}

function subtract () {
    return display.innerText = sum = addedNumbers.reduce((total, currentNumber) => total - currentNumber);
}

function multiply () {
    return display.innerText = sum = addedNumbers.reduce((total, currentNumber) => total * currentNumber);
}

function divide () {
    sum = addedNumbers.reduce((total, currentNumber) => total / currentNumber);

    addedNumbers.map((number, index) => {
        if(number === 0 && index > 0) {
            return sum = "nice try babe";
        }
    }) 

    return display.innerText = sum;
}

function removeClass () {
    operatorBtns.map((operator) => {
        operator.classList.remove("operatorButtonActive");
    })
}

function operate () {
    if(!currentOperator) return display.innerText = sum;

    if(!addedNumbers.length) return;

    switch(currentOperator) {
        case "add":
            add()
            break;
        case "subtract":
            subtract()
            break;
        case "multiply":
            multiply()
            break;
        case "divide":
            divide()
            break; 
    }

    if(currentOperator) removeClass();

    sum = 0;
    addedNumbers = [];
    currentOperator;

}




