let player;

function setup() {
  createCanvas(windowWidth, windowHeight);

  player = new Player();
  player.setup();
}

function draw() {
  background(220);

  player.draw();
}
