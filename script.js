function operate(number1, operator, number2){
    console.log(number1,operator,number2);
    if(operator === "+"){
         return add(number1,number2);
    }
    else if(operator === "*"){
         return multiply(number1,number2);
    }
    else if(operator === "-"){
        return subtract(number1,number2);
    }
    else if(operator === "/"){
       return divide(number1,number2);
    }
}

function add(number1, number2){
    return number1 + number2;
}

function multiply(number1, number2){
    return number1 * number2;
}

function subtract(number1, number2){
    return number1 - number2;
}

function divide(number1, number2){
    return number1 / number2;
}

function writeDisplay(input){
    //const display = document.querySelector('.display');
    display.textContent+=input;
}

//press number buttons and display
const input = document.querySelectorAll('.input');
console.log(input);
input.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(lastButton ==='operator'){
        display.textContent='';
        }
        writeDisplay(button.textContent);
        lastButton = 'number';
    });
});

const display = document.querySelector('.display');

let numbers = [];
let currentOperator = '';
let result = 0;
let lastButton='';
//press operator buttons and do something
const operator = document.querySelectorAll('.operator');
console.log(operator);
operator.forEach((button)=>{
    button.addEventListener('click',()=>{
        numbers.push(parseInt(display.textContent));
        if(numbers[1]){
            console.table(numbers);
            result = operate(numbers[0],currentOperator,numbers[1]);
            display.textContent = result;
            numbers[0] = result;
            numbers.splice(1,1);
            console.table(numbers);
        }
        currentOperator = button.textContent;
        lastButton = 'operator';
    });
});



