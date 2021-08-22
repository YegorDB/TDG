# SVG layers



## SVGLayer

> Extends BaseLayer

Server
```javascript
> const { SVGLayer } = require('two-dimensions-graphic').layers.svg;
undefined
```

Browser
```javascript
> const { SVGLayer } = TDG.layers.svg;
undefined
```


### SVGLayer.createItem(name, elementName[, attrs])
> Create item and attach them to layer.

- `name` {string} - Item name.
- `elementName` {string} - SVG element name.
- `attrs` {Object} - SVG element attributes.
- `attrs.fill` {string} - SVG element fill value (default "none").
- `attrs.stroke` {string} - SVG element stroke value (default "#000000").

> Returns SVGItem instance


### SVGLayer.createCircle(name, centre, radius[, attrs])
> Create circle and attach them to layer.

- `name` {string} - Item name.
- `centre` {Point|number[]} - Point instatce or (x, y) pair.
- `radius` {number} - Radius.
- `attrs` {Object} - SVG element attributes.
- `attrs.fill` {string} - SVG element fill value (default "none").
- `attrs.stroke` {string} - SVG element stroke value (default "#000000").

> Returns SVGCircle instance


### SVGLayer.createEllipse(name, centre, radiuses[, attrs])
> Create ellipse and attach them to layer.

- `name` {string} - Item name.
- `centre` {Point|number[]} - Point instatce or (x, y) pair.
- `radiuses` {EllipseRadiuses|number[]} - EllipseRadiuses instatce or (r1, r2) pair.
- `attrs` {Object} - SVG element attributes.
- `attrs.fill` {string} - SVG element fill value (default "none").
- `attrs.stroke` {string} - SVG element stroke value (default "#000000").

> Returns SVGEllipse instance


### SVGLayer.createPath(name, value[, attrs])
> Create path and attach them to layer.

- `name` {string} - Item name.
- `value` {string} - Path commands value.
- `attrs` {Object} - SVG element attributes.
- `attrs.fill` {string} - SVG element fill value (default "none").
- `attrs.stroke` {string} - SVG element stroke value (default "#000000").

> Returns SVGPath instance


### SVGLayer.createPolygon(name, points[, attrs])
> Create polygon and attach them to layer.

- `name` {string} - Item name.
- `points` {number[][]|Point[]} - Array of (x, y) pairs or Point instances.
- `attrs` {Object} - SVG element attributes.
- `attrs.fill` {string} - SVG element fill value (default "none").
- `attrs.stroke` {string} - SVG element stroke value (default "#000000").

> Returns SVGPolygon instance


### SVGLayer.createPolyline(name, points[, attrs])
> Create polyline and attach them to layer.

- `name` {string} - Item name.
- `points` {number[][]|Point[]} - Array of (x, y) pairs or Point instances.
- `attrs` {Object} - SVG element attributes.
- `attrs.fill` {string} - SVG element fill value (default "none").
- `attrs.stroke` {string} - SVG element stroke value (default "#000000").

> Returns SVGPolyline instance
