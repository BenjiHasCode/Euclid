window.addEventListener("load", resizeCanvas);
window.addEventListener("resize", resizeCanvas);

function resizeCanvas() {
    const canvas = document.getElementById("canvas");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    tileWidth = canvas.width/tileWidthView;
    tileHeight = canvas.height/tileHeightView;
}