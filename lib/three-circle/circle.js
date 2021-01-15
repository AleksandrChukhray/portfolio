import {isZero} from "./lib";
import Line from "./line"
import Point from "./point"

class Circle {
    MISTAKE = 1e-10;

    constructor(R, p, name, angle, set) {
        this.R = R;
        this.x = p.x;
        this.y = p.y;
        this.o = p;
        this.name = name || 'c';
        this.angle = angle || 0;
        this.set = set || 'c0c0'
    }

    signPoint(point) {
        let r = Math.pow(point.x, 2) + Math.pow(point.y, 2)

        if (r === this.R) {
            return 0;
        } else if (r < this.R) {
            return -1;
        } else if (r > this.R) {
            return 1;
        }
    }

    getSecondCenter(alpha) {
        let k = Math.tan(alpha * Math.PI / 180);

        let p1 = new Point((-this.R * k / Math.sqrt(1 + k * k)) + this.x, (-this.R / Math.sqrt(1 + k * k)) + this.y);
        let p2 = new Point((this.R * k / Math.sqrt(1 + k * k)) + this.x, (this.R / Math.sqrt(1 + k * k)) + this.y)

        return (
            (alpha >= 0 && alpha <= 90) ||
            (alpha >= 270 && alpha <= 360) ||
            (alpha <= 0 && alpha >= -90) ||
            (alpha <= -270 && alpha >= -360) ? p2 : p1
        );
    }

    getAngles(R2, R3, A, B, C) {
        let a = A || R3 + R2;
        let b = B || this.R + R2;
        let c = C || this.R + R3;

        const radToGrad = rad => rad * 180 / Math.PI
        const zeroAngles = {alpha: 0, beta: 180, gamma: 180}

        let alpha = radToGrad(Math.acos((b ** 2 + c ** 2 - a ** 2) / (2 * b * c)));
        let beta = radToGrad(Math.acos((a ** 2 + c ** 2 - b ** 2) / (2 * a * c)));
        let gamma = 180 - (alpha + beta);

        if (isZero(alpha)) return zeroAngles;

        return {alpha, beta, gamma};
    }

    getRotateAngles(line, R2, R3) {
        let intersectPointY = new Point(line.p1.x, line.p2.y)
        let center = this.o;

        let IntersectOrdinatSeg = new Line(line.p2, intersectPointY);
        let ordinatSeg = new Line(center, intersectPointY);

        return this.getAngles(
            null,
            null,
            IntersectOrdinatSeg.length(),
            ordinatSeg.length(),
            line.length()
        )
    }

    getTriangleSquare(R2, R3) {
        let a = R3 + R2;
        let b = this.R + R2;
        let c = this.R + R3;

        return 0.25 * Math.sqrt(4 * a ** 2 * b ** 2 - (a ** 2 + b ** 2 - c ** 2))
    }

    isIntersection(circleSet) {
        let isIntersect = false;
        let circle = this;

        circleSet.forEach(value => {
            let line = new Line(value.o, circle.o);

            if (line.length() - (circle.R + value.R) <= -this.MISTAKE) {
                isIntersect = true

                return;
            }
        })

        return isIntersect;
    }

    getAngleByQuarter(line, alpha, alpha1) {
        let angle = alpha + alpha1;
        let result;

        if (line.p2.x >= line.p1.x && line.p2.y >= line.p1.y) {
            // I

            result = angle;
        } else if (line.p2.x >= line.p1.x && line.p2.y <= line.p1.y) {
            // II

            result = 180 - angle;
        } else if (line.p2.x <= line.p1.x && line.p2.y <= line.p1.y) {
            // III

            result = -180 + angle;
        } else if (line.p2.x <= line.p1.x && line.p2.y >= line.p1.y) {
            // IV

            result = -angle;
        }

        return result;
    }
}

export default Circle;