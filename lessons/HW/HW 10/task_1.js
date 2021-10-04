const colors = ["red", "green", "violet", "gray", "blue", "yellow"];

let refs = {
  start: document.querySelector(`button[data-action="start"]`),
  stop: document.querySelector(`button[data-action="stop"]`),
  body: document.querySelector("body"),
};

let timerChangeColorInterval = null;
refs.stop.setAttribute("disabled", "true");

refs.start.addEventListener("click", (event) => {
  refs.start.setAttribute("disabled", "true");
  refs.stop.removeAttribute("disabled");

  timerChangeColorInterval = setInterval(function () {
    changeColor(getRandomIndexColor(colors));
  }, 1000);
});

refs.stop.addEventListener("click", (event) => {
  refs.start.removeAttribute("disabled");
  refs.stop.setAttribute("disabled", "true");

  clearInterval(timerChangeColorInterval);
});

function changeColor(index) {
  refs.body.style.background = colors[index];
}

//version 1:
function getRandomIndexColor(arr) {
  return _.random(0, arr.length - 1);
}

//version 2:
function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
