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
    const display = document.querySelector('.display');
    display.textContent+=input;
}

const input = document.querySelectorAll('.input');
console.log(input);
input.forEach((button)=>{
    button.addEventListener('click',()=>{
        writeDisplay(button.textContent);
    });
});