const audio = document.getElementById("audio");
let minInterval = document.getElementById("minInterval").value;
let maxInterval = document.getElementById("maxInterval").value;
let intervalId;

function playAudio() {
  audio.play();
  intervalId = setTimeout(playAudio, randomInterval());
}

function stopAudio() {
  clearTimeout(intervalId);
  audio.pause();
}

function randomInterval() {
  minInterval = document.getElementById("minInterval").value;
  maxInterval = document.getElementById("maxInterval").value;
  return (
    Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval
  );
}
