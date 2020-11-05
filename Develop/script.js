// GIVEN I am using a daily planner to create a schedule


// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

var currentDay = moment().format("MMM Do, YYYY");
$("#currentDay").text(currentDay);

var currentHour = moment().format("LT");
console.log(currentHour);

var timeblockHour = [];
var calendarTime = document.getElementsByTagName("time");

timeblockHour.push(...calendarTime);
console.log(timeblockHour);

//turn into integers
for (var i=0; i < timeblockHour.length; i++) {
    timeblockHour[i] = parseInt(timeblockHour[i]);
    console.log(timeblockHour);
}

var hour = $(".hour");

function timeChange() {
    for (var i=0; i < timeblockHour.length; i++) {

if (currentHour > hour) {
    hour.attr("class", "past");
}

else if (currentHour == hour) {
    hour.attr("class", "present");
}

else {
    hour.attr("class", "future")

console.log(timeChange);
}}};


// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

//code checks current hour to determine if past, present or future and apply appropriate style from css -- modify class name to set state to modify colors

// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist



//logic to loop over hours of the day

// for loop to loop over 9-5 (0900-1700)
//before for loop, get and store current time using moment.js
// if time > timeblock, grey it out and go next available hour



//apply appropriate status to an html element helping represent taht hour of the day

//take different inputs the user is giving in different textareas 