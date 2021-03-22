
console.log("Hello world!");

$("#myButton").ready(function(){
  $("#myButton").click(function(){
    $('#myDiv').animate({
      'font-size': 50
    }, 2000);
  });
});

