const sizeUp = document.querySelector('.sizeUp');
const sizeDown = document.querySelector('.sizeDown');
const colorBtn = document.querySelector('.color');
const p = document.querySelector('p');

let fontSize = 36

const increase = () => {
    fontSize += 5
    p.style.fontSize = fontSize + 'px'
}

const decrease = () => {
    fontSize -= 5
    p.style.fontSize = fontSize + 'px'
}

sizeUp.addEventListener('click', increase)
sizeDown.addEventListener('click', decrease)