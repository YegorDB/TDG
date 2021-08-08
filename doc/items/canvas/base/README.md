# Base canvas items



## CanvasItem

Server
```javascript
> const { CanvasItem } = require('two-dimensions-graphic').items.canvas;
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
