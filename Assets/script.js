var one = document.getElementById("q1");
var two = document.getElementById("q2");
var three = document.getElementById("q3");
var four = document.getElementById("q4");
var five = document.getElementById("q5");
var sList = document.getElementById("sList")

var start = document.getElementById("start-btn");
var timer = document.getElementById("clock");


 one.style.display= "none"; 
 two.setAttribute("style", "display: none");
 three.style.display= "none"; 
 four.style.display= "none"; 
 five.style.display= "none"; 
 sList.style.display= "none";

 const NO_OF_HIGH_SCORES = 10;
const HIGH_SCORES = 'highScores';
var highScores= []
 var timeLeft= 88;
 const stopp = 23;
 var final=0;

 var rightWrong= document.getElementById("r/w");


//function playgame(){
 start.addEventListener("click", function() {
    // If mode is dark, apply light background
    one.style.display= "block"; 
 two.setAttribute("style", "display: none");
 three.style.display= "none"; 
 four.style.display= "none"; 
 five.style.display= "none";

 //var timeLeft= 90;
  var timeInterval = setInterval(function () {
    // 
      // Set the `textContent` of `timer` to show the remaining seconds
      clock.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;

  }, 1000);
  start.style.display= "none";

});

 one.addEventListener("click",function(e) {
   console.log(e.target.id);
   
   if (e.target.id== "1.1") {
      rightWrong.textContent = "Right!";
   }
   else{
      rightWrong.textContent = "wrong.";
      timeLeft= timeLeft-15;
   }
 one.style.display= "none"; 
 two.setAttribute("style", "display: block");
  });

two.addEventListener("click", function(e) {

   console.log(e.target.id);
   
   if (e.target.id== "2.2") {
      rightWrong.textContent = "Right!";
   }
   else{
      rightWrong.textContent = "wrong.";
      timeLeft= timeLeft-15;
   }

   two.setAttribute("style", "display: none");
   three.style.display= "block"; 
    });

three.addEventListener("click", function(e) {
   console.log(e.target.id);
   
   if (e.target.id== "3.3") {
      rightWrong.textContent = "Right!";
   }
   else{
      rightWrong.textContent = "wrong.";
      timeLeft= timeLeft-15;
   }
three.style.display= "none"; 
four.style.display= "block"; 
     
       });

four.addEventListener("click", function(e) {
   console.log(e.target.id);
   
   if (e.target.id== "4.4") {
      rightWrong.textContent = "Right!";
   }
   else{
      rightWrong.textContent = "wrong.";
      timeLeft= timeLeft-15;
   }

four.style.display= "none"; 
five.style.display= "block";
});

five.addEventListener("click", function(e) {
  
   if (e.target.id== "5.1") {
      rightWrong.textContent = "Right!";
   }
   else{
      rightWrong.textContent = "wrong.";
      timeLeft= timeLeft-15;
   }
final=timeLeft;
five.style.display= "none";
timer.style.display='none';
sList.style.display= "block";

checkHighScore();
saveHighScore();
showHighScores();
});

//}

function checkHighScore(final) {
   const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
   const lowestScore = highScores[NO_OF_HIGH_SCORES-1]?.final ?? 0;
   
   if (final > lowestScore) {
     saveHighScore(final, highScores); // TODO
     showHighScores(); // TODO
   }
 }

 function saveHighScore(final, highScores) {
   const name = prompt('You got a highscore! Enter name:');
   const newScore = { final, name };
   
   // 1. Add to list
   highScores.push(newScore);
 
   // 2. Sort the list
   highScores.sort((a, b) => b.final-a.final);
   
   // 3. Select new list
   highScores.splice(NO_OF_HIGH_SCORES);
   
   // 4. Save to local storage
   localStorage.setItem(HIGH_SCORES, JSON.stringify(highScores));
 };

 function showHighScores() {
   var highScoreList = document.getElementById("High Scores");
   
   highScoreList.innerHTML = highScores
     .map((final) => `<li>${final.final}-${final.name}</li>`)
     .join('');
 }

 
/*   if(timer.value == stopp){
         console.log(timeLeft);
         timeLeft= timeLeft;
         final= timeLeft;
         one.style.display= "none"; 
          two.setAttribute("style", "display: none");
          three.style.display= "none"; 
          four.style.display= "none";
         five.style.display= "none";
         timer.style.display="none";
         sList.style.display= "block";
         }*/
     









