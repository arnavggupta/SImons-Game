
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern=[];
var Level=0;
var started=false;
$(document).keypress(function(){
    if(!started){
        $("h1").text("Level "+Level);
        nextsequence();
         started=true;
    }
})


$(".btn").click(function(){
var userChosenColour= $(this).attr("id");

userClickedPattern.push(userChosenColour);
playSound(userChosenColour);
animate(userChosenColour);

checkAnswer(userClickedPattern.length-1);
})

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]=== userClickedPattern[currentLevel]){
console.log("sucess");

if(userClickedPattern.length===gamePattern.length){
    setTimeout(function () {
        nextsequence();
      }, 1000);
}

    }
    else{
        console.log("Wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);

        
      $("#level-title").text("Game Over, Press Any Key to Restart");

      startOver();
    }
}

function nextsequence(){

    userClickedPattern=[];
Level++;
$("h1").text("Level "+Level);
  var randomnumber= Math.floor(Math.random()*4);  

  var randomChosenColour=buttonColours[randomnumber];

  gamePattern.push(randomChosenColour);

  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  var audio=new Audio("sounds/"+randomChosenColour+".mp3");
  audio.play();
}

function playSound(name){

    var audio1= new Audio("sounds/"+name+".mp3");
    audio1.play();    
}

function animate(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100);

}

function startOver() {

    
    Level = 0;
    gamePattern = [];
    started = false;
  }
  