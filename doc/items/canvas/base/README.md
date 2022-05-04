# Base canvas items



## CanvasItem

> Abstract canvas item class

Server
```javascript
import { items } from 'two-dimensions-graphic';

> const { CanvasItem } = items.canvas;
undefined
```

Browser
```javascript
> const { CanvasItem } = TDG.items.canvas;
undefined
```


### CanvasItem.constructor([options])
- `options` {Object} - Options.
- `options.stroke` {boolean} - Whether stroke object or not (default true).
- `options.fill` {boolean} - Whether fill object or not.
- `options.flatParams` {Object} - Canvas 2d context flat params.
- `options.byMethodParams` {Object} - Canvas 2d context methods to set params (key is method name, value is array of args).

```javascript
> var ci1 = new CanvasItem({
...   fill: true,
...   flatParams: {
.....     fillStyle: 'green',
.....     strokeStyle: 'black',
.....   },
...   byMethodParams: {
.....     setLineDash: [[2, 2]],
.....   },
... });
undefined
> ci1.stroke;
true
> ci1.fill;
true
> ci1.flatParams;
{ fillStyle: 'green', strokeStyle: 'black' }
> ci1.byMethodParams;
{ setLineDash: [ [ 2, 2 ] ] }
```


### CanvasItem.stroke
> Stroke getter.


### CanvasItem.stroke(value)
> Stroke setter.

- `value` {boolean} - Whether stroke object or not.


### CanvasItem.fill
> Fill getter.


### CanvasItem.fill(value)
> Fill setter.

- `value` {boolean} - Whether fill object or not.


### CanvasItem.flatParams
> Flat params getter.


### CanvasItem.flatParams(value)
> Flat params setter.

> Use setFlatParam method to set particular param.

- `value` {Object} - Canvas 2d context flat params.


### CanvasItem.byMethodParams
> By method params getter.


### CanvasItem.byMethodParams(value)
> By method params setter.

> Use setByMethodParam method to set particular param.

- `value` {Object} - Canvas 2d context methods to set params (key is method name, value is array of args).


### CanvasItem.commands
> Path commands getter.


### CanvasItem.path
> Path commands value getter.


### CanvasItem.layer
> Layer getter.


### CanvasItem.layer(value)
> Layer setter.

- `value` {CanvasLayer} - Layer.


### CanvasItem.draw()
> Draw item path in item layer.


### CanvasItem.setFlatParam(name, value)
> Set flat param.

- `name` {string} - Name of canvas 2d context flat param.
- `value` {*} - Value of canvas 2d context flat param.

```javascript
> ci1.setFlatParam('strokeStyle', 'white');
undefined
> ci1.flatParams;
{ fillStyle: 'green', strokeStyle: 'white' }
```


### CanvasItem.setByMethodParam(name, args)
> Set by method param.

- `name` {string} - Name of canvas 2d context method to set params.
- `args` {*} - Array of arguments of canvas 2d context method to set params.

```javascript
> ci1.setByMethodParam('setLineDash', [[1, 4]]);
undefined
> ci1.byMethodParams
{ setLineDash: [ [ 1, 4 ] ] }
```
