//Convert boolean values to strings 'Yes' or 'No'.
//if the boolean is true return 'Yes' and if its false, return 'No'


function boolToWord( bool ){
  if(bool === true) { //if the parameter bool is exactly equalt to true (the boolean value), 
    return 'Yes' //return a string Yes
  } else { //else , meaning if it is not the boolena true, therefore it is false
    return 'No' //return the string  No
  }
}