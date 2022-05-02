/*
Copyright 2022 Yegor Bitensky
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


import {
  CanvasCircle, CanvasEllipse, CanvasPath,
  CanvasPolygon, CanvasPolyline, CanvasText,
} from '../items/canvas/main.js';
import {
  CanvasLayer,
  CanvasLayerWithBGFiller, CanvasLayerWithBGImage,
} from '../layers/canvas/main.js';


/** Canvas creator. */
const CanvasCreator = {

  /**
   * Create layer.
   * @param {Object} [options] - Options.
   * @param {finction} [options.drawFunct] - Draw function
   *     with one argument - CanvasRenderingContext2D,
   *     it will be fire on layer refresh.
   */
  layer(options) {
    return new CanvasLayer(options);
  },

  /**
   * Create layer with background filler.
   * @param {*} bgFiller - Background filler
   *     (anything CanvasRenderingContext2D.fillStyle could be used with).
   * @param {Object} [options] - Options.
   * @param {finction} [options.drawFunct] - Draw function
   *     with one argument - CanvasRenderingContext2D,
   *     it will be fire on layer refresh.
   */
  layerWithBGFiller(bgFiller, options) {
    return new CanvasLayerWithBGFiller(bgFiller, options);
  },

  /**
   * Create layer with background image pattern.
   * @param {string} imageSrc - Image source.
   * @param {Object} [options] - Options.
   * @param {string} [options.repetition='repeat'] - CanvasRenderingContext2D
   *     createPattern method repetition argument.
   * @param {finction} [options.drawFunct] - Draw function
   *     with one argument - CanvasRenderingContext2D,
   *     it will be fire on layer refresh.
   */
  layerWithBGImage(imageSrc, options) {
    return new CanvasLayerWithBGImage(imageSrc, options);
  },

  /**
   * Create circle.
   * @param {Point|number[]} centre - Point instatce or (x, y) pair.
   * @param {number} radius - Radius.
   * @param {Object} [options] - Options.
   * @param {boolean} [options.stroke=true] - Whether stroke object or not.
   * @param {boolean} [options.fill] - Whether fill object or not.
   * @param {Object} [options.flatParams] - Canvas 2d context flat params.
   * @param {Object} [options.byMethodParams] - Canvas 2d context methods to set params (key is method name, value is array of args).
   */
  circle(centre, radius, options) {
    return new CanvasCircle(centre, radius, options);
  },

  /**
   * Create ellipse.
   * @param {Point|number[]} centre - Point instatce or (x, y) pair.
   * @param {EllipseRadiuses|number[]} radiuses - EllipseRadiuses instatce or (r1, r2) pair.
   * @param {Object} [options] - Options.
   * @param {boolean} [options.stroke=true] - Whether stroke object or not.
   * @param {boolean} [options.fill] - Whether fill object or not.
   * @param {Object} [options.flatParams] - Canvas 2d context flat params.
   * @param {Object} [options.byMethodParams] - Canvas 2d context methods to set params (key is method name, value is array of args).
   */
  ellipse(centre, radiuses, options) {
    return new CanvasEllipse(centre, radiuses, options);
  },

  /**
   * Create path.
   * @param {string} value - Path commands value.
   * @param {Object} [options] - Options.
   * @param {boolean} [options.stroke=true] - Whether stroke object or not.
   * @param {boolean} [options.fill] - Whether fill object or not.
   * @param {Object} [options.flatParams] - Canvas 2d context flat params.
   * @param {Object} [options.byMethodParams] - Canvas 2d context methods to set params (key is method name, value is array of args).
   */
  path(value, options) {
    return new CanvasPath(value, options);
  },

  /**
   * Create polygon.
   * @param {number[][]|Point[]} points - Array of (x, y) pairs or Point instances.
   * @param {Object} [options] - Options.
   * @param {boolean} [options.stroke=true] - Whether stroke object or not.
   * @param {boolean} [options.fill] - Whether fill object or not.
   * @param {Object} [options.flatParams] - Canvas 2d context flat params.
   * @param {Object} [options.byMethodParams] - Canvas 2d context methods to set params (key is method name, value is array of args).
   */
  polygon(points, options) {
    return new CanvasPolygon(points, options);
  },

  /**
   * Create polyline.
   * @param {number[][]|Point[]} points - Array of (x, y) pairs or Point instances.
   * @param {Object} [options] - Options.
   * @param {boolean} [options.stroke=true] - Whether stroke object or not.
   * @param {boolean} [options.fill] - Whether fill object or not.
   * @param {Object} [options.flatParams] - Canvas 2d context flat params.
   * @param {Object} [options.byMethodParams] - Canvas 2d context methods to set params (key is method name, value is array of args).
   */
  polyline(points, options) {
    return new CanvasPolyline(points, options);
  },

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
  text(value, centre, options) {
    return new CanvasText(value, centre, options);
  }
};


export { CanvasCreator };
