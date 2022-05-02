# Screen creation


## create.screen(elementId[, options])

> Create a screen.

- `elementId` {string} - DOM element id.
- `options` {Object} - Screen creation options.
- `options.dimensions` {integer[]} - Screen dimensions (width, height). Default [100, 100].

Server
```javascript
import { create } from 'two-dimensions-graphic';

> const screen = create.screen('screen-id', {
  dimensions: [500, 500],
});
undefined
```

Browser
```javascript
> const screen = TDG.create.screen('screen-id', {
  dimensions: [500, 500],
});
undefined
```
