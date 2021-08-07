# Points based commands and tools



## Point

Server
```javascript
> const { Point } = require('two-dimensions-graphic').path_commands;
undefined
```

Browser
```javascript
> const { Point } = TDG.path_commands;
undefined
```


### Point.validateCoordinate(value)
> Validate coordinate value.

> Throw an error if validation failed, nothing otherwise.

- `value` {number} - Coordinate value.

```javascript
> Point.validateCoordinate('coordinate value');
Uncaught Error: Point coordinate has to be an integer.
> Point.validateCoordinate(4);
undefined
```


### Point.constructor(x, y)
- `x` {number} - X coordinate.
- `y` {number} - Y coordinate.

```javascript
> var pt1 = new Point(7, 6);
undefined
> pt1.x;
7
> pt1.y;
6
```


### Point string primitive

```javascript
> var pt2 = new Point(9, 2);
undefined
> pt2[Symbol.toPrimitive]('string');
'9 2'
> `${pt2}`;
'9 2'
```


### Point.x
> X coordinate getter.


### Point.x(value)
> X coordinate setter.

- `value` {number} - X coordinate.

```javascript
> pt2.x = 5;
5
> `${pt2}`;
'5 2'
```


### Point.y
> Y coordinate getter.


### Point.y(value)
> Y coordinate setter.

- `value` {number} - Y coordinate.

```javascript
> pt2.y = 7;
7
> `${pt2}`;
'5 7'
```
