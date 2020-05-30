import { randomColor, bound } from "./math.js";
import { drawPlayer, canvDim } from "./draw.js";

const clearBtn = document.querySelector("button");
const sizeInput = document.querySelector("input");
const orientationOnput = document.querySelector("select");

sizeInput.value = "20";

function getSize() {
    return parseInt(sizeInput.value);
}

function getOrientation() {
    const orText = orientationOnput.selectedOptions[0].text;
    return orText === "clockwise" ? +1 : -1;
}

class PlayerList {
    constructor() {
        this.players = [];
    }

    add(pos) {
        const size = getSize();
        if (size) {
            const color = randomColor();
            const orientation = getOrientation();
            const p = { pos, size, color, orientation };
            this.players.push(p);
            console.log(p);
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

    boundToCanvas() {
        for (const p of this.players) {
            bound(p.pos, canvDim);
        }
    }
}

export const playerList = new PlayerList();

clearBtn.addEventListener("click", () => {
    playerList.players = [];
});
