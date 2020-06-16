export default () => {
  const canvas = document.getElementById(`result-1-background`);
  const ctx = canvas.getContext(`2d`);
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  let current;
  let now;

  const INITIAL_SCALE = 0.1;
  let scaleIncrement = 0.6;
  let currentScale = INITIAL_SCALE;

  const BACKGROUND_INITIAL_POSITION_X = 0;
  const BACKGROUND_INITIAL_POSITION_Y = 0;
  const BACKGROUND_IMAGE_WIDTH = 586;
  const BACKGROUND_IMAGE_HEIGHT = 324;

  function updateAnimation() {
    if (currentScale <= 1 / INITIAL_SCALE) {
      ctx.save();
      ctx.clearRect(-canvasWidth * 2, 0, canvasWidth / INITIAL_SCALE, canvasHeight / INITIAL_SCALE);

      currentScale = currentScale + scaleIncrement;

      if (scaleIncrement >= 0.2) {
        scaleIncrement = scaleIncrement - 0.015;
      }

      ctx.translate(-(canvasWidth / 2.5 * currentScale), 0);
      ctx.scale(currentScale, currentScale);

      drawPicture();
      ctx.restore();
    }
  }

  function drawPicture() {
    ctx.drawImage(backgroundImg, BACKGROUND_INITIAL_POSITION_X, BACKGROUND_INITIAL_POSITION_Y, BACKGROUND_IMAGE_WIDTH, BACKGROUND_IMAGE_HEIGHT);
  }


  const nextFrame = () => {
    if (currentScale >= 1 / INITIAL_SCALE) {
      cancelAnimationFrame(updateCanvas);
      return;
    }

    updateAnimation();

    requestAnimationFrame(nextFrame);
  };

  const backgroundImg = new Image();

  backgroundImg.src = `../../img/back.png`;

  let updateCanvas;

  backgroundImg.addEventListener(`load`, () => {
    setTimeout(() => {
      current = new Date();
      updateCanvas = requestAnimationFrame(nextFrame);
    }, 500);
  });

  ctx.translate(canvasWidth / 2, 0);
  ctx.scale(INITIAL_SCALE, INITIAL_SCALE);
};

