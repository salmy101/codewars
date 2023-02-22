// const talkingCalendar = function(date) {
//   let year = 0;
//   let month = 0;
//   for (let i = 0; i <= date.length; i++){
//     if(i < 4){
//       year = year + date.charAt(i)
//       year.toString()
//     } if(i > 4 && i <= 6){
//       month += month + date.charAt(i)
//       console.log(month)
//     }
//   }
//   return `i was born in ${month.slice(5)}`
// };

const talkingCalendar = function (date) {
  let year = date.substr(0, 4); //start at index 0 and legth of new string is 4 elements
  let month = date.substr(5, 2); // start at 5 only 2 elemnst long
  let day = date.substr(8, 4);

  switch (month) {
    case "01":
      month = "January";
      break;
    case "02":
      month = "Feruary";
      break;
    case "03":
      month = "March";
      break;

    case "04":
      month = "April";
      break;

    case "05":
      month = "May";
      break;

    case "06":
      month = "June";
      break;

    case "07":
      month = "July";
      break;

    case "08":
      month = "August";
      break;

    case "09":
      month = "September";
      break;

    case "10":
      month = "October";
      break;

    case "11":
      month = "November";
      break;

    case "12":
      month = "December";
      break;
  }

  return `${month} ${day}, ${year}`
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
