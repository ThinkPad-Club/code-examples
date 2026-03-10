let stars = [];
let numStars = 800;
let speed = 20;

let shipX = 0;
let shipY = 0;
let moveSpeed = 6;

let shipTexture;

function preload() {
  shipTexture = loadImage("earth.jpg"); // optional texture
}

function setup() {
  createCanvas(800, 600, WEBGL);

  for (let i = 0; i < numStars; i++) {
    stars.push(new Star());
  }
}

function draw() {
  background(0);

  handleInput();

  for (let star of stars) {
    star.update();
    star.show();
  }

  drawShip();
}

function handleInput() {
  if (keyIsDown(LEFT_ARROW)) shipX -= moveSpeed;
  if (keyIsDown(RIGHT_ARROW)) shipX += moveSpeed;
  if (keyIsDown(UP_ARROW)) shipY -= moveSpeed;
  if (keyIsDown(DOWN_ARROW)) shipY += moveSpeed;

  shipX = constrain(shipX, -width/2 + 80, width/2 - 80);
  shipY = constrain(shipY, -height/2 + 80, height/2 - 80);
}

class Star {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = random(-width/2, width/2);
    this.y = random(-height/2, height/2);
    this.z = random(width);
    this.pz = this.z;
  }

  update() {
    this.z -= speed;

    if (this.z < 1) {
      this.reset();
      this.z = width;
      this.pz = this.z;
    }
  }

  show() {
    let sx = (this.x / this.z) * width;
    let sy = (this.y / this.z) * height;

    let r = map(this.z, 0, width, 8, 0);

    noStroke();
    fill(255);
    ellipse(sx, sy, r, r);

    let px = (this.x / this.pz) * width;
    let py = (this.y / this.pz) * height;

    this.pz = this.z;

    stroke(255);
    line(px, py, sx, sy);
  }
}

function drawShip() {
  push();

  translate(shipX, shipY, 200);

  texture(shipTexture);
  noStroke();

  // MAIN FUSELAGE
  push();
  scale(0.6, 0.35, 2.5);
  sphere(65, 24, 16);
  pop();

  // WINGS (flattened sphere rotated 90°)
  push();
  rotateZ(2 * HALF_PI);
  scale(2.2, 0.15, 0.6);
  sphere(40, 14, 16);
  pop();

  pop();
}
