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

        switch (targetEl[0].getAttribute(`id`)) {
          case `result`:
            const imgTemplate1 = document.createElement(`div`);
            imgTemplate1.innerHTML = `<img src="img/title-victory.svg?${Math.random()}" alt="">`;
            resultTitle.appendChild(imgTemplate1);

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
