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

> Returns SVG element attribute value.

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
