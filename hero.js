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
  this.health += food.replenishmentValue;
  if (this.health > 200) {
    this.health = 200;
  }
};


module.exports = Hero;
