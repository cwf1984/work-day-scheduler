// GIVEN I am using a daily planner to create a schedule

$(document).ready(function(){


// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

var currentDay = moment();
$("#currentDay").text(currentDay.format("MMM Do, YYYY"));


// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// 
var dayHours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
var description = $(".description");

// this is supposed to loop over the current hour, which is listed in dayHours variable to change the color of the block
for (var i = 0; i < dayHours.length; i++) {
    var currentHourOne = parseInt(currentDay.format("H"));
    var currentHourTwo = currentDay.hours();
    console.log(currentHourOne, currentHourTwo);

    if (currentHourOne < currentDay) {
    description.attr("class", "past");
    }

    else if (currentHourTwo == currentDay) {
    description.attr("class", "present");
    }

    else {
    description.attr("class", "future");
    }
};


// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
//  I am still working on trying to get local storage to work

$(".saveBtn").on("click", function(){
    var siblingEl = $(this).siblings("#textInput").val();
    console.log(clickEvent);
    var parentEl = $(this).parent().attr("id");
    localStorage.setItem(clickEvent, parentEl); 
    localStorage.getItem(JSON.stringify(clickEvent));
});


})