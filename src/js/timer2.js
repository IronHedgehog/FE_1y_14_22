const infoDiv = document.getElementById('timer2Display');
const startButton = document.getElementById('StartTimer');

let timer;

function startTimer() {
  // Повертає поточне значення часу в МС
  // 10с - 10000мс
  // 1c - 1000мс
  const startTime = Date.now() + 10000;

  timer = setInterval(() => {
    //startTime -
    const timeLeft = startTime - Date.now();

    if (timeLeft < 0) {
      clearInterval(timer);
      infoDiv.textContent =
        'Час вичерпано час реєструватись та перемогти у конкурсі';

      document.body.style.backgroundColor = 'black';
      return;
    }
    //.toFixed() - фіксує кількість значень після коми
    const secondsLeft = (timeLeft / 1000).toFixed(3);
    infoDiv.textContent = secondsLeft;

    if (timeLeft <= 5000) {
      document.body.style.backgroundColor = 'green';
    }
  }, 1);
}
startTimer();
