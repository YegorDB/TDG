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
import { PathCommands } from '../../path_commands/main.js';


class CanvasPath extends CanvasItem {

  /**
   * Creation.
   * @param {string} value - Path commands value.
   * @param {Object} [options] - Options.
   * @param {boolean} [options.stroke=true] - Whether stroke object or not.
   * @param {boolean} [options.fill] - Whether fill object or not.
   * @param {Object} [options.flatParams] - Canvas 2d context flat params.
   * @param {Object} [options.byMethodParams] - Canvas 2d context methods to set params (key is method name, value is array of args).
   */
  constructor(value, options) {
    super(options);
    this.value = value;
  }

  /**
   * Get value.
   * @return {string} Path commands value.
   */
  get value() {
    return this._value;
  }

  /**
   * Set value.
   * @param {string} value - Path commands value.
   */
  set value(value) {
    this.commands = new PathCommands(value);
    this._value = value;
    this._refresh();
  }

  /**
   * Get commands.
   * @return {PathCommands} Commands.
   */
  get commands() {
    return this._commands;
  }

  /**
   * Set commands.
   * @param {PathCommands} value - PathCommands instance.
   */
  set commands(value) {
    if (!(value instanceof PathCommands)) {
      throw Error('Commands value has to be an PathCommands instance.');
    }
    this._commands = value;
    this._value = value.value;
    this._refresh();
  }
}


export { CanvasPath };
