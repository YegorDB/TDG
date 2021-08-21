# With bg image canvas layers



## CanvasLayerWithBGImage

> Extends CanvasLayer

Server
```javascript
> const { CanvasLayerWithBGImage } = require('two-dimensions-graphic').layers.canvas;
undefined
```

Browser
```javascript
> const { CanvasLayerWithBGImage } = TDG.layers.canvas;
undefined
```


### CanvasLayerWithBGImage.constructor(imageSrc[, options])
- `imageSrc` {string} - Image source.
- `options` {Object} - Options.
- `options.drawFunct` {Object} - Draw function with one argument (CanvasRenderingContext2D), it will be fire on layer refresh.


### CanvasLayerWithBGImage.imageSrc
> Image source getter.


### CanvasLayerWithBGImage.imageSrc(value)
> Image source setter.

- `value` {string} - Image source.
