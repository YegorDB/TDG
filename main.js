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
   * @param {Object} options - Screen creation options.
   */
  constructor(elementId, options) {
    this.element = document.getElementById(elementId);
    this.layers = {};
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
