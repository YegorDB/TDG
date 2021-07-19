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
const { CircleCommands } = require('../../path_commands/ellipses');
const { Point, PointsCommands } = require('../../path_commands/points');


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
   * @param {number[][]} points - Array of (x, y) pairs.
   * @param {Object} [options] - Options.
   * @param {boolean} [options.stroke=true] - Whether stroke object or not.
   * @param {boolean} [options.fill] - Whether fill object or not.
   * @param {Object} [options.flatParams] - Canvas 2d context flat params.
   * @param {Object} [options.byMethodParams] - Canvas 2d context methods to set params (key is method name, value is array of args).
   */
  constructor(points, options=null) {
    super(options);
    this.commands = new PointsCommands(points);
  }

  /**
   * Get commands.
   * @return {PointsCommands} Commands.
   */
  get commands() {
    return this._commands;
  }

  /**
   * Set commands.
   * @param {PointsCommands} value - PointsCommands instance.
   */
  set commands(value) {
    if (!(value instanceof PointsCommands)) {
      throw Error('Commands value has to be an PointsCommands instance.');
    }
    this._commands = value;
  }

  /**
   * Get path.
   * @returns {string} SVG string path.
   */
  get path() {
    return this.commands.value;
  }
}


class CanvasCircle extends CanvasItem {

  /**
   * Creation.
   * @param {Point|number[]} centre - Point instatce or (x, y) pair.
   * @param {number} radius - Radius.
   * @param {Object} [options] - Options.
   * @param {boolean} [options.stroke=true] - Whether stroke object or not.
   * @param {boolean} [options.fill] - Whether fill object or not.
   * @param {Object} [options.flatParams] - Canvas 2d context flat params.
   * @param {Object} [options.byMethodParams] - Canvas 2d context methods to set params (key is method name, value is array of args).
   */
  constructor(centre, radius, options=null) {
    super(options);
    this.commands = new CircleCommands(centre, radius);
  }

  /**
   * Get commands.
   * @return {CircleCommands} Commands.
   */
  get commands() {
    return this._commands;
  }

  /**
   * Set commands.
   * @param {CircleCommands} value - CircleCommands instance.
   */
  set commands(value) {
    if (!(value instanceof CircleCommands)) {
      throw Error('Commands value has to be an CircleCommands instance.');
    }
    this._commands = value;
  }

  /**
   * Get path.
   * @returns {string} SVG string path.
   */
  get path() {
    return this.commands.value;
  }
}


module.exports = {
  CanvasItem: CanvasItem,
  CanvasPolygon: CanvasPolygon,
  CanvasCircle: CanvasCircle,
};
