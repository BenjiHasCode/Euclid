let debug = false;

const debugButton = document.getElementById("debugButton");
const cameraSlider = document.getElementById("cameraSlider");

debugButton.addEventListener("click", ()=> {
    if(debug) {
        debug = false;
        cameraSlider.hidden = true;
    }
    else {
        debug = true;
        cameraSlider.hidden = false;
    } 
});

cameraSlider.addEventListener("input", ()=> {
    tileWidthView = 9 * cameraSlider.valueAsNumber;
    tileHeightView = 5 * cameraSlider.valueAsNumber;

    //TODO REFACTOR
    tileWidth = canvas.width/tileWidthView;
    tileHeight = canvas.height/tileHeightView;
});