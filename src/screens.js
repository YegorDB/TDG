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


import { Dimensions } from './base.js';


/** Composition of layers. */
class Screen {

  /**
   * Creation.
   * @param {string} elementId - DOM element id.
   * @param {Object} [options] - Screen creation options.
   * @param {integer[]} [options.dimensions=[100, 100]] - Screen dimensions [width, height].
   */
  constructor(elementId, options) {
    this.element = document.getElementById(elementId);
    this.element.style.position = 'relative';

    options = options || {};

    let [width, height] = options.dimensions || [100, 100];
    this.dimensions = new Dimensions(width, height);

    this.layers = {};

    this._activeLayerName = null;
  }

  /**
   * Get screen dimentions.
   * @return {Dimensions} dimentions.
   */
  get dimensions() {
    return this._dimensions;
  }

  /**
   * Set screen dimentions.
   * @param {Dimensions} value.
   */
  set dimensions(value) {
    Dimensions.validateInstanceof(value);
    this._dimensions = value;
    this.element.style.width = `${value.width}px`;
    this.element.style.height = `${value.height}px`;
  }

  /**
   * Add a layer.
   * @param {string} name - Layer name.
   * @param {any layer class instance} layer - Layer instance.
   */
  addLayer(name, layer) {
    if (name in this.layers) {
      throw Error(`Layer with name "${name}" already exists.`);
    }
    layer.zIndex = Object.keys(this.layers).length;
    layer.dimensions = this.dimensions;
    this.layers[name] = layer;
    this.element.appendChild(layer.element);
    if (this._activeLayerName) {
      this.activateLayer(this._activeLayerName);
    }
  }

  /**
   * Move layer in front of other layers.
   * @param {string} name - Layer name.
   */
  activateLayer(name) {
    if (!(name in this.layers)) {
      throw Error(`Layer with name "${name}" does not exist.`);
    }
    this.deactivateLayer();
    this.layers[name].zIndex = Object.keys(this.layers).length;
    this._activeLayerName = name;
  }

  /** Move activated layer to its original position in relation to other layers. */
  deactivateLayer() {
    if (this._activeLayerName == null) return;
    this.layers[this._activeLayerName].resetZIndex();
    this._activeLayerName = null;
  }
}


export { Screen };
