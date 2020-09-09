const screen = new TDG.screen.Screen('screen-id', {
  dimensions: [300, 300],
});

let backgroundLayer = new TDG.layers.CanvasLayer();
screen.addLayer('background', backgroundLayer);
screen.layers.background.ctx.fillStyle = 'black';
screen.layers.background.ctx.fillRect(5, 5, 110, 110);

let backLayer = new TDG.layers.SVGLayer();
screen.addLayer('back', backLayer);
let greenCircle = new TDG.items.SVGItem('circle', {
  cx: 80,
  cy: 80,
  r: 50,
  fill: 'green',
  stroke: 'black',
});
screen.layers.back.addItem('greenCircle', greenCircle);

let frontLayer = new TDG.layers.SVGLayer();
screen.addLayer('front', frontLayer);
let yellowCircle = new TDG.items.SVGItem('circle', {
  cx: 60,
  cy: 60,
  r: 50,
  fill: 'yellow',
  stroke: 'black',
});
screen.layers.front.addItem('yellowCircle', yellowCircle);
