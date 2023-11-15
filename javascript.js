const container = document.querySelector(".container");
const createGridButton = document.querySelector("button");

createGridButton.addEventListener("click", () => {
  let squarePerSide;
  do {
    squarePerSide = prompt("Enter the number of square per side (1-100):")
  } while (squarePerSide < 1 || squarePerSide > 100);
  createGrid(squarePerSide);
})

function createGrid(size) {
  container.textContent = ""

  const width = `${container.offsetWidth / size}px`;

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList = "square";
    div.style.width = width;
    div.style.height = width;

    container.appendChild(div);
  }

  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "blue";
    })
  })
}

