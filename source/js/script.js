// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

document.addEventListener(`DOMContentLoaded`, loadHandler);

function loadHandler() {
  document.body.classList.add(`ready`);
}

const rulesLastItem = document.querySelector(`.js-rules-last-item p`);
const rulesLink = document.querySelector(`.js-rules-link`);
rulesLastItem.addEventListener(`animationend`, function () {
  rulesLink.classList.add(`active`);
});
