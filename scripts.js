let sum = 0;
let a = null;
let b = null;
let displaySum = false; 
let currentOperator;  /* stores the current operator */

const display = document.querySelector('.display');
display.innerText = sum;

/*---- Operator buttons ----*/
let operatorBtns = Array.from(document.querySelectorAll('.operatorButton'));
operatorBtns.map((operator) => {
    operator.addEventListener('click', () => useOperatorButton(operator))
});

function useOperatorButton (operator) {
    if(a === null) return;

    if(currentOperator) removeClass();

    if(a && b && currentOperator) operate();

    operator.classList.add("operatorButtonActive");
    currentOperator = operator.id;
    console.log(`a: ${a}, b: ${b}, currentOperator: ${currentOperator}`);

}

/*---- Number buttons ----*/
let numBtns = document.querySelectorAll('.numButton');
Array.from(numBtns).map((number) => {
    number.addEventListener('click', () => useNumberButton(number.id)) 
});

function useNumberButton (number) {
    if(currentOperator) {
        removeClass();  
    }   

    if(!currentOperator) {
        if(displaySum) {
            displaySum = false; 
            a = number;
        } else {
            a = !a ? number : a + number;
        }
        display.innerText = a;
    } else if(a && currentOperator) {
        b = !b ? number : b + number;
        display.innerText = b;
    }

    console.log(`a: ${a}, b: ${b}, currentOperator: ${currentOperator}`);

}

const sumBtn = document.querySelector('#sum');
sumBtn.addEventListener('click', () => operate());

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
    sum = 0;
    currentOperator = null;
    a = null;
    b = null;

    if(currentOperator) removeClass();

    console.log(`a: ${a}, b: ${b}, currentOperator: ${currentOperator}`);

    return display.innerText = sum;
});


function add () {
    return sum = Number(a) + Number(b);
}

function subtract () {
    return sum = Number(a) - Number(b);
}

function multiply () {
    return sum = Number(a) * Number(b);
}

function divide () {

    if (a == 0) {
        return sum = "nice try babe";
    } else {
        return sum = Number(a) / Number(b); 
    }  
}

function removeClass () {
    operatorBtns.map((operator) => {
        operator.classList.remove("operatorButtonActive");
    })
}

function operate () {
    console.log(`a: ${a}, b: ${b}, currentOperator: ${currentOperator}`);

    if(!currentOperator) {
        console.log("missing an operator")
        removeClass();
        currentOperator = null;
        return;
    }

    if(!b) {
        b = a;
    }

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

    a = sum;
    b = null;
    currentOperator = null;

    displaySum = true;

    return display.innerText = sum;


}




