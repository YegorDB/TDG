/*
Copyright 2020-2021 Yegor Bitensky
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


const { BaseLayer } = require('../base');


/** Canvas layer logic. */
class CanvasLayer extends BaseLayer {

  /** Create canvas layer. */
  constructor() {
    super();
    this.ctx = this.element.getContext('2d');
  }

  /**
   * Create layer element.
   * @return {canvas element} Layer element.
   */
  _createElement() {
    return document.createElement('canvas');
  }

  /**
   * Set layer dimentions.
   * @param {integer} width.
   * @param {integer} height.
   */
  setDimensions(width, height) {
    this.element.width = width;
    this.element.height = height;
  }
}


module.exports = {
  CanvasLayer: CanvasLayer,
};
