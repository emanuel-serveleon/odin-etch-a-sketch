const container = document.querySelector(".container");

for (let i = 0; i < 16*16; i++) {
  const div = document.createElement("div");
  div.classList = "square";

  container.appendChild(div);
}

const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
  square.addEventListener("mouseenter", () => {
    square.style.backgroundColor = "blue";
  })
})