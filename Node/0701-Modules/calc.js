let add = array => {
  let price = array.map(a => a.price);
  return price.reduce((a, b) => a + b);
};

let subtract = array => {
  let price = array.map(a => a.price);
  return price.reduce((a, b) => a - b);
};

module.exports = {
  add: add,
  subtract: subtract
};
