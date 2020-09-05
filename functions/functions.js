
const randomInt = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

const sumArr = arr => arr.reduce((curr, next) => curr + next);

exports.randomInt = randomInt;
exports.sumArr = sumArr;