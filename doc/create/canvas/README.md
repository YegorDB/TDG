# Canvas creation


## create.canvas.layer([options])
> Create canvas layer

- `options` {Object} - Options.
- `options.drawFunct` {Object} - Draw function with one argument (CanvasRenderingContext2D), it will be fire on layer refresh.

> Returns CanvasLayer instance


## create.canvas.layerWithBGFiller(bgFiller[, options])
> Create with bg filler canvas layer.

- `bgFiller` {*} - Background filler (anything CanvasRenderingContext2D.fillStyle could be used with).
- `options` {Object} - Options.
- `options.drawFunct` {Object} - Draw function with one argument (CanvasRenderingContext2D), it will be fire on layer refresh.

> Returns CanvasLayerWithBGFiller instance


## create.canvas.layerWithBGImage(imageSrc[, options])
> Create with bg image canvas layer.

- `imageSrc` {string} - Image source.
- `options` {Object} - Options.
- `options.drawFunct` {Object} - Draw function with one argument (CanvasRenderingContext2D), it will be fire on layer refresh.

> Returns CanvasLayerWithBGImage instance


## create.canvas.circle(centre, radius[, options])
> Create canvas circle.

- `centre` {Point|number[]} - Point instatce or (x, y) pair.
- `radius` {number} - Radius.
- `options` {Object} - Options.
- `options.stroke` {boolean} - Whether stroke object or not (default true).
- `options.fill` {boolean} - Whether fill object or not.
- `options.flatParams` {boolean} - Canvas 2d context flat params.
- `options.byMethodParams` {boolean} - Canvas 2d context methods to set params (key is method name, value is array of args).

> Returns CanvasCircle instance


## create.canvas.ellipse(centre, radiuses[, options])
> Create canvas ellipse.

- `centre` {Point|number[]} - Point instatce or (x, y) pair.
- `radiuses` {EllipseRadiuses|number[]} - EllipseRadiuses instatce or (r1, r2) pair.
- `options` {Object} - Options.
- `options.stroke` {boolean} - Whether stroke object or not (default true).
- `options.fill` {boolean} - Whether fill object or not.
- `options.flatParams` {boolean} - Canvas 2d context flat params.
- `options.byMethodParams` {boolean} - Canvas 2d context methods to set params (key is method name, value is array of args).

> Returns CanvasEllipse instance


## create.canvas.path(value[, options])
> Create canvas path.

- `value` {string} - Path commands value.
- `options` {Object} - Options.
- `options.stroke` {boolean} - Whether stroke object or not (default true).
- `options.fill` {boolean} - Whether fill object or not.
- `options.flatParams` {boolean} - Canvas 2d context flat params.
- `options.byMethodParams` {boolean} - Canvas 2d context methods to set params (key is method name, value is array of args).

> Returns CanvasPath instance


## create.canvas.polygon(points[, options])
> Create canvas polygon.

- `points` {number[][]|Point[]} - Array of (x, y) pairs or Point instances.
- `options` {Object} - Options.
- `options.stroke` {boolean} - Whether stroke object or not (default true).
- `options.fill` {boolean} - Whether fill object or not.
- `options.flatParams` {boolean} - Canvas 2d context flat params.
- `options.byMethodParams` {boolean} - Canvas 2d context methods to set params (key is method name, value is array of args).

> Returns CanvasPolygon instance


## create.canvas.polyline(points[, options])
> Create canvas polyline.

- `points` {number[][]|Point[]} - Array of (x, y) pairs or Point instances.
- `options` {Object} - Options.
- `options.stroke` {boolean} - Whether stroke object or not (default true).
- `options.fill` {boolean} - Whether fill object or not.
- `options.flatParams` {boolean} - Canvas 2d context flat params.
- `options.byMethodParams` {boolean} - Canvas 2d context methods to set params (key is method name, value is array of args).

> Returns CanvasPolyline instance


## create.canvas.text(value, centre[, options])
> Create canvas text.

- `value` {string} - Text.
- `centre` {Point|number[]} - Point instatce or (x, y) pair.
- `options` {Object} - Options.
- `options.stroke` {boolean} - Whether stroke object or not (default true).
- `options.fill` {boolean} - Whether fill object or not.
- `options.flatParams` {boolean} - Canvas 2d context flat params.
- `options.byMethodParams` {boolean} - Canvas 2d context methods to set params (key is method name, value is array of args).

> Returns CanvasText instance
