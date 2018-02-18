const DifficultyEnum = require("./difficulty");


const UrgencyEnum = require("./urgency");



const Task = function (description, reward, difficulty, urgency) {
  this.description = description;
  this.reward = reward;
  this.rewardDataCleansing();
  this.difficulty = difficulty;
  this.difficultyDataCleansing();
  this.urgency = urgency;
  this.urgencyDataCleansing();
  this.completionStatus = false;
};

/*
https://stijndewitt.com/2014/01/26/enums-in-javascript/
*/

/*
http://www.codereadability.com/javascript-default-parameters-with-or-operator/
*/

Task.prototype.difficultyDataCleansing = function () {
  if ((this.difficulty === undefined) || (typeof(this.difficulty) != 'number')) {
    this.difficulty = 3;
  }
  if (typeof(this.difficulty) === 'number'){
    this.difficulty = Math.round(this.difficulty);
  }
  if (this.difficulty < 1) {
    this.difficulty = 1;
  }
  if (this.difficulty > 5) {
    this.difficulty = 5;
  }
};

Task.prototype.urgencyDataCleansing = function () {
  if ((this.urgency === undefined) || (typeof(this.urgency) != 'number')) {
    this.urgency = 1;
  }
  if (typeof(this.urgency) === 'number'){
    this.urgency = Math.round(this.urgency);
  }
  if (this.urgency < 1) {
    this.urgency = 1;
  }
  if (this.urgency > 3) {
    this.urgency = 3;
  }
};

Task.prototype.rewardDataCleansing = function () {
  if ((this.reward === undefined) || (typeof(this.reward) != 'number') || (this.reward < 1)) {
    this.reward = 1;
  }
  if (typeof(this.reward) === 'number'){
    this.reward = Math.round(this.reward);
  }
};


Task.prototype.getDifficultyLevel = function () {
  return DifficultyEnum.properties[this.difficulty].name;
};

Task.prototype.getUrgencyLevel = function () {
  return UrgencyEnum.properties[this.urgency].name;
};

Task.prototype.markCompleted = function () {
  this.completionStatus = true;
};

Task.prototype.markNotCompleted = function () {
  this.completionStatus = false;
};



module.exports = Task;
