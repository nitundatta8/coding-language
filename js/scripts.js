


$(document).ready(function(){

  $("#sec-2").hide();
  $("#sec-3").hide();
});

function showNextQuiz(id){


  console.log("id" +id)
  $("#sec-"+(id-1)).hide();
  
  $("#sec-"+id).show();
}