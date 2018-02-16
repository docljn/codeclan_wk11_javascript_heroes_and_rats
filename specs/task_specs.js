/*global describe, beforeEach, it */
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
    task = new Task("Clean the Augean stables", 5, 3);
  });

  it("should have a description", function () {
    const actual = task.description;
    assert.strictEqual(actual, "Clean the Augean stables");
  });

  describe("difficulty level", function () {

    it("should have a difficulty level between 1[easiest] and 5[hardest]", function () {
      const actual = task.getDifficultyLevel();
      assert.strictEqual(actual, "hardest");
    });

    it("should should treat a difficulty of greater than 5 as 5", function () {
      const task = new Task ("breathe underwater", 15);
      const actual = task.getDifficultyLevel();
      assert.strictEqual(actual, "hardest");
    });

    it("should should treat a difficulty of less than 1 as 1", function () {
      const task = new Task ("blink", -15);
      const actual = task.getDifficultyLevel();
      assert.strictEqual(actual, "easiest");
    });

    xit("should have a default difficulty level of average", function () {
      const task = new Task ("make dinner");
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
      const task = new Task ("breathe underwater", 15, 15);
      const actual = task.getUrgencyLevel();
      assert.strictEqual(actual, "really very urgent");
    });

    it("should should treat an urgency of less than 1 as 1", function () {
      const task = new Task ("blink", -15, -15);
      const actual = task.getUrgencyLevel();
      assert.strictEqual(actual, "not urgent at all");
    });

    xit("should have a default urgency level of not urgent at all", function () {
      const task = new Task ("make dinner");
      const actual = task.getUrgencyLevel();
      assert.strictEqual(actual, "not urgent at all");
    });



  });



});
