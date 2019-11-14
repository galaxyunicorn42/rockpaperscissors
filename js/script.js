// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
let userChoice =""
let computerChoice =""
let randomChoice =0
$('document').ready(function() {
 randomChoice= Math.random();
$("#shoot").click(function(){
    let input= $("#input").val();
    $("#userChoice").text(input);
    console.log(input);
    if(randomChoice>.66){
    computerChoice= "rock";
}
else if( randomChoice>.33){
    computerChoice ="paper";
}
else{
    computerChoice="scissors";
}
console.log(computerChoice)
$("#computerChoice").html(computerChoice);
if (userChoice === computerChoice){
    console.log("tied")
    $("#result").html("tied!");
    
}
else if(userChoice==="rock"&&computerChoice==="paper" ){
  $("#result").html("computer wins")
}
else if(userChoice==="scissors"&&computerChoice==="rock"){
  $('#result').html("computer wins")
}
else if(userChoice==="scissors"&&computerChoice==="paper"){

}
});
});
