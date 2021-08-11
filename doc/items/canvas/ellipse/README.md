# Ellipse canvas items



## CanvasEllipse

> Extends CanvasItem

Server
```javascript
> const { CanvasEllipse } = require('two-dimensions-graphic').items.canvas;
undefined
```

Browser
```javascript
> const { CanvasEllipse } = TDG.items.canvas;
undefined
```


### CanvasEllipse.constructor(centre, radiuses[, options])
- `centre` {Point|number[]} - Point instatce or (x, y) pair.
- `radiuses` {EllipseRadiuses|number[]} - EllipseRadiuses instatce or (r1, r2) pair.
- `options` {Object} - Options.
- `options.stroke` {boolean} - Whether stroke object or not (default true).
- `options.fill` {boolean} - Whether fill object or not.
- `options.flatParams` {Object} - Canvas 2d context flat params.
- `options.byMethodParams` {Object} - Canvas 2d context methods to set params (key is method name, value is array of args).


### CanvasEllipse.centre
> Centre getter.


### CanvasEllipse.centre(value)
> Centre setter.

- `value` {Point|number[]} - Point instatce or (x, y) pair.


### CanvasEllipse.radiuses
> Radiuses getter.


### CanvasEllipse.radiuses(value)
> Radiuses setter.

- `value` {EllipseRadiuses} - EllipseRadiuses instatce.


### CanvasEllipse.commands
> Path commands getter.


### CanvasEllipse.commands(value)
> Path commands setter.

- `value` {EllipseCommands} - Path commands.
