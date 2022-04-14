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
import { UTILS } from '../../base.js';
import { SVGItemsManager } from '../../items_managers/svg.js';


/** SVG layer. */
class SVGLayer extends BaseLayer {

  /** Creation. */
  constructor() {
    super();
    this.items = new SVGItemsManager(this);
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
