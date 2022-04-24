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


import { BaseSVGItem } from './base.js';


/** SVG animation. */
class SVGAnimation extends BaseSVGItem {

  /**
   * Creation.
   * @param {string} name - SVG element name.
   * @param {Object} [attrs] - SVG element attributes.
   * @param {Object} [eventHandlers] - SVG animation element event handlers.
   */
  constructor(name, attrs, eventHandlers) {
    super(name, attrs);

    eventHandlers = eventHandlers || {};
    for (let [event, handler] of Object.entries(eventHandlers)) {
      this.element.addEventListener(event, handler);
    }
  }
}


/** SVG animate. */
class SVGAnimate extends SVGAnimation {

  /**
   * Creation.
   * @param {Object} [attrs] - SVG element attributes.
   * @param {Object} [attrs.repeatCount="indefinite"] - SVG element attributes.
   * @param {Object} [eventHandlers] - SVG animation element event handlers.
   */
  constructor(attrs, eventHandlers) {
    attrs = attrs || {};
    if (!attrs.end && !attrs.max && !attrs.repeatDur && !attrs.repeatCount) {
      attrs.repeatCount = 'indefinite';
    }

    super('animate', attrs);
  }
}


/** SVG set. */
class SVGSet extends SVGAnimation {

  /**
   * Creation.
   * @param {Object} [attrs] - SVG element attributes.
   * @param {Object} [eventHandlers] - SVG animation element event handlers.
   */
  constructor(attrs, eventHandlers) {
    super('set', attrs);
  }
}


/** SVG animate transform. */
class SVGAnimateTransform extends SVGAnimation {

  /**
   * Creation.
   * @param {Object} [attrs] - SVG element attributes.
   * @param {Object} [eventHandlers] - SVG animation element event handlers.
   */
  constructor(attrs, eventHandlers) {
    super('animateTransform', attrs);
  }
}


export {
  SVGAnimate,
  SVGSet,
  SVGAnimateTransform,
};
