const beat = document.querySelector("html");
let groundZero = 0;
let lastTap = 0;
let counter = 0;
let all_counter = 0;
const bpmDiv = document.getElementById("bpm");
const countDiv = document.getElementById("counter");
let tapDiff = 0;
let avgbpm = 0;
let previousTap = 0;
let elapsed = 0;
// const element = document.getElementsByTagName('body');

// function changeBGColor() {
//   // document.body.style.background = color;
//   element.classList.add('element');
//   console.log(element);
// }

function tapTempo() {
  // changeBGColor();
  const element = document.getElementsByTagName("body");
  element[0].classList.add("addAnimation");
  console.log("add class element");
  // This function runs when the CSS animation is completed
  const listener = element[0].addEventListener("animationend", function () {
    element[0].classList.remove("addAnimation");

    // this removes the listener after it runs so that it doesn't get re-added every time the button is clicked
    element[0].removeEventListener("animationend", listener);
    console.log("remove class element");
  });

  // if first time then record first tap
  if (lastTap === 0) {
    groundZero = new Date().getTime();
    counter = 0;
  }

  lastTap = new Date().getTime();
  elapsed = new Date().getTime() - previousTap;

  previousTap = lastTap;
  tapDiff = lastTap - groundZero;
  if (tapDiff !== 0) {
    avgbpm = Math.round((60000 * counter) / tapDiff);
  }
  // eslint-disable-next-line no-plusplus
  counter++;
  all_counter++;
  bpmDiv.innerHTML = avgbpm;
  countDiv.innerHTML = all_counter;

  // console.log(`elapsed: ${elapsed} avgbpm: ${avgbpm}`);
  if (elapsed > 3000) {
    lastTap = 0;
  }
}

beat.addEventListener("click", tapTempo);
beat.addEventListener("keydown", tapTempo);
// beat.addEventListener('touchstart', tapTempo);

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 32 && e.target === document.body) {
    e.preventDefault();
  }
});
