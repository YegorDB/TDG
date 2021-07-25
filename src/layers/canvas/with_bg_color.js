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


const { CanvasLayer } = require('./base');


/** Canvas layer with background color. */
class CanvasLayerWithBGColor extends CanvasLayer {

  /**
   * Creation.
   * @param {string} bgColor - Background color.
   * @param {Object} [options] - Options.
   * @param {finction} [options.drawFunct] - Draw function
   *     with one argument - CanvasRenderingContext2D,
   *     it will be fire on layer refresh.
   */
  constructor(bgColor, options) {
    super(options);
    this.bgColor = bgColor;
  }

  /**
   * Get background color.
   * @return {string} Background color.
   */
  get bgColor() {
    return this._bgColor;
  }

  /**
   * Set background color.
   * @param {string} value - Background color.
   */
  set bgColor(value) {
    this._bgColor = value;
    if (this.dimensions) {
      this.refresh();
    }
  }

  /**
   * Draw layer items.
   * @private
   */
  _draw() {
    this._drawBGColor();
    super._draw();
  }

  /**
   * Draw background color.
   * @private
   */
  _drawBGColor() {
    this.ctx.save();
    this.ctx.fillStyle = this._bgColor;
    this.ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    this.ctx.restore();
  }
}


module.exports = {
  CanvasLayerWithBGColor: CanvasLayerWithBGColor,
};
