# Polyline canvas items



## CanvasPolyline

> Extends CanvasItem

Server
```javascript
import { items } from 'two-dimensions-graphic';

> const { CanvasPolyline } = items.canvas;
undefined
```

Browser
```javascript
> const { CanvasPolyline } = TDG.items.canvas;
undefined
```


### CanvasPolyline.constructor(points[, options])
- `points` {number[][]|Point[]} - Array of (x, y) pairs or Point instances.
- `options` {Object} - Options.
- `options.stroke` {boolean} - Whether stroke object or not (default true).
- `options.fill` {boolean} - Whether fill object or not.
- `options.flatParams` {Object} - Canvas 2d context flat params.
- `options.byMethodParams` {Object} - Canvas 2d context methods to set params (key is method name, value is array of args).


### CanvasPolyline.points
> Points getter.


### CanvasPolyline.points(value)
> Points setter.

- `value` {number[][]|Point[]} - Array of (x, y) pairs or Point instances.


### CanvasPolyline.commands
> Path commands getter.


### CanvasPolyline.commands(value)
> Path commands setter.

- `value` {PointsCommands} - Path commands.
