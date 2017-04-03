'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('flowerShopApp'));

  var MainCtrl,
    scope,
    location,
    Utilities,
    rootScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $location) {
    scope = $rootScope.$new();
    location = $location;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should redirect to /cart after addToCart', function () {
    
    scope.orderInput = "10 R12";
    scope.addToCart();         
    expect(location.path()).toBe("/cart");
  });
});
