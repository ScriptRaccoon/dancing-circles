import { randomColor, bound, add, sub, scale, rotate, distance } from "./math.js";
import { canvas, mousePos, drawPlayer, canvDim } from "./draw.js";

const clearBtn = document.querySelector("button");
const sizeInput = document.querySelector("input");
const orientationOnput = document.querySelector("select");

let players = [];

clearBtn.addEventListener("click", () => {
    players = [];
});

canvas.addEventListener("click", (e) => {
    addPlayer(mousePos(e));
});

sizeInput.value = "20";

function getSize() {
    return parseInt(sizeInput.value);
}

function getOrientation() {
    const orText = orientationOnput.selectedOptions[0].text;
    return orText === "clockwise" ? +1 : -1;
}

function addPlayer(pos) {
    const size = getSize();
    if (size) {
        const color = randomColor();
        const orientation = getOrientation();
        const p = { pos, size, color, orientation };
        players.push(p);
    }
}

export function drawPlayers() {
    for (const p of players) {
        drawPlayer(p);
    }
}

export function boundPlayersToCanvas() {
    for (const p of players) {
        bound(p.pos, canvDim);
    }
}

const rotationSpeed = Math.PI / 50;
const threshold = 50;

export function dancePlayers() {
    const n = players.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const p = players[i];
            const q = players[j];
            if (distance(p.pos, q.pos) < p.size + q.size + threshold) {
                const mid = scale(0.5, add(p.pos, q.pos));
                const pdiff = sub(p.pos, mid);
                p.pos = add(mid, rotate(p.orientation * rotationSpeed, pdiff));
                const qdiff = sub(q.pos, mid);
                q.pos = add(mid, rotate(q.orientation * rotationSpeed, qdiff));
            }
        }
    }
}
