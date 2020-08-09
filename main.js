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


/** Class representing a svg layer. */
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
  Class representing a scene.
  Scene is what a user sees.
 */
class Scene {
  /**
   * Create a scene.
   * @constructor
   * @param {string} elementId - DOM element id.
   * @param {array} layers - Layers instances.
   */
  constructor(elementId, layers) {
    this.element = document.getElementById(elementId);
    for (let layer of layers) {
      this.element.appendChild(layer.element);
    }
  }
}
