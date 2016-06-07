var findFactor = function(number){
  if (number > 0){
    return number * findFactor(number-1);
  }
  else{
    return 1;
  }

};

$(document).ready(function(){
  $("#counter").submit(function(event){
    var number= parseInt($("#factorial").val());
    var total=findFactor(number);
    
    $("#original").text($("#factorial").val());
    $("#results").text(total);
    $('#displayresults').removeClass('hidden');



    event.preventDefault();



  });


});
