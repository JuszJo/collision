import Circle from "./circle.js";

const canvas = document.querySelector('canvas');
const drawingSurface = canvas.getContext('2d');

const width = 800;
const height = 600;

canvas.setAttribute('height', height)
canvas.setAttribute('width', width)

let circle = new Circle(50, 50, 20)

window.requestAnimationFrame(update)

function display() {
    circle.update();
}

function update() {
    drawingSurface.clearRect(0, 0, width, height);
    
    display();

    window.requestAnimationFrame(update)
}