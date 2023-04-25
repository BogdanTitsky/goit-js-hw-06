const fontSizeController = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

text.style.fontSize = fontSizeController.value + 'px';

fontSizeController.addEventListener('input', (event) => {
    text.style.fontSize = fontSizeController.value + 'px';
});
