import { clearCanvas } from "./canvas.js";
import { Circle } from "./Circle.js";
import { STATE } from "./state.js";

const modal = document.getElementById("modal");
const okBtn = document.getElementById("okBtn");
const sizeInput = document.getElementById("sizeInput");
const thresholdInput = document.getElementById("thresholdInput");
const eraseBtn = document.getElementById("eraseBtn");
const deleteBtn = document.getElementById("deleteBtn");
const orientationBtn = document.getElementById("orientationBtn");
const lineBtn = document.getElementById("lineBtn");
const trailBtn = document.getElementById("trailBtn");
const pauseBtn = document.getElementById("pauseBtn");
const darkBtn = document.getElementById("darkBtn");

export function enableMenu() {
    okBtn.addEventListener("click", () => {
        modal.open = false;
    });

    eraseBtn.addEventListener("click", () => {
        if (
            Circle.list.length > 0 &&
            window.confirm(
                "This will delete all the circles. Are you sure?"
            )
        ) {
            Circle.list = [];
            clearCanvas();
        }
    });

    deleteBtn.addEventListener("click", () => {
        Circle.list.pop();
    });

    orientationBtn.addEventListener("click", (e) => {
        STATE.orientation *= -1;
        e.target.classList.toggle("mirror");
    });

    sizeInput.addEventListener("change", (e) => {
        const n = e.target.valueAsNumber;
        if (n >= 1) STATE.size = n;
    });

    thresholdInput.addEventListener("change", (e) => {
        const t = e.target.valueAsNumber;
        if (t >= 1) STATE.threshold = t;
    });

    lineBtn.addEventListener("click", (e) => {
        STATE.showLines = !STATE.showLines;
        toggleOpacity(e);
    });

    trailBtn.addEventListener("click", (e) => {
        STATE.showTrail = !STATE.showTrail;
        toggleOpacity(e);
    });

    pauseBtn.addEventListener("click", (e) => {
        STATE.paused = !STATE.paused;
        toggleOpacity(e);
    });

    darkBtn.addEventListener("click", (e) => {
        document.body.classList.toggle("dark");
        STATE.dark = !STATE.dark;
        toggleOpacity(e);

        darkBtn.disabled = true;

        if (STATE.dark) {
            const interval = setInterval(() => {
                if (STATE.lightness <= 0) {
                    STATE.lightness = 0;
                    clearInterval(interval);
                    darkBtn.disabled = false;
                    return;
                }
                STATE.lightness -= 15;
            }, 10);
        } else {
            const interval = setInterval(() => {
                if (STATE.lightness >= 255) {
                    STATE.lightness = 255;
                    clearInterval(interval);
                    darkBtn.disabled = false;
                    return;
                }
                STATE.lightness += 15;
            }, 10);
        }
    });
}

function toggleOpacity(e) {
    const icon = e.target.children[0];
    icon.style.opacity = 1.4 - icon.style.opacity;
}
