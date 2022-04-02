export function distance(u, v) {
    return Math.sqrt(
        Math.pow(u[0] - v[0], 2) + Math.pow(u[1] - v[1], 2),
        2
    );
}

export function add(u, v) {
    return [u[0] + v[0], u[1] + v[1]];
}

export function sub(u, v) {
    return [u[0] - v[0], u[1] - v[1]];
}

export function scale(r, u) {
    return [r * u[0], r * u[1]];
}

export function rotate(alpha, u) {
    return [
        u[0] * Math.cos(alpha) - u[1] * Math.sin(alpha),
        u[0] * Math.sin(alpha) + u[1] * Math.cos(alpha),
    ];
}

export function bound(u, d) {
    u[0] = Math.max(0, Math.min(u[0], d[0]));
    u[1] = Math.max(0, Math.min(u[1], d[1]));
}

function randomInteger(a, b) {
    return a + Math.floor(Math.random() * (b - a));
}

export function randomColor() {
    const r = randomInteger(0, 255);
    const g = randomInteger(0, 255);
    const b = randomInteger(0, 255);
    return `rgba(${r},${g},${b},0.8)`;
}
