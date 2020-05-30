import { dancePlayers, boundPlayersToCanvas, drawPlayers } from "./players.js";
import { clearCanvas } from "./draw.js";
import { timer } from "./timer.js";

timer.update = (deltaTime) => {
    clearCanvas();
    dancePlayers();
    boundPlayersToCanvas();
    drawPlayers();
};

timer.start();
