export default () => {
  const canvas = document.getElementById(`result-1-tree-1`);
  const ctx = canvas.getContext(`2d`);
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  const canvas2 = document.getElementById(`result-1-tree-2`);
  const ctx2 = canvas2.getContext(`2d`);

  const TREE_1_INITIAL_POSITION_X = 0;
  const TREE_1_INITIAL_POSITION_Y = 170;
  const TREE_1_IMAGE_WIDTH = 50;
  const TREE_1_IMAGE_HEIGHT = 160;

  const TREE_2_INITIAL_POSITION_X = 0;
  const TREE_2_INITIAL_POSITION_Y = 130;
  const TREE_2_IMAGE_WIDTH = 38;
  const TREE_2_IMAGE_HEIGHT = 100;

  const ALPHA_INCREMENT = 0.035;

  let alpha = 0;

  let translateY = TREE_1_INITIAL_POSITION_Y;

  const updateAnimation = () => {
    ctx.save();
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // opacity
    if (ctx.globalAlpha < 1) {
      alpha = alpha + ALPHA_INCREMENT <= 1 ? alpha + ALPHA_INCREMENT : 1;
      ctx.globalAlpha = +alpha.toFixed(3);
    }

    if (translateY > -100) {
      translateY = translateY - 10;
    }

    ctx.translate(0, translateY);

    drawPicture();
    ctx.restore();
  };

  const drawPicture = () => {
    ctx.drawImage(tree1Img, TREE_1_INITIAL_POSITION_X, TREE_1_INITIAL_POSITION_Y, TREE_1_IMAGE_WIDTH, TREE_1_IMAGE_HEIGHT);
  };

  const drawPicture2 = () => {
    ctx2.drawImage(tree2Img, TREE_2_INITIAL_POSITION_X, TREE_2_INITIAL_POSITION_Y, TREE_2_IMAGE_WIDTH, TREE_2_IMAGE_HEIGHT);
  };

  const nextFrame = () => {
    if (translateY <= -100 && alpha >= 1) {
      cancelAnimationFrame(updateCanvas);
      return;
    }

    updateAnimation();
    requestAnimationFrame(nextFrame);
  };

  const tree1Img = new Image();
  const tree2Img = new Image();

  tree1Img.src = `../../img/tree.png`;
  tree2Img.src = `../../img/tree-2.png`;

  let updateCanvas;

  tree1Img.addEventListener(`load`, () => {
    setTimeout(() => {
      updateCanvas = requestAnimationFrame(nextFrame);
    }, 600);
  });

  tree2Img.addEventListener(`load`, drawPicture2);

  ctx.globalAlpha = 0;
};

