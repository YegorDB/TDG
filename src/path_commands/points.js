/*
Copyright 2021-2022 Yegor Bitensky
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


import { PathCommands } from './base.js';


/** Point logic. */
class Point {

  /**
   * Validate coordinate.
   * @param {number} value - Coordinate.
   */
  static validateCoordinate(value) {
    if (Number.isInteger(value)) return;
    throw Error('Point coordinate has to be an integer.');
  };

  /**
   * Get point instance.
   * @param {Point|number[]} value - Point instatce or (x, y) pair.
   */
  static getInstance(value) {
    if (value instanceof Point) {
      return value;
    }
    return new Point(...value);
  }

  /**
   * Creation.
   * @param {number} x - X coordinate.
   * @param {number} y - Y coordinate.
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * Primitive.
   * @return {string|null} Primitive value.
   */
  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return `${this.x} ${this.y}`;
    }
    return null;
  }

  /**
   * Get x value.
   * @return {number} X coordinate.
   */
  get x() {
    return this._x;
  }

  /**
   * Set x value.
   * @param {number} value - X coordinate.
   */
  set x(value) {
    Point.validateCoordinate(value);
    this._x = value;
  }

  /**
   * Get y value.
   * @return {number} Y coordinate.
   */
  get y() {
    return this._y;
  }

  /**
   * Set y value.
   * @param {number} value - Y coordinate.
   */
  set y(value) {
    Point.validateCoordinate(value);
    this._y = value;
  }
}


/** Points comands logic. */
class PointsCommands extends PathCommands {

  /**
   * Validate items.
   * @param {number[][]} items - Array of (x, y) pairs.
   */
  static validateItems(items) {
    if (!Array.isArray(items)) {
      throw Error('Points items has to be an Array instance.');
    }
    for (let item of items) {
      if (!Array.isArray(item) || item.length != 2) {
        throw Error('Point coordinates has to be array of two integers.');
      }
      for (let coord of item) {
        Point.validateCoordinate(coord);
      }
    }
  };

  /**
   * Creation.
   * @param {number[][]} items - Array of (x, y) pairs.
   * @param {Object} [options] - Options.
   * @param {boolean} [options.isClose] - Whether poins path is close or open.
   */
  constructor(items, options) {
    super();
    this._options = options || {};
    this.items = items;
  }

  /**
   * Iterator.
   * @returns {Generator} Points.
   */
  *[Symbol.iterator]() {
      for (let item of this.items) {
          yield item;
      }
  }

  /**
   * Get items.
   * @returns {Point[]} Items.
   */
  get items() {
    return this._items;
  }

  /**
   * Set items.
   * @param {number[][]} value - Array of (x, y) pairs.
   */
  set items(value) {
    PointsCommands.validateItems(value);
    this._items = this._createItems(value);
    this._setValue();
  }

  /**
   * Set value.
   * @private
   */
  _setValue() {
    if (!this.items) return;
    let parts = this.items.map((point, index) => {
      let command = index === 0 ? 'M' : 'L';
      return `${command} ${point}`;
    });
    if (this._options.isClose) {
      parts.push('Z');
    }
    this.value = parts.join(' ');
  }

  /**
   * Create items.
   * @private
   * @param {number[][]} items - Array of (x, y) pairs.
   */
  _createItems(items) {
    return items.map(coords => new Point(...coords));
  }
}


export { Point, PointsCommands };
