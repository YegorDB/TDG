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
const { EllipseRadiuses, EllipseCommands } = require('../../path_commands/ellipses');
const { Point } = require('../../path_commands/points');


class CanvasEllipse extends CanvasItem {

  /**
   * Creation.
   * @param {Point|number[]} centre - Point instatce or (x, y) pair.
   * @param {EllipseRadiuses|number[]} radiuses - EllipseRadiuses instatce or (r1, r2) pair.
   * @param {Object} [options] - Options.
   * @param {boolean} [options.stroke=true] - Whether stroke object or not.
   * @param {boolean} [options.fill] - Whether fill object or not.
   * @param {Object} [options.flatParams] - Canvas 2d context flat params.
   * @param {Object} [options.byMethodParams] - Canvas 2d context methods to set params (key is method name, value is array of args).
   */
  constructor(centre, radiuses, options=null) {
    super(options);
    this.commands = new EllipseCommands(centre, radiuses);
  }

  /**
   * Get commands.
   * @return {EllipseCommands} Commands.
   */
  get commands() {
    return this._commands;
  }

  /**
   * Set commands.
   * @param {EllipseCommands} value - EllipseCommands instance.
   */
  set commands(value) {
    if (!(value instanceof EllipseCommands)) {
      throw Error('Commands value has to be an EllipseCommands instance.');
    }
    this._commands = value;
  }
}


module.exports = {
  CanvasEllipse: CanvasEllipse,
};
