const canvas = document.querySelector('canvas');
const drawingSurface = canvas.getContext('2d');

const width = 800
const height = 600

export default class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    move() {
        if(checkLeft()) {
            this.x += -5;
        }
        if(checkRight()) {
            this.x += 5;
        }
    }
    
    checkCollision() {
        if((this.x - this.radius) < 0) {
            this.x = this.radius + 0
        }
        else if((this.x + this.radius) > width) {
            this.x = 800 - this.radius;
        }
    }

    display() {
        drawingSurface.beginPath()
        drawingSurface.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        drawingSurface.fill()
        drawingSurface.closePath()
    }

    update() {
        this.display();
        this.move();
        this.checkCollision();
    }
}