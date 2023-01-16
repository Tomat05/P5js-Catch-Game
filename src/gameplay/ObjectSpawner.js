class ObjectSpawner {
	constructor() {
		this.timeToNextSpawn = 1000;
		this.timeBetweenSpawns = 2500;

		this.maxObjectsInScene = 6;
		this.fallingObjectsPool = [];
		this.activeObjects = [];
	}

	setup() {
		for (let i = 0; i < this.maxObjectsInScene; i++) {
			this.fallingObjectsPool.push(new FallingObject());
		}
	}

	spawn() {
		let obj = this.fallingObjectsPool.shift();
		obj.setActive();
		this.activeObjects.push(obj);
	}

	despawn() {
		let obj = this.activeObjects.shift();
		obj.reset();
		this.fallingObjectsPool.push(obj);
	}

	updateActiveObjects() {
		for (let i = 0; i < this.activeObjects.length; i++) {
			if (this.activeObjects[i].update()) {
				this.despawn();
			}
		}
	}

	onFrameUpdate() {
		this.updateActiveObjects();

		this.timeToNextSpawn -= deltaTime;
		if (this.timeToNextSpawn <= 0) {
			this.spawn();
			this.timeToNextSpawn = this.timeBetweenSpawns;
			if (this.timeBetweenSpawns <= 400) {
				this.timeBetweenSpawns = 400;
				return;
			}
			this.timeBetweenSpawns *= 0.99 / difficulty;
		}
	}
}