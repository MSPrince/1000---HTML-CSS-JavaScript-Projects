const colors = [
  "green",
  "red",
  "rgba(133,122,200)",
  "#f15025",
  "blue",
  "yellow",
  "purple",
  "cyan",
  "magenta",
  "orange",
  "brown",
  "pink",
  "teal",
  "lime",
  "maroon",
  "navy",
  "olive",
  "peru",
  "indigo",
  "salmon",
  "tomato",
  "violet",
  "wheat",
  "darkgreen",
  "gold",
  "seagreen",
  "steelblue",
  "slategray",
  "khaki",
  "plum",
  "darkcyan",
  "firebrick",
  "darkviolet",
  "forestgreen",
  "dodgerblue",
  "darkslategray",
  "crimson",
  "mediumseagreen",
  "orangered",
  "darkolivegreen",
  "darkorange",
  "royalblue",
  "sienna",
  "darkorchid",
  "darkkhaki",
  "mediumvioletred",
  "limegreen",
  "darkred",
  "rosybrown",
  "mediumspringgreen",
];

// Access a color from the array, for example:
console.log(colors[0]); // Outputs 'green'

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

addEventListener("click", function () {
  const randomColor = getRandomNumber();
  document.body.style.backgroundColor = colors[randomColor];
  color.textContent = colors[randomColor];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
