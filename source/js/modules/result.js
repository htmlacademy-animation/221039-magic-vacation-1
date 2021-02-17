import result1Background from '../view/results-1/background';
import result1Airplane from '../view/results-1/airplane';
import result1Snowflake from '../view/results-1/snowflake';
import result1Trees from '../view/results-1/trees';
import result1SeaCalf from '../view/results-1/ice-and-sea-calf';

export default () => {
  let showResultEls = document.querySelectorAll(`.js-show-result`);
  let results = document.querySelectorAll(`.screen--result`);
  if (results.length) {
    for (let i = 0; i < showResultEls.length; i++) {
      showResultEls[i].addEventListener(`click`, function () {
        let target = showResultEls[i].getAttribute(`data-target`);
        [].slice.call(results).forEach(function (el) {
          el.classList.remove(`screen--show`);
          el.classList.add(`screen--hidden`);
        });
        let targetEl = [].slice.call(results).filter(function (el) {
          return el.getAttribute(`id`) === target;
        });

        const resultTitle = targetEl[0].querySelector(`.result__title`);

        if (resultTitle.lastElementChild.tagName === `DIV`) {
          resultTitle.removeChild(resultTitle.lastElementChild);
        }

        switch (targetEl[0].getAttribute(`id`)) {
          case `result`:
            const imgTemplate1 = document.createElement(`div`);
            imgTemplate1.innerHTML = `<img src="img/title-victory.svg?${Math.random()}" alt="">`;
            resultTitle.appendChild(imgTemplate1);

            result1Background();
            result1Airplane();
            result1Snowflake();
            result1Trees();
            result1SeaCalf();

            break;

          case `result2`:
            const imgTemplate2 = document.createElement(`div`);
            imgTemplate2.innerHTML = `<img src="img/title-victory.svg?${Math.random()}" alt="">`;
            resultTitle.appendChild(imgTemplate2);

            break;

          case `result3`:
            const imgTemplate3 = document.createElement(`div`);
            imgTemplate3.innerHTML = `<img src="img/title-failure.svg?${Math.random()}" alt="">`;
            resultTitle.appendChild(imgTemplate3);

            break;


          default:
            return;
        }

        targetEl[0].classList.add(`screen--show`);
        targetEl[0].classList.remove(`screen--hidden`);
      });
    }

    let playBtn = document.querySelector(`.js-play`);
    if (playBtn) {
      playBtn.addEventListener(`click`, function () {
        [].slice.call(results).forEach(function (el) {
          el.classList.remove(`screen--show`);
          el.classList.add(`screen--hidden`);
        });
        document.getElementById(`messages`).innerHTML = ``;
        document.getElementById(`message-field`).focus();
      });
    }
  }
};
