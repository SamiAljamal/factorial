$(document).ready(function(){
  $("#counter").submit(function(event){
    var number= parseInt($("#factorial").val());
    var total=1;
    for(i=number; i > 0; i--){
      total *= i;


    };

    $("#original").text($("#factorial").val());
    $("#results").text(total);
    $('#displayresults').removeClass('hidden');



    event.preventDefault();



  });


});
