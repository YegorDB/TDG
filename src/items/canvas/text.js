/*
Copyright 2022 Yegor Bitensky
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


import { CanvasItem } from './base.js';
import { Point } from '../../path_commands/main.js';


class CanvasText extends CanvasItem {

  /**
   * Creation.
   * @param {string} value - Text.
   * @param {Point|number[]} centre - Point instatce or (x, y) pair.
   * @param {Object} [options] - Options.
   * @param {boolean} [options.stroke=true] - Whether stroke object or not.
   * @param {boolean} [options.fill] - Whether fill object or not.
   * @param {Object} [options.flatParams] - Canvas 2d context flat params.
   * @param {Object} [options.byMethodParams] - Canvas 2d context methods to set params (key is method name, value is array of args).
   */
  constructor(centre, radius, options) {
    super(options);
    this._value = value;
    this.centre = centre;
  }

  /**
   * Get value.
   * @return {string} Value.
   */
  get value() {
    return this._value;
  }

  /**
   * Set value.
   * @param {string} value - Value.
   */
  set value(value) {
    this._value = value;
    this._refresh();
  }

  /**
   * Get centre.
   * @return {Point|number[]} Point instatce or (x, y) pair.
   */
  get centre() {
    return this._centre;
  }

  /**
   * Set centre.
   * @param {Point|number[]} value - Point instatce or (x, y) pair.
   */
  set centre(value) {
    this._centre = Point.getInstance(value);
    this._refresh();
  }

  /** Draw object stroke. */
  _drawStroke() {
    this.layer.ctx.strokeText(this.value, this.centre.x, this.centre.y);
  }

  /** Draw object fill. */
  _drawFill() {
    this.layer.ctx.fillText(this.value, this.centre.x, this.centre.y);
  }
}


export { CanvasText };
