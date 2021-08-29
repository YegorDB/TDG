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
const screen = new TDG.screen.Screen('dom-element-id', {
  dimensions: [150, 150],
});

screen.createCanvasLayer('background', {
  drawFunct: (ctx) => {
    ctx.fillStyle = 'black';
    ctx.fillRect(10, 10, 100, 100);
  },
});

screen.createSVGLayer('foreground');
screen.layers.foreground.createItem('whiteCircle', 'circle', {
  cx: 75,
  cy: 75,
  r: 40,
  fill: 'white',
  stroke: 'black',
});
```


## Documentation
[View documentation](https://github.com/YegorDB/TDG/tree/master/doc)


## Examples
[View examples](https://github.com/YegorDB/TDG/tree/master/examples)
