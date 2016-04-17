'use strict';

function getMonthName(number){
  // return the complete alpha month name
  var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  return monthNames[number];
}

function getMonthNumber(monthName){
   var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  
  return monthNames.findIndex(function (ele){return this === ele }, monthName);
}

function validateDay(year,month,day){
   // adapted from http://stackoverflow.com/questions/6177975/how-to-validate-date-with-format-mm-dd-yyyy-in-javascript
   var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    // Adjust for leap years
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
    {
        monthLength[1] = 29;
    }
    // Check the range of the day
    return day > 0 && day <= monthLength[month];
}

function convertNaturalDate2Timestamp( natural){
   // regex /\w+\s\d+,\s+\d+/
  var m = natural.match( /(\w+)\s(\d+),\s+(\d+)/);//parse the data
  var mm = getMonthNumber(m[1]);
  console.log("regex match:" + m[1] + m[2] + m[3]+mm);
  if (mm === -1){
     return null;
  }
  if (!validateDay(m[3],mm, m[2])){
     return null;
  }
  
  var dtUTC = Date.UTC(m[3],mm, m[2]);
  if (dtUTC === null){
     return null;
  }
  return dtUTC/1000;
}


function TimestampApi() {
   
   this.getJson = function (req, res) {
      var dtJson = { "unix": null, "natural": null };
      var timevalue = req.params.timevalue;
      console.log(timevalue);
      var regAllNum = new RegExp('^\\d+$');
      if (regAllNum.test(timevalue)){
         // this is a time stamp so get the natural date
         dtJson.unix = timevalue;
         var dt = new Date(Number.parseInt(timevalue)*1000);
         dtJson.natural = getMonthName(dt.getMonth()) + " " + dt.getDate() + ", " + dt.getFullYear();       
      } else {
         //get unix time stamp from natural date
         dtJson.natural = timevalue;
         dtJson.unix = convertNaturalDate2Timestamp(timevalue);
      }
      console.log(dtJson);
      res.json(dtJson);

   }

};

module.exports = TimestampApi;
