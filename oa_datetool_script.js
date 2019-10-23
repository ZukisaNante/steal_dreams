/* // declaring variables
var d = new Date();
var month = d.getMonth() + 1;
var day = d.getDate();
//output
var output = (day < 10 ? '0' : ' ') + day + (month < 10 ? '0' : ' ' ) + '/' + month + d.getFullYear();

// onload date function using 'ready' instead of 'window' method
$(document).ready(function todayDate(){
  $("#datum_vandaag").output. show();
}); */

// create date function
function todaysDate(){
  var todayDate = new Date();
  $("#datum_vandaag").html(todayDate);
}
$(document).ready(function(){
  todaysDate();
})

