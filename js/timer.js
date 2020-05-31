class Timer {
    constructor(deltaTime) {
        let accumulatedTime = 0;
        let lastTime = 0;

        this.loop = (currentTime) => {
            accumulatedTime += (currentTime - lastTime) / 1000;
            if (accumulatedTime > 1) {
                accumulatedTime = 1;
            }
            while (accumulatedTime > deltaTime) {
                this.update(deltaTime);
                accumulatedTime -= deltaTime;
            }

            lastTime = currentTime;

            this.start();
        };
    }

    start() {
        requestAnimationFrame(this.loop);
    }
}

export const timer = new Timer(1 / 60);
