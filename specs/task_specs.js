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
    task = new Task("Clean the Augean stables", 5);
  });

  it("should have a description", function () {
    const actual = task.description;
    assert.strictEqual(actual, "Clean the Augean stables");
  });

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


});
