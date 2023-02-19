const multiplicationTable = function (maxValue) {
  // const numbers = [1,2,3,4,5,6,7,8,9,10]
  let line = ""; //we want to print as strings
  //need a nested for-loop to create a grid
  for (let i = 1; i <= maxValue; i++) {
    //this outer loop will make the number of rowns depending on the maxValue
    // console.log(maxValue * numbers[i])
    for (let k = 1; k <= maxValue; k++) {
      // for each number the outer loop goes through, the inner loop will create output by doing x times 10
      line += i * k + " "
      console.log(line)
    }
    line = "";

  }
};

console.log(multiplicationTable(5));
