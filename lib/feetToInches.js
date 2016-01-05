// module.exports = {
  var tupelize = function (inStr) {
    return (inStr == 0) ? [0, 0] : inStr.replace('"','').split("'");
  }

  var feetToInches = function (inputTuple) {
    return parseFloat(inputTuple[0] * 12) + parseFloat(inputTuple[1]);
  }

// }
module.exports = function (x) {
  return feetToInches(tupelize(x));
}
