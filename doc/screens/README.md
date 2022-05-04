# Screens



## Screen

Server
```javascript
import { screens } from 'two-dimensions-graphic';

> const { Screen } = screens;
undefined
```

Browser
```javascript
> const { Screen } = TDG.screens;
undefined
```


### Screen.constructor(elementId[, options])

> Create a screen.

- `elementId` {string} - DOM element id.
- `options` {Object} - Screen creation options.
- `options.dimensions` {integer[]} - Screen dimensions (width, height). Default [100, 100].


### Screen.dimensions
> Dimensions getter.


### Screen.dimensions(value)
> Dimensions setter.

- `value` {Dimensions} - Dimensions instance.


### Screen.addLayer(name, layer)
> Add a layer.

- `name` {string} - Layer name.
- `layer` {any layer class instance} - Layer instance.


### Screen.activateLayer(name)
> Move layer in front of other layers.

- `name` {string} - Layer name.


### Screen.deactivateLayer()

> Move activated layer to its original position in relation to other layers.
