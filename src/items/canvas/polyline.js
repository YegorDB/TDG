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


const { CanvasItem } = require('./base');
const { Point, PointsCommands } = require('../../path_commands/points');


class CanvasPolyline extends CanvasItem {

  static COMMANDS_OPTIONS = {};

  /**
   * Creation.
   * @param {number[][]|Point[]} points - Array of (x, y) pairs or Point instances.
   * @param {Object} [options] - Options.
   * @param {boolean} [options.stroke=true] - Whether stroke object or not.
   * @param {boolean} [options.fill] - Whether fill object or not.
   * @param {Object} [options.flatParams] - Canvas 2d context flat params.
   * @param {Object} [options.byMethodParams] - Canvas 2d context methods to set params (key is method name, value is array of args).
   */
  constructor(points, options) {
    super(options);
    this.points = points;
  }

  /**
   * Get points.
   * @return {number[][]|Point[]} Points.
   */
  get points() {
    return this._points;
  }

  /**
   * Set points.
   * @param {number[][]|Point[]} value - Array of (x, y) pairs or Point instances.
   */
  set points(value) {
    this.commands = new PointsCommands(value, this.constructor.COMMANDS_OPTIONS);
    this._points = value;
    this._refresh();
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
}


module.exports = {
  CanvasPolyline: CanvasPolyline,
};
