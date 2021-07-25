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


/** Canvas layer with background image pattern. */
class CanvasLayerWithBGImage extends CanvasLayer {

  /**
   * Creation.
   * @param {string} imageSrc - Image source.
   * @param {Object} [options] - Options.
   * @param {string} [options.repetition='repeat'] - CanvasRenderingContext2D
   *     createPattern method repetition argument.
   * @param {finction} [options.drawFunct] - Draw function
   *     with one argument - CanvasRenderingContext2D,
   *     it will be fire on layer refresh.
   */
  constructor(imageSrc, options) {
    options = options || {};

    super(options);

    this._repetition = options.repetition || 'repeat';
    this._image = new Image();
    this._image.onload = () => {
      this.refresh();
    };
    this.imageSrc = imageSrc;
  }

  /**
   * Get image source.
   * @return {string} Image source.
   */
  get imageSrc() {
    return this._imageUrl;
  }

  /**
   * Set image source.
   * @param {string} value - Image source.
   */
  set imageSrc(value) {
    this._image.src = value;
  }

  /**
   * Draw layer items.
   * @private
   */
  _draw() {
    this._drawBGImage();
    super._draw();
  }

  /**
   * Draw background image.
   * @private
   */
  _drawBGImage() {
    this.ctx.save();
    this.ctx.fillStyle = this.ctx.createPattern(this._image, this._repetition);
    this.ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    this.ctx.restore();
  }
}


module.exports = {
  CanvasLayerWithBGImage: CanvasLayerWithBGImage,
};
