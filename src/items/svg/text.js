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


import { SVGItem } from './base.js';
import { Point } from '../../path_commands/main.js';


/** SVG text. */
class SVGText extends SVGItem {

  /**
   * Creation.
   * @param {string} value - Text.
   * @param {Point|number[]} centre - Point instatce or (x, y) pair.
   * @param {Object} [attrs] - SVG element attributes.
   * @param {string} [attrs.fill="none"] - SVG element fill value.
   * @param {string} [attrs.stroke="#000000"] - SVG element stroke value.
   */
  constructor(value, centre, attrs) {
    super('text', attrs);
    this.value = value;
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
    this.element.textContent = value;
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
    if (value instanceof Point) {
      this._centre = value;
    } else {
      this._centre = new Point(...value);
    }
    this.setAttr('x', this._centre.x);
    this.setAttr('y', this._centre.y);
  }
}


export { SVGText };
