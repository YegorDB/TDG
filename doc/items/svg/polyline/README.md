# Polyline SVG items



## SVGPolyline

> Extends SVGItem

Server
```javascript
> const { SVGPolyline } = require('two-dimensions-graphic').items.svg;
undefined
```

Browser
```javascript
> const { SVGPolyline } = TDG.items.svg;
undefined
```


### SVGPolyline.constructor(points[, attrs])
- `points` {number[][]|Point[]} - Array of (x, y) pairs or Point instances.
- `attrs` {Object} - SVG element attributes.
- `fill` {string} - SVG element fill value (default "none").
- `stroke` {string} - SVG element stroke value (default "#000000").

```javascript
> var pl1 = new SVGPolyline([[0, 5], [7, 3], [9, 6]], {
... stroke: 'blue',
... });
undefined
> pl1.points;
[ [ 0, 5 ], [ 7, 3 ], [ 9, 6 ] ]
```


### SVGPolyline.points
> Points getter.


### SVGPolyline.points(value)
> Points setter.

- `value` {number[][]|Point[]} - Array of (x, y) pairs or Point instances.


### SVGPolyline.commands
> Path commands getter.


### SVGPolyline.commands(value)
> Path commands setter.

- `value` {PointsCommands} - Path commands.
