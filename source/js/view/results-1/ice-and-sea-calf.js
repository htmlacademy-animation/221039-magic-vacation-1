export default () => {
  const canvas = document.getElementById(`result-1-sea-calf`);
  const ctx = canvas.getContext(`2d`);
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  let remainingTime = 2000;
  let current = new Date();
  let now;

  // const ICE_INITIAL_POSITION_X = 420;
  const ICE_INITIAL_POSITION_X = 50;
  const ICE_INITIAL_POSITION_Y = 400;
  const ICE_IMAGE_WIDTH = 400;
  const ICE_IMAGE_HEIGHT = 164;

  let angle = 20;
  let angle2 = 0;
  let x = 0;
  let y = 0;
  let radian = (Math.PI / 180) * angle;

  let translateX = 0;
  let translateY = 0;
  let translateSpeedX = 0;
  let translateSpeedY = 0;

  // const SEA_CALF_INITIAL_POSITION_X = 370;
  const SEA_CALF_INITIAL_POSITION_X = 0;
  const SEA_CALF_INITIAL_POSITION_Y = 190;
  const SEA_CALF_IMAGE_WIDTH = 450;
  const SEA_CALF_IMAGE_HEIGHT = 450;

  let isImgIceLoaded = false;
  let isImgSeaCalfLoaded = false;

  // ctx.rotate(radian);

  function updateAnimation() {
    if (translateY >= -510) {
      translate();
    } else {
      // rotate();
    }
  }

  function translate() {
    ctx.save();
    ctx.clearRect(0, 0, canvasWidth * (1 + Math.sin(radian)), canvasHeight);

    ctx.translate(translateX, 530 + translateY);

    // translateX = translateX - Math.sin(radian) * translateSpeedX;
    translateY = translateY - translateSpeedY;

    // translateSpeedX = translateSpeedX + 1;
    translateSpeedY = translateSpeedY + 1;

    drawPictures();
    ctx.restore();
  }

  function rotate() {
    if (angle > 0) {
      ctx.save();
      ctx.clearRect(0, 0, canvasWidth * (1 + Math.sin(radian)), canvasHeight);


      ctx.translate(translateX, 530 + translateY);
      ctx.translate(-350, 0);
      ctx.rotate((Math.PI / 180) * (angle - 20));
      ctx.translate(350, 0);

      // translateX = translateX - x;
      // translateY = translateY + y;
      angle--;
      x++;
      y++;

      drawPictures();
      ctx.restore();
    } else if (angle2 < 20) {
      ctx.save();
      ctx.clearRect(0, 0, canvasWidth * (1 + Math.sin(radian)), canvasHeight);


      ctx.translate(translateX, 530 + translateY);
      ctx.rotate((Math.PI / 180) * (angle2 - 20));
      // ctx.translate(translateX, (530 + translateY));

      // translateX = translateX - x;
      // translateY = translateY + y;
      angle2++;
      x++;
      y++;

      drawPictures();
      ctx.restore();
    }

    if (angle2 >= 20) {
      angle = 20;
      angle2 = 0;
    }
  }

  function drawPictures() {
    ctx.drawImage(imgIce, ICE_INITIAL_POSITION_X, ICE_INITIAL_POSITION_Y, ICE_IMAGE_WIDTH, ICE_IMAGE_HEIGHT);
    ctx.drawImage(imgSeaCalf, SEA_CALF_INITIAL_POSITION_X, SEA_CALF_INITIAL_POSITION_Y, SEA_CALF_IMAGE_WIDTH, SEA_CALF_IMAGE_HEIGHT);
    // console.log(`remainingTime`, remainingTime);
    // x = x - 1;
  }

  const nextFrame = () => {
    if (remainingTime <= 0) {
      cancelAnimationFrame(updateCanvas);
      console.log(`CANCEL ANIMATE`);
      return;
    }

    now = new Date();


    if (now - current > 1) {
      remainingTime = remainingTime - (now - current);
      // console.log(`draw remainingTime`, remainingTime, `now - current `, now - current);
      current = now;
      updateAnimation();
    }

    requestAnimationFrame(nextFrame);
  };

  const imgIce = new Image();
  const imgSeaCalf = new Image();

  imgIce.src = `../../img/ice.png`;
  imgSeaCalf.src = `../../img/sea-calf-2.png`;

  let updateCanvas;

  imgIce.addEventListener(`load`, () => {
    isImgIceLoaded = true;

    if (isImgSeaCalfLoaded && !updateCanvas) {
      updateCanvas = requestAnimationFrame(nextFrame);
    }
  });

  imgSeaCalf.addEventListener(`load`, () => {
    isImgSeaCalfLoaded = true;

    if (isImgIceLoaded && !updateCanvas) {
      updateCanvas = requestAnimationFrame(nextFrame);
    }
  });
};

