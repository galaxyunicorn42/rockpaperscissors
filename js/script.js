// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$('document').ready(function() {
$("#shoot").click(function(){
    let input= $("#input").val();
    $("#userChoice").text(input);
    console.log(input);
});
});