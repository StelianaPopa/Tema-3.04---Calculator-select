// Varianta 1

// const calculatorNumber = document.querySelector('.calculator-button');
// const firstNumberInput = document.querySelector('[name="first-number"]');
// const secondNumberInput = document.querySelector('[name="second-number"]');
// const calculatorResult = document.querySelector('.calculator-result');

// const calculate = () => {
// console.log(firstNumberInput.value);
// console.log(secondNumberInput.value);
// const firstNumber = parseInt(firstNumberInput.value);
// const secondNumber = parseInt(secondNumberInput.value);
// console.log(typeof firstNumber);
// calculatorResult.innerText = firstNumber + secondNumber;
// };

// calculatorNumber.addEventListener('click', calculate);

// Varianta Pro

const calculatorForm = document.querySelector('.calculator-form');
const calculatorResult = document.querySelector('.calculator-result');

const calculate = (e) => {
    // console.log(e);

    e.preventDefault();
    const formData = new FormData(calculatorForm);
    const firstNumber = parseInt(formData.get('first-number'));
    const secondNumber = parseInt(formData.get('second-number'));
    let operator = formData.get('operators'); 
    // console.log(operator);

    if (operator === "Impartire") {
        calculatorResult.innerText = firstNumber / secondNumber;
    } else if (operator === "Minus") {
        calculatorResult.innerText = firstNumber - secondNumber;
    } else if (operator === "Inmultire") {
        calculatorResult.innerText = firstNumber * secondNumber;
    } else if (operator === "Plus") {
        calculatorResult.innerText = firstNumber + secondNumber;
    };

    // console.log(formData.get('first-number'));

    if (formData.get('first-number').includes("e") || formData.get('second-number').includes("e")) {
    alert ("Please enter only numbers");
    return;
        }

    // if (formData.get(first-number).includes("e") || formData.get(second-number).includes("e")) {
    //     alert ("Please enter only integer numbers");
    //     return;
    //     }
};

calculatorForm.addEventListener('submit', calculate);

// Ex: sa nu putem introduce "e"

const firstNumberInput = document.querySelector('[name="first-number"]');
const secondNumberInput = document.querySelector('[name="second-number"]');

const handleFirstInputChange = () => {
    // console.log(firstNumberInput.value);
    if (firstNumberInput.value.includes("e")) {
        firstNumberInput.value = firstNumberInput.value.replace("e",'');
    }
};

firstNumberInput.addEventListener('input', handleFirstInputChange)

// Tema - Posibilitate schimbare semn operatie cu Select

