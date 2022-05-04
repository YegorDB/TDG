# Base canvas layers



## CanvasLayer

> Extends BaseLayer

Server
```javascript
import { layers } from 'two-dimensions-graphic';

> const { CanvasLayer } = layers.canvas;
undefined
```

Browser
```javascript
> const { CanvasLayer } = TDG.layers.canvas;
undefined
```


### CanvasLayer.constructor([options])
- `options` {Object} - Options.
- `options.drawFunct` {Object} - Draw function with one argument (CanvasRenderingContext2D), it will be fire on layer refresh.


### CanvasLayer.refresh()
> Refresh layer items.


### CanvasLayer.clear()
> Clear layer element.
