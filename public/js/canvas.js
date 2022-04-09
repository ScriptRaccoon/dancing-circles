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
    ctx.fillStyle = `rgba(${STATE.lightness},${STATE.lightness},${STATE.lightness},${alpha})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

export function mousePos(e) {
    const rect = canvas.getBoundingClientRect();
    return [
        (e.clientX - rect.left) * (canvas.width / rect.width),
        (e.clientY - rect.top) * (canvas.height / rect.height),
    ];
}
