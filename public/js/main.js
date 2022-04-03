import { clearCanvas, mousePos } from "./canvas.js";
import { Circle } from "./Circle.js";
import { enableMenu } from "./menu.js";
import { STATE } from "./state.js";

enableMenu();

function loop() {
    if (!STATE.paused) {
        clearCanvas(STATE.showTrail ? 0.1 : 1);
        Circle.applyDance();
        Circle.boundToCanvas();
        Circle.drawAll();
    }
    requestAnimationFrame(loop);
}

loop();

canvas.addEventListener("click", (e) => {
    if (STATE.paused) return;
    new Circle({
        pos: mousePos(e),
        size: STATE.size,
        orientation: STATE.orientation,
    });
});
