class ObjectSpawner {
	constructor() {
		this.maxObjectsInScene = 10;
		this.availableObjects = []; // Pool of objects to use
		this.numActiveObjects = 0;

		this.lastSpawnTime = 0;
		this.timeToSpawn = 2500;
	}

	// Initial setup
	setup() {
		/* Create set number of objects on startup to reuse
		*  (more efficient than creating and destroying objects over and over)*/
		for (let i = 0; i < this.maxObjectsInScene; i++) {
			this.availableObjects.push(new FallingObject());
		}
	}

	// Moves an object from those available to the active array
	spawn() {
		this.availableObjects[this.numActiveObjects].setActive();
		this.numActiveObjects++;
	}

	// Updates the active objects
	updateActiveObjects() {
		for (let i = 0; i < this.numActiveObjects + 1; i++) {
			let obj = this.availableObjects[i];
			if (obj.update() > windowHeight + 40) {
				obj.reset();
				this.numActiveObjects--;
			}
		}
	}

	onFrameUpdate() {
		this.updateActiveObjects();

		// Speed up spawn rate every ~3000ms
		if (millis() % 3000 >= 2984 &&
		millis() % 1000 <= 3016) {
			this.timeToSpawn -= 100;
		}
		if (this.timeToSpawn < 100) {
			this.timeToSpawn = 100;
		}

		// Decide if object should spawn and spawn if true
		if (millis() - this.lastSpawnTime >= this.timeToSpawn - 33 &&
		millis() - this.lastSpawnTime <= this.timeToSpawn + 33) {
			this.spawn();
			this.lastSpawnTime = millis();
		}

		print(this.numActiveObjects);
	}
}