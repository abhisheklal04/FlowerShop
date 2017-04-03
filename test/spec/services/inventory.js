'use strict';

describe('Service: inventory', function () {

  // load the service's module
  beforeEach(module('flowerShopApp'));

  // instantiate service
  var inventory;
  beforeEach(inject(function (_inventory_) {
    inventory = _inventory_;
  }));

  it('should be true if inventory exists', function () {
    expect(!!inventory).toBe(true);
  });

  it('should have 3 flowers in inventory', function () {
    expect(!!inventory.Flowers).toBe(true);
    expect(Object.keys(inventory.Flowers).length).toBe(3);
  });

  it('should have flower name Roses with code R12', function () {
    expect(!!inventory.Flowers).toBe(true);
    expect(inventory.Flowers['R12'].name).toBe('Roses');
  });

  it('should have flower with code L09 to have 3 bunches for sale', function () {
    expect(!!inventory.Flowers).toBe(true);
    expect(Object.keys(inventory.Flowers['L09'].bundleTypePrice).length).toBe(3);
  });

});
