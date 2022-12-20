'use strict';

const inputValue = document.getElementById('name-input');
const outputValue = document.getElementById('name-output');

inputValue.addEventListener('input', nameChanger);
// () => {
//     outputValue.textContent = inputValue.value;
//     console.log(outputValue);
// }


function nameChanger() {
    outputValue.textContent = inputValue.value;
    console.log(outputValue);
};
console.log(outputValue, inputValue);