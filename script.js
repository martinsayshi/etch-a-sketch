const container = document.querySelector(".container");
let rows = 30;
let dimensions = 800 / rows;

function color(event) {
    event.target.style.background = "green";
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

const elements = document.querySelectorAll(".square")

Array.from(elements).forEach(element => element.addEventListener('mouseleave', color));


