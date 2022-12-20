'use strict';

const counterData = {
    btns: document.getElementById('counter'),
    counterDisplay: document.getElementById('value')
};

const state = {
    counter: 0,

    increment() {
        this.counter += 1;
    },
    decrement() {
        this.counter -= 1;
    }
};

function handleCounter({ target }) {
    state[target.dataset.action]();
    counterData.counterDisplay.textContent = state.counter;
};

counterData.btns.addEventListener('click', handleCounter);
