const sayHello = () => {
  return `hello there!`;
};

// console.log(module.exports);

module.exports.sayHello = sayHello;

const ANSWER_TO_EVERYTHING = 42;

module.exports.ANSWER_TO_EVERYTHING = ANSWER_TO_EVERYTHING;

// module.exports = {
//   sayHello,
//   ANSWER_TO_EVERYTHING
// };

// console.log(module.exports);