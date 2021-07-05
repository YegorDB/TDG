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
const { UTILS } = require('../../base');


/** SVG layer logic. */
class SVGLayer extends BaseLayer {

  /** Create SVG layer. */
  constructor() {
    super();
    this.items = {};
  }

  /**
   * Create layer element.
   * @return {SVG element} Layer element.
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
   * @param {any SVG Item class instance} item - Item instance.
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
  SVGLayer: SVGLayer,
};
