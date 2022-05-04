# Points based commands and tools



## Point

Server
```javascript
import { path_commands } from 'two-dimensions-graphic';

> const { Point } = path_commands;
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



## PointsCommands

> Extends PathCommands

Server
```javascript
import { path_commands } from 'two-dimensions-graphic';

> const { PointsCommands } = path_commands;
undefined
```

Browser
```javascript
> const { PointsCommands } = TDG.path_commands;
undefined
```


### PointsCommands.validateItems(items)
> Validate items values.

> Throw an error if validation failed, nothing otherwise.

- `items` {number[][]} - Array of (x, y) pairs.

```javascript
> PointsCommands.validateItems('items values');
Uncaught Error: Points items has to be an Array instance.
> PointsCommands.validateItems(['item', 'item', 'item']);
Uncaught Error: Point coordinates has to be array of two integers.
> PointsCommands.validateItems([[1, 1], [7, 2], [5, 8]]);
undefined
```


### PointsCommands.constructor(items[, options])
- `items` {number[][]} - Array of (x, y) pairs.
- `options` {Object} - Options.
- `options.isClose` {boolean} - Whether poins path is close or open.

```javascript
> var pc1 = new PointsCommands([[10, 10], [20, 20], [15, 25]]);
undefined
> pc1.value;
'M 10 10 L 20 20 L 15 25'
>
> var pc2 = new PointsCommands([[10, 10], [20, 20], [15, 25]], {isClose: true});
undefined
> pc2.value;
'M 10 10 L 20 20 L 15 25 Z'
```


### PointsCommands iterator

```javascript
> [...pc1];
[ Point { _x: 10, _y: 10 }, Point { _x: 20, _y: 20 }, Point { _x: 15, _y: 25 } ]
>
> for (let item of pc2) {
...   console.log(item);
... }
Point { _x: 10, _y: 10 }
Point { _x: 20, _y: 20 }
Point { _x: 15, _y: 25 }
undefined
```


### PointsCommands.items
> Items getter.


### PointsCommands.items(value)
> Items setter.

- `value` {number[][]} - Array of (x, y) pairs.

```javascript
> pc1.items = [[5, 15], [10, 10], [20, 20]];
[ [ 5, 15 ], [ 10, 10 ], [ 20, 20 ] ]
> pc1.items
[ Point { _x: 5, _y: 15 }, Point { _x: 10, _y: 10 }, Point { _x: 20, _y: 20 } ]
```
