const Task = require("../task.js");
const assert = require("assert");

let task1_1_1 = new Task("one", 1, 1, 1);
let task2_2_2 = new Task("two", 2, 2, 2);
let task3_3_3 = new Task("three", 3, 3, 3);
let task4_4_1 = new Task("four", 4, 4, 1);
let task5_5_2 = new Task("five", 5, 5, 2);

const arrayOfObjects = [];
arrayOfObjects.push(task3_3_3);
arrayOfObjects.push(task1_1_1);
arrayOfObjects.push(task5_5_2);
arrayOfObjects.push(task2_2_2);
arrayOfObjects.push(task4_4_1);


function compareOnReward(a, b) {
  let one = (a["reward"]);
  let two = (b["reward"]);
  return one - two;
}

function compareOnKey(key, a, b) {
  let one = a[key];
  let two = b[key];
  return one - two;
}


function propertyComparator(property) {
  return function(a, b) {
    return a[property] - b[property];
  };
}





/*
// should became something like:


arrayOfObjects.sort(compareOn.bind(null, 'myKey'));


//try
arrayOfObjects.sort(compareOn.bind(null, 'myKey'));

//try
//You may add a wrapper:

function compareOnKey(key) {
return function(a, b) {
a = parseInt(a[key], 10);
b = parseInt(b[key], 10);
if (a < b) return -1;
if (a > b) return 1;
return 0;
};
}


//try
function compareByProperty(key) {
return function (a, b) {
a = parseInt(a[key], 10);
b = parseInt(b[key], 10);
if (a < b) return -1;
if (a > b) return 1;
return 0;
};
}
arrayOfObjects.sort(compareByProperty('myKey'));

// compareByProperty('myKey') returns the function to do the comparing, which is then passed into .sort

arrayOfObjects.sort(compareOnKey("myKey"));

*/
describe("EXPERIMENTAL Sorting Arrays", function () {

  it("should be sortable by reward", function () {
    assert.deepStrictEqual(arrayOfObjects.sort(compareOnReward), [task1_1_1, task2_2_2, task3_3_3, task4_4_1, task5_5_2]);
  });

  it("should be sortable by a selected key: 'reward'", function () {
    assert.deepStrictEqual(arrayOfObjects.sort(compareOnKey.bind(null, 'reward')), [task1_1_1, task2_2_2, task3_3_3, task4_4_1, task5_5_2]);
  });
  // CARE: this DOES NOT WORK if you put "reward"

  it("should be sortable by a selected key: 'reward' using a function generator", function () {
    assert.deepStrictEqual(arrayOfObjects.sort(propertyComparator('reward')), [task1_1_1, task2_2_2, task3_3_3, task4_4_1, task5_5_2]);
  });

  it("should be sortable by a selected key: 'urgency' using a function generator", function () {
    assert.deepStrictEqual(arrayOfObjects.sort(propertyComparator('urgency')), [task1_1_1, task4_4_1, task2_2_2, task5_5_2, task3_3_3]);
  });

  it("should be sortable by a selected key: 'difficulty' using a function generator", function () {
    assert.deepStrictEqual(arrayOfObjects.sort(propertyComparator('difficulty')), [task1_1_1, task2_2_2, task3_3_3, task4_4_1, task5_5_2]);
  });

});
