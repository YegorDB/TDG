/** Helpful functionality. */
const UTILS = {

  /**
   * Create a svg element.
   * @param {string} elementName - Name of created svg element like "svg", "circle" etc.
   */
  createSvgElement(elementName) {
    return document.createElementNS('http://www.w3.org/2000/svg', elementName);
  },
};


/**
 * Class representing a svg item.
 * @class
 */
class SVGItem {

  /**
   * Create a svg layer.
   * @constructor
   * @param {string} name - SVG element name.
   * @param {Object} [attrs] - SVG element attributes.
   */
  constructor(name, attrs) {
    this.element = UTILS.createSvgElement(name);
    for (let [name, value] of Object.entries(attrs || {})) {
      this.element.setAttribute(name, value);
    }
  }
}


/**
 * Class representing a svg layer.
 * @class
 */
class SVGLayer {

  /**
   * Create a svg layer.
   * @constructor
   */
  constructor() {
    this.element = UTILS.createSvgElement('svg');
    this.element.classList.add('tdg-layer');
    this.items = {};
  }

  /**
   * Add an item.
   * @param {string} name - Item name.
   * @param {any Item class instance} item - Item instance.
   */
  addItem(name, item) {
    if (name in this.items) {
      throw Error(`Item with name ${name} already exists.`);
    }
    this.items[name] = item;
    this.element.appendChild(item.element);
  }
}


/**
 * Class representing a screen (what a user sees).
 * @class
 */
class Screen {

  /**
   * Create a screen.
   * @constructor
   * @param {string} elementId - DOM element id.
   * @param {Object} [options] - Screen creation options.
   * @param {integer[]} [options.dimensions=[100, 100]] - Screen dimensions (two integers array - width and height).
   */
  constructor(elementId, options) {
    this.element = document.getElementById(elementId);

    options = options || {};

    let dimensions = options.dimensions || [100, 100];
    this.dimensions = {
      _width: dimensions[0],
      get width() { return this._width; },
      _height: dimensions[1],
      get height() { return this._height; },
    };
    this._setDimensions();

    this.layers = {};
  }

  /** Set screen dimentions. */
  _setDimensions() {
    this.element.style.width = `${this.dimensions.width}px`;
    this.element.style.height = `${this.dimensions.height}px`;
  }

  /**
   * Add a layer.
   * @param {string} name - Layer name.
   * @param {any Layer class instance} layer - Layer instance.
   */
  addLayer(name, layer) {
    if (name in this.layers) {
      throw Error(`Layer with name ${name} already exists.`);
    }
    this.layers[name] = layer;
    this.element.appendChild(layer.element);
  }
}
