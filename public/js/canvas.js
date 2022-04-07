import { STATE } from "./state.js";

/** @type { HTMLCanvasElement } */
export const canvas = document.getElementById("canvas");
export const ctx = canvas.getContext("2d");

function makeCanvasesFullScreen() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", makeCanvasesFullScreen);

makeCanvasesFullScreen();

export function clearCanvas(alpha = 1) {
    const h = STATE.dark ? 0 : 255;
    ctx.fillStyle = `rgba(${h},${h},${h},${alpha})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

export function mousePos(e) {
    const rect = canvas.getBoundingClientRect();
    return [
        (e.clientX - rect.left) * (canvas.width / rect.width),
        (e.clientY - rect.top) * (canvas.height / rect.height),
    ];
}
