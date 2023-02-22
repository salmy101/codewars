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
bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];




const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  // Code here!
  for(let ing in recipes){ // loop the recipes object to access the ingredients array
    for(let a of bakeryA){ // loop thorugh items available in bakery A
      if((recipes[ing].ingredients).includes(a)){ // if one of there item is in any of the recipes
        for (let b of bakeryB) { // loop through bakery b to see if they have any ingredients to the recipe as well
          if((recipes[ing].ingredients).includes(b)){ //if so, return the recipe
            return recipes[ing].name

          }
        }
      } 
    }
  }

  
};
console.log(chooseRecipe(bakeryA, bakeryB, recipes));

