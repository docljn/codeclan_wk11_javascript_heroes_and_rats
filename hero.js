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
    foodValue *= 2;
  }
  this.health += foodValue;
  if (this.health > 200) {
    this.health = 200;
  }
};


module.exports = Hero;
