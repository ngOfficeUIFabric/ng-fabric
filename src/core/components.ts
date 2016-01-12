'use strict';

import * as ng from 'angular';
import * as iconModule from '../components/icon/iconDirective';
import * as spinnerModule from '../components/spinner/spinnerDirective';
import * as tableModule from '../components/table/tableDirective';
import * as textFieldModule from '../components/textfield/textFieldDirective';
import * as dropdownModule from '../components/dropdown/dropdownDirective';


/**
 * @ngdoc module
 * @name officeuifabric.components
 *
 * @description
 * Office UI Fabric Angular directives components module that includes all
 * other directives within the library.
 *
 */
export var module: ng.IModule = ng.module('officeuifabric.components', [
    dropdownModule.module.name,
    iconModule.module.name,
    spinnerModule.module.name,
    textFieldModule.module.name,
    tableModule.module.name
  ]);
