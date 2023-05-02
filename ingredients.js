const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
} // while loop that prints out all our ingredients

for (var x = 0; x < ingredients.length; x++) {
  console.log(ingredients[x]);
}// for looop that prints out all our ingredients

for (z = ingredients.length - 1; z >= 0; z--) {
  console.log(ingredients[z]);
} // for loop reversing the array