# Text canvas items



## CanvasText

> Extends CanvasItem

Server
```javascript
import { items } from 'two-dimensions-graphic';

> const { CanvasText } = items.canvas;
undefined
```

Browser
```javascript
> const { CanvasText } = TDG.items.canvas;
undefined
```


### CanvasText.constructor(value, centre[, options])
- `value` {string} - Text.
- `centre` {Point|number[]} - Point instatce or (x, y) pair.
- `options` {Object} - Options.
- `options.stroke` {boolean} - Whether stroke object or not (default true).
- `options.fill` {boolean} - Whether fill object or not.
- `options.flatParams` {Object} - Canvas 2d context flat params.
- `options.byMethodParams` {Object} - Canvas 2d context methods to set params (key is method name, value is array of args).


### CanvasText.value
> Value getter.


### CanvasText.value(value)
> Value setter.

- `value` {string} - Text.


### CanvasText.centre
> Centre getter.


### CanvasText.centre(value)
> Centre setter.

- `value` {Point|number[]} - Point instatce or (x, y) pair.
