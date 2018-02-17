const Rat = function () {

};

Rat.prototype.touch = function (food) {
  if (food.replenishmentValue > 0) {
    food.replenishmentValue *= -1;
  }
};


module.exports = Rat;
