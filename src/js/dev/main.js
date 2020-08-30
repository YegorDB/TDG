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
 * Base layer class.
 * @abstract
 * @class
 */
class BaseLayer {

  /** Create a layer. */
  constructor() {
    this.element = this._createElement();
    this.element.classList.add('tdg-layer');
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
   * Create layer element.
   * @abstract
   * @return {DOM element} Layer element.
   */
  _createElement() {}

  /**
   * Set layer dimentions.
   * @abstract
   * @param {integer} width.
   * @param {integer} height.
   */
  setDimensions(width, height) {}

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
 * Class representing canvas layer.
 * @class
 */
class CanvasLayer extends BaseLayer {

  /** Create canvas layer. */
  constructor() {
    super();
    this.ctx = this.element.getContext('2d');
  }

  /**
   * Create layer element.
   * @return {canvas element} Layer element.
   */
  _createElement() {
    return document.createElement('canvas');
  }

  /**
   * Set layer dimentions.
   * @param {integer} width.
   * @param {integer} height.
   */
  setDimensions(width, height) {
    this.element.width = width;
    this.element.height = height;
  }
}


/**
 * Class representing svg layer.
 * @class
 */
class SVGLayer extends BaseLayer {

  /** Create svg layer. */
  constructor() {
    super();
    this.items = {};
  }

  /**
   * Create layer element.
   * @return {svg element} Layer element.
   */
  _createElement() {
    return UTILS.createSvgElement('svg');
  }

  /**
   * Set layer dimentions.
   * @param {integer} width.
   * @param {integer} height.
   */
  setDimensions(width, height) {
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
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
   * Remove an item.
   * @param {string} name - Item name.
   */
  removeItem(name) {
    if (!(name in this.items)) {
      throw Error(`Item with name "${name}" does not exist.`);
    }

    this.items[name].element.remove();
    this.items[name].element = null;
    delete this.items[name];
  }
}


/**
 * Class representing a composition of layers.
 * @class
 */
class Composition {

  /**
   * Create a composition.
   * @param {string} elementId - DOM element id.
   * @param {Object} [options] - Composition creation options.
   * @param {integer[]} [options.dimensions=[100, 100]] - Composition dimensions [width, height].
   */
  constructor(elementId, options) {
    this.element = document.getElementById(elementId);
    this.element.classList.add('tdg-composition');

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

  /** Set composition dimentions. */
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
    layer.setDimensions(this.dimensions.width, this.dimensions.height);
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
