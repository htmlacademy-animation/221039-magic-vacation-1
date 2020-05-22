export default () => {
  // Prize 1
  const prizesItemYourneys = document.querySelector(`.js-prizes-item-journeys`);

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

  prizesItemYourneys.prepend(journeysTemplate);

  // Prize 2
  const prizesItemCases = document.querySelector(`.js-prizes-item-cases`);

  const casesTemplate = document.createElement(`div`);
  casesTemplate.innerHTML = `
            <div class="prizes__icon">
                <img src="img/prize2.svg?${Math.random()}" alt="">
            </div>
        `;

  prizesItemCases.prepend(casesTemplate);
};

