class Canvas {
    constructor(el) {
        this.el = el;

        if (el && el.getContext) {
            this.ctx = el.getContext("2d");
        } else {
            throw new Error('init error');
        }
    }

    point(point, color) {
        if (color) this.fillStyle = color;

        this.ctx.beginPath();
        this.ctx.moveTo(point.x, point.y);
        this.ctx.arc(point.x, point.y, 1, 0, Math.PI * 2, true);
        this.ctx.fill();
    }

    line(point1, point2,) {
        this.ctx.beginPath();
        this.ctx.moveTo(point1.x, point1.y);
        this.ctx.lineTo(point2.x, point2.y);
        this.ctx.stroke();
    }

    circle(point, R, text) {
        this.ctx.font = "14px Arial";
        this.ctx.strokeText(text, point.x, point.y);

        this.ctx.beginPath();
        this.ctx.arc(point.x, point.y, R, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = 'transparent';
        this.ctx.fill();
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = "#000";
        this.ctx.stroke();

    }
}

export default Canvas