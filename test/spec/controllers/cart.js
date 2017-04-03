'use strict';

describe('Controller: CartCtrl', function () {

  // load the controller's module
  beforeEach(module('flowerShopApp'));

  var CartCtrl,
    scope;

  // instantiate service
  var utilities;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _utilities_) {
    scope = $rootScope.$new();
    utilities = _utilities_;
    CartCtrl = $controller('CartCtrl', {
      $scope: scope,
      _utilities_: utilities
      // place here mocked dependencies
    });
  }));

  it('should reflect changes in cart with changes in utility', function () {
    expect(!!utilities).toBe(true);
    var orderList = utilities.getOrderListFromOrderInput(['10 R12', '20 L09'].join('\n'));
    utilities.createOrderBundles(orderList);
    scope.$digest();
    expect(Object.keys(scope.cart).length).toBe(2);
  });
});
