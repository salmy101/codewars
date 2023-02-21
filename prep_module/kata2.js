

const multiplicationTable = function(max){
  let line = "";
  for (let i = 1; i <= max; i++){ // the outer loop is stuck until inner ges through every possible iteration
    for (let k = 1; k <= max; k++){ //once this is done, it jumps out loop and i becomes 2, starts over till k is 5, jumps out again
      // console.log(`this is i: ${i} and this is k: ${k}`) // 1 1 , 1 2, 1 3...2 1, 2 2, 2 3, ..., 5 5
      line += (i * k)  + ' '
    }
  }
  return line;
}

console.log(multiplicationTable(5));


const printMultiplicationTable = function(max){
  for (let i = 1; i <= max; i++){ // the outer loop is stuck until inner ges through every possible iteration
    for (let k = 1; k <= max; k++){ //once this is done, it jumps out loop and i becomes 2, starts over till k is 5, jumps out again
      console.log(`${i} x ${k} = ${i * k}`) // 1 1 , 1 2, 1 3...2 1, 2 2, 2 3, ..., 5 5
      
    }
  }
}

console.log(printMultiplicationTable(5));