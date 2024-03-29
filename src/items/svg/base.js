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


import { UTILS } from '../../base.js';
import { SVGItemsManager } from '../../managers/items.js';


/** Base SVG item */
class BaseSVGItem {

  /**
   * Creation.
   * @param {string} name - SVG element name.
   * @param {Object} [attrs] - SVG element attributes.
   */
  constructor(name, attrs) {
    this.element = UTILS.createSvgElement(name);

    attrs = attrs || {};
    for (let [name, value] of Object.entries(attrs)) {
      this.setAttr(name, value);
    }

    this._items = new SVGItemsManager(this);
  }

  /**
   * Get SVG element inner items manager.
   * @return {SVGItemsManager} SVG element inner items manager.
   */
  get items() {
    return this._items;
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

  /**
   * Remove SVG item attribute.
   * @param {string} name - SVG element attribute name.
   */
  rmAttr(name) {
    this.element.removeAttribute(name);
  }

  /** Remove item. */
  remove() {
    for (let item of this.items.values) {
      item.remove();
    }
    this.element.remove();
    this.element = null;
  }
}


/** SVG item */
class SVGItem extends BaseSVGItem {

  /**
   * Creation.
   * @param {string} name - SVG element name.
   * @param {Object} [attrs] - SVG element attributes.
   * @param {string} [attrs.fill="none"] - SVG element fill value.
   * @param {string} [attrs.stroke="#000000"] - SVG element stroke value.
   */
  constructor(name, attrs) {
    attrs = {
      fill: 'none',
      stroke: '#000000',
      ...(attrs || {}),
    };

    super(name, attrs);
  }
}


export { BaseSVGItem, SVGItem };
