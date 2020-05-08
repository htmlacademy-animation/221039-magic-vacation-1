export default () => {
  let header = document.querySelector(`.js-header`);
  let menuToggler = document.querySelector(`.js-menu-toggler`);
  let menuLinks = document.querySelectorAll(`.js-menu-link`);

  if (menuToggler) {
    menuToggler.addEventListener(`click`, function () {
      if (header.classList.contains(`page-header--menu-opened`)) {
        header.classList.remove(`page-header--menu-opened`);
        document.body.classList.remove(`menu-opened`);
      } else {
        header.classList.add(`page-header--menu-opened`);
        document.body.classList.add(`menu-opened`);
      }
    });
  }

  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener(`click`, function (evt) {
      if (window.innerWidth < 1025) {
        header.classList.remove(`page-header--menu-opened`);
        document.body.classList.remove(`menu-opened`);
      }

      const rulesLink = document.querySelector(`.js-rules-link`);
      const isCurrentMenuLinkRules = menuLinks[i].getAttribute(`href`) === `#rules`;

      const isCurrentMenuLinkPrizes = menuLinks[i].getAttribute(`href`) === `#prizes`;
      const isCurrentLocationStory = window.location.toString().includes(`#story`);

      if (isCurrentMenuLinkRules && !!rulesLink && rulesLink.classList.contains(`active`)) {
        rulesLink.classList.remove(`active`);
      }

      if (isCurrentMenuLinkPrizes && isCurrentLocationStory) {
        evt.preventDefault();
        let storyBackground = document.querySelector(`.js-story-background`);
        storyBackground.classList.remove(`end-animation`);
        storyBackground.classList.add(`start-animation`);
        storyBackground.addEventListener(`animationend`, function () {
          window.location = menuLinks[i].getAttribute(`href`);
          storyBackground.classList.remove(`start-animation`);
          storyBackground.classList.add(`end-animation`);
        });
      }
    });
  }
};
