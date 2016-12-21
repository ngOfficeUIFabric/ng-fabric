import * as angular from 'angular';
import { IconEnum } from './iconEnum';

/**
 * @ngdoc interface
 * @name IIconScope
 * @module officeuifabric.components.contextualmenu
 *
 * @description
 * This is the scope used by the `<uif-icon>` directive.
 *
 * @property {string} uifType - Icon to display. Possible types are defined in {@link IconEnum}.
 */
export interface IIconScope extends angular.IScope {
  uifType: string;
}

/**
 * @controller
 * @name IconController
 * @private
 * @description
 * Used to more easily inject the Angular $log service into the directive.
 */
class IconController {
  public static $inject: string[] = ['$log'];
  constructor(public $log: angular.ILogService) {
  }
}

/**
 * @ngdoc directive
 * @name uifIcon
 * @module officeuifabric.components.icon
 *
 * @restrict E
 *
 * @description
 * `<uif-icon>` is an icon directive.
 *
 * @see {link http://dev.office.com/fabric/styles}
 *
 * @usage
 *
 * <uif-icon uif-type="arrowDownLeft"></uif-icon>
 */
export class IconDirective implements angular.IDirective {

  public restrict: string = 'E';
  public template: string = '<i class="ms-Icon ms-Icon--{{uifType}}" aria-hidden="true"></i>';
  public scope: {} = {
    uifType: '@'
  };
  public transclude: boolean = true;
  public controller: any = IconController;
  public controllerAs: string = 'icon';

  public static factory(): angular.IDirectiveFactory {
    const directive: angular.IDirectiveFactory = () => new IconDirective();
    return directive;
  }

  public link(scope: IIconScope, instanceElement: angular.IAugmentedJQuery, attrs: angular.IAttributes, controller: IconController): void {
    // add watcher
    scope.$watch('uifType', (newValue: string, oldValue: string) => {
      // verify a valid icon was passed in
      if (IconEnum[newValue] === undefined) {
        controller.$log.error('Error [ngOfficeUiFabric] officeuifabric.components.icon - Unsupported icon: ' +
          'The icon (\'' + scope.uifType + '\') is not supported by the Office UI Fabric. ' +
          'Supported options are listed here: ' +
          'https://github.com/ngOfficeUIFabric/ng-officeuifabric/blob/master/src/components/icon/iconEnum.ts');
      }
    });
  };
}

/**
 * @ngdoc module
 * @name officeuifabric.components.icon
 *
 * @description
 * Icon
 *
 */
export let module: angular.IModule = angular.module('officeuifabric.components.icon', [
  'officeuifabric.components'
])
  .directive('uifIcon', IconDirective.factory());
