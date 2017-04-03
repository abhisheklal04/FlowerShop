'use strict';

/**
 * @ngdoc function
 * @name flowerShopApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the flowerShopApp
 */
angular.module('flowerShopApp')
  .controller('CartCtrl', ['$scope', 'utilities', function ($scope, Utilities) {
    
    $scope.$watch(function () { return Utilities.getCart(); }, function (newValue, oldValue) {
      if (newValue != null) {
        //update Controller's cart value
        $scope.cart = newValue;
      }
    }, true);

  }]);
