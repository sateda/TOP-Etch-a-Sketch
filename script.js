// Create the pixels (DIVS) for the sketchpad
const sketchpad = document.querySelector("#sketchpad");

// Draw the sketchpad
function drawSketchpad(gridSize) { 
    // Determine the size of a DIV based on the amount of pixels on a side
    let pixelTotals = gridSize * gridSize;  
    let pixelLength = 960 / gridSize;

    for(let i=0; i < pixelTotals; i++) {
        const pixelDiv = document.createElement("div");
        pixelDiv.classList.add("pixel");
        pixelDiv.style = "min-width: " + pixelLength + "px;" + "height: " + pixelLength + "px;";
        sketchpad.appendChild(pixelDiv);
    };

    addListenersToPixels();
};

function addListenersToPixels() {
    // Listener mouseover event
    const pixels = document.querySelectorAll(".pixel");

    // Loop through all the pixel and add mouseover event listener
    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseover", () => {
            pixel.classList.add("pixel-mouseover");
        });
    });
};

// function to remove all Pixel DIVS
function removePixels() {
    const pixels = document.querySelectorAll(".pixel");

    pixels.forEach((pixel) => {
        sketchpad.removeChild(pixel);
    });
};

// Button grid size event listener
const buttonGridSize = document.querySelector("#buttonGrid");
buttonGridSize.addEventListener("click", () => {
    gridSize = prompt("Please enter you're desired grid length");
    removePixels();
    drawSketchpad(gridSize);
});

// initialize sketchpad
let defaultGrid = 4;
drawSketchpad(defaultGrid);
