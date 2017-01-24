//Business Logic
var row = 0;
var col = 0;
var square = 0;
var array = [];
var Output = [];
var chunk = [];

function convert () {

  square = Math.sqrt(Input.length);
  var m = Input.length;
  //for perfect square
 if ( square === parseInt(square,10) ) {
   col = Math.sqrt(Input.length)
   for (j=0; j < col ; j++ ) {
   for (var index = j; index < m ; index+=col) {
    Output.push(array[index]);
  ;} }
 // for not perfect square
 } else {
   col = Math.round(square);
   for (j=0; j < col; j++ ) {
   for (var index = j; index < m; index+=col)
    { Output.push(array[index]);
   }
 }
 };
//Create 2 new arrays: one for the rearranged strings and another to make group of 5
 Output=Output.join("");
 for (var k = 0; k < Output.length; k+=5) {
   chunk.push(Output.substring(k,k+5));
 }
 chunk = chunk.join("  ")
};

//User Interface
$("document").ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    Input = $("#userInput").val().replace(/[\. ,:-]+/g, ""); //regEx replace special characters with blank//
    array = Input.split("");
    $(".result").show();
    convert();
    $("#crypt").text(chunk);
  });
});
