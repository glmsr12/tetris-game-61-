const grid = document.querySelector('.grid');
let squares = Array.from(document.querySelectorAll('.grid div'));
const ScoreDisplay = document.querySelector('#score');
const StartButton = document.querySelector('#start-button');
const width = 10;
let timerId;

//Shapes = tetrominos

const shapeI = [
  [1, width + 1, width * 2 + 1, width * 3 + 1],
  [width, width + 1, width + 2, width + 3],
  [1, width + 1, width * 2 + 1, width * 3 + 1],
  [width, width + 1, width + 2, width + 3],
];

const shapeL = [
  [1, width + 1, width * 2 + 1, 2],
  [width, width + 1, width + 2, width * 2 + 2],
  [1, width + 1, width * 2 + 1, width * 2],
  [width, width * 2, width * 2 + 1, width * 2 + 2],
];

const shapeT = [
  [1, width, width + 1, width + 2],
  [1, width + 1, width + 2, width * 2 + 1],
  [width, width + 1, width + 2, width * 2 + 1],
  [1, width, width + 1, width * 2 + 1],
];

const shapeZ = [
  [0, width, width + 1, width * 2 + 1],
  [width + 1, width + 2, width * 2, width * 2 + 1],
  [0, width, width + 1, width * 2 + 1],
  [width + 1, width + 2, width * 2, width * 2 + 1],
];

const shapeCube = [
  [0, 1, width, width + 1],
  [0, 1, width, width + 1],
  [0, 1, width, width + 1],
  [0, 1, width, width + 1],
];

const shapes = [shapeZ, shapeT, shapeCube, shapeI, shapeL];

let currentPosition = 4;
let currentRotation = 0;

console.log(shapes[0][0]);

//randomly select a shape and its first rotation
let random = Math.floor(Math.random() * shapes.length);
let current = shapes[random][currentRotation];

// draw the shape

function draw() {
  current.forEach((index) => {
    squares[currentPosition + index].classList.add('shape');
  });
}

//undraw the shape

function undraw() {
  current.forEach((index) => {
    squares[currentPosition + index].classList.remove('shape');
  });
}

// make shapes move down every second
timerId = setInterval(moveDown, 1000);

//move down function

function moveDown() {
  undraw();
  currentPosition += width;
  draw();
}
