/*
Copyright 2020-2021 Yegor Bitensky
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
const { Dimensions } = require('../../base');


/** Canvas layer logic. */
class CanvasLayer extends BaseLayer {

  /** Create canvas layer. */
  constructor() {
    super();
    this.ctx = this.element.getContext('2d');
  }

  /**
   * Set layer dimentions.
   * @param {Dimensions} value.
   */
  set dimensions(value) {
    super.dimensions = value;
    this.element.width = value.width;
    this.element.height = value.height;
  }

  /**
   * Add item.
   * @param {string} name - Item name.
   * @param {Object} item - Item instance.
   */
  addItem(name, item) {
    super.addItem(name, item);
    item.layer = this;
    item.draw();
  }

  /**
   * Remove item.
   * @param {string} name - Item name.
   */
  removeItem(name) {
    super.removeItem(name);
    this.refresh();
  }

  /** Refresh layer items. */
  refresh() {
    this.clear();
    for (let item of this.items) {
      item.draw();
    }
  }

  /** Clear layer element. */
  clear() {
    this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
  }

  /**
   * Create layer element.
   * @return {canvas element} Layer element.
   */
  _createElement() {
    return document.createElement('canvas');
  }
}


module.exports = {
  CanvasLayer: CanvasLayer,
};
