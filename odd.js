let oddResult;
const isOdd = function(num){
  if(!(num % 2 === 0)){
    oddResult = true;
  }else {
    oddResult = false;
  }
  return oddResult;
}
console.log("9 isOdd: "+ isOdd(9));