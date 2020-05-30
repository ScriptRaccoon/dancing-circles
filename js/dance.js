import { distance, add, sub, scale, rotate } from "./math.js";

const rotationSpeed = Math.PI / 50;
const threshold = 50;

export function dance(list) {
    const n = list.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const p = list[i];
            const q = list[j];
            if (distance(p.pos, q.pos) < p.size + q.size + threshold) {
                const mid = scale(0.5, add(p.pos, q.pos));
                const pdiff = sub(p.pos, mid);
                p.pos = add(mid, rotate(p.orientation * rotationSpeed, pdiff));
                const qdiff = sub(q.pos, mid);
                q.pos = add(mid, rotate(q.orientation * rotationSpeed, qdiff));
            }
        }
    }
}
