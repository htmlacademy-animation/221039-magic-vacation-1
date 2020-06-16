export default () => {
  const canvas = document.getElementById(`result-1-airplane`);
  const ctx = canvas.getContext(`2d`);
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  let remainingTime = 2000;
  let current = new Date();
  let now;

  const AIRPLANE_INITIAL_POSITION_X = 0;
  const AIRPLANE_INITIAL_POSITION_Y = 0;
  const AIRPLANE_IMAGE_WIDTH = 50;
  const AIRPLANE_IMAGE_HEIGHT = 150;

  function updateAnimation() {
    ctx.save();
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    ctx.scale(1, 1);

    drawPicture();
    ctx.restore();
  }

  function drawPicture() {
    ctx.drawImage(airplaneImg, AIRPLANE_INITIAL_POSITION_X, AIRPLANE_INITIAL_POSITION_Y, AIRPLANE_IMAGE_WIDTH, AIRPLANE_IMAGE_HEIGHT);
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

  const airplaneImg = new Image();

  airplaneImg.src = `../../img/airplane.png`;

  let updateCanvas;

  airplaneImg.addEventListener(`load`, () => {
    updateCanvas = requestAnimationFrame(nextFrame);
  });
};

