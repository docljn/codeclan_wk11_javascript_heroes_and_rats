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


module.exports = Hero;
