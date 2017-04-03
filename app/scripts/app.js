'use strict';

/**
 * @ngdoc overview
 * @name flowerShopApp
 * @description
 * # flowerShopApp
 *
 * Main module of the application.
 */
angular
  .module('flowerShopApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html'        
      })
      .when('/shop', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl',
        controllerAs: 'cart'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .directive('bsActiveLink', ['$location', function ($location) {
    return {
      restrict: 'A', //use as attribute 
      replace: false,
      link: function (scope, elem) {
        //after the route has changed
        scope.$on("$routeChangeSuccess", function () {
          var hrefs = ['#!/' + $location.path(),
          '#!' + $location.path(), //html5: false
          $location.path()]; //html5: true
          angular.forEach(elem.find('a'), function (a) {
            a = angular.element(a);
            if (-1 !== hrefs.indexOf(a.attr('href'))) {
              a.parent().addClass('active');
            } else {
              a.parent().removeClass('active');
            };
          });
        });
      }
    }
  }]);
