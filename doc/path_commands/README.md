# Path commands

> SVG path ("d" attribute)[https://svgwg.org/svg2-draft/paths.html#DProperty] commands



## PathCommands

> Base SVG path "d" attribute commands handle logic.

Server
```javascript
> const { PathCommands } = require('two-dimensions-graphic').path_commands;
undefined
```

Browser
```javascript
> const { PathCommands } = TDG.path_commands;
undefined
```


### PathCommands.validate(value)
> Static method to validate path commands value.

> Only whitespases are valid values separators.

> Throw an error if validation failed, nothing otherwise.

- `value` {string} - SVG path "d" attribute commands value.

```javascript
> PathCommands.validate('wrong value');
Uncaught Error: Wrond path commands string.
> PathCommands.validate('M 5 0 h 10 v 7 z');
undefined
```


### PathCommands.constructor([value])
- `value` {string} - SVG path "d" attribute commands value.

```javascript
> var pc1 = new PathCommands('M 10 10 L 15 5');
undefined
> pc1.value;
'M 10 10 L 15 5'
```


### PathCommands.value
> Value getter.


### PathCommands.value(value)
> Value setter.

- `value` {string} - SVG path "d" attribute commands value.

```javascript
> var pc2 = new PathCommands;
undefined
> pc2.value;
'none'
> pc2.value === PathCommands.NONE;
true
> pc2.value = 'M 4 3 V 8 h 5';
'M 4 3 V 8 h 5'
> pc2.value;
'M 4 3 V 8 h 5'
```
