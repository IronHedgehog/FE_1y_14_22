const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const startButton = document.getElementById('startTimer');
const infoDiv = document.getElementById('timeDisplay');

// 1000мс - 1с
// timer - змінна, яка містить ID запущеного таймера (зробили цю змінну глобальною для того, щоб видаляти таймер при запуску нового)
let timer;

function startTimer() {
  clearInterval(timer);

  // Отримання значень та приведення їх до числового вигляду
  const inputMinutes = parseInt(minutes.value);
  const inputSeconds = parseInt(seconds.value);

  // inputMinutes * 60 - переводимо хвилини в секунди
  // + inputSeconds - додавання інпуту з секундами
  // totalSeconds - змінна, яка утримує у собі загальну кількість часу, яку ввів користувач, у секундах
  let totalSeconds = inputMinutes * 60 + inputSeconds;

  // Запуск таймера
  timer = setInterval(() => {
    if (totalSeconds < 0) {
      clearInterval(timer);
      infoDiv.textContent = 'Таймер добіг кінця';
      return;
    }

    // Отримати значення, скільки хвилин і секунд залишилось
    let minutesLeft = Math.floor(totalSeconds / 60);
    let secondsLeft = totalSeconds % 60;

    // Відображення часу на екрані
    // padStart додає на початок символи, які вказали другим параметром
    infoDiv.textContent = `${minutesLeft
      .toString()
      .padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;

    totalSeconds--;
  }, 1000);
}

startButton.addEventListener('click', startTimer);
