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


import { BaseItemsManager } from './base.js';
import {
  SVGAnimate, SVGSet, SVGAnimateMotion, SVGAnimateTransform,
  SVGCircle, SVGEllipse, SVGGroup, SVGItem,
  SVGPath, SVGPolygon, SVGPolyline, SVGText,
} from '../items/svg/main.js';


/** Base SVG inner items manager. */
class BaseSVGItemsManager extends BaseItemsManager {

  /**
   * Add item.
   * @param {string} name - Item name.
   * @param {Object} item - Item instance.
   */
  add(name, item) {
    super.add(name, item);
    this._parent.element.appendChild(item.element);
  }
}


/** SVG inner animation items manager. */
class SVGAnimationManager extends BaseSVGItemsManager {

  /**
   * Create animate.
   * @param {string} name - Item name.
   * @param {Object} [attrs] - SVG element attributes.
   * @param {Object} [attrs.repeatCount="indefinite"] - SVG element attributes.
   * @param {Object} [eventHandlers] - SVG animation element event handlers.
   */
  createAnimate(name, attrs, eventHandlers) {
    let animate = new SVGAnimate(attrs, eventHandlers);
    this.add(name, animate);
    return animate;
  }

  /**
   * Create set.
   * @param {string} name - Item name.
   * @param {Object} [attrs] - SVG element attributes.
   * @param {Object} [eventHandlers] - SVG animation element event handlers.
   */
  createSet(name, attrs, eventHandlers) {
    let set = new SVGSet(attrs, eventHandlers);
    this.add(name, set);
    return set;
  }

  /**
   * Create animate motion.
   * @param {string} name - Item name.
   * @param {Object} [attrs] - SVG element attributes.
   * @param {Object} [eventHandlers] - SVG animation element event handlers.
   */
  createAnimateMotion(name, attrs, eventHandlers) {
    let animateMotion = new SVGAnimateMotion(attrs, eventHandlers);
    this.add(name, animateMotion);
    return animateMotion;
  }

  /**
   * Create animate transform.
   * @param {string} name - Item name.
   * @param {Object} [attrs] - SVG element attributes.
   * @param {Object} [eventHandlers] - SVG animation element event handlers.
   */
  createAnimateTransform(name, attrs, eventHandlers) {
    let animateTransform = new SVGAnimateTransform(attrs, eventHandlers);
    this.add(name, animateTransform);
    return animateTransform;
  }
}


/** SVG inner items manager. */
class SVGItemsManager extends BaseSVGItemsManager {

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
   * Create group.
   * @param {string} name - Item name.
   * @param {Object} [attrs] - SVG element attributes.
   * @param {string} [attrs.fill="none"] - SVG element fill value.
   * @param {string} [attrs.stroke="#000000"] - SVG element stroke value.
   */
  createGroup(name, attrs) {
    let group = new SVGGroup(SVGItemsManager, attrs);
    this.add(name, group);
    return group;
  }
}


export { SVGAnimationManager, SVGItemsManager };
