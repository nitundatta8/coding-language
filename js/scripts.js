

var answerList = []
$(document).ready(function(){

  $("#sec-1").hide();
  $("#sec-2").hide();
  $("#sec-3").hide();
});

function showNextQuiz(id, answer){

  var currentSection = id-1
  var nextSection = id
  answerList[currentSection]=answer;
  console.log("currentSection:" +currentSection)
  $("#sec-"+currentSection).hide();
  $("#sec-"+nextSection).show();

  if(nextSection==3){
       
      var result = "C#"
      //if(answer[0]==='dev'an)
      $("#result").text(result)
  }


}