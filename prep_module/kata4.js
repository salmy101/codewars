let bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
let bakeryB = ["milk", "butter", "cream cheese"];
let recipes = [
  {
    name: "Coconut Sponge Cake",
    ingredients: ["coconut", "cake base"],
  },
  {
    name: "Persian Cheesecake",
    ingredients: ["saffron", "cream cheese"],
  },
  {
    name: "Custard Surprise",
    ingredients: ["custard", "ground beef"],
  },
];

const check = function (arr1, arr2, arr3) {

};

check(bakeryA);

const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  // Code here!
  for(let ing in recipes){
    console.log(recipes[ing].ingredients)
  }
  
  
};

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
