/**
 * Class representing a screen (composition of layers).
 * @class
 */
class Screen {

  /**
   * Create a screen.
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


module.exports = {
  Screen: Screen,
};
