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
const {
  EllipseRadiuses, EllipseCommands, Point,
} = require('../../path_commands/main');


/** SVG ellipse. */
class SVGEllipse extends SVGItem {

  /**
   * Creation.
   * @param {Point|number[]} centre - Point instatce or (x, y) pair.
   * @param {EllipseRadiuses|number[]} radiuses - EllipseRadiuses instatce or (r1, r2) pair.
   * @param {Object} [attrs] - SVG element attributes.
   * @param {string} [attrs.fill="none"] - SVG element fill value.
   * @param {string} [attrs.stroke="#000000"] - SVG element stroke value.
   */
  constructor(centre, radiuses, attrs) {
    super('path', attrs);
    this.commands = new EllipseCommands(centre, radiuses);
    this._centre = centre;
    this._radiuses = radiuses;
  }

  /**
   * Get centre.
   * @return {Point|number[]} Point instatce or (x, y) pair.
   */
  get centre() {
    return this._centre;
  }

  /**
   * Set centre.
   * @param {Point|number[]} value - Point instatce or (x, y) pair.
   */
  set centre(value) {
    this.commands.centre = value;
    this._centre = value;
    this.setAttr('d', this.commands.value);
  }

  /**
   * Get radiuses.
   * @return {number} EllipseRadiuses instatce or (r1, r2) pair.
   */
  get radiuses() {
    return this._radiuses;
  }

  /**
   * Set radiuses.
   * @param {number} value - EllipseRadiuses instatce or (r1, r2) pair.
   */
  set radiuses(value) {
    this.commands.radiuses = value;
    this._radiuses = value;
    this.setAttr('d', this.commands.value);
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
    this._centre = value.centre;
    this._radiuses = value.radiuses;
    this.setAttr('d', this.commands.value);
  }
}


module.exports = {
  SVGEllipse: SVGEllipse,
};
