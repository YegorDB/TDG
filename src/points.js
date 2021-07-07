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
   * Validate coordinates.
   * @param {number} x - X coordinate.
   * @param {number} y - Y coordinate.
   */
  static validateCoordinates(x, y) {
    Point.validateCoordinate(x);
    Point.validateCoordinate(y);
  };

  /**
   * Creation.
   * @param {number} x - X coordinate.
   * @param {number} y - Y coordinate.
   */
  constructor(x, y) {
    Point.validateCoordinates(x, y);
    this._x = x;
    this._y = y;
  }

  /**
   * Get x value.
   * @return {number} X coordinate.
   */
  get x() {
    return this._x;
  }

  /**
   * Get y value.
   * @return {number} Y coordinate.
   */
  get y() {
    return this._y;
  }
}


/** Points logic. */
class Points {

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
      Point.validateCoordinates(...item);
    }
  };

  /**
   * Creation.
   * @param {number[][]} items - Array of (x, y) pairs.
   */
  constructor(items) {
    Points.validateItems(items);
    this._items = items.map(coords => Point(...coords));
    // ITERATOR
  }
}


module.exports = {
  Point: Point,
  Points: Points,
};
