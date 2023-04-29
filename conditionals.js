const raining = true;
const cold = false;

if(raining){
  console.log("Don't forget your umbrella!");
}
if(cold){
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you are ready to go outside!");
if (!raining) {
  console.log("Leave your umbrella at home!");
}

const whichSchool = function (age) {
  let school = "";
  if (age < 13) {
    school = "Elementary School";
  }
  else if (age >= 13 && age <= 18) {
    school = "Secondary School";
  }
  else {
    school = "Lighthouse Labs"
  }
  return school;
  // Your code in here ...
}
