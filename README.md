# Two dimensions graphic

> Tool to create 2D graphic with canvas and SVG.


## Install

### Server
1. `$ npm install two-dimensions-graphic`

### Browser
1. Copy lib file (`tdg.min.js`).
2. Add to html file link to copied file.


## Usage

```javascript
const screen = TDG.create.screen('dom-element-id', {
  dimensions: [150, 150],
});

const bgLayer = TDG.create.canvas.layer({
  drawFunct: (ctx) => {
    ctx.fillStyle = 'black';
    ctx.fillRect(10, 10, 100, 100);
  },
});
screen.addLayer('background', bgLayer);

const fgLayer = TDG.create.svg.layer();
screen.addLayer('foreground', fgLayer);

const whiteCircle = TDG.create.svg.item('circle', {
  cx: 75,
  cy: 75,
  r: 40,
  fill: 'white',
  stroke: 'black',
});
screen.layers.foreground.items.add('whiteCircle', whiteCircle);
```


## Documentation
[View documentation](https://github.com/YegorDB/TDG/tree/master/doc)


## Examples
[View examples](https://github.com/YegorDB/TDG/tree/master/examples)
