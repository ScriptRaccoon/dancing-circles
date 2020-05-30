export const canvas1 = document.getElementById("canvas1");
const ctx1 = canvas1.getContext("2d");

export const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");

const checkBox = document.getElementById("checkbox");
checkBox.checked = false;
checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
        canvas1.style.opacity = 0;
        canvas2.style.opacity = 1;
    } else {
        canvas1.style.opacity = 1;
        canvas2.style.opacity = 0;
    }
});

export const canvDim = [canvas1.clientWidth, canvas1.clientHeight];

export function drawPlayer(p) {
    ctx1.fillStyle = p.color;
    ctx1.strokeStyle = "black";
    ctx1.lineWidth = "2";
    ctx1.beginPath();
    ctx1.arc(...p.pos, p.size, 0, 2 * Math.PI, true);
    ctx1.fill();
    ctx1.stroke();

    ctx2.fillStyle = p.color;
    ctx2.beginPath();
    ctx2.arc(...p.pos, 2, 0, 2 * Math.PI, false);
    ctx2.fill();
}

export function clearAll() {
    ctx1.clearRect(0, 0, ...canvDim);
    ctx2.clearRect(0, 0, ...canvDim);
}

export function clearCanvas() {
    ctx1.clearRect(0, 0, ...canvDim);
}

export function mousePos(e) {
    const rect = canvas1.getBoundingClientRect();
    return [
        (e.clientX - rect.left) * (canvas1.width / rect.width),
        (e.clientY - rect.top) * (canvas1.height / rect.height),
    ];
}
