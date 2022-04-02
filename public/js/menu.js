import { clearCanvas } from "./canvas.js";
import { Circle } from "./Circle.js";
import { STATE } from "./state.js";

export function enableMenu() {
    document.getElementById("okBtn").addEventListener("click", () => {
        document.getElementById("modal").open = false;
    });

    document
        .getElementById("eraseBtn")
        .addEventListener("click", () => {
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

    document
        .getElementById("deleteBtn")
        .addEventListener("click", () => {
            Circle.list.pop();
        });

    document
        .getElementById("orientationBtn")
        .addEventListener("click", (e) => {
            STATE.orientation *= -1;
            e.target.classList.toggle("mirror");
        });

    document
        .getElementById("sizeInput")
        .addEventListener("change", (e) => {
            const n = e.target.valueAsNumber;
            if (n >= 1) STATE.size = n;
        });
    document
        .getElementById("lineBtn")
        .addEventListener("click", (e) => {
            STATE.showLines = !STATE.showLines;
        });
}
