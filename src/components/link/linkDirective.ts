import * as angular from 'angular';

/**
 * @ngdoc directive
 * @name uifLink
 * @module officeuifabric.components.link
 *
 * @restrict E
 *
 * @description
 * `<uif-link>` is a link directive.
 *
 * @param {string=} ng-href the url
 *
 *
 * @see {link http://dev.office.com/fabric/components/link}
 *
 * @usage
 *
 * <uif-link ng-href="http://ngofficeuifabric.com">Link text</uif-link>
 */
export class LinkDirective implements angular.IDirective {

  public restrict: string = 'E';
  public template: string = '<a ng-href="{{ ngHref }}" class="ms-Link" ng-transclude></a>';
  public scope: {} = {
    ngHref: '@'
  };

  public transclude: boolean = true;
  public replace: boolean = true;

  public static factory(): angular.IDirectiveFactory {
    const directive: angular.IDirectiveFactory = () => new LinkDirective();
    return directive;
  }
}

/**
 * @ngdoc module
 * @name officeuifabric.components.link
 *
 * @description
 * Link
 *
 */
export let module: angular.IModule = angular.module('officeuifabric.components.link', [
  'officeuifabric.components'
])
  .directive('uifLink', LinkDirective.factory());
