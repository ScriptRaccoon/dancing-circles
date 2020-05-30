import { randInt, randomColor } from "./math.js";
import { drawPlayer } from "./draw.js";

const sizeInput = document.querySelector("input");
sizeInput.value = "20";

class PlayerList {
    constructor() {
        this.players = [];
    }

    add(pos) {
        const size = parseInt(sizeInput.value);
        if (size) {
            const color = randomColor();
            const p = { pos, size, color };
            this.players.push(p);
            return p;
        }
    }

    remove(p) {
        const index = this.players.indexOf(p);
        this.players.splice(index, 1);
    }

    draw() {
        for (const p of this.players) {
            drawPlayer(p);
        }
    }
}

export const playerList = new PlayerList();
