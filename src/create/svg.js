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
  SVGAnimate, SVGSet, SVGAnimateMotion, SVGAnimateTransform,
  SVGCircle, SVGEllipse, SVGGroup, SVGItem,
  SVGPath, SVGPolygon, SVGPolyline, SVGText,
} from '../items/svg/main.js';


/** SVG creator. */
const SVGCreator = {

  /**
   * Create animate.
   * @param {Object} [attrs] - SVG element attributes.
   * @param {Object} [attrs.repeatCount="indefinite"] - SVG element attributes.
   * @param {Object} [eventHandlers] - SVG animation element event handlers.
   */
  animate(attrs, eventHandlers) {
    return new SVGAnimate(attrs, eventHandlers);
  },

  /**
   * Create set.
   * @param {Object} [attrs] - SVG element attributes.
   * @param {Object} [eventHandlers] - SVG animation element event handlers.
   */
  set(attrs, eventHandlers) {
    return new SVGSet(attrs, eventHandlers);
  },

  /**
   * Create animate motion.
   * @param {Object} [attrs] - SVG element attributes.
   * @param {Object} [eventHandlers] - SVG animation element event handlers.
   */
  animateMotion(attrs, eventHandlers) {
    return new SVGAnimateMotion(attrs, eventHandlers);
  },

  /**
   * Create animate transform.
   * @param {Object} [attrs] - SVG element attributes.
   * @param {Object} [eventHandlers] - SVG animation element event handlers.
   */
  animateTransform(attrs, eventHandlers) {
    return new SVGAnimateTransform(attrs, eventHandlers);
  },

  /**
   * Create item.
   * @param {string} elementName - SVG element name.
   * @param {Object} [attrs] - SVG element attributes.
   * @param {string} [attrs.fill="none"] - SVG element fill value.
   * @param {string} [attrs.stroke="#000000"] - SVG element stroke value.
   */
  item(elementName, attrs) {
    return new SVGItem(elementName, attrs);
  },

  /**
   * Create circle.
   * @param {Point|number[]} centre - Point instatce or (x, y) pair.
   * @param {number} radius - Radius.
   * @param {Object} [attrs] - SVG element attributes.
   * @param {string} [attrs.fill="none"] - SVG element fill value.
   * @param {string} [attrs.stroke="#000000"] - SVG element stroke value.
   */
  circle(centre, radius, attrs) {
    return new SVGCircle(centre, radius, attrs);
  },

  /**
   * Create ellipse.
   * @param {Point|number[]} centre - Point instatce or (x, y) pair.
   * @param {EllipseRadiuses|number[]} radiuses - EllipseRadiuses instatce or (r1, r2) pair.
   * @param {Object} [attrs] - SVG element attributes.
   * @param {string} [attrs.fill="none"] - SVG element fill value.
   * @param {string} [attrs.stroke="#000000"] - SVG element stroke value.
   */
  ellipse(centre, radiuses, attrs) {
    return new SVGEllipse(centre, radiuses, attrs);
  },

  /**
   * Create path.
   * @param {string} value - Path commands value.
   * @param {Object} [attrs] - SVG element attributes.
   * @param {string} [attrs.fill="none"] - SVG element fill value.
   * @param {string} [attrs.stroke="#000000"] - SVG element stroke value.
   */
  path(value, attrs) {
    return new SVGPath(value, attrs);
  },

  /**
   * Create polygon.
   * @param {number[][]|Point[]} points - Array of (x, y) pairs or Point instances.
   * @param {Object} [attrs] - SVG element attributes.
   * @param {string} [attrs.fill="none"] - SVG element fill value.
   * @param {string} [attrs.stroke="#000000"] - SVG element stroke value.
   */
  polygon(points, attrs) {
    return new SVGPolygon(points, attrs);
  },

  /**
   * Create polyline.
   * @param {number[][]|Point[]} points - Array of (x, y) pairs or Point instances.
   * @param {Object} [attrs] - SVG element attributes.
   * @param {string} [attrs.fill="none"] - SVG element fill value.
   * @param {string} [attrs.stroke="#000000"] - SVG element stroke value.
   */
  polyline(points, attrs) {
    return new SVGPolyline(points, attrs);
  },

  /**
   * Create text.
   * @param {string} value - Value.
   * @param {Point|number[]} centre - Point instatce or (x, y) pair.
   * @param {Object} [attrs] - SVG element attributes.
   * @param {string} [attrs.fill="none"] - SVG element fill value.
   * @param {string} [attrs.stroke="#000000"] - SVG element stroke value.
   */
  text(value, centre, attrs) {
    return new SVGText(value, centre, attrs);
  },

  /**
   * Create group.
   * @param {Object} [attrs] - SVG element attributes.
   * @param {string} [attrs.fill="none"] - SVG element fill value.
   * @param {string} [attrs.stroke="#000000"] - SVG element stroke value.
   */
  group(attrs) {
    return new SVGGroup(attrs);
  },
};


export { SVGCreator };
