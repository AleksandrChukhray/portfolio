class Line {
    constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;

        this.a = p1.y - p2.y;
        this.b = p2.x - p1.x;
        this.c = p1.x * p2.y - p2.x * p1.y;
    }

    /**
     * Вычисляем знак точки относительно прямой, подставляя координаты точки в уравнение прямой
     * 0 - на прямой
     * -1 - на одной стороне
     * 1 - на другой стороне
     *
     */
    signPoint(point) {
        let r = this.a * point.x + this.b * point.y + this.c;

        if (r === 0) {
            return 0;
        } else if (r < 0) {
            return -1;
        } else if (r > 0) {
            return 1;
        }
    }

    getIntersectPointY() {
        return -this.c / this.b;
    }

    getIntersectPointX() {
        return -this.c / this.a;
    }

    length() {
        return Math.sqrt(Math.pow(this.p2.x - this.p1.x, 2) + Math.pow(this.p2.y - this.p1.y, 2))
    }
}

export default Line;