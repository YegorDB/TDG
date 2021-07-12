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
const { PolygonPoints } = require('../../points');


class CanvasPolygon {

  /**
   * Creation.
   * @param {PolygonPoints|number[][]} points - PolygonPoints instatce or array of (x, y) pairs.
   * @param {Object} [options] - Options.
   * @param {boolean} [options.stroke=true] - Whether stroke object or not.
   * @param {boolean} [options.fill] - Whether fill object or not.
   * @param {Object} [options.params] - Canvas 2d context params.
   * @param {string} [options.params.strokeStyle='#000'] - Stroke style.
   * @param {string} [options.params.fillStyle='#000'] - Fill style.
   * @param {number} [options.params.globalAlpha=1.0] - Transparency.
   * @param {number} [options.params.lineWidth=1.0] - Line width.
   * @param {string} [options.params.lineCap='butt'] - Line cap.
   * @param {string} [options.params.lineJoin='miter'] - Line join.
   * @param {number} [options.params.miterLimit=10.0] - Miter limit.
   */
  constructor(points, options=null) {
    options = options || {};

    this.points = points;
    this._options = {
      stroke: options.stroke || true,
      fill: options.fill,
      params: {
        strokeStyle: '#000',
        fillStyle: '#000',
        globalAlpha: 1.0,
        lineWidth: 1.0,
        lineCap: 'butt',
        lineJoin: 'miter',
        miterLimit: 10.0,
        ...(options.params || {}),
      },
    };
  }

  /**
   * Get points.
   * @return {PolygonPoints} Points.
   */
  get points() {
    return this._points;
  }

  /**
   * Set points.
   * @param {PolygonPoints|number[][]} value - Points instatce or array of (x, y) pairs.
   */
  set points(value) {
    if (value instanceof PolygonPoints) {
      this._points = value;
    } else {
      this._points = new PolygonPoints(value);
    }
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
    let path = new Path2D(this.points.path);
    this._setParams();
    if (this._options.stroke) {
      this.layer.ctx.stroke(path);
    }
    if (this._options.fill) {
      this.layer.ctx.fill(path);
    }
  }

  /** Set canvas 2d context params. */
  _setParams() {
    for (let [key, value] of Object.entries(this._options.params)) {
      this.layer.ctx[key] = value;
    }
  }
}


module.exports = {
  CanvasPolygon: CanvasPolygon,
};
