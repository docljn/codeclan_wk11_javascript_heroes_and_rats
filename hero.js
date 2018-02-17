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
  if (food.name === this.favouriteFood.name) {
    foodValue *= 3/2;
  }
  foodValue = Math.round(foodValue);
  this.health += foodValue;
  if (this.health > 200) {
    this.health = 200;
  }
};

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
arr.sort([compareFunction])
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/


module.exports = Hero;
