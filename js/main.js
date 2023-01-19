var audio = document.getElementById("audio");
var minInterval = 120 * 60 * 1000; // minimum interval in milliseconds (1 minute)
var maxInterval = 2 * 60 * 1000; // maximum interval in milliseconds (2 hours) 120 original

console.log(`Min interval: ${minInterval} Max interval: ${maxInterval}`);

function playAudio() {
  console.log("Audio played.");
  audio.play();
  setTimeout(playAudio, randomInterval());
}

function randomInterval() {
  return (
    Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval
  );
}

setTimeout(playAudio, randomInterval());
