import { ctx, canvas } from "./canvas.js";
import {
    distance,
    scale,
    add,
    sub,
    rotate,
    randomColor,
    bound,
} from "./math.js";

export class Circle {
    static list = [];

    static rotationSpeed = Math.PI / 75;
    static threshold = 50;

    static drawAll() {
        Circle.list.forEach((circle) => circle.draw());
    }

    static boundToCanvas() {
        Circle.list.forEach((circle) =>
            bound(circle.pos, [canvas.width, canvas.height])
        );
    }

    static applyDance() {
        for (let i = 0; i < Circle.list.length; i++) {
            for (let j = i + 1; j < Circle.list.length; j++) {
                const c = Circle.list[i];
                const d = Circle.list[j];
                if (
                    distance(c.pos, d.pos) <
                    c.size + d.size + Circle.threshold
                ) {
                    const midPoint = scale(0.5, add(c.pos, d.pos));
                    const vectorToC = sub(c.pos, midPoint);
                    const rotatedVectorToC = rotate(
                        c.orientation * Circle.rotationSpeed,
                        vectorToC
                    );
                    c.pos = add(midPoint, rotatedVectorToC);
                    const vectorToD = sub(d.pos, midPoint);
                    const rotatedVectorToD = rotate(
                        d.orientation * Circle.rotationSpeed,
                        vectorToD
                    );
                    d.pos = add(midPoint, rotatedVectorToD);
                }
            }
        }
    }

    constructor({ pos, size, orientation }) {
        this.pos = pos;
        this.size = size;
        this.color = randomColor();
        this.orientation = orientation;
        Circle.list.push(this);
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(...this.pos, this.size, 0, 2 * Math.PI, true);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
}
