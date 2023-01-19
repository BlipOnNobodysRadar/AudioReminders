let audio = document.getElementById("audio");
let minInterval = document.getElementById("minInterval").value;
let maxInterval = document.getElementById("maxInterval").value;
let intervalId;
let countdown = document.getElementById("countdown");
let time = document.getElementById("time");
let nextPlayback;
let countdownInterval;

const playAudio = () => {
  audio.play();
  nextPlayback = new Date();
  nextInterval = randomInterval();
  nextPlayback.setSeconds(nextPlayback.getSeconds() + nextInterval / 1000);
  intervalId = setTimeout(playAudio, nextInterval);
  countdown.style.display = "block";
  countdownInterval = setInterval(showTime, 1000);
};

const stopAudio = () => {
  clearTimeout(intervalId);
  clearInterval(countdownInterval);
  audio.pause();
  countdown.style.display = "none";
};

const randomInterval = () => {
  minInterval = document.getElementById("minInterval").value * 1000;
  maxInterval = document.getElementById("maxInterval").value * 1000;
  let interval =
    Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval;
  console.log(interval);
  return interval;
};

const showTime = () => {
  let now = new Date();
  let s = Math.floor((nextPlayback - now) / 1000);
  let m = Math.floor(s / 60);
  let h = Math.floor(m / 60);
  let d = Math.floor(h / 24);
  h %= 24;
  m %= 60;
  s %= 60;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  time.innerHTML = (d ? d + "d " : "") + h + ":" + m + ":" + s;
};

countdown.style.display = "none";
