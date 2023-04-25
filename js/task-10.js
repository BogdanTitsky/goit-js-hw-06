function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesDiv = document.querySelector('#boxes');

createBtn.addEventListener('click', createOnClick);

destroyBtn.addEventListener('click', destroyOnClick);

function createOnClick() {
    const elementsCount = input.value;

    let boxSize = 30;
    let i = 0;
    while (i < elementsCount) {
        const box = document.createElement('div');

        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        box.style.backgroundColor = getRandomHexColor();

        boxesDiv.appendChild(box);

        boxSize += 10;
        i++;
    }
}

function destroyOnClick() {
    boxesDiv.innerHTML = '';
}
