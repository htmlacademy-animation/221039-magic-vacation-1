export default () => {
  const gameTimerMinutesElement = document.querySelector(`.js-game-timer-minutes`);
  const gameTimerSecondsElement = document.querySelector(`.js-game-timer-seconds`);

  if (gameTimerMinutesElement && gameTimerSecondsElement) {
    let gameTimerMinutes = +gameTimerMinutesElement.textContent;
    let gameTimerSeconds = +gameTimerSecondsElement.textContent;
    let remainingTime;

    const ONE_SECOND = 1000;
    let now;
    let current = new Date();

    const updateTimer = () => {
      if (gameTimerSeconds === 0 && gameTimerMinutes > 0) {
        gameTimerMinutes--;
        gameTimerSeconds = 59;

        gameTimerMinutesElement.textContent = gameTimerMinutes;
        gameTimerSecondsElement.textContent = gameTimerSeconds;
      } else if (gameTimerSeconds > 10) {
        gameTimerSeconds--;
        gameTimerSecondsElement.textContent = gameTimerSeconds;
      } else {
        gameTimerSeconds--;
        gameTimerSecondsElement.textContent = `0` + gameTimerSeconds.toString();
      }

      remainingTime = gameTimerMinutes * 60 + gameTimerSeconds;
    };

    const nextFrameTimerAnimation = () => {
      if (remainingTime === 0) {
        cancelAnimationFrame(updateTimerAnimation);
        return;
      }

      now = new Date();

      if (now - current >= ONE_SECOND) {
        current = now;
        updateTimer();
      }

      requestAnimationFrame(nextFrameTimerAnimation);
    };

    const updateTimerAnimation = requestAnimationFrame(nextFrameTimerAnimation);
  }
};
