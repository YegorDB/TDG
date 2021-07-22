/*
Copyright 2020 Yegor Bitensky
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


const { BaseLayer } = require('../base');
const { Dimensions, UTILS } = require('../../base');


/** SVG layer logic. */
class SVGLayer extends BaseLayer {

  /**
   * Get layer dimentions.
   * @return {Dimensions} dimentions.
   */
  get dimensions() {
    return this._dimensions;
  }

  /**
   * Set layer dimentions.
   * @param {Dimensions} value.
   */
  set dimensions(value) {
    super.dimensions = value;
    this.element.style.width = `${value.width}px`;
    this.element.style.height = `${value.height}px`;
  }

  /**
   * Add item.
   * @param {string} name - Item name.
   * @param {Object} item - Item instance.
   */
  addItem(name, item) {
    super.addItem(name, item);
    this.element.appendChild(item.element);
  }

  /**
   * Remove item additional logic.
   * @param {Object} item - Item.
   */
  _removeItemAdditional(item) {
    item.element.remove();
    item.element = null;
  }

  /**
   * Create layer element.
   * @private
   * @return {SVG element} Layer element.
   */
  _createElement() {
    return UTILS.createSvgElement('svg');
  }
}


module.exports = {
  SVGLayer: SVGLayer,
};
