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
const Task = require("../task.js");
const Food = require("../food.js");
const assert = require("assert");

describe("Hero", function () {

  let hero; //means variable is scoped to describe
  let taskGeneric;
  let beans;
  let marrowBones;

  beforeEach( function () {
    hero = new Hero("Conan", marrowBones);
    taskGeneric = new Task("description", "reward");
    beans = new Food("beans", 25);
    marrowBones = new Food("marrow bones", 25);
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
    const actual = hero.favouriteFood.name;
    assert.strictEqual(actual, "marrow bones");
  });

  it("should say its name when it talks", function () {
    const actual = hero.speak();
    assert.strictEqual(actual, "My name is Conan");
  });

  describe("task list", function () {

    it("should have a list of tasks to complete, which starts empty", function () {
      const actual = 0;
      assert.strictEqual(actual, hero.getNumberOfTasks());
    });

    it("should be able to add a task to the task list", function () {
      hero.addTask(taskGeneric);
      assert.deepStrictEqual(hero.tasks, [taskGeneric]);
    });

  });

  /*
  D. Extend your hero.
  - A hero should be able to eat food, and health should go up by the replenishment value
  - If the food is their favourite food, their health should go up by 1.5 * value.
  */

  describe("eating", function () {
    it("should be able to eat food, with a corresponding increase in health", function () {
      hero.eat(beans);
      assert.strictEqual(hero.health, 125);
    });

    it("should not have health increasing beyond 200", function () {
      hero.eat(beans);
      hero.eat(beans);
      hero.eat(beans);
      hero.eat(beans);
      hero.eat(beans);
      assert.strictEqual(hero.health, 200);
    });

    it("should gain double health if the food eaten is the favourite food", function () {
      hero.eat(marrowBones);
      assert.strictEqual(hero.health, 150);
    });
  });

  /*
  - A hero should be able to sort their tasks by difficulty, urgency or reward.
  - A hero should be able to view tasks that are marked as completed or incomplete.
  */

});
