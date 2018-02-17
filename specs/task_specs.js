/*global describe, beforeEach, it, xit */
/*
B. Create a constructor to create Task objects

- A task has a description
- A task has a difficulty level
- A task has an urgency level
- A task has a reward
- A task should be able to be marked as completed

*/

const assert = require("assert");
const Task = require("../task.js");

describe("Task", function () {

  let task;

  beforeEach( function () {
    task = new Task("Clean the Augean stables", 100, 5, 3);
  });

  it("should have a description", function () {
    const actual = task.description;
    assert.strictEqual(actual, "Clean the Augean stables");
  });

  describe("reward", function () {

    it("should have a reward", function () {
      const actual = task.reward;
      assert.strictEqual(actual, 100);
    });

    xit("should have a default reward of 25"), function () {
      const task = new Task ("I'll come up with something");
      const actual = task.reward;
      assert.strictEqual(actual, 25);
    };

    xit("should be able to deal with non-integer reward input", function () {
      
    });

  });

  describe("difficulty level", function () {

    it("should have a difficulty level between 1[easiest] and 5[hardest]", function () {
      const actual = task.getDifficultyLevel();
      assert.strictEqual(actual, "hardest");
    });

    it("should should treat a difficulty of greater than 5 as 5", function () {
      const task = new Task ("breathe underwater", 25, 15);
      const actual = task.getDifficultyLevel();
      assert.strictEqual(actual, "hardest");
    });

    it("should should treat a difficulty of less than 1 as 1", function () {
      const task = new Task ("blink", 25, -15);
      const actual = task.getDifficultyLevel();
      assert.strictEqual(actual, "easiest");
    });

    xit("should have a default difficulty level of average", function () {
      const task = new Task ("make dinner", 25);
      const actual = task.getDifficultyLevel();
      assert.strictEqual(actual, "average");
    });

  });

  describe("urgency level", function () {

    it("should have an urgency level between 3[most urgent] and 1[least urgent]", function () {
      const actual = task.getUrgencyLevel();
      assert.strictEqual(actual, "really very urgent");
    });

    it("should should treat an urgency of greater than 3 as 3", function () {
      const task = new Task ("breathe underwater", 25, 15, 15);
      const actual = task.getUrgencyLevel();
      assert.strictEqual(actual, "really very urgent");
    });

    it("should should treat an urgency of less than 1 as 1", function () {
      const task = new Task ("blink", 25, -15, -15);
      const actual = task.getUrgencyLevel();
      assert.strictEqual(actual, "not urgent at all");
    });

    xit("should round any non-integer input for reward", function () {
      const task = new Task ("blink", 20.2, 1.5, 1.5);
      assert.strictEqual(task.reward, 21);

    });

    xit("should round any non-integer input for difficulty", function () {
      const task = new Task ("blink", 20.2, 1.5, 1.5);
      assert.strictEqual(task.getDifficultyLevel(), "average");

    });

    xit("should round any non-integer input for urgency", function () {
      const task = new Task ("blink", 20.2, 1.5, 1.5);
      assert.strictEqual(task.getUrgencyLevel(), "not urgent at all");

    });

    xit("should have a default urgency level of not urgent at all if no urgency level is provided", function () {
      const task = new Task ("make dinner", 25);
      const actual = task.getUrgencyLevel();
      assert.strictEqual(actual, "not urgent at all");
    });

    xit("should have a default urgency level of not urgent at all if a non-numeric urgency level is provided", function () {
      const task = new Task ("make dinner", 25, "whenever");
      const actual = task.getUrgencyLevel();
      assert.strictEqual(actual, "not urgent at all");
    });


  });

  describe("completed status", function () {

    it("should start with completed status false", function () {
      const actual = task.completionStatus;
      assert.strictEqual(actual, false);
    });

    it("should be able to be marked completed", function () {
      task.markCompleted();
      const actual = task.completionStatus;
      assert.strictEqual(actual, true);
    });

    it("should be able to be marked not completed", function () {
      task.markCompleted();
      task.markNotCompleted();
      const actual = task.completionStatus;
      assert.strictEqual(actual, false);
    });


  });





});
