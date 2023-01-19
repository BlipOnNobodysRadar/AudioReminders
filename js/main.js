let audio = document.getElementById("audio");
let minInterval = document.getElementById("minInterval").value;
let maxInterval = document.getElementById("maxInterval").value;
let intervalId;
let countdown = document.getElementById("countdown");
let time = document.getElementById("time");
let nextPlayback;
let countdownInterval;

const playAudio = () => {
  // play the audio
  audio.play();
  // set the next playback time
  nextPlayback = new Date();
  // generate a random interval
  nextInterval = randomInterval();
  // add the interval to the current time to get the next playback time
  nextPlayback.setSeconds(nextPlayback.getSeconds() + nextInterval / 1000);
  // set a timeout for the next playback
  intervalId = setTimeout(playAudio, nextInterval);
  // show the countdown
  countdown.style.display = "block";
  // update the countdown every second
  countdownInterval = setInterval(showTime, 1000);
};

const stopAudio = () => {
  // stop the timeout and interval
  clearTimeout(intervalId);
  clearInterval(countdownInterval);
  // pause the audio
  audio.pause();
  // hide the countdown
  countdown.style.display = "none";
};

const randomInterval = () => {
  // get the min and max interval values
  minInterval = document.getElementById("minInterval").value * 1000;
  maxInterval = document.getElementById("maxInterval").value * 1000;
  // generate a random interval between the min and max
  let interval =
    Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval;
  return interval;
};

const showTime = () => {
  // get the current time
  let now = new Date();
  // calculate the time remaining until the next playback
  let s = Math.floor((nextPlayback - now) / 1000);
  let m = Math.floor(s / 60);
  let h = Math.floor(m / 60);
  let d = Math.floor(h / 24);
  h %= 24;
  m %= 60;
  s %= 60;
  // format the time
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  // update the countdown
  time.innerHTML = (d ? d + "d " : "") + h + ":" + m + ":" + s;
};

const toggleCountdown = () => {
  countdown.style.display === "block"
    ? (countdown.style.display = "none")
    : (countdown.style.display = "block");
};

countdown.style.display = "none";
