function setup() {
  setCanvasContainer('canvas-goes-here', 400, 300, true);
  background('255');
  //   무조건 값을 넣어야 실행된다!
}
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
      ctx.fillStyle =
        'rgb(' +
        Math.floor(255 - 42.5 * i) +
        ', ' +
        Math.floor(255 - 42.5 * j) +
        ', 0)';
      ctx.fillRect(j * 25, i * 25, 25, 25);
    }
  }
}
