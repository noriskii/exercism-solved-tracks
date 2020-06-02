"use strict";
exports.__esModule = true;
function isLeapYear(year) {
    var response = false;
    if (year % 4 === 0) {
        response = true;
        if (year % 100 === 0) {
            response = false;
            if (year % 400 === 0) {
                response = true;
            }
        }
    }
    return response;
}
exports["default"] = isLeapYear;
console.log(isLeapYear(2016));
//console.log(isLeapYear(1996));
//console.log(isLeapYear(1998));
