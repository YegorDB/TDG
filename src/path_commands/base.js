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


class PathCommands {

  /**
   * Validate value.
   * @param {string} value - Path commands value.
   */
  static validate(value) {
    if ((typeof value) != 'string') {
      throw Error('Path commands has to be an string.');
    }

    let starts = [
      '(M(\\s+\\d+,\\d+)+)',
      '(m(\\s+\\-?\\d+,\\-?\\d+)+)',
    ].join('|');
    let draws = [
      '(\\s+[LT](\\s+\\d+,\\d+)+)',
      '(\\s+[lt](\\s+\\-?\\d+,\\-?\\d+)+)',
      '(\\s+[HV](\\s+\\d+)+)',
      '(\\s+[hv](\\s+\\-?\\d+)+)',
      '(\\s+[C]((\\s+\\d+,\\d+){3})+)',
      '(\\s+[c]((\\s+\\-?\\d+,\\-?\\d+){3})+)',
      '(\\s+[SQ]((\\s+\\d+,\\d+){2})+)',
      '(\\s+[sq]((\\s+\\-?\\d+,\\-?\\d+){2})+)',
      '(\\s+[A]((\\s+\\d+){2}\\s+\\-?\\d+(\\s+[01]){2}\\s+\\d+,\\d+)+)',
      '(\\s+[a]((\\s+\\d+){2}\\s+\\-?\\d+(\\s+[01]){2}\\s+\\-?\\d+,\\-?\\d+)+)',
    ].join('|');
    let re = new RegExp(`^(${starts})(${draws})((\\s+(${starts}))?(${draws}))*(\\s+[Zz])?$`);
    if (!value.match(re)) {
      throw Error('Wrond path commands string.');
    }
  };

  /**
   * Creation.
   * @param {string} value - Path commands value.
   */
  constructor(value) {
    this._value = value;
  }

  /**
   * Get value.
   * @return {string} Path commands value.
   */
  get value() {
    return this._value;
  }

  /**
   * Set value.
   * @param {string} value - Path commands value.
   */
  set value(value) {
    if (!value) return;
    PathCommands.validate(value);
    this._value = value;
  }
}
