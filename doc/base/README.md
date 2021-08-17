# Base



## UTILS

> Helpful functionality.

Server
```javascript
> const { UTILS } = require('two-dimensions-graphic').base;
undefined
```

Browser
```javascript
> const { UTILS } = TDG.base;
undefined
```


### UTILS.createSvgElement(elementName)

> Create svg element.

- `elementName` {string} - Name of created svg element ("svg", "circle" etc.).

> Return SVG DOM element

```javascript
> var elem = UTILS.createSvgElement('svg');
undefined
> elem.localName;
'svg'
```



## Dimensions

Server
```javascript
> const { Dimensions } = require('two-dimensions-graphic').base;
undefined
```

Browser
```javascript
> const { Dimensions } = TDG.base;
undefined
```


### Dimensions.validateInstanceof(value)

> Static method to validate value is instance of Dimensions.

> Throw an error if validation failed, nothing otherwise.

- `value` {*} - Dimensions value.

```javascript
> Dimensions.validateInstanceof('wrong value');
Uncaught Error: Value has to be an instance of Dimensions.
> Dimensions.validateInstanceof(new Dimensions(10, 10));
undefined
```


### Dimensions.validateDimension(value)

> Static method to validate dimension value.

> Throw an error if validation failed, nothing otherwise.

- `value` {number} - Dimension value.

```javascript
> Dimensions.validateDimension('wrong value');
Uncaught Error: Dimension value has to be an integer.
> Dimensions.validateDimension(10);
undefined
```


### Dimensions.constructor(width, height)
- `width` {number} - Dimensions width.
- `height` {number} - Dimensions height.

```javascript
> var dms = new Dimensions(200, 150);
undefined
> dms.width;
200
> dms.height;
150
```


### Dimensions.width
> Width getter.


### Dimensions.height
> Height getter.
