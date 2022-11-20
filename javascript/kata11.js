
/* Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]

*/

function digitize(n) {
  //code here
  return n.toString().split("").reverse().map(Number);
  // Calls Number on each value in the array (casting it to a number)
              // and returns the array of results. [1,2,3,4]
}
