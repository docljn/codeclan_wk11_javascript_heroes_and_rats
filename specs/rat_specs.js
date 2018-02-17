/*global describe, beforeEach, it*/

/*
## Extensions
- Create a constructor to create Rat objects.
- Rats should be able to touch food, if they do the food becomes poisonous.
- Heroes that eat poisonous food should lose health.
*/

const assert = require("assert");
const Rat = require("../rat.js");
const Food = require("../food.js");

describe("Rat", function () {
  let rat;
  let food;

  beforeEach( function () {
    rat = new Rat();
    food = new Food("scone", 15);
  });

  it("should be able to make food poisonous [negative replenishment value] by touching the food", function () {
    rat.touch(food);
    assert.strictEqual(food.replenishmentValue, -15);
  });

  it("should not affect food which is already poisonous", function () {
    const poison = new Food("rattex", -15);
    rat.touch(poison);
    assert.strictEqual(poison.replenishmentValue, -15);
  });

});
