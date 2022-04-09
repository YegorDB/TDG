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
   * @param {Object} [attrs] - SVG element attributes.
   * @param {string} [attrs.fill="none"] - SVG element fill value.
   * @param {string} [attrs.stroke="#000000"] - SVG element stroke value.
   */
  constructor(attrs) {
    super('g', attrs);
    this.items = {};
  }

  /**
   * Add item.
   * @param {string} name - Item name.
   * @param {Object} item - Item instance.
   */
  addItem(name, item) {
    if (name in this.items) {
      throw Error(`Item with name "${name}" already exists.`);
    }
    this.items[name] = item;
    this.element.appendChild(item.element);
  }

  /**
   * Remove item.
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


export { SVGGroup };
