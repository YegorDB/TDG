# Ellipse SVG items



## SVGEllipse

> Extends SVGItem

Server
```javascript
> const { SVGEllipse } = require('two-dimensions-graphic').items.svg;
undefined
```

Browser
```javascript
> const { SVGEllipse } = TDG.items.svg;
undefined
```


### SVGEllipse.constructor(centre, radiuses[, attrs])

- `centre` {Point|number[]} - Point instatce or (x, y) pair.
- `radiuses` {EllipseRadiuses|number[]} - EllipseRadiuses instatce or (r1, r2) pair.
- `attrs` {Object} - SVG element attributes.
- `fill` {string} - SVG element fill value (default "none").
- `stroke` {string} - SVG element stroke value (default "#000000").

```javascript
> var el1 = new SVGEllipse([10, 10], [6, 4], {
... fill: 'green',
... });
undefined
> el1.centre;
[ 10, 10 ]
> el1.radiuses;
[ 6, 4 ]
```


### SVGEllipse.centre
> Centre getter.


### SVGEllipse.centre(value)
> Centre setter.

- `value` {Point|number[]} - Point instatce or (x, y) pair.


### SVGEllipse.radiuses
> Radiuses getter.


### SVGEllipse.radiuses(value)
> Radiuses setter.

- `value` {EllipseRadiuses} - EllipseRadiuses instatce.


### SVGEllipse.commands
> Path commands getter.


### SVGEllipse.commands(value)
> Path commands setter.

- `value` {EllipseCommands} - Path commands.
