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


const { CanvasLayer } = require('../../layers/canvas');
const { Points } = require('../../points');


class CanvasPolygon {

  /**
   * Creation.
   * @param {CanvasLayer} layer - Layer to draw polygon.
   * @param {number[][]} points - Array of (x, y) pairs.
   */
  constructor(layer, points) {
    this._layer = layer;
    this.points = new Points(points);
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
   * @param {Points} value - Points.
   */
  set points(value) {
    this._points = value;
  }
}


module.exports = {
  CanvasPolygon: CanvasPolygon,
};
