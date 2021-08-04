# Path commands

> SVG path ["d" attribute](https://svgwg.org/svg2-draft/paths.html#DProperty) commands



## PathCommands

> Base SVG path "d" attribute commands handle logic.

Server
```javascript
> const { PathCommands } = require('two-dimensions-graphic').path_commands;
undefined
```

Browser
```javascript
> const { PathCommands } = TDG.path_commands;
undefined
```


### PathCommands.validate(value)
> Static method to validate path commands value.

> Only whitespases are valid values separators.

> Throw an error if validation failed, nothing otherwise.

- `value` {string} - SVG path "d" attribute commands value.

```javascript
> PathCommands.validate('wrong value');
Uncaught Error: Wrond path commands string.
> PathCommands.validate('M 5 0 h 10 v 7 z');
undefined
```


### PathCommands.constructor([value])
- `value` {string} - SVG path "d" attribute commands value.

```javascript
> var pc1 = new PathCommands('M 10 10 L 15 5');
undefined
> pc1.value;
'M 10 10 L 15 5'
```


### PathCommands.value
> Value getter.


### PathCommands.value(value)
> Value setter.

- `value` {string} - SVG path "d" attribute commands value.

```javascript
> var pc2 = new PathCommands;
undefined
> pc2.value;
'none'
> pc2.value === PathCommands.NONE;
true
> pc2.value = 'M 4 3 V 8 h 5';
'M 4 3 V 8 h 5'
> pc2.value;
'M 4 3 V 8 h 5'
```



## EllipseRadiuses

> Ellipse radiuses handle logic.

Server
```javascript
> const { EllipseRadiuses } = require('two-dimensions-graphic').path_commands;
undefined
```

Browser
```javascript
> const { EllipseRadiuses } = TDG.path_commands;
undefined
```


### EllipseRadiuses.validateValue(value)

> Validate radius value.

```javascript
> EllipseRadiuses.validateValue('radius value')
Uncaught Error: Radius value has to be an integer.
> EllipseRadiuses.validateValue(5)
undefined
```


### EllipseRadiuses.constructor(r1, r2)
- `r1` {number} - First radius.
- `r2` {number} - Second radius.

```javascript
> var er1 = new EllipseRadiuses(3, 8);
undefined
> er1.first
3
> er1.second
8
```


### EllipseRadiuses string primitive

```javascript
> var er2 = new EllipseRadiuses(12, 7);
undefined
> er2[Symbol.toPrimitive]('string')
'12 7'
> `${er2}`
'12 7'
```


### EllipseRadiuses.first
> First raduis getter.


### EllipseRadiuses.first(value)
> First raduis setter.

```javascript
> er2.first = 4;
4
> `${er2}`
'4 7'
```


### EllipseRadiuses.second
> Second raduis getter.


### EllipseRadiuses.second(value)
> Second raduis setter.

```javascript
> er2.second = 9;
9
> `${er2}`
'4 9'
```
