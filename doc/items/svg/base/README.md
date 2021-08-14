# Base SVG items



## SVGItem

Server
```javascript
> const { SVGItem } = require('two-dimensions-graphic').items.svg;
undefined
```

Browser
```javascript
> const { SVGItem } = TDG.items.svg;
undefined
```


### SVGItem.constructor(name[, attrs])

- `name` {string} - SVG element name.
- `attrs` {Object} - SVG element attributes.
- `fill` {string} - SVG element fill value (default "none").
- `stroke` {string} - SVG element stroke value (default "#000000").

```javascript
> var rct = new SVGItem('rect', {
... x: 10,
... y: 40,
... width: 150,
... height: 50,
... fill: 'orange',
... });
undefined
```


### SVGItem.getAttr(name)

- `name` {string} - SVG element attribute name.

> Return SVG element attribute value.

```javascript
> rct.getAttr('fill');
"orange"
```


### SVGItem.setAttr(name, value)

> Set SVG item attribute.

- `name` {string} - SVG element attribute name.
- `value` {string} - SVG element attribute value.

```javascript
> rct.setAttr('fill', 'black');
undefined
> rct.getAttr('fill');
"black"
```


### SVGItem.setAttr(name, value)

> Remove SVG item attribute.

- `name` {string} - SVG element attribute name.

```javascript
> rct.rmAttr('fill');
undefined
> rct.getAttr('fill');
null
```
