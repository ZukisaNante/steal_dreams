var getDateArray = function(start, end) {
    var arr = new Array();
    var dt = new Date(start);
    while (dt <= end) {
        arr.push((new Date(dt)).toString().substring(0, 15)); //save only the Day MMM DD YYYY part
        dt.setDate(dt.getDate() + 1);
    }
    return arr;
}

/**
 * this will prepare a date array
 */
var prepareDateArray = function(dtArr) {
    var arr = new Array();
    for (var i = 0; i < dtArr.length; i++) {
        arr.push((new Date(dtArr[i])).toString().substring(0, 15)); //save only the Day MMM DD YYYY part
    }
    return arr;
}

/**
 * this will return an array consisting of the
 * working dates
 */
var getWorkingDateArray = function(dates, hoildayDates, workingWeekendDates) {

    // remove holidays
    var arr = dates.filter(function(dt) {
        return holidaysArray.indexOf(dt) < 0;
    });

    // remove weekend dates that are not working dates
    var result = arr.filter(function(dt) {
        if (dt.indexOf("Sat") > -1 || dt.indexOf("Sun") > -1) {
            if (workingWeekendDates.indexOf(dt) > -1) {
                return dt;
            }
        } else {
            return dt;
        }
    });

    return result;

}

// start and end dates
var startDate = new Date("2019-10-28"); //YYYY-MM-DD
var endDate = new Date("2019-11-03"); //YYYY-MM-DD

/**
 * holidays and working weekends
 *
 * if not applicable then set it as an empty array
 * example: if no offical holidays then set
 * officalHolidays = []
 * similarly, if no working weekends then set
 * workingWeekends = []
 */
var officalHolidays = [
    { New Years Day: "2019 - 1 - 1", },
    [22, 4, "Easter Monday"],
    [12, 25, "Christmas Day"],
    [30, 5, "Labour Day"],
    [10, 6, "Pentecost Monday"],
    [21, 6, "Belgium National Day "],
    [15, 8, " Assumption Day "],
    [3, 1, "Presidents Day "],
    [11, 1, "All Saintsâ€™ Day "],
    [11, 11, "Armistice Day"]
]; //YYYY-MM-DD
var workingWeekends = ["2019-11-07"]; //YYYY-MM-DD

// compute date array between start and end dates
var dateArray = getDateArray(startDate, endDate);

// prepare the holidays array
var holidaysArray = prepareDateArray(officalHolidays);

; // prepare the working weekends array
var workingWeekendsArray = prepareDateArray(workingWeekends);

// get the working days array
var workingDateArray = getWorkingDateArray(dateArray, holidaysArray, workingWeekendsArray);

// output
console.log(workingDateArray);
console.log(holidaysArray)