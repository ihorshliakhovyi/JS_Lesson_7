'use strict';

const slider = document.getElementById('font-size-control');
const textToSize = document.getElementById('text');

slider.setAttribute('step', 1);
slider.setAttribute('min', 0);

textToSize.style.fontSize = '18px';

slider.value = Number.parseInt(textToSize.style.fontSize);

slider.addEventListener('input', () => {
    textToSize.style.fontSize = `${slider.value}px`;
});

console.dir(slider.value);