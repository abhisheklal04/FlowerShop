'use strict';

/**
 * @ngdoc service
 * @name flowerShopApp.inventory
 * @description
 * # inventory
 * Service in the flowerShopApp.
 */
angular.module('flowerShopApp')
  .service('inventory', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.Flowers = {
      'R12': {
        name: 'Roses',
        bundleTypePrice: {
          '5': 6.99,
          '10': 12.99
        }
      },
      'L09': {
        name: 'Lilies',
        bundleTypePrice: {
          '3': 9.95,
          '6': 16.95,
          '9': 24.95
        }
      },
      'T58': {
        name: 'Tulips',
        bundleTypePrice: {
          '3': 5.95,
          '5': 9.95,
          '9': 16.99
        }
      }
    }
  });
