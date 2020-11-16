// GIVEN I am using a daily planner to create a schedule

$(document).ready(function(){
    
    var currentDay = moment();
    $("#currentDay").text(currentDay.format("MMM Do, YYYY"));

    var description = $(".description");

    var currentHour = parseInt(currentDay.format("H"));
    console.log (currentHour);

    var scheduleHours = ["9:00AM", "10:00AM", "11:00AM", "12:00PM", "1:00PM", "2:00PM", "3:00PM", "4:00PM", "5:00PM"]
    var timeIndex = [9, 10, 11, 12, 13, 14, 15, 16, 17]

    for (i = 0; i < scheduleHours.length; i++) {

        //set .description to timeIndex
        // timeIndex.addClass("description");
        
        
        if (timeIndex[i] < currentHour){
            description.addClass("past");
        }
    
        else if (timeIndex[i] === currentHour) {
            description.addClass("present");
        }
    
        else {
            description.addClass("future");
        }

    }


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
        var parentEl = $(this).parent().attr("id").val();
        localStorage.setItem(clickEvent, parentEl); 
    // localStorage.getItem(JSON.stringify(clickEvent));
    });


})