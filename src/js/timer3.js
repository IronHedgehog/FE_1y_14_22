const infoDiv = document.getElementById('timer3Display');

let hours = 0;
let minutes = 0;
let seconds = 0;

function updateClock() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
      if (hours === 24) {
        hours = 0;
      }
    }
  }
  const time = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  infoDiv.textContent = time;
}

function padZero(num) {
  return num.toString().padStart(2, '0');
}
// timeNow - поточний час(в мілісекундах)
const timeNow = new Date();
//timeNow.getHours() - отримання годин
hours = timeNow.getHours();
//timeNow.getMinutes() - отримання хвилин
minutes = timeNow.getMinutes();
//timeNow.getSeconds() - отримання секунд
seconds = timeNow.getSeconds();

setInterval(updateClock, 1000);
