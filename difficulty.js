const DifficultyEnum = {
  HARDEST: 5,
  HARD: 4,
  AVERAGE: 3,
  EASY: 2,
  EASIEST: 1,
  properties: {
    1: {name: "easiest", value: 1},
    2: {name: "easy", value: 2},
    3: {name: "average", value: 3},
    4: {name: "hard", value: 4},
    5: {name: "hardest", value: 5}
  }
};
Object.freeze(DifficultyEnum);


module.exports = DifficultyEnum;
