function calculator() {
let firstInput;
let secondInput;
let resultBox;

function init(selctor1, selctor2, selctor3) {
    firstInput = document.querySelector(selctor1);
    secondInput = document.querySelector(selctor2);
     resultBox = document.querySelector(selctor3);
}

function add(){
    resultBox.value = Number(firstInput.value) + Number(secondInput.value);
}

function subtract() {
resultBox.value = Number(firstInput.value) - Number(secondInput.value);
}

return {init, add, subtract} 

}

const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 




