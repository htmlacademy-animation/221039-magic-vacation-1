export default () => {
  const canvas = document.getElementById(`result-1-sea-calf`);
  const ctx = canvas.getContext(`2d`);
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  let remainingAnimationSteps = 5;
  let current = new Date();
  let now;

  // const ICE_INITIAL_POSITION_X = 420;
  const ICE_INITIAL_POSITION_X = 200;
  const ICE_INITIAL_POSITION_Y = 310;
  const ICE_IMAGE_WIDTH = 400;
  const ICE_IMAGE_HEIGHT = 164;

  let rotationAmplitude = 20;
  const INITIAL_ROTATION_ANGLE = rotationAmplitude;
  let angle = INITIAL_ROTATION_ANGLE;
  let radian = (Math.PI / 180) * angle;

  let rotationAcceleration = 0.03;
  let rotationSpeed = rotationAcceleration;
  let rotationDirection = 1;

  let translateX = 0;
  let translateY = 0;

  let translateSpeedX = 0.6;
  let translateSpeedY = 0.6;

  const TRANSLATE_SPEED_MAX = 15;
  const END_POSITION_Y = -400;

  let direction = 1; // 1 - up, -1 - down
  let acceleration2 = 0.1;

  let translateY2 = END_POSITION_Y;
  let translateSpeedX2 = acceleration2;
  let translateSpeedY2 = acceleration2;

  // const SEA_CALF_INITIAL_POSITION_X = 370;
  const SEA_CALF_INITIAL_POSITION_X = 150;
  const SEA_CALF_INITIAL_POSITION_Y = 100;
  const SEA_CALF_IMAGE_WIDTH = 450;
  const SEA_CALF_IMAGE_HEIGHT = 450;

  let isImgIceLoaded = false;
  let isImgSeaCalfLoaded = false;

  const updateAnimation = () => {
    if (translateY >= END_POSITION_Y) {
      translateTransform();
    } else {
      rotateTransform();
    }
  };

  const translateTransform = () => {
    ctx.save();
    ctx.clearRect(0, 0, canvasWidth * (2 + Math.sin(radian)), canvasHeight * 2);

    ctx.translate(translateX, 530 + translateY);

    translateX = translateX - Math.sin(radian) * translateSpeedX;
    translateY = translateY - translateSpeedY;

    if (translateSpeedY < TRANSLATE_SPEED_MAX && direction === 1) {
      translateSpeedX = translateSpeedX + 0.6;
      translateSpeedY = translateSpeedY + 0.6;
      // console.log(`SPEED +`);
    } else if (translateSpeedY > 0 && direction === -1) {
      translateSpeedX = translateSpeedX - 0.6;
      translateSpeedY = translateSpeedY - 0.6;
      // console.log(`SPEED -`);
    }

    if (translateSpeedY >= TRANSLATE_SPEED_MAX || translateSpeedY <= 0) {
      direction = -1 * direction;
      // console.log(`CHANGE direction!`);
    }


    // console.log('y!!!', translateY, 'translateSpeedY', translateSpeedY);

    drawPictures();
    ctx.restore();
  };

  const rotateTransform = () => {
    if (angle > 0 && rotationDirection === 1) {
      ctx.save();
      ctx.clearRect(0, 0, canvasWidth * (2 + Math.sin(radian)), canvasHeight * 2);

      translateX = translateX - Math.sin((Math.PI / 180) * (angle - 20)) * translateSpeedX;
      translateY2 = translateY2 + translateSpeedY;


      if (angle > rotationAmplitude / 2) {
        translateSpeedX2 = translateSpeedX2 + acceleration2;
        translateSpeedY2 = translateSpeedY2 + acceleration2;

        angle = angle - rotationSpeed;
        rotationSpeed = rotationSpeed + rotationAcceleration;
      } else if (angle - rotationSpeed <= rotationAmplitude / 2 && angle > 0) {
        translateSpeedX2 = translateSpeedX2 - acceleration2;
        translateSpeedY2 = translateSpeedY2 - acceleration2;

        angle = angle - rotationSpeed > 0 ? angle - rotationSpeed : 0;
        rotationSpeed = rotationSpeed > rotationAcceleration ? rotationSpeed - rotationAcceleration : rotationSpeed;
      }
      // console.log(`TRANSLATE 1 +`, translateY2, `angle`, angle, 'translateSpeedY2', translateSpeedY2);

      rotate((Math.PI / 180) * (angle - INITIAL_ROTATION_ANGLE));
      ctx.translate(translateX, 530 + translateY2);

      console.log('angle', angle, 'rotationSpeed', rotationSpeed);

      drawPictures();
      ctx.restore();
    } else if (angle <= rotationAmplitude) {
      ctx.save();
      ctx.clearRect(0, 0, canvasWidth * (2 + Math.sin(radian)), canvasHeight * 2);

      translateX = translateX + Math.sin((Math.PI / 180) * (angle - rotationAmplitude)) * translateSpeedX;
      translateY2 = translateY2 - translateSpeedY;
      if (angle < rotationAmplitude / 2) {
        translateSpeedX2 = translateSpeedX2 + acceleration2;
        translateSpeedY2 = translateSpeedY2 + acceleration2;

        angle = angle + rotationSpeed;
        rotationSpeed = rotationSpeed + rotationAcceleration;
      } else if (angle + rotationSpeed >= rotationAmplitude / 2 && angle < rotationAmplitude) {
        translateSpeedX2 = translateSpeedX2 - acceleration2;
        translateSpeedY2 = translateSpeedY2 - acceleration2;

        angle = angle + rotationSpeed;
        rotationSpeed = rotationSpeed > rotationAcceleration ? rotationSpeed - rotationAcceleration : rotationSpeed;
      }

      // console.log(`TRANSLATE 2 -`, translateY2, `angle`, angle, 'translateSpeedY2', translateSpeedY2);
      console.log('angle 2', angle, 'rotationSpeed 2', rotationSpeed);

      rotate((Math.PI / 180) * (angle - INITIAL_ROTATION_ANGLE));
      ctx.translate(translateX, 530 + translateY2);

      drawPictures();
      ctx.restore();
    }

    if (angle >= rotationAmplitude || angle <= 0) {
      rotationDirection = -1 * rotationDirection;
      remainingAnimationSteps--;
      // rotationSpeed = 0.01;

      if (angle <= 0) {
        rotationAmplitude = rotationAmplitude - INITIAL_ROTATION_ANGLE / 3;
        acceleration2 = acceleration2 - 0.025;
      }
      console.log(`!!! remainingAnimationSteps`, remainingAnimationSteps, 'rotationAmplitude', rotationAmplitude, 'angle', angle);
    }
  };

  const drawPictures = () => {
    ctx.drawImage(imgIce, ICE_INITIAL_POSITION_X, ICE_INITIAL_POSITION_Y, ICE_IMAGE_WIDTH, ICE_IMAGE_HEIGHT);
    ctx.drawImage(imgSeaCalf, SEA_CALF_INITIAL_POSITION_X, SEA_CALF_INITIAL_POSITION_Y, SEA_CALF_IMAGE_WIDTH, SEA_CALF_IMAGE_HEIGHT);
  };

  const nextFrame = () => {
    if (remainingAnimationSteps <= 0) {
      cancelAnimationFrame(updateCanvas);
      console.log(`CANCEL ANIMATE`);
      return;
    }

    now = new Date();


    if (now - current > 1) {
      current = now;
      updateAnimation();
    }

    requestAnimationFrame(nextFrame);
  };

  const rotate = (rad) => {
    ctx.translate(canvasWidth / 2, canvasHeight / 2);
    ctx.rotate(rad);
    ctx.translate(- canvasWidth / 2, - canvasHeight / 2);
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

  rotate(radian);
};

