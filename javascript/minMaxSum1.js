// minMaxSum
// write a function that given 5 numbers in an array will return the lowest
// and the highest possible values when summing 4 out of the 5 numbers.
// return these values in a string


const arr = [5,4,2,3,1]
//output 18(4 highest numbers) and 14 (the 4 lowest numbers)

// const minMaxSum = function(array){
//   //find a way to sort lowest to highest
//   // add the first 4, return it as a variable called lowest
//   //in the opposite direction , return as variable called highest

//   let lowest = 0;
//   let highest = 0;
//   const sortedArr = arr.sort((a,b) => a - b
// )
//     for (let i = 1; i < sortedArr.length; i++){
//       highest += sortedArr[i]
//     }
//     for(let i = 0; i < sortedArr.length - 1; i++){
//       lowest += sortedArr[i]
//     }
//   // lowest = sortedArr[0] + sortedArr[1] + sortedArr[2] + sortedArr[3]
//   // highest = sortedArr[4] + sortedArr[1] + sortedArr[2] + sortedArr[3]
//   return lowest + " " + highest

// }


const minMaxSum = function (arr){

  const highest = arr.sort((a, b) => a - b).slice(1).reduce((acc, current) => {
    return acc + current
  }, 0)

  const low = arr.sort((b , a) => a + b).pop()
  const lowest = arr.reduce((acc, current) => {
    return acc + current
  }, 0)
 


  // console.log(arr.sort((a,b) => a - b ).slice(1).reduce())
  // console.log(arr.slice(-1))

  return highest + lowest;

}

console.log(minMaxSum(arr));

