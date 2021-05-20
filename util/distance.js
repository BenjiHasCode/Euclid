// d = Math.sqrt((x2 - x1)^2 + (y2 - y1)^2);
function distance(x1, y1, x2, y2) {
    const x = Math.pow(x2 - x1, 2);
    const y = Math.pow(y2 - y1, 2);

    return Math.sqrt(x + y);
}