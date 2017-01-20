//Business Logic
var row = 0;
var col = 0;
var fake = 0;
var array = [];

function convert () {
  fake = Math.sqrt(Input.length);
  var m = Input.length;
  console.log(fake);
  console.log(m);
 if ( fake === parseInt(fake,10) ) {
   row = fake;
   col = fake;
  for (var i = 0; i < m ; i+=col) {
     console.log(array[i]);
   }


 } else {
   row = Math.round(fake) + 1;
   col = Math.round(fake);
   console.log(row);
   console.log(col);
   for (var i = 0; i < m ; i+=col) {
     console.log(array[i]);
   }
}
};

//User Interface
$("document").ready(function() {
  $(".form-group").submit(function(event) {
    event.preventDefault();
    Input = $("#userInput").val();
    array = Input.split("");
    console.log(array);
    $(".result").show();
    convert();
    $("#crypt").text(array);
  });
});
