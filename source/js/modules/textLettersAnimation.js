export default class TextLettersAnimation {
  constructor(
      elementSelector,
      animationDuration,
      animationTimeInterval,
      cssClassForActivateAnimation,
      cssProperty
  ) {
    this._elementSelector = elementSelector;
    this._animationDuration = animationDuration;
    this._animationTimeInterval = animationTimeInterval;
    this._cssClassForActivateAnimation = cssClassForActivateAnimation;
    this._cssProperty = cssProperty;

    this._element = document.querySelector(this._elementSelector);
    this._animationDelay = 0;

    this._cssClassForStylization = `letter-animation`;
  }

  prepareText() {
    if (!this._element) {
      return;
    }

    const text = this._element.textContent.trim().split(` `).filter((letter) => letter !== ``);

    const content = text.reduce((fragmentParent, word) => {
      const textLetters = Array.from(word).reduce((fragment, letter, index) => {
        const letterElement = document.createElement(`span`);
        letterElement.textContent = letter;

        const animationLetterDelay = index % 2 === 0 ? this._animationDelay : this._animationDelay + this._animationTimeInterval * 3;

        letterElement.style.transition = `${this._cssProperty} ${this._animationDuration}ms ease ${animationLetterDelay}ms`;

        this._animationDelay += this._animationTimeInterval;

        fragment.appendChild(letterElement);
        return fragment;
      }, document.createDocumentFragment());

      const wordElement = document.createElement(`span`);
      wordElement.classList.add(`text-word`);
      wordElement.appendChild(textLetters);

      fragmentParent.appendChild(wordElement);

      return fragmentParent;
    }, document.createDocumentFragment());

    this._element.innerHTML = ``;
    this._element.appendChild(content);
    this._element.classList.add(this._cssClassForStylization);
  }

  runAnimation() {
    if (!this._element) {
      return;
    }

    setTimeout(() => this._element.classList.add(this._cssClassForActivateAnimation), 0);
  }
}
