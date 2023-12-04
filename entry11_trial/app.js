// script.js
function addText() {
    const textInput = document.getElementById('textInput');
    const canvas = document.getElementById('canvas');

    const textElement = document.createElement('div');
    textElement.className = 'text';
    textElement.innerText = textInput.value;

    // Randomize position on the canvas
    const posX = Math.random() * (canvas.offsetWidth - textElement.offsetWidth);
    const posY = Math.random() * (canvas.offsetHeight - textElement.offsetHeight);

    textElement.style.left = `${posX}px`;
    textElement.style.top = `${posY}px`;

    canvas.appendChild(textElement);

    // Clear the input
    textInput.value = '';
}
