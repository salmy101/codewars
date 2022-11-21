/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

//LVL noob BEGINNER
function abbrevName(name) {
  let last;

  for (let i = 0; i < name.length; i++) {
    if (name[i] === " ") {
      last = name[i + 1].toUpperCase();
    }
  }
  const first = name[0].toUpperCase();
  return `${first}.${last}`;
}


//better practice
function abbrevName(name){

  // code away
    const array = name.split(" ") //you can split at the space! make to elements and use the index to get the letters
    return `${array[0][0]}.${array[1][0]}`.toUpperCase()
}
