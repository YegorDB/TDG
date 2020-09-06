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


module.exports = {
  UTILS: UTILS,
};
