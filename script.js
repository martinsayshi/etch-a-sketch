const container = document.querySelector(".container");
const clear = document.querySelector("#clear");
const rainbow = document.querySelector("#rainbow");

const COLORS = ["#FF6D60","#F7D060", "#F3E99F", "#98D8AA", "#B2A4FF", "#89CFFD"];

let rows = 4;
let dimensions = 800 / rows;

function getRandomInteger(min, max) {
    // Returns a random number with min included and max excluded
    return Math.floor(Math.random() * (max - min) + min);
}

function color(event) {
    // Generates new color if rainbow class is active
    if (rainbow.classList.contains("active")) {
        let randomColor = getRandomInteger(0, COLORS.length);
        event.target.style.background = `${COLORS[randomColor]}`;
    } else {
        event.target.style.background = "black";
    }
}

for (let i= 0; i < rows; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < rows; j++) {
        let square = document.createElement("div");
        square.style.cssText = `min-width: ${dimensions}px; min-height: ${dimensions}px;`;   
        square.classList.add("square");
        row.appendChild(square);
    }
    container.appendChild(row);
}

const elements = Array.from(document.querySelectorAll(".square"));

elements.forEach(element => element.addEventListener('mouseleave', color));

clear.addEventListener('click', () => {
    elements.forEach(element => element.style.background = "white");
});


