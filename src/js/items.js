const { UTILS } = require('./base');


/**
 * Class representing SVG item.
 * @class
 */
class SVGItem {

  /**
   * Create SVG item.
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
   * Get SVG item attribute.
   * @param {string} name - SVG element attribute name.
   * @return {string} SVG element attribute value.
   */
  getAttr(name) {
    return this.element.getAttribute(name);
  }

  /**
   * Set SVG item attribute.
   * @param {string} name - SVG element attribute name.
   * @param {string} value - SVG element attribute value.
   */
  setAttr(name, value) {
    this.element.setAttribute(name, value);
  }
}


module.exports = {
  SVGItem: SVGItem,
};
