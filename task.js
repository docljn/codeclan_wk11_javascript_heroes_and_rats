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

const UrgencyEnum = {
  URGENT: 3,
  SOON: 2,
  WHENEVER: 1,
  properties: {
    3: {name: "really very urgent", value: 3},
    2: {name: "slightly urgent", value: 2},
    1: {name: "not urgent at all", value: 1}
  }
};
Object.freeze(UrgencyEnum);




const Task = function (description, reward, difficulty, urgency) {
  this.description = description;
  this.reward = reward;
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.completionStatus = false;
};

/*
https://stijndewitt.com/2014/01/26/enums-in-javascript/
*/


Task.prototype.getDifficultyLevel = function () {
  if (this.difficulty < 1) {
    this.difficulty = 1;
  }
  if (this.difficulty > 5) {
    this.difficulty = 5;
  }
  return DifficultyEnum.properties[this.difficulty].name;
};

Task.prototype.getUrgencyLevel = function () {
  if (this.urgency < 1) {
    this.urgency = 1;
  }
  if (this.urgency > 3) {
    this.urgency = 3;
  }
  return UrgencyEnum.properties[this.urgency].name;
};

Task.prototype.markCompleted = function () {
  this.completionStatus = true;
};



module.exports = Task;
