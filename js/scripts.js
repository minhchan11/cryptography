//Business Logic


function convert () {



};

//User Interface
$("document").ready(function() {
  $(".form-group").submit(function(event) {
    event.preventDefault();
    Input = $("#userInput").val();
    $(".result").show();
    convert();
    $("#crypt").text(Output);
  });
});
