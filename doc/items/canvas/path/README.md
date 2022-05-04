# Path canvas items



## CanvasPath

> Extends CanvasItem

Server
```javascript
import { items } from 'two-dimensions-graphic';

> const { CanvasPath } = items.canvas;
undefined
```

Browser
```javascript
> const { CanvasPath } = TDG.items.canvas;
undefined
```


### CanvasPath.constructor(value[, options])
- `value` {string} - Path commands value.
- `options` {Object} - Options.
- `options.stroke` {boolean} - Whether stroke object or not (default true).
- `options.fill` {boolean} - Whether fill object or not.
- `options.flatParams` {Object} - Canvas 2d context flat params.
- `options.byMethodParams` {Object} - Canvas 2d context methods to set params (key is method name, value is array of args).


### CanvasPath.value
> Value getter.


### CanvasPath.value(value)
> Value setter.

- `value` {string} - Path commands value.


### CanvasPath.commands
> Path commands getter.


### CanvasPath.commands(value)
> Path commands setter.

- `value` {PathCommands} - Path commands.
