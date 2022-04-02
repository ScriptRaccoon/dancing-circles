export const canvas = document.getElementById("canvas");
export const ctx = canvas.getContext("2d");

function makeCanvasesFullScreen() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.lineWidth = "2";
}

window.addEventListener("resize", makeCanvasesFullScreen);

makeCanvasesFullScreen();

export function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export function mousePos(e) {
    const rect = canvas.getBoundingClientRect();
    return [
        (e.clientX - rect.left) * (canvas.width / rect.width),
        (e.clientY - rect.top) * (canvas.height / rect.height),
    ];
}
