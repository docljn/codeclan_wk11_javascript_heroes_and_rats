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

module.exports = UrgencyEnum;
