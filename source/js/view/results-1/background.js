export default () => {
  const canvas = document.getElementById(`result-1-background`);
  const ctx = canvas.getContext(`2d`);
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  let x = 314;
  let y = 100 + 35 * Math.sin(-0.0075 * x);
  let currentX = 0;
  let currentY = 0;
  let alpha = 0;
  let y2 = 95 + 55 * Math.sin(0.015 * 607 - 1.25);
  let r = 10;

  // const INITIAL_SCALE = 0.1;
  // let scaleIncrement = 0.6;
  // let currentScale = INITIAL_SCALE;
  //
  let airplanePositionX = 0;
  let airplanePositionY = 0;
  const yMax = 150;
  const AIRPLANE_IMAGE_WIDTH = 150;
  const AIRPLANE_IMAGE_HEIGHT = 150;

  function updateAnimation() {

    if (y <= yMax) {
      sin1();
    } else {
      // sin2();
    }
  }

  const drawAirplanePicture = (positionX, positionY) => {
    ctx.drawImage(airplaneImg, canvasWidth / 2 - AIRPLANE_IMAGE_WIDTH / 2, canvasHeight / 2 - AIRPLANE_IMAGE_HEIGHT / 2, AIRPLANE_IMAGE_WIDTH, AIRPLANE_IMAGE_HEIGHT);
  };

  const drawBackground = () => {
    ctx.drawImage(backgroundImg, 70, 0, 725, 390);
  };

  const sin1 = () => {
    currentX = x;
    currentY = y;
    x = x + 5;

    y = 100 + 35 * Math.sin(-0.0075 * x);

    alpha = Math.atan((y - currentY) / (x - currentX)); // tg(A) = y/x, arctg(y/x) = A

    if (r <= 200) {
      r = r + 2;
    }

    // console.log(`y1`, y, x); // 606
    // console.log(`cos y1`, Math.cos(y));

    // ctx.stroke();
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.lineTo(x, y);

    // ctx.arc(310, 35 + r, r, (Math.PI / 180 * 0), (- Math.PI / 180 * 0.01), false);

    // ctx.lineWidth = 5;
    ctx.strokeStyle = `#FFF`;
    ctx.fillStyle = `#FFF`;
    // ctx.stroke();


    // ctx.fill();
      ctx.save();
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.translate(canvasWidth / 2, canvasHeight / 2);
      ctx.rotate(alpha);
      ctx.translate(- canvasWidth / 2, - canvasHeight / 2);
    // ctx.lineTo(x, y);
    // ctx.stroke();
    ctx.translate(x - 450, y - 150);
    drawAirplanePicture();
    // console.log(`alpha`, alpha);
    ctx.restore();
    // console.log(y);
  };

  const nextFrame = () => {
    if (x >= 750) {
      cancelAnimationFrame(updateCanvas);
      return;
    }

    // console.log(`next F`, x >= canvasWidth - AIRPLANE_IMAGE_WIDTH / 1.5);
    updateAnimation();

    requestAnimationFrame(nextFrame);
  };

  const airplaneImg = new Image();
  const backgroundImg = new Image();

  airplaneImg.src = `../../img/airplane1.png`;
  backgroundImg.src = `../../img/airplane-trajectory.png`;

  let updateCanvas;

  airplaneImg.addEventListener(`load`, () => {
    setTimeout(() => {
      updateCanvas = requestAnimationFrame(nextFrame);
    }, 500);
  });

  backgroundImg.addEventListener(`load`, () => {
    // drawBackground();
  });

  ctx.beginPath();
};

