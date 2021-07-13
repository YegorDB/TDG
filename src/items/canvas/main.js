/*
Copyright 2021 Yegor Bitensky
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


const { CanvasLayer } = require('../../layers/canvas/main');
const { Points } = require('../../points');


class CanvasItem {

  /**
   * Creation.
   * @param {Object} [options] - Options.
   * @param {boolean} [options.stroke=true] - Whether stroke object or not.
   * @param {boolean} [options.fill] - Whether fill object or not.
   * @param {Object} [options.flatParams] - Canvas 2d context flat params.
   * @param {Object} [options.byMethodParams] - Canvas 2d context methods to set params (key is method name, value is array of args).
   */
  constructor(options=null) {
    this._options = {
      stroke: true,
      ...(options || {}),
    };
  }

  /**
   * Get path.
   * @returns {string} SVG string path.
   */
  get path() {
    return '';
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
    if (!(value instanceof CanvasLayer)) {
      throw Error('Layer has to be instance of CanvasLayer.');
    }
    this._layer = value;
  }

  /** Draw object. */
  draw() {
    if (!this.layer) {
      throw Error('Object has no layer to draw to.');
    }
    let path = new Path2D(this.path);
    this.layer.ctx.save();
    this._setFlatParams();
    this._setByMethodParams();
    if (this._options.stroke) {
      this.layer.ctx.stroke(path);
    }
    if (this._options.fill) {
      this.layer.ctx.fill(path);
    }
    this.layer.ctx.restore();
  }

  /** Set canvas 2d context flat params. */
  _setFlatParams() {
    if (!this._options.flatParams) return;
    for (let [key, value] of Object.entries(this._options.flatParams)) {
      this.layer.ctx[key] = value;
    }
  }

  /** Set canvas 2d context by method params. */
  _setByMethodParams() {
    if (!this._options.byMethodParams) return;
    for (let [method, args] of Object.entries(this._options.byMethodParams)) {
      this.layer.ctx[method](...args);
    }
  }
}


class CanvasPolygon extends CanvasItem {

  /**
   * Creation.
   * @param {Points|number[][]} points - Points instatce or array of (x, y) pairs.
   * @param {Object} [options] - Options.
   * @param {boolean} [options.stroke=true] - Whether stroke object or not.
   * @param {boolean} [options.fill] - Whether fill object or not.
   * @param {Object} [options.flatParams] - Canvas 2d context flat params.
   * @param {Object} [options.byMethodParams] - Canvas 2d context methods to set params (key is method name, value is array of args).
   */
  constructor(points, options=null) {
    super(options);
    this.points = points;
  }

  /**
   * Get points.
   * @return {Points} Points.
   */
  get points() {
    return this._points;
  }

  /**
   * Set points.
   * @param {Points|number[][]} value - Points instatce or array of (x, y) pairs.
   */
  set points(value) {
    if (value instanceof Points) {
      this._points = value;
    } else {
      this._points = new Points(value);
    }
  }

  /**
   * Get path.
   * @returns {string} SVG string path.
   */
  get path() {
    return this.points.path;
  }
}


module.exports = {
  CanvasItem: CanvasItem,
  CanvasPolygon: CanvasPolygon,
};
