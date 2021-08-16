# Path SVG items



## SVGPath

> Extends SVGItem

Server
```javascript
> const { SVGPath } = require('two-dimensions-graphic').items.svg;
undefined
```

Browser
```javascript
> const { SVGPath } = TDG.items.svg;
undefined
```


### SVGPath.constructor(value[, attrs])

- `value` {string} - Path commands value.
- `attrs` {Object} - SVG element attributes.
- `fill` {string} - SVG element fill value (default "none").
- `stroke` {string} - SVG element stroke value (default "#000000").

```javascript
> var pt1 = new SVGPath('M 5 7 L 7 15 L 8 12', {
... stroke: 'yellow',
... });
undefined
> pt1.value;
'M 5 7 L 7 15 L 8 12'
```


### SVGPath.value
> Value getter.


### SVGPath.value(value)
> Value setter.

- `value` {string} - Path commands value.


### SVGPath.commands
> Path commands getter.


### SVGPath.commands(value)
> Path commands setter.

- `value` {PathCommands} - Path commands.
