//In this exercise, we will be converting a normal string into camelCase text.

const camelCase = function(str){
  let newWord = ""; //start with an empty str that we can return or add odito
  let wordArr = str.split(" ") //split up at every space = individual words
  for(let i in wordArr) {
    if(i > 0) { //any word that isnt first
      newWord += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1) //last part add the reminader of the word
    } else { // add to the empty string, the first letter uppercase + remainder of last word
      newWord += wordArr[i] //if its only oe word, aka i = 0, then just retuen that word
    }
  }  
  return newWord;
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));

