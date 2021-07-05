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


/** Base layers logic. */
class BaseLayer {

  /** Create a layer. */
  constructor() {
    this.element = this.createElement();
    this._zIndex = null;
    this._initialZIndex = null;
    this._isShowed = true;
  }

  /**
   * Get whether layer is showed or not.
   * @return {boolean} Layer is showed state.
   */
  get isShowed() {
    return this._isShowed;
  }

  /**
   * Get layer z-index.
   * @return {integer or null} Layer z-index.
   */
  get zIndex() {
    return this._zIndex;
  }

  /**
   * Set layer z-index.
   * @param {integer} value - Z-index value.
   */
  set zIndex(value) {
    if (!Number.isInteger(value)) {
      throw Error('Z-index value has to be an integer.');
    }
    if (this._initialZIndex === null) {
      this._initialZIndex = value;
    }
    this.element.style.zIndex = value;
    this._zIndex = value;
  }

  /** Set layer z-index to initial value. */
  resetZIndex() {
    if (this._initialZIndex === null) return;
    this.zIndex = this._initialZIndex;
  }

  /**
   * Create layer element.
   * @return {DOM element} Layer element.
   */
  createElement() {
    let element = this._createElement();
    element.style.position = "absolute";
    element.style.top = "0px";
    element.style.left = "0px";
    return element;
  }

  /**
   * Create layer element.
   * @abstract
   * @private
   * @return {DOM element} Layer element.
   */
  _createElement() {}

  /**
   * Set layer dimentions.
   * @abstract
   * @param {integer} width.
   * @param {integer} height.
   */
  setDimensions(width, height) {}

  /** Show layer. */
  show() {
    this._isShowed = true;
    this.element.style.display = "block";
  }

  /** Hide layer. */
  hide() {
    this._isShowed = false;
    this.element.style.display = "none";
  }
}


module.exports = {
  BaseLayer: BaseLayer,
};
