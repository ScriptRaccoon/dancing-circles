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
import { STATE } from "./state.js";

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
                    if (STATE.showLines) {
                        c.connectWith(d);
                    }

                    const midPoint = scale(0.5, add(c.pos, d.pos));

                    const vector1 = sub(c.pos, midPoint);
                    const rotatedVector1 = rotate(
                        c.orientation * Circle.rotationSpeed,
                        vector1
                    );
                    c.pos = add(midPoint, rotatedVector1);

                    const vector2 = sub(d.pos, midPoint);
                    const rotatedVector2 = rotate(
                        d.orientation * Circle.rotationSpeed,
                        vector2
                    );
                    d.pos = add(midPoint, rotatedVector2);
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
        ctx.lineWidth = 2;
        ctx.fillStyle = this.color;

        ctx.beginPath();
        ctx.arc(...this.pos, this.size, 0, 2 * Math.PI, true);
        ctx.fill();
        if (!STATE.showTrail) {
            ctx.strokeStyle = "black";
            ctx.stroke();
        }
        ctx.closePath();
    }

    connectWith(circle) {
        ctx.lineWidth = 1;
        ctx.strokeStyle = "rgba(0,0,0,0.6)";
        ctx.beginPath();
        ctx.moveTo(...this.pos);
        ctx.lineTo(...circle.pos);
        ctx.closePath();
        ctx.stroke();
    }
}
