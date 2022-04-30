const screen = new TDG.screens.Screen('screen-id', {
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

let textB = TDG.create.canvas.text('B', [275, 270], {
  fill: true,
  stroke: true,
  flatParams: {
    fillStyle: '#000',
    strokeStyle: '#000',
  },
});
backgroundLayer.items.add('textB', textB);


let backLayer = screen.createSVGLayer('back');

let blueCircle = TDG.create.svg.item('circle', {
  cx: 130,
  cy: 140,
  r: 120,
  fill: '#219ebc',
  stroke: 'none',
});
screen.layers.back.items.add('blueCircle', blueCircle);


let frontLayer = screen.createSVGLayer('front');

let group1 = TDG.create.svg.group();
screen.layers.front.items.add('group1', group1);

let yellowRectangle = TDG.create.svg.item('rect', {
  x: 150,
  y: 200,
  width: 120,
  height: 80,
  fill: '#ffb703',
  stroke: 'none',
});
group1.items.add('yellowRectangle', yellowRectangle);

let textA = TDG.create.svg.text('A', [250, 270], {
  fill: '#219ebc',
  stroke: '#219ebc',
});
group1.items.add('textA', textA);
