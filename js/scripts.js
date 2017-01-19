//Business Logic
var row = 0;
var col = 0;
var fake = 0;

function convert () {
  fake = Math.sqrt(Input.length);
 if ( fake === parseInt(fake,10) ) {
   row = fake;
   col = fake;

 } else {
   alert("blah");
   console.log(Input.length);
   row = Math.round(fake) + 1;
   col = Math.round(fake);



}
};

//User Interface
$("document").ready(function() {
  $(".form-group").submit(function(event) {
    event.preventDefault();
    Input = $("#userInput").val();
    $(".result").show();
    convert();
    $("#crypt").text();
  });
});
