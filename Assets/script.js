// GIVEN I am using a daily planner to create a schedule

$(document).ready(function(){
    
    var currentDay = moment();
    $("#currentDay").text(currentDay.format("MMM Do, YYYY"));


    //
    var currentHour = parseInt(currentDay.format("H"));
    console.log (currentHour);


    //if current color not correct, change to numbers only
    var scheduleHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

    
    //for loop to loop through the length of the scheduleHours variable which references each timeblock in the scheduler

    for (i = 0; i < scheduleHours.length; i++) {

        //pull description class from each textarea and set to variable textAreaArray
        var textAreaArray = $(".description");

        //each item in the textAreaArray is assigned to the currentEl variable
        var currentEl = textAreaArray[i];
        // console.log(currentEl);

        // adding the data-index to the currentEl variable and setting to new variable to use below
        var colorCode = parseInt($(currentEl).attr("data-index"));
        
        //verify that data-index is converted from string to a number
        console.log(typeof colorCode);

        // when the data-index number is less than the currentHour, will be color coded to gray
        if (colorCode < currentHour) {
            $(currentEl).addClass("past");
        }

        //when the data-index number is the same as the currentHour, should have color of red
        //if not working try ==
        else if (colorCode === currentHour) {
            $(currentEl).addClass("present");
        }

        //when the data-index number is higher than the currentHour, the text area will be green
        else {
            $(currentEl).addClass("future");
        }

    }


    //clicking on save button, the input that the user typed is saved to local storage

    $(".saveBtn").on("click", function(event){
        //select sibling of button element wanted
        event.preventDefault;
        
        var textAreaValue = $(this).siblings(".description").val();
        var parentEl = $(this).parent().attr("id");
        console.log(textAreaValue, parentEl);

        localStorage.setItem(parentEl, textAreaValue);
    });

    //returning the value from local storage to the text input field
    //when the page is refreshed the text does not stay in the time block as it should
    $("#9AMtextInput").val(localStorage.getItem("9AM"));
    $("#10AMtextInput").val(localStorage.getItem("10AM"));
    $("#11AMtextInput").val(localStorage.getItem("11AM"));
    $("#12PMtextInput").val(localStorage.getItem("12PM"));
    $("#1PMtextInput").val(localStorage.getItem("1PM"));
    $("#2PMtextInput").val(localStorage.getItem("2PM"));
    $("#3PMtextInput").val(localStorage.getItem("3PM"));
    $("#4PMtextInput").val(localStorage.getItem("4PM"));
    $("#5PMtextInput").val(localStorage.getItem("5PM"));
})