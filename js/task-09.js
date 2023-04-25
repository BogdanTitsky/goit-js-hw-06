function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const body = document.body;
const colorName = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');

btnChangeColor.addEventListener('click', onClickChangeColor);

function onClickChangeColor() {
    const gotColor = getRandomHexColor();

    colorName.textContent = gotColor;
    body.style.backgroundColor = gotColor;
}
