'use strict';

/**
 * @ngdoc service
 * @name flowerShopApp.utilities
 * @description
 * # utilities
 * Service in the flowerShopApp.
 */
angular.module('flowerShopApp')
  .service('utilities', ['inventory', function (Inventory) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    // order input format matcher
    var orderMatcher = '^(\\d+) ([A-Z0-9]{3})\\b';  // matching alphanumeric SKU, Eg: A12 10

    // private function to calculate order bundles.
    var calculateOrderBundles = function (sku, quantity) {

      var skuOrder = {};

      quantity = parseInt(quantity);
      skuOrder['quantity'] = quantity;

      var flower = Inventory.Flowers[sku];

      var bundleTypes = Object.keys(flower.bundleTypePrice);

      // sorting bunch types in decending order
      bundleTypes = bundleTypes.sort(function (a, b) {
        return parseInt(b) - parseInt(a);
      });

      var orderPrice = 0;
      var skuBundles = {};

      bundleTypes.forEach(function (type, index) {
        if (quantity > 0) {
          type = parseInt(type);

          if (quantity >= type || index == bundleTypes.length - 1) {
            var typeQty = (index == bundleTypes.length - 1) ? parseInt(quantity / type) + 1 : parseInt(quantity / type);
            quantity = quantity - (typeQty * type);
            skuBundles[type] = { 'bundleQuantity': typeQty, 'pricePerBundle': flower.bundleTypePrice[type] };
            orderPrice = orderPrice + (typeQty * flower.bundleTypePrice[type]);
          }
        }
      });


      skuOrder['price'] = orderPrice;
      skuOrder['bundles'] = skuBundles;

      return skuOrder;
    };

    var _this = this;
    var _cart = {};
    
    _this.getCart = function () {
      return _cart;
    },

    _this.setCart = function (value) {
      _cart = value;
    };   

    _this.getFlowerList = function(){
      return Inventory.Flowers;
    };


    // validates the user input to return an object containing valid sku's & order quantity
    // Ignores invalidated user inputs
    _this.getOrderListFromOrderInput = function (orderInput) {

      var orderSku = {};
      var orderList = orderInput.split('\n');

      orderList.forEach(function (value) {
        if (new RegExp(orderMatcher).test(value)) {

          var param = value.match(orderMatcher);
          var quantity = param[1];
          var sku = param[2];

          if (orderSku.hasOwnProperty(sku)) {
            orderSku[sku] = orderSku[sku] + quantity;
          }
          else {
            orderSku[sku] = quantity;
          }
        }
      });

      return orderSku;
    };

    // Takes Input as an object of types { sku, Quantity }
    // Returns bundle orders for all sku's types
    _this.createOrderBundles = function (orderSku) {

      var finalOrder = {};

      var skus = Object.keys(orderSku);
      skus.forEach(function(sku){
        if(Inventory.Flowers.hasOwnProperty(sku)) {
          finalOrder[sku] = calculateOrderBundles(sku, orderSku[sku]);
        }
      });
      
      // updating cart
      _this.setCart(finalOrder);
    };
    
  }]);
