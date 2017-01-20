//Business Logic
var row = 0;
var col = 0;
var fake = 0;
var array = [];
var Output = [];

function convert () {
  fake = Math.sqrt(Input.length);
  var m = Input.length;
  console.log(fake);
  console.log(m);
 if ( fake === parseInt(fake,10) ) {
   row = fake;
   col = fake;
   console.log(row);
   for (j=0; j <= col ; j++ ) {
   for (var i = j; i < row - 2 ; i+=col) {
    i = (i + col)j
    console.log(array[i]);
    Output.push(array[i]);
    console.log(Output);
    // Output = Output.slice(0,m);
    // console.log(Output);
    // Output = Output.join();
    // console.log(Output);}
   }
 }


 } else {
   row = Math.round(fake) + 1;
   col = Math.round(fake);
   console.log(row);
   console.log(col);
   for (j=0; j <= col; j++ ) {
   for (var i = j; i < row - 2 ; i+=col) {
     i = i + (col*i)
     console.log(array[i]);
     Output.push(array[i]);
     console.log(Output);
    //  Output = Output.slice(0,m);
    //  console.log(Output);
    //  Output = Output.join();
    //  console.log(Output);
   }
 }
 }
};

//User Interface
$("document").ready(function() {
  $(".form-group").submit(function(event) {
    event.preventDefault();
    Input = $("#userInput").val();
    array = Input.split("");
    $(".result").show();
    convert();
    $("#crypt").text(array);
  });
});
