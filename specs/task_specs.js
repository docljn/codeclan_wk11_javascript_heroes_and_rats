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
    task = new Task("Clean the Augean stables");
  });

  it("should have a description", function () {
    const actual = task.description;
    assert.strictEqual(actual, "Clean the Augean stables");
  });

});
