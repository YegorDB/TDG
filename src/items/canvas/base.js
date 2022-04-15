/*
Copyright 2021-2022 Yegor Bitensky
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


import { PathCommands } from '../../path_commands/main.js';


class CanvasItem {

  /**
   * Creation.
   * @param {Object} [options] - Options.
   * @param {boolean} [options.stroke=true] - Whether stroke object or not.
   * @param {boolean} [options.fill] - Whether fill object or not.
   * @param {Object} [options.flatParams] - Canvas 2d context flat params.
   * @param {Object} [options.byMethodParams] - Canvas 2d context methods to set params (key is method name, value is array of args).
   */
  constructor(options) {
    options = {
      stroke: true,
      ...(options || {}),
    };

    this.stroke = options.stroke;
    this.fill = options.fill;
    this.flatParams = options.flatParams;
    this.byMethodParams = options.byMethodParams;
  }

  /**
   * Get stroke.
   * @return {boolean} Whether stroke object or not.
   */
  get stroke() {
    return this._stroke;
  }

  /**
   * Set stroke.
   * @param {boolean} value - Whether stroke object or not.
   */
  set stroke(value) {
    this._stroke = !!value;
    this._refresh();
  }

  /**
   * Get fill.
   * @return {boolean} Whether fill object or not.
   */
  get fill() {
    return this._fill;
  }

  /**
   * Set fill.
   * @param {boolean} value - Whether fill object or not.
   */
  set fill(value) {
    this._fill = !!value;
    this._refresh();
  }

  /**
   * Get flat params.
   * @return {Object} Canvas 2d context flat params.
   */
  get flatParams() {
    return this._flatParams;
  }

  /**
   * Set flat params.
   * @param {Object} value - Canvas 2d context flat params.
   */
  set flatParams(value) {
    this._flatParams = {...value};
    this._refresh();
  }

  /**
   * Get by method params.
   * @return {Object} Canvas 2d context methods to set params (key is method name, value is array of args).
   */
  get byMethodParams() {
    return this._byMethodParams;
  }

  /**
   * Set by method params.
   * @param {Object} value - Canvas 2d context methods to set params (key is method name, value is array of args).
   */
  set byMethodParams(value) {
    this._byMethodParams = {...value};
    this._refresh();
  }

  /**
   * Get layer.
   * @return {CanvasLayer} Layer.
   */
  get layer() {
    return this._layer;
  }

  /**
   * Set layer.
   * @param {CanvasLayer} value - Layer.
   */
  set layer(value) {
    this._layer = value;
  }

  /** Draw object. */
  draw() {
    if (!this.layer) {
      throw Error('Object has no layer to draw to.');
    }
    this.layer.ctx.save();
    this._setFlatParams();
    this._setByMethodParams();
    if (this.stroke) {
      this._drawStroke();
    }
    if (this.fill) {
      this._drawFill();
    }
    this.layer.ctx.restore();
  }

  /** Draw object stroke. */
  _drawStroke() {
    throw Error('_drawStroke() method need to be overriden');
  }

  /** Draw object fill. */
  _drawFill() {
    throw Error('_drawFill() method need to be overriden');
  }

  /**
   * Set flat param.
   * @param {string} name - Name of canvas 2d context flat param.
   * @param {*} value - Value of canvas 2d context flat param.
   */
  setFlatParam(name, value) {
    if (typeof name != 'string') {
      throw Error('Name has to be a string.');
    }
    this._flatParams = {
      ...(this._flatParams || {}),
      [name]: value,
    };
    this._refresh();
  }

  /**
   * Set by method param.
   * @param {string} name - Name of canvas 2d context method to set params.
   * @param {*[]} args - Array of arguments of canvas 2d context method to set params.
   */
  setByMethodParam(name, args) {
    if (typeof name != 'string') {
      throw Error('Name has to be a string.');
    }
    if (!Array.isArray(args)) {
      throw Error('Arguments have to be an array.');
    }
    this._byMethodParams = {
      ...(this._byMethodParams || {}),
      [name]: args,
    };
    this._refresh();
  }

  /**
   * Set canvas 2d context flat params.
   * @private
   */
  _setFlatParams() {
    if (!this.flatParams) return;
    for (let [key, value] of Object.entries(this.flatParams)) {
      this.layer.ctx[key] = value;
    }
  }

  /**
   * Set canvas 2d context by method params.
   * @private
   */
  _setByMethodParams() {
    if (!this.byMethodParams) return;
    for (let [method, args] of Object.entries(this.byMethodParams)) {
      this.layer.ctx[method](...args);
    }
  }

  /**
   * Refresh.
   * @private
   */
  _refresh() {
    if (!this.layer) return;
    this.layer.refresh();
  }

  /** Remove item. */
  remove() {}
}


class CanvasPathItem extends CanvasItem {

  /**
   * Get commands.
   * @return {PathCommands} Commands.
   */
  get commands() {
    return new PathCommands(null);
  }

  /**
   * Get path.
   * @returns {string} SVG string path.
   */
  get path() {
    return this.commands.value;
  }

  /** Draw object stroke. */
  _drawStroke() {
    let path = new Path2D(this.path);
    this.layer.ctx.stroke(path);
  }

  /** Draw object fill. */
  _drawFill() {
    let path = new Path2D(this.path);
    this.layer.ctx.fill(path);
  }

  /**
   * Refresh.
   * @private
   */
  _refresh() {
    if (!this._commands) return;
    super._refresh();
  }
}


export { CanvasItem, CanvasPathItem };
