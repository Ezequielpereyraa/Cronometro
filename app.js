const start = document.querySelector('.button__start');
const stop = document.querySelector('.button__stop');
const restart = document.querySelector('.button__restart');
const minutesSpan = document.querySelector('.cronometro__minutes');
const secondsSpan = document.querySelector('.cronometro__seconds');
const minisecondSpan = document.querySelector('.cronometro__miniseconds');
let cronometro;
let minutes = 0;
let seconds = 0;
let minisecond = 0;

const startTime = () => {
  cronometro = setInterval(() => {
    if (minisecond == 60) {
      minisecond = 0;
      seconds++;
      if (seconds > 9) {
        secondsSpan.textContent = seconds;
      } else {
        secondsSpan.textContent = `0${seconds}`;
      }
    }
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes > 9) {
        minutesSpan.textContent = minutes;
      } else {
        minutesSpan.textContent = `0${minutes}`;
      }
    }
    if (minisecond > 9) {
      minisecondSpan.textContent = minisecond;
    } else {
      minisecondSpan.textContent = `0${minisecond}`;
    }
    minisecond++;
  }, 50);
};
const stopTime = () => {
  clearInterval(cronometro);
};
const resetTime = () => {
  clearInterval(cronometro);
  minutes = 0;
  seconds = 0;
  minisecond = 0;
  minutesSpan.textContent = `0${minutes}`;
  secondsSpan.textContent = `0${seconds}`;
  minisecondSpan.textContent = `0${minisecond}`;
};
restart.addEventListener('click', resetTime);
start.addEventListener('click', startTime);
stop.addEventListener('click', stopTime);
// restart.addEventListener('click', restartTime); */
