/*
Copyright 2020-2022 Yegor Bitensky
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


import { BaseLayer } from '../base.js';
import { Dimensions } from '../../base.js';
import { CanvasItemsManager } from '../../managers/items.js';


/** Canvas layer logic. */
class CanvasLayer extends BaseLayer {

  /**
   * Creation.
   * @param {Object} [options] - Options.
   * @param {finction} [options.drawFunct] - Draw function
   *     with one argument - CanvasRenderingContext2D,
   *     it will be fire on layer refresh.
   */
  constructor(options) {
    options = options || {};

    super();
    this.ctx = this.element.getContext('2d');
    this.items = new CanvasItemsManager(this);
    this._drawFunct = options.drawFunct;
  }

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
    this.refresh();
  }

  /** Refresh layer items. */
  refresh() {
    this.clear();
    this._draw();
  }

  /** Clear layer element. */
  clear() {
    this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
  }

  /**
   * Draw layer items.
   * @private
   */
  _draw() {
    if (this._drawFunct) {
      this._drawFunct(this.ctx);
    }
    for (let item of this.items.values) {
      item.draw();
    }
  }

  /**
   * Create layer element.
   * @private
   * @return {canvas element} Layer element.
   */
  _createElement() {
    return document.createElement('canvas');
  }
}


export { CanvasLayer };
