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


/** Canvas layer with background filler. */
class CanvasLayerWithBGFiller extends CanvasLayer {

  /**
   * Creation.
   * @param {*} bgFiller - Background filler
   *     (anything CanvasRenderingContext2D.fillStyle could be used with).
   * @param {Object} [options] - Options.
   * @param {finction} [options.drawFunct] - Draw function
   *     with one argument - CanvasRenderingContext2D,
   *     it will be fire on layer refresh.
   */
  constructor(bgFiller, options) {
    super(options);
    this.bgFiller = bgFiller;
  }

  /**
   * Get background filler.
   * @return {*} Background filler
   *     (anything CanvasRenderingContext2D.fillStyle could be used with).
   */
  get bgFiller() {
    return this._bgFiller;
  }

  /**
   * Set background filler.
   * @param {*} value - Background filler
   *     (anything CanvasRenderingContext2D.fillStyle could be used with).
   */
  set bgFiller(value) {
    this._bgFiller = value;
    if (this.dimensions) {
      this.refresh();
    }
  }

  /**
   * Draw layer items.
   * @private
   */
  _draw() {
    this._drawBGFiller();
    super._draw();
  }

  /**
   * Draw background filler.
   * @private
   */
  _drawBGFiller() {
    this.ctx.save();
    this.ctx.fillStyle = this.bgFiller;
    this.ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    this.ctx.restore();
  }
}


module.exports = {
  CanvasLayerWithBGFiller: CanvasLayerWithBGFiller,
};
