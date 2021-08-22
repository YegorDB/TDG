# Screens



## Screen



Server
```javascript
> const { Screen } = require('two-dimensions-graphic').screens;
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


### Screen.createCanvasLayer(name[, options])
> Create canvas layer and attach them to screen.

- `name` {string} - Layer name.
- `options` {Object} - Options.
- `options.drawFunct` {Object} - Draw function with one argument (CanvasRenderingContext2D), it will be fire on layer refresh.

> Returns CanvasLayer


### Screen.createCanvasLayerWithBGFiller(name, bgFiller[, options])
> Create with bg filler canvas layer and attach them to screen.

- `name` {string} - Layer name.
- `bgFiller` {*} - Background filler (anything CanvasRenderingContext2D.fillStyle could be used with).
- `options` {Object} - Options.
- `options.drawFunct` {Object} - Draw function with one argument (CanvasRenderingContext2D), it will be fire on layer refresh.

> Returns CanvasLayerWithBGFiller


### Screen.createCanvasLayerWithBGImage(name, imageSrc[, options])
> Create with bg image canvas layer and attach them to screen.

- `name` {string} - Layer name.
- `imageSrc` {string} - Image source.
- `options` {Object} - Options.
- `options.drawFunct` {Object} - Draw function with one argument (CanvasRenderingContext2D), it will be fire on layer refresh.

> Returns CanvasLayerWithBGImage


### Screen.createSVGLayer(name)
> Create SVG layer and attach them to screen.

- `name` {string} - Layer name.

> Returns SVGLayer
