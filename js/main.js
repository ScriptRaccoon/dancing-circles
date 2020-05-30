import { playerList } from "./playerList.js";
import { canvas, mousePos, clearCanvas } from "./draw.js";
import { timer } from "./timer.js";
import { dance } from "./dance.js";

canvas.addEventListener("click", (e) => {
    playerList.add(mousePos(e));
});

timer.update = (deltaTime) => {
    clearCanvas();
    dance(playerList.players);
    playerList.boundToCanvas();
    playerList.draw();
};

timer.start();
