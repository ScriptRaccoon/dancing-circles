export const canvas = document.querySelector("canvas");
export const ctx = canvas.getContext("2d");

export const canvDim = [canvas.clientWidth, canvas.clientHeight];

export function drawPlayer(p) {
    ctx.fillStyle = p.color;
    ctx.strokeStyle = "black";
    ctx.lineWidth = "2";
    ctx.beginPath();
    ctx.arc(...p.pos, p.size, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.stroke();
}

export function clearCanvas() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}

export function mousePos(e) {
    const rect = canvas.getBoundingClientRect();
    return [
        (e.clientX - rect.left) * (canvas.width / rect.width),
        (e.clientY - rect.top) * (canvas.height / rect.height),
    ];
}
