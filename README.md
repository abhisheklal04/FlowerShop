# FLOWER SHOP
A simple single page shopping cart to buy flowers. Demonstrating AngularJS routing, service, BDD style testing for each module.

### Tools : Angular, Angular-Route, Jasmine, Karma, Grunt, Bootstrap, HTML, CSS.

#### Features:
  1. Shop for flower bundles.
  2. Enter Flower Quantity and Code (Eg: 10 R12).
  3. System Calculates the bundles required for the quantity provided and adds them to the cart.
  4. System optimises the order into minimum no of flower bundles to save shipping.
  5. Quantities less than minimum sized bundle will add a bundle of minimum size to the cart.
  6. Quantities left after assigning maximum sized bundles will have a bundle of minimum size added to the cart.
  7. Multiple inputs can be given in each new line.
  8. Invalid user inputs and invalid flower codes will be ignored.
  9. Automation testing of each module(controller, services) with Karma and Jasmine.
  10. Bundle calculation library can be found in *app/scripts/services/utilities.js*
  11. Test Scripts for Bundle Calculation can be found in *test/spec/services/utilities.js*


### Install Instructions
To Deploy this application on your side, follow the guidelines given below.
  1. Fork or download the repository
  2. install node js, npm
  3. install bower, run command: *npm install -g bower* 
  4. Install npm dependencies, run command: *npm install*
  5. Install bower dependencies, run command: *bower install*
  6. Unit test with Karma,Jasmine with command: *npm test*
  7. run application server with command: *npm start*

