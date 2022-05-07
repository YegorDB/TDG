# Animation SVG items



## SVGAnimation

> Extends BaseSVGItem

Server
```javascript
import { items } from 'two-dimensions-graphic';

> const { SVGAnimation } = items.svg;
undefined
```

Browser
```javascript
> const { SVGAnimation } = TDG.items.svg;
undefined
```

### SVGAnimation.constructor(name[, attrs, eventHandlers])

- `name` {string} - SVG animation element name.
- `attrs` {Object} - SVG element attributes.
- `eventHandlers` {Object} - SVG animation element event handlers.


## SVGAnimate

> Extends SVGAnimation

Server
```javascript
import { items } from 'two-dimensions-graphic';

> const { SVGAnimate } = items.svg;
undefined
```

Browser
```javascript
> const { SVGAnimate } = TDG.items.svg;
undefined
```

### SVGAnimate.constructor([attrs, eventHandlers])

- `attrs` {Object} - SVG element attributes.
- `attrs.repeatCount="indefinite"` {Object} - Animation repeat count.
- `eventHandlers` {Object} - SVG animation element event handlers.


## SVGSet

> Extends SVGAnimation

Server
```javascript
import { items } from 'two-dimensions-graphic';

> const { SVGSet } = items.svg;
undefined
```

Browser
```javascript
> const { SVGSet } = TDG.items.svg;
undefined
```

### SVGSet.constructor([attrs, eventHandlers])

- `attrs` {Object} - SVG element attributes.
- `eventHandlers` {Object} - SVG animation element event handlers.


## SVGAnimateMotion

> Extends SVGAnimation

Server
```javascript
import { items } from 'two-dimensions-graphic';

> const { SVGAnimateMotion } = items.svg;
undefined
```

Browser
```javascript
> const { SVGAnimateMotion } = TDG.items.svg;
undefined
```

### SVGAnimateMotion.constructor([attrs, eventHandlers])

- `attrs` {Object} - SVG element attributes.
- `eventHandlers` {Object} - SVG animation element event handlers.


## SVGAnimateTransform

> Extends SVGAnimation

Server
```javascript
import { items } from 'two-dimensions-graphic';

> const { SVGAnimateTransform } = items.svg;
undefined
```

Browser
```javascript
> const { SVGAnimateTransform } = TDG.items.svg;
undefined
```

### SVGAnimateTransform.constructor([attrs, eventHandlers])

- `attrs` {Object} - SVG element attributes.
- `eventHandlers` {Object} - SVG animation element event handlers.
