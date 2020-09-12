# Documentation



## Items


### TDG.items.SVGItem

> Class representing SVG item.


#### TDG.items.SVGItem.constructor(name[, attrs])

> Create SVG item.

- `name` {string} - SVG element name.
- `attrs` {Object} - SVG element attributes.

```javascript
> var rectangle = new TDG.items.SVGItem('rect', {
>   x: 10,
>   y: 40,
>   width: 150,
>   height: 50,
>   fill: 'orange',
> });
undefined
```


#### TDG.items.SVGItem.getAttr(name)

> Get SVG item attribute.

- `name` {string} - SVG element attribute name.

> Return SVG element attribute value.

```javascript
> rectangle.getAttr('fill');
"orange"
```


#### TDG.items.SVGItem.setAttr(name, value)

> Set SVG item attribute.

- `name` {string} - SVG element attribute name.
- `value` {string} - SVG element attribute value.

```javascript
> rectangle.setAttr('fill', 'black');
undefined
> rectangle.getAttr('fill');
"black"
```



## Layers


### TDG.layers.BaseLayer

> Base layer class. This is abstract class, so it won't be used directly.


#### TDG.layers.BaseLayer.isShowed

> Getter returns whether layer is showed or not.


#### TDG.layers.BaseLayer.zIndex

> Getter returns layer z-index.


#### TDG.layers.BaseLayer.zIndex(value)

> Setter sets layer z-index value.

- `value` {integer} - Z-index value.


#### TDG.layers.BaseLayer.resetZIndex()

> Reset layer z-index to initial value.


#### TDG.layers.BaseLayer.setDimensions(width, height)

> Set layer dimentions. Abstract method (need to be implemented in child class).

- `width` {integer} - Horizontal dimension.
- `height` {integer} - Vertical dimension.


#### TDG.layers.BaseLayer.show()

> Show layer.


#### TDG.layers.BaseLayer.hide()

> Hide layer.


### TDG.layers.CanvasLayer

> Class representing canvas layer. Extends TDG.layers.BaseLayer.


#### TDG.layers.CanvasLayer.constructor()

> Create canvas layer.

```javascript
> var canvasLayer = new TDG.layers.CanvasLayer();
undefined
```


#### TDG.layers.CanvasLayer.ctx

> Canvas 2D context.

```javascript
> canvasLayer.ctx.fillStyle = 'red';
"red"
> canvasLayer.ctx.fillRect(10, 10, 100, 100);
undefined
```


### TDG.layers.SVGLayer

> Class representing SVG layer. Extends TDG.layers.BaseLayer.


#### TDG.layers.SVGLayer.constructor()

> Create SVG layer.

```javascript
> var svgLayer = new TDG.layers.SVGLayer();
undefined
```


#### TDG.layers.SVGLayer.addItem(name, item)

> Add an item.

- `name` {string} - Item name.
- `item` {any SVG Item class instance} - Item instance.

```javascript
> svgLayer.addItem('mainRectangle', rectangle);
undefined
> svgLayer.items.mainRectangle
Object { ... }
```


#### TDG.layers.SVGLayer.removeItem(name)

> Remove an item.

- `name` {string} - Item name.

```javascript
> svgLayer.removeItem('mainRectangle');
undefined
> svgLayer.items.mainRectangle
undefined
```



## Screen


### TDG.screen.Screen

> Class representing a screen (composition of layers).


#### TDG.screen.Screen.constructor(elementId[, options])

> Create a screen.

- `elementId` {string} - DOM element id.
- `options` {Object} - Screen creation options.
- `options.dimensions` {integer[]} - Screen dimensions (width, height). Default [100, 100].

```javascript
> const screen = new TDG.screen.Screen('screen-id', {
>   dimensions: [500, 500],
> });
undefined
```


#### TDG.screen.Screen.addLayer(name, layer)

> Add a layer.

- `name` {string} - Layer name.
- `layer` {any Layer class instance} - Layer instance.

```javascript
> screen.addLayer('background', new TDG.layers.CanvasLayer());
undefined
> screen.layers.background;
Object { ... }
```


#### TDG.screen.Screen.activateLayer(name)

> Move layer in front of other layers.

- `name` {string} - Layer name.

```javascript
> screen.layers.background.zIndex
0
> screen.addLayer('foreground', new TDG.layers.SVGLayer());
undefined
> screen.layers.foreground.zIndex
1
> screen.activateLayer('background');
undefined
> screen.layers.background.zIndex
2
> screen.layers.foreground.zIndex
1
```


#### TDG.screen.Screen.deactivateLayer()

> Move activated layer to its original position in relation to other layers.

```javascript
> screen.deactivateLayer();
undefined
> screen.layers.background.zIndex
0
> screen.layers.foreground.zIndex
1
```
