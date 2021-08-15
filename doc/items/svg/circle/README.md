# Circle SVG items



## SVGCircle

> Extends SVGItem

Server
```javascript
> const { SVGCircle } = require('two-dimensions-graphic').items.svg;
undefined
```

Browser
```javascript
> const { SVGCircle } = TDG.items.svg;
undefined
```


### SVGCircle.constructor(centre, radius[, attrs])

- `centre` {Point|number[]} - Point instatce or (x, y) pair.
- `radius` {number} - Radius.
- `attrs` {Object} - SVG element attributes.
- `fill` {string} - SVG element fill value (default "none").
- `stroke` {string} - SVG element stroke value (default "#000000").

```javascript
> var cl1 = new SVGCircle([10, 10], 5, {
... stroke: 'none',
... fill: 'red',
... });
undefined
> cl1.centre;
[ 10, 10 ]
> cl1.radius;
5
```


### SVGCircle.centre
> Centre getter.


### SVGCircle.centre(value)
> Centre setter.

- `value` {Point|number[]} - Point instatce or (x, y) pair.


### SVGCircle.radius
> Radius getter.


### SVGCircle.radius(value)
> Radius setter.

- `value` {number} - Radius.


### SVGCircle.commands
> Path commands getter.


### SVGCircle.commands(value)
> Path commands setter.

- `value` {CircleCommands} - Path commands.
