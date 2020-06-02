export function prizesCasesNumberAnimate() {
  const prizesCasesNumberElement = document.querySelector(`.js-prizes-item-cases-number`);

  if (prizesCasesNumberElement) {
    let prizesCasesNumber = +prizesCasesNumberElement.textContent;
    const PRIZES_CASES_NUMBER_ANIMATION_DURATION = 1000;
    const PRIZES_CASES_MAX_NUMBER = 7;
    const FPS_INTERVAL_CASES = PRIZES_CASES_NUMBER_ANIMATION_DURATION / PRIZES_CASES_MAX_NUMBER;

    let now;
    let current = new Date();

    const updatePrizesCasesNumber = () => {
      prizesCasesNumber++;
      prizesCasesNumberElement.textContent = prizesCasesNumber;
    };

    const nextFramePrizesCasesNumberAnimation = () => {
      if (prizesCasesNumber >= PRIZES_CASES_MAX_NUMBER) {
        cancelAnimationFrame(updatePrizesCasesNumberAnimation);
        return;
      }

      now = new Date();

      if (now - current >= FPS_INTERVAL_CASES) {
        current = now;
        updatePrizesCasesNumber();
      }

      requestAnimationFrame(nextFramePrizesCasesNumberAnimation);
    };

    const updatePrizesCasesNumberAnimation = requestAnimationFrame(nextFramePrizesCasesNumberAnimation);
  }
}

export function prizesCodesNumberAnimate() {
  const prizesCodesNumberElement = document.querySelector(`.js-prizes-item-codes-number`);

  if (prizesCodesNumberElement) {
    let prizesCodesNumber = +prizesCodesNumberElement.textContent;
    const PRIZES_CODES_NUMBER_ANIMATION_DURATION = 1000;
    const PRIZES_CODES_MAX_NUMBER = 900;
    const FPS_INTERVAL_CODES = PRIZES_CODES_NUMBER_ANIMATION_DURATION / 10;

    let now;
    let current = new Date();

    const updatePrizesCodesNumber = () => {
      const randomNumber = Math.round(Math.random() * 100 + 100);
      prizesCodesNumber = prizesCodesNumber + randomNumber;
      prizesCodesNumberElement.textContent = prizesCodesNumber <= PRIZES_CODES_MAX_NUMBER ? prizesCodesNumber : PRIZES_CODES_MAX_NUMBER;
    };

    const nextFramePrizesCodesNumberAnimation = () => {
      if (prizesCodesNumber >= PRIZES_CODES_MAX_NUMBER) {
        cancelAnimationFrame(updatePrizesCodesNumberAnimation);
        return;
      }

      now = new Date();

      if (now - current >= FPS_INTERVAL_CODES) {
        current = now;
        updatePrizesCodesNumber();
      }

      requestAnimationFrame(nextFramePrizesCodesNumberAnimation);
    };

    const updatePrizesCodesNumberAnimation = requestAnimationFrame(nextFramePrizesCodesNumberAnimation);
  }
}

export function resetPrizesNumber() {
  const prizesCasesNumberElement = document.querySelector(`.js-prizes-item-cases-number`);
  const prizesCodesNumberElement = document.querySelector(`.js-prizes-item-codes-number`);

  const INITIAL_PRIZES_CASES_NUMBER = 1;
  const INITIAL_PRIZES_CODES_NUMBER = 11;

  prizesCasesNumberElement.textContent = INITIAL_PRIZES_CASES_NUMBER;
  prizesCodesNumberElement.textContent = INITIAL_PRIZES_CODES_NUMBER;
}
