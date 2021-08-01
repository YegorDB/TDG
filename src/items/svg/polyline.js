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


const { SVGItem } = require('./base');
const { Point, PointsCommands } = require('../../path_commands/points');


/** SVG polyline. */
class SVGPolyline extends SVGItem {

  static COMMANDS_OPTIONS = {};

  /**
   * Creation.
   * @param {number[][]|Point[]} points - Array of (x, y) pairs or Point instances.
   * @param {Object} [attrs] - SVG element attributes.
   * @param {string} [attrs.fill="none"] - SVG element fill value.
   * @param {string} [attrs.stroke="#000000"] - SVG element stroke value.
   */
  constructor(points, attrs) {
    super('path', attrs);
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
    this.setAttr('d', this.commands.value);
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
    this._points = value.items;
    this.setAttr('d', this.commands.value);
  }
}


module.exports = {
  SVGPolyline: SVGPolyline,
};
