// Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017.

const talkingCalendar = function(date) {
  let split = date.split("/");
  let readable = "";
  if (split[1] === "01") {
    readable += "January "
  }
  else if (split[1] === "02") {
    readable += "February "
  }
  else if (split[1] === "03") {
    readable += "March "
  }
  else if (split[1] === "04") {
    readable += "April "
  }
  else if (split[1] === "05") {
    readable += "May "
  }
  else if (split[1] === "06") {
    readable += "June "
  }
  else if (split[1] === "07") {
    readable += "July "
  }
  else if (split[1] === "08") {
    readable += "August "
  }
  else if (split[1] === "09") {
    readable += "September "
  }
  else if (split[1] === "10") {
    readable += "October "
  }
  else if (split[1] === "11") {
    readable += "November "
  }
  else if (split[1] === "12") {
    readable += "December " 
  }
  if(split[2] === "01") {
    readable += "1st, ";
  }
  else if(split[2] === "02") {
    readable += "2nd, ";
  }
  else if(split[2] === "03") {
    readable += "3rd, ";
  }
  else if(split[2] === "04" || split[2] === "05" || split[2] === "06" || split[2] === "07" || split[2] === "08" || split[2] === "09") {
    readable += split[2].slice(1) + "th, ";
  }
  else if(split[2] === "21" || split[2] === "31") {
    readable += split[2] + "st, ";
  }
  else if(split[2] === "22") {
    readable += split[2] + "nd, ";
  }
  else if(split[2] === "23") {
    readable += split[2] + "rd, ";
  }
  else {
    readable += split[2] + "th, ";
  }
  readable += split[0];
  return readable;
  
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));