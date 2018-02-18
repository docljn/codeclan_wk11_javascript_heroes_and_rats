/*global describe, beforeEach, it*/

const Hero = require("../hero.js");
const Task = require("../task.js");
const Food = require("../food.js");
const Rat = require("../rat.js");
const assert = require("assert");

describe("Hero", function () {
  //means variables are scoped to 'describe'
  let hero;
  let taskGeneric;
  let beans;
  let marrowBones;
  let task1_1_1;
  let task2_2_2;
  let task3_3_3;
  let task4_4_1;
  let task5_5_2;
  let heroWithTasks;
  let heroWithThreeTasks;
  let rat;

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
    heroWithThreeTasks = new Hero ("Clara", beans);
    heroWithThreeTasks.addTask(task5_5_2);
    heroWithThreeTasks.addTask(task4_4_1);
    heroWithThreeTasks.addTask(task3_3_3);
    rat = new Rat();
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

    it("should be able to sort tasks by selected argument: 'reward'", function () {
      heroWithTasks.sortTasks('reward');
      assert.deepStrictEqual(heroWithTasks.tasks, [task1_1_1, task2_2_2, task3_3_3, task4_4_1, task5_5_2]);
    });

    it("should be able to sort tasks by selected argument: 'difficulty'", function () {
      heroWithTasks.sortTasks('difficulty');
      assert.deepStrictEqual(heroWithTasks.tasks, [task1_1_1, task2_2_2, task3_3_3, task4_4_1, task5_5_2]);
    });

    it("should be able to sort tasks by selected argument: 'urgency'", function () {
      heroWithThreeTasks.sortTasks('urgency');
      assert.deepStrictEqual(heroWithThreeTasks.tasks, [task4_4_1, task5_5_2, task3_3_3]);
    });

    it("should be able to complete a task", function () {
      heroWithThreeTasks.completeTask(task4_4_1);
      assert.strictEqual(task4_4_1.completionStatus, true);
    });

    it("should gain points equivalent to the reward when completing a task", function () {
      heroWithThreeTasks.completeTask(task4_4_1);
      assert.strictEqual(heroWithThreeTasks.points, 4);
    });


    it("should be able to view tasks that are completed", function () {
      heroWithTasks.tasks[0].markCompleted();
      heroWithTasks.tasks[3].markCompleted();
      assert.deepStrictEqual(heroWithTasks.getCompletedTasks(true), [task3_3_3, task4_4_1]);
    });

    it("should be able to view tasks that are incomplete", function () {
      heroWithTasks.tasks[0].markCompleted();
      heroWithTasks.tasks[3].markCompleted();
      assert.deepStrictEqual(heroWithTasks.getCompletedTasks(false), [task1_1_1, task5_5_2, task2_2_2]);
    });
  });

  describe("eating food", function () {
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

    describe("eating poison", function () {

      it("should lose health if eating rat-touched food", function () {
        rat.touch(beans);
        hero.eat(beans);
        assert.strictEqual(hero.health, 75);
      });

      it("should lose only the standard amount of health if eating rat-touched favourite food", function () {
        rat.touch(marrowBones);
        hero.eat(marrowBones);
        assert.strictEqual(hero.health, 75);
      });

    });

  });

});
