// app.js
// Function to create a text element
function createTextElement(text, posX, posY) {
  const textElement = document.createElement('div');
  textElement.className = 'text';
  textElement.innerText = text;
  textElement.style.left = `${posX}px`;
  textElement.style.top = `${posY}px`;
  return textElement;
}

// Array of available fonts
const fonts = [
  '02.10', 'Arial', 'Helvetica', 'Times New Roman',
  'Courier New', 'Verdana', 'Amsterdam', 'AndroidScratch', 'Danube',
  'DarkTech', 'Dune', 'Obsiean', 'SpaceAge', 'Yagisa'
];

// Function to get a random font from the array
function getRandomFont() {
  const randomIndex = Math.floor(Math.random() * fonts.length);
  return fonts[randomIndex];
}

// Function to get a random size between 12 and 24 (adjust as needed)
function getRandomSize() {
  return Math.floor(Math.random() * (24 - 12 + 1)) + 12;
}

// Function to add text to the canvas
function addText() {
  const canvas = document.getElementById('canvas');
  const textInput = document.getElementById('textInput').value;

  // Randomize position on the canvas
  const posX = Math.random() * (canvas.offsetWidth - 300); // Adjust 300 based on your text area width
  const posY = Math.random() * (canvas.offsetHeight - 24); // Adjust 24 based on your default font size

  const textElement = createTextElement(textInput, posX, posY);

  // Apply random font and size
  textElement.style.fontFamily = getRandomFont();
  textElement.style.fontSize = `${getRandomSize()}px`;

  canvas.appendChild(textElement);
}
