# Base layers



## BaseLayer

> Abstract layer class.

Server
```javascript
> const { BaseLayer } = require('two-dimensions-graphic').layers.base;
undefined
```

Browser
```javascript
> const { BaseLayer } = TDG.layers.base;
undefined
```


### BaseLayer.constructor()

> Layer Creation


### BaseLayer.dimensions
> Dimensions getter.


### BaseLayer.dimensions(value)
> Dimensions setter.

- `value` {Dimensions} - Dimensions instance.


### BaseLayer.isShowed
> Getter whether layer is showed or not.


### BaseLayer.zIndex
> Z-index getter.


### BaseLayer.zIndex(value)
> Z-index setter.

- `value` {integer} - Z-index value.


### BaseLayer.resetZIndex()
> Set layer z-index to initial value.


### BaseLayer.createElement()
> Create layer element.

> Returns {DOM element} Layer element.


### BaseLayer.show()
> Show layer.


### BaseLayer.hide()
> Hide layer.


### BaseLayer.addItem(name, item)
> Add item.

- `name` {string} - Item name.
- `item` {Object} - Item instance.


### BaseLayer.removeItem(name)
> Remove item.

- `name` {string} - Item name.
