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
const { Dimensions } = require('../../base');


/** Canvas layer logic. */
class CanvasLayer extends BaseLayer {

  /**
   * Creation.
   * @param {Object} [options] - Options.
   * @param {finction} [options.drawFunct] - Draw function
   *     with one argument - CanvasRenderingContext2D,
   *     it will be fire on layer refresh.
   */
  constructor(options) {
    options = options || {};

    super();
    this.ctx = this.element.getContext('2d');
    this._drawFunct = options.drawFunct;
  }

  /**
   * Get layer dimentions.
   * @return {Dimensions} dimentions.
   */
  get dimensions() {
    return this._dimensions;
  }

  /**
   * Set layer dimentions.
   * @param {Dimensions} value.
   */
  set dimensions(value) {
    super.dimensions = value;
    this.element.width = value.width;
    this.element.height = value.height;
    this.refresh();
  }

  /**
   * Add item.
   * @param {string} name - Item name.
   * @param {Object} item - Item instance.
   */
  addItem(name, item) {
    super.addItem(name, item);
    item.layer = this;
    item.draw();
  }

  /**
   * Remove item.
   * @param {string} name - Item name.
   */
  removeItem(name) {
    super.removeItem(name);
    this.refresh();
  }

  /** Refresh layer items. */
  refresh() {
    this.clear();
    this._draw();
  }

  /** Clear layer element. */
  clear() {
    this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
  }

  /**
   * Draw layer items.
   * @private
   */
  _draw() {
    if (this._drawFunct) {
      this._drawFunct(this.ctx);
    }
    for (let item of Object.values(this.items)) {
      item.draw();
    }
  }

  /**
   * Create layer element.
   * @private
   * @return {canvas element} Layer element.
   */
  _createElement() {
    return document.createElement('canvas');
  }
}


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
  CanvasLayer: CanvasLayer,
  CanvasLayerWithBGColor: CanvasLayerWithBGColor,
  CanvasLayerWithBGImage: CanvasLayerWithBGImage,
};
