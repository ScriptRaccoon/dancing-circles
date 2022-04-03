import { ctx, canvas } from "./canvas.js";
import {
    distance,
    scale,
    add,
    sub,
    rotate,
    randomColor,
} from "./math.js";
import { STATE } from "./state.js";

export class Circle {
    static list = [];

    static rotationSpeed = Math.PI / 75;
    static threshold = 50;

    static drawAll() {
        Circle.list.forEach((circle) => circle.draw());
    }

    static removeIfOutside() {
        Circle.list.forEach((circle) => {
            if (
                circle.pos[0] - circle.size > canvas.width ||
                circle.pos[0] + circle.size < 0 ||
                circle.pos[1] - circle.size > canvas.height ||
                circle.pos[1] + circle.size < 0
            ) {
                Circle.list = Circle.list.filter((x) => x != circle);
            }
        });
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

                    if (STATE.showLines) {
                        c.connectWith(d);
                    }
                }
            }
        }
    }

    constructor({ pos, size, orientation }) {
        this.pos = pos;
        this.size = size;
        this.color = randomColor();
        this.orientation = orientation;
        this.draw();
        Circle.list.push(this);
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(...this.pos, this.size, 0, 2 * Math.PI, true);
        ctx.fill();
        if (!STATE.showTrail) {
            ctx.lineWidth = 2;
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
