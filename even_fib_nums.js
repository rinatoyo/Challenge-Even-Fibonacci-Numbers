/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs(maxFibValue) {
  let sum = 0;

  // do your work here
  let firstNum = 1;
  let secondNum = 2;

  while (firstNum <= maxFibValue) {
    if (firstNum % 2 === 0) {
      sum += firstNum;
      console.log(sum);
    }

    let nextNum = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = nextNum;
  }
  return sum;
}

// bonus round
function _highestFibonacciNumber(maxFibValue) {
  let highest = 0;

  //define your base case, validate your input

  //do your work here

  return highest;
}

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs: _sumFibs,
  highestFibonacciNumber: _highestFibonacciNumber
};
