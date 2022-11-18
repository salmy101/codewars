/* The input data for this exercise will be two dimensional array (an array of arrays), 
where each sub-array will have two numeric values.
Create a function named repeatNumbers that will return a string with each of the given values
 repeated the appropriate number of times, if there are multiple sets of values each set should 
 be separated by a comma. */

 const repeatNumbers = function(data) {
  // Put your solution here
     data.forEach(el => console.log(el[0].toLocaleString().repeat(el[1])))

};

console.log(repeatNumbers([[1, 10]])); // 1111111111
console.log(repeatNumbers([[1, 2], [2, 3]])); // 11, 222
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2], [6,8]]));// 10101010, 343434343434, 9292


