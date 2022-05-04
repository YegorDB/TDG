# With bg filler canvas layers



## CanvasLayerWithBGFiller

> Extends CanvasLayer

Server
```javascript
import { layers } from 'two-dimensions-graphic';

> const { CanvasLayerWithBGFiller } = layers.canvas;
undefined
```

Browser
```javascript
> const { CanvasLayerWithBGFiller } = TDG.layers.canvas;
undefined
```


### CanvasLayerWithBGFiller.constructor(bgFiller[, options])
- `bgFiller` {*} - Background filler (anything CanvasRenderingContext2D.fillStyle could be used with).
- `options` {Object} - Options.
- `options.drawFunct` {Object} - Draw function with one argument (CanvasRenderingContext2D), it will be fire on layer refresh.


### CanvasLayerWithBGFiller.bgFiller
> Background filler getter.


### CanvasLayerWithBGFiller.bgFiller(value)
> Background filler setter.

- `value` {*} - Background filler (anything CanvasRenderingContext2D.fillStyle could be used with).
