/*global describe, beforeEach, it, xit*/
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
  let task1_1_1;
  let task2_2_2;
  let task3_3_3;
  let task4_4_1;
  let task5_5_2;
  let heroWithTasks;

  beforeEach( function () {
    hero = new Hero("Conan", marrowBones);
    taskGeneric = new Task("description", 100);
    task1_1_1 = new Task("one", 1, 1, 1);
    task2_2_2 = new Task("two", 2, 2, 2);
    task3_3_3 = new Task("three", 3, 3, 3);
    task4_4_1 = new Task("four", 4, 4, 1);
    task5_5_2 = new Task("five", 5, 5, 2);
    beans = new Food("beans", 25);
    marrowBones = new Food("marrow bones", 25);
    heroWithTasks = new Hero("Connie", beans);
    heroWithTasks.addTask(task3_3_3);
    heroWithTasks.addTask(task1_1_1);
    heroWithTasks.addTask(task5_5_2);
    heroWithTasks.addTask(task4_4_1);
    heroWithTasks.addTask(task2_2_2);
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

  it("should say their name when they talk", function () {
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

    /*
    D. Extend your hero.
    - A hero should be able to sort their tasks by difficulty, urgency or reward.
    - A hero should be able to view tasks that are marked as completed or incomplete.
    */

    xit("should be able to sort tasks by reward", function () {
      heroWithTasks.sortTasksByReward();
      assert.deepStrictEqual(heroWithTasks.tasks, [task1_1_1, task2_2_2, task3_3_3, task4_4_1, task5_5_2]);
    });

    it("should be able to sort tasks by difficulty", function () {
      heroWithTasks.sortTasksByDifficulty();
      assert.deepStrictEqual(heroWithTasks.tasks, [task1_1_1, task2_2_2, task3_3_3, task4_4_1, task5_5_2]);
    });

    xit("should be able to sort tasks by urgency", function () {

    });


    xit("should be able to view tasks that are completed or incomplete", function () {

    });

    xit("should be able to view tasks that are incomplete", function () {

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

    it("should gain 1.5 times normal health if the food eaten is the favourite food", function () {
      hero.eat(marrowBones);
      assert.strictEqual(hero.health, 138);
    });
  });

});
