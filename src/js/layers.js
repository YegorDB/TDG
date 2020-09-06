const { UTILS } = require('./base');


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


module.exports = {
  BaseLayer: BaseLayer,
  CanvasLayer: CanvasLayer,
  SVGLayer: SVGLayer,
};
