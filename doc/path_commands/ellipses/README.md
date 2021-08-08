# Ellipse based commands and tools



## EllipseRadiuses

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

> Throw an error if validation failed, nothing otherwise.

- `value` {number} - Raduis value.

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

- `value` {number} - First radius.

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

- `value` {number} - Second radius.

```javascript
> er2.second = 9;
9
> `${er2}`
'4 9'
```



## EllipseCommands

> Extends PathCommands

Server
```javascript
> const { EllipseCommands } = require('two-dimensions-graphic').path_commands;
undefined
```

Browser
```javascript
> const { EllipseCommands } = TDG.path_commands;
undefined
```


### EllipseCommands.constructor(centre, radiuses)
- `centre` {Point|number[]} - Point instatce or (x, y) pair.
- `radiuses` {EllipseRadiuses|number[]} - EllipseRadiuses instatce or (r1, r2) pair.

```javascript
> const { EllipseCommands } = require('/app/src/main.js').path_commands;
undefined
> var ec1 = new EllipseCommands([9, 17], [5, 3]);
undefined
> ec1.value;
'M 4 17 A 5 3 0 1 0 14 17 5 3 0 0 0 4 17 Z'
> ec1.centre;
Point { _x: 9, _y: 17 }
> ec1.radiuses;
EllipseRadiuses { _first: 5, _second: 3 }
```


### EllipseCommands.centre
> Centre getter.


### EllipseCommands.centre(value)
> Centre setter.

- `value` {Point|number[]} - Point instatce or (x, y) pair.

```javascript
> ec1.centre = [12, 10];
[ 12, 10 ]
> ec1.centre
Point { _x: 12, _y: 10 }
> ec1.value;
'M 7 10 A 5 3 0 1 0 17 10 5 3 0 0 0 7 10 Z'
```


### EllipseCommands.radiuses
> Radiuses getter.


### EllipseCommands.radiuses(value)
> Radiuses setter.

- `value` {EllipseRadiuses|number[]} - EllipseRadiuses instatce or (r1, r2) pair.

```javascript
> ec1.radiuses = [2, 6];
[ 2, 6 ]
> ec1.radiuses;
EllipseRadiuses { _first: 2, _second: 6 }
> ec1.value;
'M 10 10 A 2 6 0 1 0 14 10 2 6 0 0 0 10 10 Z'
```



## CircleCommands

> Extends EllipseCommands

Server
```javascript
> const { CircleCommands } = require('two-dimensions-graphic').path_commands;
undefined
```

Browser
```javascript
> const { CircleCommands } = TDG.path_commands;
undefined
```


### CircleCommands.constructor(centre, radius)
- `centre` {Point|number[]} - Point instatce or (x, y) pair.
- `radius` {number} - Radius.

```javascript
> var cc1 = new CircleCommands([9, 18], 2);
undefined
> cc1.value;
'M 7 18 A 2 2 0 1 0 11 18 2 2 0 0 0 7 18 Z'
> cc1.radius;
2
```


### CircleCommands.radius
> Radius getter.


### CircleCommands.radius(value)
> Radius setter.

- `value` {number} - Radius.

```javascript
> cc1.radius = 4;
4
> cc1.radius;
4
> cc1.value;
'M 5 18 A 4 4 0 1 0 13 18 4 4 0 0 0 5 18 Z'
```
