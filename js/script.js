var a = moment().format('dddd, DD MMMM YYYY');
var currentTime = moment().format('H');
$('textarea').addClass('description');


displayPageContent() ;

// //For testing
// var currentTime = "11";

// Display date using moment.js
$("#currentDay").text(a);

// console.log(currentTime);
var x = "hr" + currentTime;
if (currentTime>8 && currentTime<=17){
    
    //Current  
    // document.getElementById(x).classList.add("present");
    $("#" + x).addClass("present");

    //Past
    for(i=8; i< parseInt(currentTime); i++){
        document.getElementById("hr" + i).classList.add("past");
        // $("textarea"[i]).addClass("past");
    }

    //future
    for(i= parseInt(currentTime)+1; i<=17; i++){
        document.getElementById("hr" + i).classList.add("future");
        // $("textarea"[i]).addClass("future");
    }
}else{
    // out of business hour
    for(i= 8; i<=17; i++){
        document.getElementById("hr" + i).style.backgroundColor = "#d3d3d3";
        // $("textarea"[i]).addClass("past");
    }

}

// Save the input text to local storage
$(".saveBtn").click(function(){
    
    var id = this.id.replace('btn','');

    var taskToDo = document.getElementById(id).value;
    localStorage.setItem(id, taskToDo);



})


// Display the stored value to the textarea
function displayPageContent(){

    for(i=0;i<Object.entries(localStorage).length;i++)
    {
        var key = Object.entries(localStorage)[i][0];
        var value = Object.entries(localStorage)[i][1];
        if(value !== null){
            document.getElementById(key).innerHTML = value;
        }
        

    }
   
}





