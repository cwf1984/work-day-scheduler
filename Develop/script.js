// GIVEN I am using a daily planner to create a schedule


// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

var currentDay = moment();
$("#currentDay").text(currentDay.format("MMM Do, YYYY"));

var dayHours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
var textInput = $("#textInput");

for (var i = 0; i < dayHours.length; i++) {
    var currentHourOne = parseInt(currentDay.format("H"));
    var currentHourTwo = currentDay.hour();
    console.log(currentHourOne, currentHourTwo);
    //textarea color coded as currentHourTwo

    if (currentDay < dayHours) {
    textInput.attr("class", "past");
    }

    else if (currentDay == dayHours) {
    textInput.attr("class", "present");
    }

    else {
    textInput.attr("class", "future");
    }
};

// var currentHour = moment().format("LT");
// console.log(currentHour);


// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

//code checks current hour to determine if past, present or future and apply appropriate style from css -- modify class name to set state to modify colors

// function timeChange() {
//     for (var i=0; i < .length; i++) {



// timeChange;
// console.log(timeChange);
// }}};

// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

function storeLocalStorage() {

var userInput = localStorage.getItemById("textInput", JSON.stringify(userInput));

textInput.textContent=userInput;


var userInput = localStorage.getItemById("textInput")
var saveBtn = document.querySelector("#saveBtn");

saveBtn.addEventListener("click", function(event){
    event.preventDefault();

    var textInput = document.getItemById("textInput").value;

    localStorage.setItem("userInput", userInput);
})};




// WHEN I refresh the page
// THEN the saved events persist



//logic to loop over hours of the day

// for loop to loop over 9-5 (0900-1700)
//before for loop, get and store current time using moment.js
// if time > timeblock, grey it out and go next available hour



// apply appropriate status to an html element helping represent taht hour of the day

// take different inputs the user is giving in different textareas