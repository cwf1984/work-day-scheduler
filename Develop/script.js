// GIVEN I am using a daily planner to create a schedule
// THIS r
$(document).ready(function(){
$(".saveBtn").on("click", function(){
    var clickEvent = $(this).siblings("#textInput").val();
    console.log(clickEvent);
    var parentId = $(this).parent().attr("id");
    console.log(parentId); 
    localStorage.setItem(clickEvent, parentId); 
    localStorage.getItem(clickEvent);
})



// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

var currentDay = moment();
$("#currentDay").text(currentDay.format("MMM Do, YYYY"));

var dayHours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
console.log(currentDay);
var description = $(".description");

for (var i = 0; i < dayHours.length; i++) {
    var currentHourOne = parseInt(currentDay.format("H"));
    var currentHourTwo = currentDay.hours();
    console.log(currentHourOne, currentHourTwo);
    //textarea color coded as currentHourTwo

    if (currentHourOne < currentHourTwo) {
    description.attr("class", "past");
    }

    else if (currentHourOne == currentHourTwo) {
    description.attr("class", "present");
    }

    else {
    description.attr("class", "future");
    }
};


// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

//code checks current hour to determine if past, present or future and apply appropriate style from css -- modify class name to set state to modify colors

// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage


// WHEN I refresh the page
// THEN the saved events persist


})