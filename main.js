/** Helpful functionality. */
const UTILS = {

  /**
   * Create svg element.
   * @param {string} elementName - Name of created svg element like "svg", "circle" etc.
   */
  createSvgElement(elementName) {
    return document.createElementNS('http://www.w3.org/2000/svg', elementName);
  },
};


/**
 * Class representing svg item.
 * @class
 */
class SVGItem {

  /**
   * Create svg item.
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

  /**
   * Get svg item attribute.
   * @param {string} name - SVG element attribute name.
   * @return {string} SVG element attribute value.
   */
  getAttr(name) {
    return this.element.getAttribute(name);
  }

  /**
   * Set svg item attribute.
   * @param {string} name - SVG element attribute name.
   * @param {string} value - SVG element attribute value.
   */
  setAttr(name, value) {
    this.element.setAttribute(name, value);
  }
}


/**
 * Class representing svg layer.
 * @class
 */
class SVGLayer {

  /**
   * Create svg layer.
   * @constructor
   */
  constructor() {
    this.element = UTILS.createSvgElement('svg');
    this.element.classList.add('tdg-layer');
    this.items = {};
    this._initialZIndex = null;
    this._isShowed = true;
  }

  /**
   * Get whether layer is showed or not.
   * @return {boolean} Layer is showed state.
   */
  get isShowed() {
    return this._isShowed;
  }

  /**
   * Add an item.
   * @param {string} name - Item name.
   * @param {any Item class instance} item - Item instance.
   */
  addItem(name, item) {
    if (name in this.items) {
      throw Error(`Item with name "${name}" already exists.`);
    }
    this.items[name] = item;
    this.element.appendChild(item.element);
  }

  /**
   * Set layer z-index value.
   * @param {integer} value - Z-index name.
   */
  setZIndex(value) {
    if (!Number.isInteger(value)) {
      throw Error('Z-index value has to be an integer.');
    }
    if (this._initialZIndex == null) {
      this._initialZIndex = value;
    }
    this.element.style.zIndex = value;
  }

  /** Set layer z-index to initial value. */
  resetZIndex() {
    if (this._initialZIndex == null) return;
    this.element.style.zIndex = this._initialZIndex;
  }

  /** Show layer. */
  show() {
    this._isShowed = true;
    this.element.classList.remove('tdg-hide');
  }

  /** Hide layer. */
  hide() {
    this._isShowed = false;
    this.element.classList.add('tdg-hide');
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
   * @param {integer[]} [options.dimensions=[100, 100]] - Screen dimensions [width, height].
   */
  constructor(elementId, options) {
    this.element = document.getElementById(elementId);
    this.element.classList.add('tdg-screen');

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

    this._activeLayerName = null;
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
      throw Error(`Layer with name "${name}" already exists.`);
    }
    layer.setZIndex(Object.keys(this.layers).length);
    this.layers[name] = layer;
    this.element.appendChild(layer.element);
    if (this._activeLayerName) {
      this.activateLayer(this._activeLayerName);
    }
  }

  /**
   * Move layer in front of other layers.
   * @param {string} name - Layer name.
   */
  activateLayer(name) {
    if (!(name in this.layers)) {
      throw Error(`Layer with name "${name}" does not exist.`);
    }
    this.deactivateLayer();
    this.layers[name].setZIndex(Object.keys(this.layers).length);
    this._activeLayerName = name;
  }

  /** Move activated layer to its original position in relation to other layers. */
  deactivateLayer() {
    if (this._activeLayerName == null) return;
    this.layers[this._activeLayerName].resetZIndex();
    this._activeLayerName = null;
  }
}
