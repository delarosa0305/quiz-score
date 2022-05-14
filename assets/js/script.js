var timerEl = document.querySelector("#countdown");
var btnEl = document.querySelector(".btn-clk")
var score = document.querySelector("#score")
score = 0;

function countdown() {
  var timeLeft = 100;

  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft;
      timeLeft--;
    }
    else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      // when the timer runs out the quiz ends
      endQuiz();
    }
  }, 1000);
}
countdown();


btnEl.addEventListener("click", )