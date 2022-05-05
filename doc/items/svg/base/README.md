# Base SVG items



## BaseSVGItem

Server
```javascript
import { items } from 'two-dimensions-graphic';

> const { BaseSVGItem } = items.svg;
undefined
```

Browser
```javascript
> const { BaseSVGItem } = TDG.items.svg;
undefined
```


### BaseSVGItem.constructor(name[, attrs])

- `name` {string} - SVG element name.
- `attrs` {Object} - SVG element attributes.

```javascript
> var rct = new BaseSVGItem('rect', {
... x: 10,
... y: 40,
... width: 150,
... height: 50,
... fill: 'orange',
... });
undefined
```


### BaseSVGItem.items
> SVG element inner items manager getter.


### BaseSVGItem.getAttr(name)

- `name` {string} - SVG element attribute name.

> Return SVG element attribute value.

```javascript
> rct.getAttr('fill');
"orange"
```


### BaseSVGItem.setAttr(name, value)

> Set SVG item attribute.

- `name` {string} - SVG element attribute name.
- `value` {string} - SVG element attribute value.

```javascript
> rct.setAttr('fill', 'black');
undefined
> rct.getAttr('fill');
"black"
```


### BaseSVGItem.setAttr(name, value)

> Remove SVG item attribute.

- `name` {string} - SVG element attribute name.

```javascript
> rct.rmAttr('fill');
undefined
> rct.getAttr('fill');
null
```


## SVGItem

> extends BaseSVGItem

Server
```javascript
import { items } from 'two-dimensions-graphic';

> const { SVGItem } = items.svg;
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
- `attrs.fill` {string} - SVG element fill value (default "none").
- `attrs.stroke` {string} - SVG element stroke value (default "#000000").
