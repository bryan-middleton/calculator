const display = document.querySelector('.display');

let numbers = [];
let currentOperator = '';
let result = 0;
let lastButton='';

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
    if(lastButton ==='operator'){
        display.textContent='';
    }
    lastButton = 'number';
    if(display.textContent==='0'){
        display.textContent = input.textContent;
    }
    else{
        display.textContent+=input.textContent;
    }
}
        
function doTheSum(button){
        if(currentOperator === '='){
            numbers[0]=parseInt(display.textContent);
        }
        
        else{
            numbers.push(parseInt(display.textContent));
            if(button.id ==='equals'){
                result = operate(numbers[0],currentOperator,numbers[1]);
                display.textContent = result;
                numbers[0] = result;
            }
            if(numbers[1]){
                console.table(numbers);
                result = operate(numbers[0],currentOperator,numbers[1]);
                display.textContent = result;
                numbers[0] = result;
                numbers.splice(1,1);
                console.table(numbers);
            }
        }
        currentOperator = button.textContent;
        console.log('current: '+currentOperator);
        console.table(numbers);
        lastButton = 'operator';
}

function clearCalc(){
    const button = document.querySelector('#clear');
    console.log(button);
    numbers = [];
    result = 0;
    display.textContent=0;
    currentOperator='';
    lastButton ='';
}



//press number buttons and display
const input = document.querySelectorAll('.input');
console.log(input);
input.forEach((button)=>{
    button.addEventListener('click', ()=>{writeDisplay(button)});
});

//press operator buttons and do something
const operator = document.querySelectorAll('.operator');
operator.forEach((button)=>{
    button.addEventListener('click',()=>{doTheSum(button)});
});
