# SVG creation


## create.svg.layer()
> Create SVG layer.

> Returns SVGLayer instance


## create.svg.animate([attrs, eventHandlers])
> Create SVG animate.

- `attrs` {Object} - SVG element attributes.
- `eventHandlers` {Object} - SVG animation element event handlers.

> Returns SVGAnimate instance


## create.svg.set([attrs, eventHandlers])
> Create SVG set.

- `attrs` {Object} - SVG element attributes.
- `eventHandlers` {Object} - SVG animation element event handlers.

> Returns SVGSet instance


## create.svg.animateMotion([attrs, eventHandlers])
> Create SVG animate motion.

- `attrs` {Object} - SVG element attributes.
- `eventHandlers` {Object} - SVG animation element event handlers.

> Returns SVGAnimateMotion instance


## create.svg.animateTransform([attrs, eventHandlers])
> Create SVG animate transform.

- `attrs` {Object} - SVG element attributes.
- `eventHandlers` {Object} - SVG animation element event handlers.

> Returns SVGAnimateTransform instance


## create.svg.item(elementName[, attrs])
> Create SVG item.

- `elementName` {string} - SVG element name.
- `attrs` {Object} - SVG element attributes.
- `attrs.fill` {string} - SVG element fill value (default "none").
- `attrs.stroke` {string} - SVG element stroke value (default "#000000").

> Returns SVGItem instance


## create.svg.circle(centre, radius[, attrs])
> Create SVG circle.

- `centre` {Point|number[]} - Point instatce or (x, y) pair.
- `radius` {number} - Radius.
- `attrs` {Object} - SVG element attributes.
- `attrs.fill` {string} - SVG element fill value (default "none").
- `attrs.stroke` {string} - SVG element stroke value (default "#000000").

> Returns SVGCircle instance


## create.svg.ellipse(centre, radiuses[, attrs])
> Create SVG ellipse.

- `centre` {Point|number[]} - Point instatce or (x, y) pair.
- `radiuses` {EllipseRadiuses|number[]} - EllipseRadiuses instatce or (r1, r2) pair.
- `attrs` {Object} - SVG element attributes.
- `attrs.fill` {string} - SVG element fill value (default "none").
- `attrs.stroke` {string} - SVG element stroke value (default "#000000").

> Returns SVGEllipse instance


## create.svg.path(value[, attrs])
> Create SVG path.

- `value` {string} - Path commands value.
- `attrs` {Object} - SVG element attributes.
- `attrs.fill` {string} - SVG element fill value (default "none").
- `attrs.stroke` {string} - SVG element stroke value (default "#000000").

> Returns SVGPath instance


## create.svg.polygon(points[, attrs])
> Create SVG polygon.

- `points` {number[][]|Point[]} - Array of (x, y) pairs or Point instances.
- `attrs` {Object} - SVG element attributes.
- `attrs.fill` {string} - SVG element fill value (default "none").
- `attrs.stroke` {string} - SVG element stroke value (default "#000000").

> Returns SVGPolygon instance


## create.svg.polyline(points[, attrs])
> Create SVG polyline.

- `points` {number[][]|Point[]} - Array of (x, y) pairs or Point instances.
- `attrs` {Object} - SVG element attributes.
- `attrs.fill` {string} - SVG element fill value (default "none").
- `attrs.stroke` {string} - SVG element stroke value (default "#000000").

> Returns SVGPolyline instance


## create.svg.text(value, centre[, attrs])
> Create SVG text.

- `value` {string} - Text.
- `centre` {Point|number[]} - Point instatce or (x, y) pair.
- `attrs` {Object} - SVG element attributes.
- `attrs.fill` {string} - SVG element fill value (default "none").
- `attrs.stroke` {string} - SVG element stroke value (default "#000000").

> Returns SVGText instance


## create.svg.group([attrs])
> Create SVG group.

- `attrs` {Object} - SVG element attributes.

> Returns SVGGroup instance
