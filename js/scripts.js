
var answerList = [];
$(document).ready(function(){

  $("#sec-1").hide();
  $("#sec-2").hide();
  $("#sec-3").hide();
  $("#sec-4").hide();
  $("#sec-5").hide();
  
});

function showNextQuiz(id, answer){

  var currentSection = id-1;
  var nextSection = id;
  answerList[currentSection]=answer;
  console.log("currentSection:" +currentSection);
  $("#sec-"+currentSection).hide();
  $("#sec-"+nextSection).show();

  if(nextSection===5){
      console.log(answerList)
      var result = "C#"
      if(answerList[0]==='developer' && answerList[1]==='Web' && answerList[2]==='UX' ){
        result="Since You like Web Development and UI, Javascript is good for you";
      }else if(answerList[0]==='fun' && answerList[1]==='Web' &&  answerList[2]==='UX' ){
        result="For fun try HTML5, BootStrap and CSS";
      }else if(answerList[0]==='developer' &&  answerList[2]==='Logic'  && answerList[4]==='No'){
        result="Since you want to backend developer, C# and SQL is good for you";
      }else if(answerList[0]==='developer' &&  answerList[2]==='Logic' && answerList[4]==='Yes' ){
        result="Since you have experience and want to be  backend developer,"+
        " Java, Javascript, BootStrap and SQL is good for you";
      }else{
        result="You can start with HTML5, CSS, Bootstrap and Javascript";
      }
      $("#result").text(result);
  }


}

//1 --> developer  startup fun
//2 Web Mobile Desktop
// 3 UX Logic
//4 Windows Mac CrosPlatForm
//5 Yes No
//"developer", "Web", "Logic", "Mac", "Yes
