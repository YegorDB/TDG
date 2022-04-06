/*
Copyright 2020-2022 Yegor Bitensky
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


import { BaseLayer } from '../base.js';
import { Dimensions } from '../../base.js';
import {
  CanvasCircle, CanvasEllipse,
  CanvasPath,
  CanvasPolygon, CanvasPolyline,
  CanvasText,
} from '../../items/canvas/main.js';


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
   * Create circle.
   * @param {string} name - Item name.
   * @param {Point|number[]} centre - Point instatce or (x, y) pair.
   * @param {number} radius - Radius.
   * @param {Object} [options] - Options.
   * @param {boolean} [options.stroke=true] - Whether stroke object or not.
   * @param {boolean} [options.fill] - Whether fill object or not.
   * @param {Object} [options.flatParams] - Canvas 2d context flat params.
   * @param {Object} [options.byMethodParams] - Canvas 2d context methods to set params (key is method name, value is array of args).
   */
  createCircle(name, centre, radius, options) {
    let circle = new CanvasCircle(centre, radius, options);
    this.addItem(name, circle);
    return circle;
  }

  /**
   * Create ellipse.
   * @param {string} name - Item name.
   * @param {Point|number[]} centre - Point instatce or (x, y) pair.
   * @param {EllipseRadiuses|number[]} radiuses - EllipseRadiuses instatce or (r1, r2) pair.
   * @param {Object} [options] - Options.
   * @param {boolean} [options.stroke=true] - Whether stroke object or not.
   * @param {boolean} [options.fill] - Whether fill object or not.
   * @param {Object} [options.flatParams] - Canvas 2d context flat params.
   * @param {Object} [options.byMethodParams] - Canvas 2d context methods to set params (key is method name, value is array of args).
   */
  createEllipse(name, centre, radiuses, options) {
    let ellipse = new CanvasEllipse(centre, radiuses, options);
    this.addItem(name, ellipse);
    return ellipse;
  }

  /**
   * Create path.
   * @param {string} name - Item name.
   * @param {string} value - Path commands value.
   * @param {Object} [options] - Options.
   * @param {boolean} [options.stroke=true] - Whether stroke object or not.
   * @param {boolean} [options.fill] - Whether fill object or not.
   * @param {Object} [options.flatParams] - Canvas 2d context flat params.
   * @param {Object} [options.byMethodParams] - Canvas 2d context methods to set params (key is method name, value is array of args).
   */
  createPath(name, value, options) {
    let path = new CanvasPath(value, options);
    this.addItem(name, path);
    return path;
  }

  /**
   * Create polygon.
   * @param {string} name - Item name.
   * @param {number[][]|Point[]} points - Array of (x, y) pairs or Point instances.
   * @param {Object} [options] - Options.
   * @param {boolean} [options.stroke=true] - Whether stroke object or not.
   * @param {boolean} [options.fill] - Whether fill object or not.
   * @param {Object} [options.flatParams] - Canvas 2d context flat params.
   * @param {Object} [options.byMethodParams] - Canvas 2d context methods to set params (key is method name, value is array of args).
   */
  createPolygon(name, points, options) {
    let polygon = new CanvasPolygon(points, options);
    this.addItem(name, polygon);
    return polygon;
  }

  /**
   * Create polyline.
   * @param {string} name - Item name.
   * @param {number[][]|Point[]} points - Array of (x, y) pairs or Point instances.
   * @param {Object} [options] - Options.
   * @param {boolean} [options.stroke=true] - Whether stroke object or not.
   * @param {boolean} [options.fill] - Whether fill object or not.
   * @param {Object} [options.flatParams] - Canvas 2d context flat params.
   * @param {Object} [options.byMethodParams] - Canvas 2d context methods to set params (key is method name, value is array of args).
   */
  createPolyline(name, points, options) {
    let polyline = new CanvasPolyline(points, options);
    this.addItem(name, polyline);
    return polyline;
  }

  /**
   * Create text.
   * @param {string} value - Text.
   * @param {Point|number[]} centre - Point instatce or (x, y) pair.
   * @param {Object} [options] - Options.
   * @param {boolean} [options.stroke=true] - Whether stroke object or not.
   * @param {boolean} [options.fill] - Whether fill object or not.
   * @param {Object} [options.flatParams] - Canvas 2d context flat params.
   * @param {Object} [options.byMethodParams] - Canvas 2d context methods to set params (key is method name, value is array of args).
   */
  createText(name, value, centre) {
    let text = new CanvasText(value, centre);
    this.addItem(name, text);
    return text;
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


export { CanvasLayer };
