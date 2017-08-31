$(document).ready(function() {// start button
//User clicks button to have the quiz application pop up using jquery
var score = 0;
function start(){
    $(".choice1").html("Start")
    $(".choice2").hide()
    $(".choice3").hide()
    $(".choice4").hide()
    $(".choice1").on("click", function(){
        question1();
    })

}
// multiple choice question
var all_questions = [{
    question_string: "What is the room number in 'The Shining' that Danny is told NOT to go into?",
    choices: {
      correct: "Room 237",
      wrong: ["Room 347", "Room 273", "Room 007"]
    }
  }, {
    question_string: "What is the main charaters name in 'Fight Club'?",
    choices: {
      correct: "The Narrator",
      wrong: ["Tyler Durden", "Edward Nortan", "Bruce Banner"]
    }
  }, {
    question_string: "In which Evil Dead film does Ash lose his hand?",
    choices: {
      correct: "Evil Dead II",
      wrong: ["Evil Dead", "Army of Darkness", "Ash vs Evil Dead"]
    }
  }, {
    question_string: "What is Babys real name in the movie 'Baby Driver?",
    choices: {
      correct: "Miles",
      wrong: ["Debora", "Ansel", "Buddy"]
    }
  },  {
    question_string: "How many movies does Freddy Kruger appear in? (Not including the reboot)",
    choices: {
      correct: "8",
      wrong: ["7", "9", "10"]
    }
  }];
// end multiple choice


// Function 1
console.log(all_questions[0].question_string);
function question1 () {
    
    $(".buttons").show();
    $(".choice2").show();
    $(".choice3").show();
    $(".choice4").show();
    $(".h1").html(all_questions[0].question_string);
    $(".choice1").html(all_questions[0].choices.correct);
    $(".choice2").html(all_questions[0].choices.wrong[0]);
    $(".choice3").html(all_questions[0].choices.wrong[1]);
    $(".choice4").html(all_questions[0].choices.wrong[2]);
    $(".choice1").on("click", function() {
   
        rightGif('<img src= "https://media.giphy.com/media/YJDKRQN76wdt6/giphy.gif"/>');
    setTimeout(function(){ question2(); }, 5000);
     console.log(setTimeout);
    
  
    })
      $(".choice2,.choice3,.choice4").on("click", function() {
       wrongGif('<img src= "https://media.giphy.com/media/tB13rHKZhSwIo/giphy.gif"/>');
       setTimeout(function(){ question2(); }, 5000);
      }) 
} //end function 1

// Function 2///////////////////////
function question2 () {
    $(".message").hide();
    $(".buttons").show();
    $(".h1").html(all_questions[1].question_string);
    $(".choice1").html(all_questions[1].choices.correct);
    $(".choice2").html(all_questions[1].choices.wrong[0]);
    $(".choice3").html(all_questions[1].choices.wrong[1]);
    $(".choice4").html(all_questions[1].choices.wrong[2]);
    $(".choice1").on("click", function() {
        rightGif('<img src= "https://media.giphy.com/media/lYSJQNnTI7aow/giphy.gif"/>');
        $(".message").show();
    setTimeout(function(){ question3(); }, 5000);
    })
      $(".choice2,.choice3,.choice4").on("click", function() {
       wrongGif('<img src= "https://media.giphy.com/media/M5MI9GfMvZOyQ/giphy.gif"/>');
       $(".message").show();
    setTimeout(function(){ question3(); }, 5000);
      }) 
} 

// End function 2
// Function 3///////////////////////
function question3 () {
    $(".message").hide();
    $(".buttons").show();
    $(".h1").html(all_questions[2].question_string);
    $(".choice1").html(all_questions[2].choices.correct);
    $(".choice2").html(all_questions[2].choices.wrong[0]);
    $(".choice3").html(all_questions[2].choices.wrong[1]);
    $(".choice4").html(all_questions[2].choices.wrong[2]);
    $(".choice1").on("click", function() {
        
        rightGif('<img src= "https://media.giphy.com/media/UVL4oVwkpQgbC/giphy.gif"/>');
        $(".message").show();
    setTimeout(function(){ question4(); }, 5000);
    })
      $(".choice2,.choice3,.choice4").on("click", function() {
       wrongGif('<img src= "https://media.giphy.com/media/PcZWjchbmBQNW/giphy.gif"/>');
       $(".message").show();
    setTimeout(function(){ question4(); }, 5000);
      }) 
} 

// End function 3
// Function 4///////////////////////
function question4 () {
    $(".message").hide();
    $(".buttons").show();
    $(".h1").html(all_questions[3].question_string);
    $(".choice1").html(all_questions[3].choices.correct);
    $(".choice2").html(all_questions[3].choices.wrong[0]);
    $(".choice3").html(all_questions[3].choices.wrong[1]);
    $(".choice4").html(all_questions[3].choices.wrong[2]);
    $(".choice1").on("click", function() {
        
        rightGif('<img src= "https://media.giphy.com/media/l0IykmQzbomYVv4m4/giphy.gif"/>');
        $(".message").show();
    setTimeout(function(){ question5(); }, 5000);
    })
      $(".choice2,.choice3,.choice4").on("click", function() {
       wrongGif('<img src= "https://media.giphy.com/media/3o7bubyDhV7FfktZQY/giphy.gif"/>');
       $(".message").show();
    setTimeout(function(){ question5(); }, 5000);
      }) 
} 

// End function 4
// Function 5///////////////////////
function question5 () {
    $(".message").hide();
    $(".buttons").show();
    $(".h1").html(all_questions[4].question_string);
    $(".choice1").html(all_questions[4].choices.correct);
    $(".choice2").html(all_questions[4].choices.wrong[0]);
    $(".choice3").html(all_questions[4].choices.wrong[1]);
    $(".choice4").html(all_questions[4].choices.wrong[2]);
    $(".choice1").on("click", function() {
        
        rightGif('<img src= "https://media.giphy.com/media/PK7IAHdB0l9mg/giphy.gif"/>');
        $(".message").show();
        setTimeout(function(){ question1(); }, 5000);
    })
      $(".choice2,.choice3,.choice4").on("click", function() {
       wrongGif('<img src= "https://media.giphy.com/media/4DMoU35sYt1bW/giphy.gif"/>');
       $(".message").show();
       setTimeout(function(){ question1(); }, 5000);
      }) 
} 

// End function 2
//End Game///////////
function endGame(){
    $(".h1").html("End of Quiz!" + score);
    $(".choice1").html("Reset!");
    $(".choice2").hide();
    $(".choice3").hide();
    $(".choice4").hide();
    $(".choice1").on("click", function(){
        setTimeout(function(){ question1(); }, 5000);
    })

}



// Right and Wrong functions
function rightGif (x) {
    
    $(".h1").html(x);
    $(".buttons").hide();
    $(".message").html("Right Answer!");
    
    //$(".h1").html("Right Answer!");
    
}
function wrongGif (y) {
    $(".h1").html(y);
    $(".buttons").hide();
    $(".message").html("Wrong Answer!");
    //$(".h1").html("Wrong Answer!"); 
}
// end R&W functions

start();
console.log(score);
}) // enddd

 
// if else winning or loss

//if win show screen

//else show this screen

//add timers to each

// add new mulitple choice questions up to 10

//add point system

//at end display right and wrong with option to restart without reloading