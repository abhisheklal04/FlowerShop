'use strict';

/**
 * @ngdoc function
 * @name flowerShopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flowerShopApp
 */
angular.module('flowerShopApp')
  .controller('MainCtrl', ['$rootScope', '$scope', '$location', 'utilities', function ($rootScope, $scope, $location, Utilities) {
    
    $scope.orderInput = "";
    $scope.flowerList = Utilities.getFlowerList();

    $scope.addToCart = function() {
      var cart = {};
      var orderSkus = Utilities.getOrderListFromOrderInput($scope.orderInput);
      
      Utilities.createOrderBundles(orderSkus);         
      $location.path( "/cart" );
    };
    
  }]);
