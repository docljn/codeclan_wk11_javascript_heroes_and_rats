const Hero = function (name, favouriteFood) {
  this.name = name;
  this.favouriteFood = favouriteFood;
  this.health = 100;
  this.maxHealth = 200;
  this.tasks = [];
  this.points = 0;
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

Hero.prototype.completeTask = function (selectedTask) {
  this.tasks.map(function (task) {
    if (task === selectedTask) {
      task.completionStatus = true;
      return task;
    } else {
      return task;
    }
  });
  this.points += selectedTask.reward;
};

Hero.prototype.eat = function (food) {
  let foodValue = food.replenishmentValue;
  if (food.name === this.favouriteFood.name && foodValue > 0 ) { // i.e. food is not poisoned
    foodValue *= 3/2;
  }
  foodValue = Math.round(foodValue);
  this.health += foodValue;
  if (this.health > this.maxHealth) {
    this.health = this.maxHealth;
  }
};

/*
I think this is what I need to DRY up the code:
reference: https://stackoverflow.com/questions/8537602/any-way-to-extend-javascripts-array-sort-method-to-accept-another-parameter
*/

// ToDo: I need this for sorting, but where to put it?
function propertyComparator(property) {
  return function(a, b) {
    return a[property] - b[property];
  };
}


Hero.prototype.sortTasks = function (chosenProperty) {
  this.tasks.sort(propertyComparator(chosenProperty));
};

/*
http://adripofjavascript.com/blog/drips/filtering-arrays-with-array-filter.html
*/


Hero.prototype.getCompletedTasks = function (boolean) {
  function isCompleted(task) {
    return task.completionStatus === boolean;
  }
  return this.tasks.filter(isCompleted);
};
// CARE: you don't call the isCompleted function immediately in filter - filter uses it later, hence you DON'T put the brackets at the end.

module.exports = Hero;
