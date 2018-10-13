const WIDTH = 300;
const HEIGHT = WIDTH;
const DIAMETER = WIDTH;
const X = WIDTH / 2;
const Y = HEIGHT / 2;

function setup() {
    createCanvas(WIDTH, HEIGHT);
}

function draw() {
    ellipse(X, Y, DIAMETER);
    ellipse(X, Y, (DIAMETER / 2));
    ellipse(X, Y, (DIAMETER / 4));
}
