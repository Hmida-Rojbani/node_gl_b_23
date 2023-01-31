function sum(tab) {
  var sum = 0;
  tab.forEach((element) => (sum += element));
  return sum;
}

module.exports = sum;
