let player;
let spawner;

let millisOld = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);

	player = new Player();

	spawner = new ObjectSpawner();
}

function draw() {
	background(0);

	player.onFrameUpdate();
	spawner.onFrameUpdate();
}