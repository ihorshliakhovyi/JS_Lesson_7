'use strict';

const inputFieldValue = document.getElementById('validation-input');

inputFieldValue.addEventListener('input', colorSwitcher);
// () => {
//     const inputLength = inputFieldValue.value.length;
//     console.log(inputLength);
//     if (inputLength > Number(inputFieldValue.dataset.length)) {
//         inputFieldValue.classList.add('invalid'); 
//         inputFieldValue.classList.remove('valid'); 
//     } else {
//         inputFieldValue.classList.add('valid'); 
//         inputFieldValue.classList.remove('invalid'); 
//     }
// }


function colorSwitcher() {
    const inputLength = inputFieldValue.value.length;
    console.log(inputLength);
    if (inputLength > Number(inputFieldValue.dataset.length)) {
        inputFieldValue.classList.add('invalid'); 
        inputFieldValue.classList.remove('valid'); 
    } else {
        inputFieldValue.classList.add('valid'); 
        inputFieldValue.classList.remove('invalid'); 
    }
};