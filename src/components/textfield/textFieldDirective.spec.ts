﻿function getMainDiv(rootControl: JQuery): JQuery {
    return rootControl.find('div');
}

describe('textFieldDirective: <uif-textfield />', () => {
    beforeEach(() => {
        angular.mock.module('officeuifabric.components.textfield');
    });

    it('should be able to set value', inject(($compile: Function, $rootScope: ng.IRootScopeService) => {
        let $scope: any = $rootScope.$new();
        $scope.textBoxValue = 'Test 1';
        let textBox: JQuery = $compile('<uif-textfield ng-model="textBoxValue"></uif-textfield>')($scope);
        $scope.$apply();
        let mainDiv: JQuery = getMainDiv(textBox);

        let input: JQuery = mainDiv.find('input');
        expect(input.val()).toBe('Test 1');

        $scope.textBoxValue = 'Test 2';
        $scope.$apply();
        expect(input.val()).toBe('Test 2');
    }));

    it('should be able to set label and description', inject(($compile: Function, $rootScope: ng.IRootScopeService) => {
        let $scope: any = $rootScope.$new();
        let textBox: JQuery = $compile('<uif-textfield label="Label contents" description="Description contents"></uif-textfield>')($scope);
        $scope.$apply();

        let label: JQuery = getMainDiv(textBox).find('label.ms-Label');
        expect(label.html()).toBe('Label contents');

        let description: JQuery = textBox.find('span.ms-TextField-description');
        expect(description.html()).toBe('Description contents');
    }));

    it('should be able to set underlined', inject(($compile: Function, $rootScope: ng.IRootScopeService) => {
        let $scope: any = $rootScope.$new();
        let textBox: JQuery = $compile('<uif-textfield underlined></uif-textfield>')($scope);
        $scope.$apply();

        let div: JQuery = getMainDiv(textBox);
        expect(div.hasClass('ms-TextField--underlined')).toBe(true, 'textfield should have ms-textfield--underlined');
    }));
    it('should be able to set placeholder', inject(($compile: Function, $rootScope: ng.IRootScopeService) => {
        let $scope: any = $rootScope.$new();

        let textBox: JQuery = $compile('<uif-textfield placeholder="Placeholder contents"></uif-textfield>')($scope);
        $scope.$apply();

        let label: JQuery = textBox.find('div.ms-TextField--placeholder label.ms-Label');
        expect(label.html()).toBe('Placeholder contents');
        expect(label.hasClass('ng-hide')).toBe(false, 'Label should be visible before click');

        let input: JQuery = textBox.find('input');
        input.click();
        expect(label.hasClass('ng-hide')).toBe(true, 'Label should be hidden after click');
    }));

});
