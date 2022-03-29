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


import { CanvasItem } from './base.js';
import { CircleCommands, Point } from '../../path_commands/main.js';


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
  constructor(centre, radius, options) {
    super(options);
    this.commands = new CircleCommands(centre, radius);
    this._centre = centre;
    this._radius = radius;
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
    this._refresh();
  }

  /**
   * Get radius.
   * @return {number} Radius.
   */
  get radius() {
    return this._radius;
  }

  /**
   * Set radius.
   * @param {number} value - Radius.
   */
  set radius(value) {
    this.commands.radius = value;
    this._radius = value;
    this._refresh();
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
    this._centre = value.centre;
    this._radius = value.radius;
    this._refresh();
  }
}


export { CanvasCircle };
