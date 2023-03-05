/** 
isValidSubsequence
Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.
A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array.
For instance, the numbers  [1, 3, 4  form a subsequence of the array [1, 2, 3, 4] and so do the numbers [2, 4].
Note that a single number in an array and the array itself are both valid
subsequences of the array.

*Sample Input*
array = [5, 1, 22, 25, 6, -1, 8, 10]`
sequence = [1, 6, -1, 10]
*Sample Output*
true
*/



const arr1 = [5, 1, 22, 25, 6, -1, 8, 10]
const arr2 = [1, 6, -1, 10]


// const isValidSubsequence = function(arr1, arr2){
//   let pointer = 0;
//   let output;
  
//   for (let i = 0; i < arr1.length ; i++) {
//     if (arr1.includes(arr2[i])){ // if the first array has everything that the second array has
//       pointer += 1 //then increase the pointer by 1
//     }
//     if(pointer === arr2.length){
//       output = true
//     }else {
//       output = false
//     }
//   }
//   return output
// }


const isValidSubsequence = function(arr1, arr2){
  //how do i get a true or false output..i need an if statemnt,
  //how do i look through array to see if its true..i need a loop


  let j = 0 //set a variable equal to j, this represents the index      of the sequence array
  for (let i = 0; i <= arr1.lenght; i++){
    // I needed an if statement to see if the current number in the array is equal to the current sequence number in the sequence array.
    if(arr1 === arr2[j]){ //j starts at 0 just like i, ifnumbers match for each number from each array , j increase
      j += 1
    }
  }
  if(j === arr2.lenght) { //if j (number of times they match) is equal to the length of the second arr, then stop
    return true
  } else {
    return false
  }
}

console.log(isValidSubsequence(arr1, arr2))