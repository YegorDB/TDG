const screen = new TDG.screen.Screen('screen-id', {
  dimensions: [300, 300],
});


let backgroundLayer = screen.createCanvasLayer('bg', {
  drawFunct: (ctx) => {
    ctx.strokeStyle = '#8ecae6';
    ctx.beginPath();
    let d = 6;
    for (let i = d; i <= 300; i += d) {
      ctx.moveTo(0, i);
      ctx.lineTo(i, 0);
      ctx.moveTo(300, i);
      ctx.lineTo(i, 300);
      ctx.moveTo(i - d, 0);
      ctx.lineTo(300, 300 + d - i);
      ctx.moveTo(0, i - d);
      ctx.lineTo(300 + d - i, 300);
    }
    ctx.stroke();
  },
});


let backLayer = screen.createSVGLayer('back');
let blueCircle = screen.layers.back.createItem('blueCircle', 'circle', {
  cx: 130,
  cy: 140,
  r: 120,
  fill: '#219ebc',
  stroke: 'none',
});


let frontLayer = screen.createSVGLayer('front');
let yellowRectangle = screen.layers.front.createItem('yellowRectangle', 'rect', {
  x: 150,
  y: 200,
  width: 120,
  height: 80,
  fill: '#ffb703',
  stroke: 'none',
});
