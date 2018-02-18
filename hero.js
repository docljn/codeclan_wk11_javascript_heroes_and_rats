const Hero = function (name, favouriteFood) {
  this.name = name;
  this.favouriteFood = favouriteFood;
  this.health = 100;
  this.tasks = [];
};

Hero.prototype.speak = function () {
  return `My name is ${this.name}`;
};

Hero.prototype.getNumberOfTasks = function () {
  return this.tasks.length;
};

Hero.prototype.addTask = function (task) {
  this.tasks.push(task);
};

Hero.prototype.eat = function (food) {
  let foodValue = food.replenishmentValue;
  if (food.name === this.favouriteFood.name && foodValue > 0 ) { // i.e. food is not poisoned
    foodValue *= 3/2;
  }
  foodValue = Math.round(foodValue);
  this.health += foodValue;
  if (this.health > 200) {
    this.health = 200;
  }
};

/*
I think this is what I need to DRY up the code:
reference: https://stackoverflow.com/questions/8537602/any-way-to-extend-javascripts-array-sort-method-to-accept-another-parameter
*/




Hero.prototype.sortTasksByDifficulty = function () {
  this.tasks.sort( function (firstTask, secondTask) {
    return firstTask.difficulty - secondTask.difficulty;
  });
};

Hero.prototype.sortTasksByReward = function () {
  this.tasks.sort( function (firstTask, secondTask) {
    return firstTask.reward - secondTask.reward;
  });
};

Hero.prototype.sortTasksByUrgency = function () {
  this.tasks.sort( function (firstTask, secondTask) {
    return firstTask.urgency - secondTask.urgency;
  });
};


/*
http://adripofjavascript.com/blog/drips/filtering-arrays-with-array-filter.html
*/

Hero.prototype.getCompletedTasks = function () {
  function isCompleted(task) {
    return task.completionStatus;
  }
  return this.tasks.filter(isCompleted);
};

Hero.prototype.getUncompletedTasks = function () {
  function isNotCompleted(task) {
    return !task.completionStatus;
  }
  return this.tasks.filter(isNotCompleted);
};
// CARE: you don't call the isCompleted function immediately in filter - filter uses it later, hence you DON'T put the brackets at the end.

module.exports = Hero;
