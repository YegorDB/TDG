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


## UTILS.createSvgElement(elementName)

> Create svg element.

- `elementName` {string} - Name of created svg element ("svg", "circle" etc.).

> Return SVG DOM element

```javascript
> var elem = UTILS.createSvgElement('svg');
undefined
> elem.localName;
'svg'
```
