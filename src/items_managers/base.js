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


/** Base inner items manager. */
class BaseItemsManager {

  /**
   * Creation.
   * @param {Object} parent - Parent.
   */
  constructor(parent) {
    this.data = {};
    this._parent = parent;
  }

  get values() {
    return Object.values(this.data);
  }

  /**
   * Add item.
   * @param {string} name - Item name.
   * @param {Object} item - Item instance.
   */
  add(name, item) {
    if (name in this.data) {
      throw Error(`Item with name "${name}" already exists.`);
    }
    this.data[name] = item;
  }

  /**
   * Remove item.
   * @param {string} name - Item name.
   */
  remove(name) {
    if (!(name in this.data)) {
      throw Error(`Item with name "${name}" does not exist.`);
    }
    this._removeAdditional(this.data[name]);
    delete this.data[name];
  }

  /**
   * Remove item additional logic.
   * @abstract
   * @private
   * @param {Object} item - Item.
   */
  _removeAdditional(item) {}
}


export { BaseItemsManager };
