let times = document.getElementById("stopwatch");
let startbtn = document.getElementById("start-stop");
let resetbtn = document.getElementById("reset");

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer = false;

startbtn.addEventListener("click", () => {
  if (startbtn.textContent == "Start") {
    timer = true;
    btnchange();
    startfunction();
  } else {
    timer = false;
    btnchange();
  }
});

resetbtn.addEventListener("click", () => {
  timer = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  times.textContent = "00:00:00:00";
});

function startfunction() {
  if (timer) {
    milliseconds++;

    if (milliseconds == 100) {
      seconds += 1;
      milliseconds = 0;
    }

    if (seconds == 60) {
      minutes += 1;
      seconds = 0;
    }

    if (minutes == 60) {
      hours += 1;
      minutes = 0;
    }

    // Display the time in the format HH:MM:SS:MS
    times.textContent =
      hours.toString().padStart(2, "0") +
      ":" +
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0") +
      ":" +
      milliseconds.toString().padStart(2, "0");

    setTimeout(startfunction, 10);
  }
}

function btnchange() {
  if (startbtn.textContent == "Start") {
    startbtn.textContent = "Stop";
  } else {
    startbtn.textContent = "Start";
  }
}
