// Create the pixels (DIVS) for the sketchpad
const sketchpad = document.querySelector("#sketchpad");

square = 960*960 / 16;
width = Math.sqrt(square);
console.log(width);

for(let i=0; i < 16; i++) {
    const pixelDiv = document.createElement("div");
    pixelDiv.classList.add("pixel");
    pixelDiv.style = "min-width: " + width + "px;" + "height: " + width + "px;";
    sketchpad.appendChild(pixelDiv);
};

// Listener mouseover event
const pixels = document.querySelectorAll('.pixel');

// Loop through all the pixel and add mouseover event listener
pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", () => {
        pixel.classList.add("pixel-mouseover");
    });
});

