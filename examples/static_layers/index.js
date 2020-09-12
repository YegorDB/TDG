const screen = new TDG.screen.Screen('screen-id', {
  dimensions: [300, 300],
});


let backgroundLayer = new TDG.layers.CanvasLayer();
screen.addLayer('background', backgroundLayer);
screen.layers.background.ctx.strokeStyle = '#8ecae6';
screen.layers.background.ctx.beginPath();
let d = 6;
for (let i = d; i <= 300; i += d) {
  screen.layers.background.ctx.moveTo(0, i);
  screen.layers.background.ctx.lineTo(i, 0);
  screen.layers.background.ctx.moveTo(300, i);
  screen.layers.background.ctx.lineTo(i, 300);
  screen.layers.background.ctx.moveTo(i - d, 0);
  screen.layers.background.ctx.lineTo(300, 300 + d - i);
  screen.layers.background.ctx.moveTo(0, i - d);
  screen.layers.background.ctx.lineTo(300 + d - i, 300);
}
screen.layers.background.ctx.stroke(); 


let backLayer = new TDG.layers.SVGLayer();
screen.addLayer('back', backLayer);
let blueCircle = new TDG.items.SVGItem('circle', {
  cx: 130,
  cy: 140,
  r: 120,
  fill: '#219ebc',
});
screen.layers.back.addItem('blueCircle', blueCircle);


let frontLayer = new TDG.layers.SVGLayer();
screen.addLayer('front', frontLayer);
let yellowRectangle = new TDG.items.SVGItem('rect', {
  x: 150,
  y: 200,
  width: 120,
  height: 80,
  fill: '#ffb703',
});
screen.layers.front.addItem('yellowRectangle', yellowRectangle);
