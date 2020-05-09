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
import TextLettersAnimation from "./modules/textLettersAnimation";

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

const LETTERS_ANIMATION_PARAMETERS = {
  animationDuration: 500,
  animationTimeInterval: 30,
  cssClassForActivateAnimation: `active`,
  cssProperty: `transform`
};

const animatedSlogan = new TextLettersAnimation(
    `.js-intro-title`,
    LETTERS_ANIMATION_PARAMETERS.animationDuration,
    LETTERS_ANIMATION_PARAMETERS.animationTimeInterval,
    LETTERS_ANIMATION_PARAMETERS.cssClassForActivateAnimation,
    LETTERS_ANIMATION_PARAMETERS.cssProperty
);

const animatedDate = new TextLettersAnimation(
    `.js-intro-date`,
    LETTERS_ANIMATION_PARAMETERS.animationDuration,
    LETTERS_ANIMATION_PARAMETERS.animationTimeInterval,
    LETTERS_ANIMATION_PARAMETERS.cssClassForActivateAnimation,
    LETTERS_ANIMATION_PARAMETERS.cssProperty
);

animatedSlogan.prepareText();
animatedSlogan.runAnimation();

animatedDate.prepareText();
document
  .querySelector(`.js-intro-title .text-word:last-of-type span:last-of-type`)
  .addEventListener(`transitionend`, () => {
    animatedDate.runAnimation();
  });

document.addEventListener(`DOMContentLoaded`, loadHandler);

function loadHandler() {
  document.body.classList.add(`ready`);
}

const rulesLastItem = document.querySelector(`.js-rules-last-item p`);
const rulesLink = document.querySelector(`.js-rules-link`);
rulesLastItem.addEventListener(`animationend`, function () {
  rulesLink.classList.add(`active`);
});
