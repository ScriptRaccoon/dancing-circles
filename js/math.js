export function distance(u, v) {
    return Math.sqrt(Math.pow(u[0] - v[0], 2) + Math.pow(u[1] - v[1], 2), 2);
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
    for (const i of [0, 1]) {
        if (u[i] < 0) u[i] = 0;
        if (u[i] > d[i]) u[i] = d[i];
    }
}

export function randInt(a, b) {
    return a + Math.floor(Math.random() * (b - a));
}

export function randomColor() {
    const r = randInt(0, 255);
    const g = randInt(0, 255);
    const b = randInt(0, 255);
    return `rgba(${r},${g},${b},0.8)`;
}
