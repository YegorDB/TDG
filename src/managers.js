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
  SVGCircle, SVGEllipse, SVGItem, SVGPath, SVGPolygon, SVGPolyline, SVGText,
} from './items/svg/main.js';


/** Base inner items manager. */
class BaseItemsManager {

  /** Creation. */
  constructor() {
    this.data = {};
  }

  get values() {
    return Object.values(this.data);
  }

  /**
   * Add item.
   * @param {string} name - Item name.
   * @param {Object} item - Item instance.
   */
  add(name, item) {
    if (name in this.data) {
      throw Error(`Item with name "${name}" already exists.`);
    }
    this.data[name] = item;
  }

  /**
   * Remove item.
   * @param {string} name - Item name.
   */
  remove(name) {
    if (!(name in this.data)) {
      throw Error(`Item with name "${name}" does not exist.`);
    }
    this._removeAdditional(this.data[name]);
    delete this.data[name];
  }

  /**
   * Remove item additional logic.
   * @abstract
   * @private
   * @param {Object} item - Item.
   */
  _removeAdditional(item) {}
}


/** Canvas inner items manager. */
class CanvasItemsManager extends BaseItemsManager {

  /**
   * Creation.
   * @param {Object} layer - Canvas layer.
   */
  constructor(layer) {
    super();
    this._layer = layer;
  }

  /**
   * Add item.
   * @param {string} name - Item name.
   * @param {Object} item - Item instance.
   */
  add(name, item) {
    super.add(name, item);
    item.layer = this._layer;
    item.draw();
  }

  /**
   * Remove item.
   * @param {string} name - Item name.
   */
  remove(name) {
    super.remove(name);
    this._layer.refresh();
  }
}


/** SVG inner items manager. */
class SVGItemsManager extends BaseItemsManager {

  /**
   * Creation.
   * @param {Object} parent - SVG layer or SVG group.
   */
  constructor(parent) {
    super();
    this._parent = parent;
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
    this.add(name, item);
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
    this.add(name, circle);
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
    this.add(name, ellipse);
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
    this.add(name, path);
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
    this.add(name, polygon);
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
    this.add(name, polyline);
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
    this.add(name, text);
    return text;
  }

  /**
   * Add item.
   * @param {string} name - Item name.
   * @param {Object} item - Item instance.
   */
  add(name, item) {
    super.add(name, item);
    this._parent.element.appendChild(item.element);
  }

  /**
   * Remove item additional logic.
   * @param {Object} item - Item.
   */
  _removeAdditional(item) {
    item.element.remove();
    item.element = null;
  }
}


export { CanvasItemsManager, SVGItemsManager };
