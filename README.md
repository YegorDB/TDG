# Two dimensions graphic

> Tool to create 2D graphic with canvas and SVG.


## Install

1. Copy lib file (`tdg.min.js`).
2. Add to html file link to copied file.


## Usage

```javascript
const screen = new TDG.screen.Screen('dom-element-id', {
  dimensions: [150, 150],
});

screen.addLayer('background', new TDG.layers.canvas.CanvasLayer());
screen.layers.background.ctx.fillStyle = 'black';
screen.layers.background.ctx.fillRect(10, 10, 100, 100);

screen.addLayer('foreground', new TDG.layers.svg.SVGLayer());
let whiteCircle = new TDG.items.svg.SVGItem('circle', {
  cx: 75,
  cy: 75,
  r: 40,
  fill: 'white',
  stroke: 'black',
});
screen.layers.foreground.addItem('whiteCircle', whiteCircle);
```


## Documentation
[View documentation](https://github.com/YegorDB/TDG/tree/master/doc)


## Examples
[View examples](https://github.com/YegorDB/TDG/tree/master/examples)
