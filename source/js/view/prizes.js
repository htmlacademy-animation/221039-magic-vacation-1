export default () => {
  // Prize 1
  const prizesItemJourneys = document.querySelector(`.js-prizes-item-journeys`);

  const journeysTemplate = document.createElement(`div`);
  journeysTemplate.innerHTML = `<div class="prizes__icon prizes__icon--from">
    <div class="prizes__icon-clouds">
      <img src="./img/prize1-clouds.svg?${Math.random()}" alt="">
    </div>
    <div class="prizes__icon-airship">
      <div class="prizes__icon-airship-dirigible">
        <img src="./img/prize1-airship.svg?${Math.random()}" alt="">
      </div>
      <div class="prizes__icon-airship-emissions">
        <img src="./img/prize1-airship-emissions.svg?${Math.random()}" alt="">
      </div>
    </div>
    <img src="./img/prize1-land.svg?${Math.random()}" alt="">
  </div>
  <div class="prizes__icon prizes__icon--to">
    <img src="./img/prize1-ski.svg?${Math.random()}" alt="">
    <img src="./img/prize1-chair.svg?${Math.random()}" alt="">
    <img src="./img/prize1-branch.svg?${Math.random()}" alt="">
  </div>`
  ;

  prizesItemJourneys.prepend(journeysTemplate);

  // Prize 2
  const prizesItemCases = document.querySelector(`.js-prizes-item-cases`);

  const casesTemplate = document.createElement(`div`);
  casesTemplate.innerHTML = `
    <div class="prizes__icon">
      <picture>
        <source srcset="img/prize2-mob.svg" media="(orientation: portrait)">
        <img src="img/prize2.svg?${Math.random()}" alt="">
      </picture>
    </div>
  `;

  prizesItemCases.prepend(casesTemplate);

  // Prize 3
  const prizesItemCodes = document.querySelector(`.js-prizes-item-codes`);

  const codesTemplate = document.createElement(`div`);
  codesTemplate.innerHTML = `
    <div class="prizes__icon">
      <picture>
        <source srcset="img/prize3-mob.svg" media="(orientation: portrait)">
        <img src="img/prize3.svg?${Math.random()}" alt="">
      </picture>
    </div>
  `;

  prizesItemCodes.prepend(codesTemplate);
};

