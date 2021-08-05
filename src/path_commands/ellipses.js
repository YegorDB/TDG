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


const { PathCommands } = require('./base');
const { Point } = require('./points');


class EllipseRadiuses {

  /**
   * Validate value.
   * @param {number} value - Radius.
   */
  static validateValue(value) {
    if (Number.isInteger(value)) return;
    throw Error('Radius value has to be an integer.');
  };

  /**
   * Creation.
   * @param {number} r1 - First radius.
   * @param {number} r2 - Second radius.
   */
  constructor(r1, r2) {
    this.first = r1;
    this.second = r2;
  }

  /**
   * Primitive.
   * @return {string|null} Primitive value.
   */
  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return `${this.first} ${this.second}`;
    }
    return null;
  }

  /**
   * Get first radius.
   * @return {number} First radius.
   */
  get first() {
    return this._first;
  }

  /**
   * Set first radius.
   * @param {number} value - First radius.
   */
  set first(value) {
    EllipseRadiuses.validateValue(value);
    return this._first = value;
  }

  /**
   * Get second radius.
   * @return {number} Second radius.
   */
  get second() {
    return this._second;
  }

  /**
   * Set second radius.
   * @param {number} value - Second radius.
   */
  set second(value) {
    EllipseRadiuses.validateValue(value);
    return this._second = value;
  }
}


class EllipseCommands extends PathCommands {

  /**
   * Creation.
   * @param {Point|number[]} centre - Point instatce or (x, y) pair.
   * @param {EllipseRadiuses|number[]} radiuses - EllipseRadiuses instatce or (r1, r2) pair.
   */
  constructor(centre, radiuses) {
    super();
    this.centre = centre;
    this.radiuses = radiuses;
  }

  /**
   * Get centre.
   * @return {Point} Point.
   */
  get centre() {
    return this._centre;
  }

  /**
   * Set centre.
   * @param {Point|number[]} value - Point instatce or (x, y) pair.
   */
  set centre(value) {
    if (value instanceof Point) {
      this._centre = value;
    } else {
      this._centre = new Point(...value);
    }
    this._setValue();
  }

  /**
   * Get radiuses.
   * @return {EllipseRadiuses} Ellipse radiuses.
   */
  get radiuses() {
    return this._radiuses;
  }

  /**
   * Set radiuses.
   * @param {EllipseRadiuses|number[]} radiuses - EllipseRadiuses instatce or (r1, r2) pair.
   */
  set radiuses(value) {
    if (value instanceof EllipseRadiuses) {
      this._radiuses = value;
    } else {
      this._radiuses = new EllipseRadiuses(...value);
    }
    this._setValue();
  }

  /**
   * Set value.
   * @private
   */
  _setValue() {
    if (!this.centre || !this.radiuses) return;
    let point1 = new Point(this.centre.x - this.radiuses.first, this.centre.y);
    let point2 = new Point(this.centre.x + this.radiuses.first, this.centre.y);
    this.value = [
      `M ${point1}`,
      `A ${this.radiuses} 0 1 0 ${point2} ${this.radiuses} 0 0 0 ${point1}`,
      'Z',
    ].join(' ');
  }
}


class CircleCommands extends EllipseCommands {

  /**
   * Creation.
   * @param {Point|number[]} centre - Point instatce or (x, y) pair.
   * @param {number} radius - Radius.
   */
  constructor(centre, radius) {
    super(centre, [radius, radius]);
    this._radius = radius;
  }

  /**
   * Get radius.
   * @return {number} Radius.
   */
  get radius() {
    return this._radius;
  }

  /**
   * Set radius.
   * @param {number} value - Radius.
   */
  set radius(value) {
    this.radiuses = [value, value];
    this._radius = value;
  }
}


module.exports = {
  EllipseRadiuses: EllipseRadiuses,
  EllipseCommands: EllipseCommands,
  CircleCommands: CircleCommands,
};
