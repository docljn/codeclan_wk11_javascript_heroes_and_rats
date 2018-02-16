/*global describe, beforeEach, it*/

/*
C. Create a constructor to create Food objects.

- Food should have a name
- Food should have a replenishment value
*/

const assert = require("assert");
const Food = require("../food");

describe("Food", function () {

  let food;

  beforeEach( function () {
    food = new Food ("beans", 25);
  });

  it("should have a name", function () {
    assert.strictEqual(food.name, "beans");
  });

  it("should have a replenishment value", function () {
    assert.strictEqual(food.replenishmentValue, 25);
  });

});
