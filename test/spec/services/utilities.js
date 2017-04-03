'use strict';

describe('Service: utilities', function () {

  // load the service's module
  beforeEach(module('flowerShopApp'));

  // instantiate service
  var utilities;
  beforeEach(inject(function (_utilities_) {
    utilities = _utilities_;
  }));


  it('should be true if utilities service exists', function () {
    expect(!!utilities).toBe(true);
  });

  describe('Function: getOrderListFromOrderInput : generates a validated orderRequest from user input', function () {

    it('should return a validated order list with length 2', function () {
      var orderList = utilities.getOrderListFromOrderInput(['10 R12', '20 L09'].join('\n'));
      expect(Object.keys(orderList).length).toBe(2);
    });

    it('should return a validated order list with length 2', function () {
      var orderList = utilities.getOrderListFromOrderInput(['10 R12', '20 L09'].join('\n'));
      expect(Object.keys(orderList).length).toBe(2);
    });

    it('should reject the invalidated OrderInputs', function () {
      var orderList = utilities.getOrderListFromOrderInput(['10 R121', '20 L091'].join('\n'));
      expect(Object.keys(orderList).length).toBe(0);
    });

    it('should ignore an invalidated order input to added in orderList', function () {
      var orderList = utilities.getOrderListFromOrderInput(['10 R12', '20 L091'].join('\n'));
      expect(Object.keys(orderList).length).toBe(1);
    });
  });

  describe('Function: createOrderBundles : generates flower bundles from validated order request and sets them into cart', function () {
    
    it('should set 2 orders in cart order', function () {
      var orderList = utilities.getOrderListFromOrderInput(['10 R12', '20 L09'].join('\n'));
      utilities.createOrderBundles(orderList);
      expect(Object.keys(utilities.getCart()).length).toBe(2);
    });

    it('should ignore to add any item not defined in inventory', function () {
      var orderList = utilities.getOrderListFromOrderInput(['11 S12', '20 E88'].join('\n'));
      utilities.createOrderBundles(orderList);
      expect(Object.keys(utilities.getCart()).length).toBe(0);
    });    

    it('should add item with R12 in cart with total price 12.99 ', function () {
      var orderList = utilities.getOrderListFromOrderInput(['10 R12', '15 L09'].join('\n'));
      utilities.createOrderBundles(orderList);
      expect(utilities.getCart()['R12'].price).toBe(12.99);
    });   

    it('should add item with L09 in cart with total price 41.90 ', function () {
      var orderList = utilities.getOrderListFromOrderInput(['10 R12', '15 L09'].join('\n'));
      utilities.createOrderBundles(orderList);
      expect(utilities.getCart()['L09'].price).toBe(41.90);
    });   

    var countBundlesInOrder = function(orderBundles){      
      var keys = Object.keys(orderBundles);
      var noOfbundles = 0;

      keys.forEach(function(key){
        noOfbundles = noOfbundles + orderBundles[key].bundleQuantity;
      });
      return noOfbundles;
    }

    it('should add minimum no of bundles in cart for the quantity specfied', function () {
      var orderList = utilities.getOrderListFromOrderInput(['10 R12', '15 L09', '13 T58'].join('\n'));
      utilities.createOrderBundles(orderList);      
      expect(countBundlesInOrder(utilities.getCart()['R12'].bundles)).toBe(1);
      expect(countBundlesInOrder(utilities.getCart()['L09'].bundles)).toBe(2);
      expect(countBundlesInOrder(utilities.getCart()['T58'].bundles)).toBe(3);
    });

  });

});
