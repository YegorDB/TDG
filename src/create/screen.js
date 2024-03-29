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


import { Screen } from '../screens.js';


/**
 * Create screen.
 * @param {string} elementId - DOM element id.
 * @param {Object} [options] - Screen creation options.
 * @param {integer[]} [options.dimensions=[100, 100]] - Screen dimensions [width, height].
 */
function createScreen(elementId, options) {
  return new Screen(elementId, options);
}


export { createScreen };
