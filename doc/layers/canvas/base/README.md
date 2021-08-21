# Base canvas layers



## CanvasLayer

> Extends BaseLayer

Server
```javascript
> const { CanvasLayer } = require('two-dimensions-graphic').layers.canvas;
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


### CanvasLayer.createCircle(name, centre, radius[, options])
> Create circle.

- `name` {string} - Item name.
- `centre` {Point|number[]} - Point instatce or (x, y) pair.
- `radius` {number} - Radius.
- `options` {Object} - Options.
- `options.stroke` {boolean} - Whether stroke object or not (default true).
- `options.fill` {boolean} - Whether fill object or not.
- `options.flatParams` {boolean} - Canvas 2d context flat params.
- `options.byMethodParams` {boolean} - Canvas 2d context methods to set params (key is method name, value is array of args).

> Returns CanvasCircle instance


### CanvasLayer.createEllipse(name, centre, radiuses[, options])
> Create ellipse.

- `name` {string} - Item name.
- `centre` {Point|number[]} - Point instatce or (x, y) pair.
- `radiuses` {EllipseRadiuses|number[]} - EllipseRadiuses instatce or (r1, r2) pair.
- `options` {Object} - Options.
- `options.stroke` {boolean} - Whether stroke object or not (default true).
- `options.fill` {boolean} - Whether fill object or not.
- `options.flatParams` {boolean} - Canvas 2d context flat params.
- `options.byMethodParams` {boolean} - Canvas 2d context methods to set params (key is method name, value is array of args).

> Returns CanvasEllipse instance


### CanvasLayer.createPath(name, value[, options])
> Create path.

- `name` {string} - Item name.
- `value` {string} - Path commands value.
- `options` {Object} - Options.
- `options.stroke` {boolean} - Whether stroke object or not (default true).
- `options.fill` {boolean} - Whether fill object or not.
- `options.flatParams` {boolean} - Canvas 2d context flat params.
- `options.byMethodParams` {boolean} - Canvas 2d context methods to set params (key is method name, value is array of args).

> Returns CanvasPath instance


### CanvasLayer.createPolygon(name, points[, options])
> Create polygon.

- `name` {string} - Item name.
- `points` {number[][]|Point[]} - Array of (x, y) pairs or Point instances.
- `options` {Object} - Options.
- `options.stroke` {boolean} - Whether stroke object or not (default true).
- `options.fill` {boolean} - Whether fill object or not.
- `options.flatParams` {boolean} - Canvas 2d context flat params.
- `options.byMethodParams` {boolean} - Canvas 2d context methods to set params (key is method name, value is array of args).

> Returns CanvasPolygon instance


### CanvasLayer.createPolyline(name, points[, options])
> Create polyline.

- `name` {string} - Item name.
- `points` {number[][]|Point[]} - Array of (x, y) pairs or Point instances.
- `options` {Object} - Options.
- `options.stroke` {boolean} - Whether stroke object or not (default true).
- `options.fill` {boolean} - Whether fill object or not.
- `options.flatParams` {boolean} - Canvas 2d context flat params.
- `options.byMethodParams` {boolean} - Canvas 2d context methods to set params (key is method name, value is array of args).

> Returns CanvasPolyline instance
