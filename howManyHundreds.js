const howManyHundreds = function (num) {
  let result;
  let remainder;
  remainder = num % 100;
  result = (num - remainder) / 100;
  return result;
}
console.log(howManyHundreds(35));