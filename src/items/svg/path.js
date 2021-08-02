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
const { PathCommands } = require('../../path_commands/main');


/** SVG path. */
class SVGPath extends SVGItem {

  /**
   * Creation.
   * @param {string} value - Path commands value.
   * @param {Object} [attrs] - SVG element attributes.
   * @param {string} [attrs.fill="none"] - SVG element fill value.
   * @param {string} [attrs.stroke="#000000"] - SVG element stroke value.
   */
  constructor(value, attrs) {
    super('path', attrs);
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
    this.setAttr('d', this.commands.value);
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
    this.setAttr('d', this.commands.value);
  }
}


module.exports = {
  SVGPath: SVGPath,
};
