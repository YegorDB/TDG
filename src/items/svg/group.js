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


/** SVG group. */
class SVGGroup extends SVGItem {

  /**
   * Creation.
   * @param {function} [itemsManager] - Items manager class.
   * @param {Object} [attrs] - SVG element attributes.
   * @param {string} [attrs.fill="none"] - SVG element fill value.
   * @param {string} [attrs.stroke="#000000"] - SVG element stroke value.
   */
  constructor(itemsManager, attrs) {
    super('g', attrs);
    this.items = new itemsManager(this);
  }

  /** Remove item. */
  remove() {
    for (let item of this.items.values) {
      item.remove();
    }
    super.remove();
  }
}


export { SVGGroup };
