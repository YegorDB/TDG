# Text SVG items



## SVGText

> Extends SVGItem

Server
```javascript
import { items } from 'two-dimensions-graphic';

> const { SVGText } = items.svg;
undefined
```

Browser
```javascript
> const { SVGText } = TDG.items.svg;
undefined
```

### SVGText.constructor(value, centre[, attrs])

- `value` {string} - Text.
- `centre` {Point|number[]} - Point instatce or (x, y) pair.
- `attrs` {Object} - SVG element attributes.
- `attrs.fill` {string} - SVG element fill value (default "none").
- `attrs.stroke` {string} - SVG element stroke value (default "#000000").
