/*global describe, beforeEach, it*/
/*
A. Create a constructor to create a Hero character

- A Hero has a name
- A Hero has health
- A Hero has a favourite food
- A Hero can talk saying their name
- A Hero has a collection of tasks to complete
*/

const Hero = require("../hero.js");
const assert = require("assert");

describe("Hero", function () {

  let hero; //means variable is scoped to describe

  beforeEach( function () {
    hero = new Hero("Conan", "marrow bones");
  });

  it("should have a name", function () {
    const actual = hero.name;
    assert.strictEqual(actual, "Conan");
  });

  it("should start with health == 100", function () {
    const actual = hero.health;
    assert.strictEqual(actual, 100);
  });

  it("should have a favourite food", function () {
    const actual = hero.favouriteFood;
    assert.strictEqual(actual, "marrow bones");
  });

  it("should say its name when it talks", function () {
    const actual = hero.speak();
    assert.strictEqual(actual, "My name is Conan");
  });



});
