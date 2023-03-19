const canvas = document.getElementById('artCanvas');
const ctx = canvas.getContext('2d');
const generateArtButton = document.getElementById('generateArt');

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomColor() {
  const r = randomInt(0, 255);
  const g = randomInt(0, 255);
  const b = randomInt(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function drawRandomShape() {
  const x = randomInt(0, canvas.width);
  const y = randomInt(0, canvas.height);
  const width = randomInt(20, 100);
  const height = randomInt(20, 100);

  ctx.fillStyle = randomColor();
  ctx.fillRect(x, y, width, height);
}

function generateAbstractArt() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const numberOfShapes = randomInt(10, 30);

  for (let i = 0; i < numberOfShapes; i++) {
    drawRandomShape();
  }
}

generateArtButton.addEventListener('click', generateAbstractArt);
