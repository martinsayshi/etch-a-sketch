const container = document.querySelector(".container");
const clear = document.querySelector("#clear");
const rainbow = document.querySelector("#rainbow");
const lines = document.querySelector("#lines");
const size = document.querySelector("#size");
const dimensions = document.querySelector("#dimensions");

const COLORS = ["#FF6D60","#F7D060", "#F3E99F", "#98D8AA", "#B2A4FF", "#89CFFD"];

let rows = 4;


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

function createSketch() {
    dimensions.textContent = `${size.value} x ${size.value}`;
    let heightWidth = 800 / size.value;
    for (let i= 0; i < size.value; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < size.value; j++) {
            let square = document.createElement("div");
            square.style.cssText = `min-width: ${heightWidth}px; min-height: ${heightWidth}px;`;   
            square.classList.add("square");
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

function deleteSketch() {
    const boxes = document.querySelectorAll(".row");
    boxes.forEach(box => box.remove());
    lines.classList.remove("active");
    rainbow.classList.remove("active");
}

function handleMouseleaveEvent(event) {
  color(event);
}

function handleClearClickEvent() {
    const elements = Array.from(document.querySelectorAll(".square"));
    elements.forEach(element => element.style.background = "white");
}

function handleRainbowClickEvent() {
    rainbow.classList.toggle("active");
}

function handleLinesClickEvent() {
    lines.classList.toggle("active");
    const elements = Array.from(document.querySelectorAll(".square"));
    if (lines.classList.contains("active")) {
        elements.forEach(element => element.classList.add("show-lines"));
    } else {
        elements.forEach(element => element.classList.remove("show-lines"));
    }
}

function assignButtonEventListeners() {
    const elements = Array.from(document.querySelectorAll(".square"));

    elements.forEach(element => element.addEventListener('mouseleave', handleMouseleaveEvent));

    clear.addEventListener('click', handleClearClickEvent);

    rainbow.addEventListener('click', handleRainbowClickEvent);

    lines.addEventListener('click', handleLinesClickEvent);
}

function resetSketch() {
    deleteSketch();
    createSketch();
    assignButtonEventListeners();
}

size.addEventListener("click", resetSketch);
createSketch();
assignButtonEventListeners();

document.getElementById('year').textContent = new Date().getFullYear();