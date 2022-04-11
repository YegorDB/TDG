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
import { Dimensions, UTILS } from '../../base.js';
import {
  SVGCircle, SVGEllipse, SVGItem, SVGPath, SVGPolygon, SVGPolyline, SVGText,
} from '../../items/svg/main.js';
import { SVGItemsManager } from '../../managers.js';


/** SVG layer. */
class SVGLayer extends BaseLayer {

  /** Creation. */
  constructor() {
    super();
    this.items = new SVGItemsManager(this);
  }

  /**
   * Create item.
   * @param {string} name - Item name.
   * @param {string} elementName - SVG element name.
   * @param {Object} [attrs] - SVG element attributes.
   * @param {string} [attrs.fill="none"] - SVG element fill value.
   * @param {string} [attrs.stroke="#000000"] - SVG element stroke value.
   */
  createItem(name, elementName, attrs) {
    let item = new SVGItem(elementName, attrs);
    this.items.add(name, item);
    return item;
  }

  /**
   * Create circle.
   * @param {string} name - Item name.
   * @param {Point|number[]} centre - Point instatce or (x, y) pair.
   * @param {number} radius - Radius.
   * @param {Object} [attrs] - SVG element attributes.
   * @param {string} [attrs.fill="none"] - SVG element fill value.
   * @param {string} [attrs.stroke="#000000"] - SVG element stroke value.
   */
  createCircle(name, centre, radius, attrs) {
    let circle = new SVGCircle(centre, radius, attrs);
    this.items.add(name, circle);
    return circle;
  }

  /**
   * Create ellipse.
   * @param {string} name - Item name.
   * @param {Point|number[]} centre - Point instatce or (x, y) pair.
   * @param {EllipseRadiuses|number[]} radiuses - EllipseRadiuses instatce or (r1, r2) pair.
   * @param {Object} [attrs] - SVG element attributes.
   * @param {string} [attrs.fill="none"] - SVG element fill value.
   * @param {string} [attrs.stroke="#000000"] - SVG element stroke value.
   */
  createEllipse(name, centre, radiuses, attrs) {
    let ellipse = new SVGEllipse(centre, radiuses, attrs);
    this.items.add(name, ellipse);
    return ellipse;
  }

  /**
   * Create path.
   * @param {string} name - Item name.
   * @param {string} value - Path commands value.
   * @param {Object} [attrs] - SVG element attributes.
   * @param {string} [attrs.fill="none"] - SVG element fill value.
   * @param {string} [attrs.stroke="#000000"] - SVG element stroke value.
   */
  createPath(name, value, attrs) {
    let path = new SVGPath(value, attrs);
    this.items.add(name, path);
    return path;
  }

  /**
   * Create polygon.
   * @param {string} name - Item name.
   * @param {number[][]|Point[]} points - Array of (x, y) pairs or Point instances.
   * @param {Object} [attrs] - SVG element attributes.
   * @param {string} [attrs.fill="none"] - SVG element fill value.
   * @param {string} [attrs.stroke="#000000"] - SVG element stroke value.
   */
  createPolygon(name, points, attrs) {
    let polygon = new SVGPolygon(points, attrs);
    this.items.add(name, polygon);
    return polygon;
  }

  /**
   * Create polyline.
   * @param {string} name - Item name.
   * @param {number[][]|Point[]} points - Array of (x, y) pairs or Point instances.
   * @param {Object} [attrs] - SVG element attributes.
   * @param {string} [attrs.fill="none"] - SVG element fill value.
   * @param {string} [attrs.stroke="#000000"] - SVG element stroke value.
   */
  createPolyline(name, points, attrs) {
    let polyline = new SVGPolyline(points, attrs);
    this.items.add(name, polyline);
    return polyline;
  }

  /**
   * Create text.
   * @param {string} name - Item name.
   * @param {string} value - Value.
   * @param {Point|number[]} centre - Point instatce or (x, y) pair.
   * @param {Object} [attrs] - SVG element attributes.
   * @param {string} [attrs.fill="none"] - SVG element fill value.
   * @param {string} [attrs.stroke="#000000"] - SVG element stroke value.
   */
  createText(name, value, centre, attrs) {
    let text = new SVGText(value, centre, attrs);
    this.items.add(name, text);
    return text;
  }

  /**
   * Create layer element.
   * @private
   * @return {SVG element} Layer element.
   */
  _createElement() {
    return UTILS.createSvgElement('svg');
  }
}


export { SVGLayer };
