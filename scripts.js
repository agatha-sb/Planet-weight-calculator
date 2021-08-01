'use strict';

const surfaceGravity = [0.377, 0.905, 1, 0.379, 2.528, 1.065, 0.886, 1.137, 0.063];

document.querySelector('.btn').addEventListener('click', my_button_click_handler);

function my_button_click_handler()
{
    const newWeight = [];
    const mass = document.querySelector('.weight');
    
    for (let i = 0; i < 9; i ++)    {
        newWeight.push(Number(mass.value) * surfaceGravity[i]);
        document.querySelector(`.planet--${i}`).value = newWeight[i].toFixed(2);
    }
    
}
