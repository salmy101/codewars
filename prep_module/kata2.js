// const multiplicationTable = function (maxValue) {
//   // const numbers = [1,2,3,4,5,6,7,8,9,10]
//   let line = ""; //we want to print as strings
//   //need a nested for-loop to create a grid
//   for (let i = 1; i <= maxValue; i++) {
//     //this outer loop will make the number of rowns depending on the maxValue
//     // console.log(maxValue * numbers[i])
//     for (let k = 1; k <= maxValue; k++) {
//       // for each number the outer loop goes through, the inner loop will create output by doing x times 10
//       line += i * k + " "
//       console.log(line)
//     }
//     line = "";

//   }
// };

const multiplicationTable = function(max){
  let line = "";
  for (let i = 1; i <= max; i++){ // the outer loop is stuck until inner ges through every possible iteration
    for (let k = 1; k <= max; k++){ //once this is done, it jumps out loop and i becomes 2, starts over till k is 5, jumps out again
      console.log(`this is i: ${i} and this is k: ${k}`) // 1 1 , 1 2, 1 3...2 1, 2 2, 2 3, ..., 5 5
      line += (i * k) + " "

    }


  }
  return line;
}

console.log(multiplicationTable(5));
