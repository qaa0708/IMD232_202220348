let originalWidth = 1000;
let originalHeight = 667;
let aspectRatio = originalWidth / originalHeight;

function setup() {
  let canvasDimensions = getCanvasDimensions(
    windowWidth,
    windowHeight,
    aspectRatio
  );
  createCanvas(canvasDimensions.w, canvasDimensions.h);
  // setCanvasContainer('p5-canvas', 3, 2, true);

  background('#F0F0EA');
}

function draw() {
  background('#F0F0EA');

  let scaleFactor = min(width / originalWidth, height / originalHeight);
  translate(
    (width - originalWidth * scaleFactor) / 2,
    (height - originalHeight * scaleFactor) / 2
  );

  let aspectRatio = originalWidth / originalHeight;

  scale(scaleFactor);

  fill('#C29E6C');
  noStroke();

  rect(0, 0, 450, 700);

  fill('#BDA7A7');
  rect(750, 100, 140, 180);

  fill('#C0C3AB');
  rect(630, 60, 110, 90);

  fill('#9E815E');
  rect(440, 0, 20, 700);

  fill('#C1E5E8');
  rect(0, 0, 410, 700);

  fill('#C29E6C');
  rect(0, 60, 440, 20);

  fill('#C29E6C');
  rect(300, 500, 1000, 500, 10, 10, 10, 10);

  fill(255, 255, 204, 100);
  rect(250, 0, 300, 700);
  fill(255, 255, 204, 100);
  rect(340, 0, 230, 700);

  fill('#FCAB39');
  fill('#A7ADB1');
  rect(300, 485, 600, 600, 10, 10, 10, 10);

  fill('#7C8387');
  rect(840, 475, 80, 560, 10, 10, 10, 10);

  fill('#444B4F');
  rect(910, 475, 20, 560, 0, 3, 0, 10);

  fill('#C29E6C');
  noStroke();

  fill('#FF9933');
  rect(590, 180, 220, 300, 15, 15, 15, 15);

  fill('#262421');
  rect(680, 520, 30, 200, 15, 15, 50, 50);

  fill('#262421');
  rect(680, 520, 30, 200, 15, 15, 50, 50);

  fill('#262421');
  rect(650, 520, 90, 50, 15, 15, 50, 50);

  fill('#3C3A38');
  rect(640, 520, 90, 50, 15, 15, 50, 50);

  fill('#3C3A38');
  rect(675, 520, 25, 180, 15, 50, 50, 50);

  fill('#E87603');
  rect(540, 440, 270, 100, 15, 15, 15, 15);

  fill('#803232');
  rect(795, 180, 30, 350, 15, 0, 15, 0);

  fill('#803232');
  rect(780, 440, 30, 100, 15, 0, 15, 0);

  fill('#F06464');
  rect(290, 340, 145, 10, 5, 5, 0, 0);
  fill('#FF895A');
  rect(290, 338, 145, 10, 5, 5, 0, 0);

  fill('#89898C');
  rect(410, 340, 175, 10, 5, 5, 5, 5);

  fill('#B2B2B7');
  rect(400, 245, 160, 100, 5, 5, 5, 5);

  fill('#949693');
  rect(570, 330, 30, 20, 5, 5, 0, 0);

  fill('#5E3D1E');
  rect(250, 350, 450, 20, 5, 5, 5, 5);

  fill('#3D2A1C');
  rect(325, 370, 300, 20, 0, 0, 20, 20);

  fill('#3D2A1C');
  rect(390, 390, 170, 70, 10, 10, 50, 50);
  rect(450, 400, 60, 300, 10, 10, 50, 50);

  fill('#9B6D42');
  rect(230, 350, 450, 20, 5, 5, 5, 5);
  fill('#724A24');
  rect(305, 370, 300, 20, 0, 0, 20, 20);
  fill('#66390F');
  rect(370, 390, 170, 70, 10, 10, 50, 50);
  rect(430, 400, 60, 300, 10, 10, 50, 50);
}

function windowResized() {
  let canvasDimensions = getCanvasDimensions(
    windowWidth,
    windowHeight,
    aspectRatio
  );
  resizeCanvas(canvasDimensions.w, canvasDimensions.h);
}

function getCanvasDimensions(w, h, ratio) {
  if (w / h > ratio) {
    return {
      w: h * ratio,
      h: h,
    };
  } else {
    return {
      w: w,
      h: w / ratio,
    };
  }
}
