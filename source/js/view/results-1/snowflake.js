export default () => {
  const canvas = document.getElementById(`result-1-snowflake`);
  const ctx = canvas.getContext(`2d`);
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  const canvas2 = document.getElementById(`result-1-snowflake-2`);
  const ctx2 = canvas2.getContext(`2d`);
  const canvasWidth2 = canvas2.width;
  const canvasHeight2 = canvas2.height;

  // Snowflake 1 vars
  const SNOWFLAKE_INITIAL_POSITION_X = 0;
  const SNOWFLAKE_INITIAL_POSITION_Y = 75;
  const SNOWFLAKE_IMAGE_WIDTH = 220;
  const SNOWFLAKE_IMAGE_HEIGHT = 220;

  const AMPLITUDE = 11;
  const ACCELERATION = 0.019;
  const ALPHA_INCREMENT = 0.025;

  let translateY = -AMPLITUDE;
  let translateSpeedY = 0;
  let direction = 1; // 1 - up, -1 - down
  let alpha1 = 0;

  // Snowflake 2 vars
  const SNOWFLAKE_INITIAL_POSITION_X_2 = 0;
  const SNOWFLAKE_INITIAL_POSITION_Y_2 = 175;
  const SNOWFLAKE_IMAGE_WIDTH_2 = 150;
  const SNOWFLAKE_IMAGE_HEIGHT_2 = 150;

  const AMPLITUDE2 = 9;
  const ACCELERATION2 = 0.0155;

  let translateY2 = -AMPLITUDE2;
  let translateSpeedY2 = 0;
  let direction2 = 1;
  let alpha2 = 0;

  const updateAnimation1 = () => {
    ctx.save();
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.translate(0, translateY);

    // opacity
    if (ctx.globalAlpha < 1) {
      alpha1 = alpha1 + ALPHA_INCREMENT <= 1 ? alpha1 + ALPHA_INCREMENT : 1;
      ctx.globalAlpha = +alpha1.toFixed(3);
    }

    // direction
    if (translateY <= -AMPLITUDE || translateY >= AMPLITUDE) {
      direction = -1 * direction;
    }

    // speed
    if (translateY >= -AMPLITUDE && translateY <= 0) {
      translateSpeedY = translateSpeedY + ACCELERATION;
    } else if (translateY > 0 && translateY < AMPLITUDE) {
      translateSpeedY = translateSpeedY - ACCELERATION;
    }

    // coordinate
    if (direction === 1) {
      translateY = translateY - translateSpeedY;
    } else {
      translateY = translateY + translateSpeedY;
    }

    drawPicture1();
    ctx.restore();
  };

  const updateAnimation2 = () => {
    ctx2.save();
    ctx2.clearRect(0, 0, canvasWidth2, canvasHeight2);
    ctx2.translate(0, translateY2);

    // opacity
    if (ctx2.globalAlpha < 1) {
      alpha2 = alpha2 + ALPHA_INCREMENT <= 1 ? alpha2 + ALPHA_INCREMENT : 1;
      ctx2.globalAlpha = +alpha2.toFixed(2);
    }

    // direction
    if (translateY2 <= -AMPLITUDE2 || translateY2 >= AMPLITUDE2) {
      direction2 = -1 * direction2;
    }

    // speed
    if (translateY2 >= -AMPLITUDE2 && translateY2 <= 0) {
      translateSpeedY2 = translateSpeedY2 + ACCELERATION2;
    } else if (translateY2 > 0 && translateY2 < AMPLITUDE2) {
      translateSpeedY2 = translateSpeedY2 - ACCELERATION2;
    }

    // coordinate
    if (direction2 === 1) {
      translateY2 = translateY2 - translateSpeedY2;
    } else {
      translateY2 = translateY2 + translateSpeedY2;
    }

    drawPicture2();
    ctx2.restore();
  };

  const drawPicture1 = () => {
    ctx.drawImage(snowflakeImg, SNOWFLAKE_INITIAL_POSITION_X, SNOWFLAKE_INITIAL_POSITION_Y, SNOWFLAKE_IMAGE_WIDTH, SNOWFLAKE_IMAGE_HEIGHT);
  };

  const drawPicture2 = () => {
    ctx2.drawImage(snowflakeImg, SNOWFLAKE_INITIAL_POSITION_X_2, SNOWFLAKE_INITIAL_POSITION_Y_2, SNOWFLAKE_IMAGE_WIDTH_2, SNOWFLAKE_IMAGE_HEIGHT_2);
  };

  const nextFrame1 = () => {
    updateAnimation1();

    requestAnimationFrame(nextFrame1);
  };

  const nextFrame2 = () => {
    updateAnimation2();

    requestAnimationFrame(nextFrame2);
  };

  const runAnimations = () => {
    ctx.globalAlpha = 0;
    ctx2.globalAlpha = 0;
    setTimeout(() => requestAnimationFrame(nextFrame1), 500);
    setTimeout(() => requestAnimationFrame(nextFrame2), 800);
  };

  const snowflakeImg = new Image();

  snowflakeImg.src = `../../img/snowflake.png`;

  snowflakeImg.addEventListener(`load`, runAnimations);
};

