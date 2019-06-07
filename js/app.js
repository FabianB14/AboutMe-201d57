'use strict';
//Global varrables

var countRight = 0;
var countWrong = 0;
var flag = false;
var langAnswer = 'yes';
var heightAnswer = 'no';
var loveCodingAnswer = 'yes';
var locationAnswer = 'yes';
var laptopAnswer = 'no';
var langQuestion = 'Do you believe I can speak another language?';
var heightQuestion = 'Do you think I am 7ft tall?';
var loveCodingQuestion = 'From what you have seen so far do you believe I am a guy that loves coding?';
var locationQuestion = 'Do you think I\'m from New Orleans';
var laptopQuestion = 'Do you think I am using a Macbook pro as my laptop?';
var rightAlert = ('That\'s right !');
var wrongAlert = ('That\'s too bad, wrong. ');
var randomNumhigh = 'That number is too high, try again.';
var randomNumlow = 'That number is too low, try again';
var trys = 1;
var times = 0;
var userName;
var questions = 7;

//Global Array Section

var userAnswersArray = [];
var questionsArray= [langQuestion,heightQuestion,loveCodingQuestion,locationQuestion,laptopQuestion];
var correctAnswerArray = [langAnswer,heightAnswer,loveCodingAnswer,locationAnswer,laptopAnswer];
var martialArtsAnswers = ['karate','jiu jitsu','taekwondo','military combatives'];

//This is getting user's name and welcomes the user to the site.

var getUserName = function(){
  alert('Hi, Welcome to paradise!!');
  userName = prompt('Just kidding, Enter your name.');
};
//This is used to check the prompt input to ensure is user inputs "y" or "n" instead of "yes" or "no".
//This will also change the input
var promptCheck = function(input, i){
  if (input === 'y' || input === 'sure'){
    userAnswersArray[i] = 'yes';
  } else if(input === 'n' || input === 'nope'){
    userAnswersArray[i] = 'no';
  }
};

//This is asks the first five questions being as the first five questions are similar.
var firstFive = function(){
  alert('Welcome to my site lets have a short quiz followed by a guessing game.');
  for(var i = 0; i < questionsArray.length; i++){
    userAnswersArray.push(prompt(questionsArray[i]).toLowerCase());
    console.log('1 : ' + userAnswersArray[i]);
    promptCheck(userAnswersArray[i], i);
    console.log(userAnswersArray[i]);
    if(correctAnswerArray[i] === userAnswersArray[i]){
      alert(rightAlert);
      countRight++;
    }
    else if(correctAnswerArray[i] !== userAnswersArray[i].toLowerCase()){
      alert(wrongAlert);
      countWrong++;
    }
  }
  console.log(countRight +' Right');
  console.log(countWrong +' Wrong');
};


// Guessing game starts!!
// This will generate a random number and have the user guess the the number.

var randomNumber = function(){
  alert('Now we will have a guessing game. You will be prompted to pick a number. You will be told if the number is too high or too low. You will get 4 chances to guess the correct answer.');
  //I've created a random number for the user to guess
  var randomNum = Math.floor(Math.random() *15);
  console.log('the number is ' + randomNum);
  var userNumberGuess = prompt('Guess a number from 1 - 15');
  parseInt(userNumberGuess, 10);

  while(times < 3){

    if(userNumberGuess < randomNum)
    {
      alert(randomNumlow);
    }
    else if(userNumberGuess > randomNum)
    {
      alert(randomNumhigh);
    }
    else if(userNumberGuess === isNaN)
    {
      alert(wrongAlert);
    }
    else{
      alert('Awesome great guess');
      countRight++;
      break;
    }
    userNumberGuess = prompt('Guess again!');
    parseInt(userNumberGuess, 10);
    console.log(userNumberGuess);
    times++;
  }
};


// This would be the final question that has multiple answers that could be guessed

var martialArtsGuessing = function(){
  var martialArts = prompt('Can you guess one of the Martial Arts I\'ve learned, you only get 6 attempts.').toLowerCase();
  while(trys < 7)
  {
    for(var j = 0; j < martialArtsAnswers.length; j++)
    {
      if(martialArtsAnswers[j] === martialArts)
      {
        alert(rightAlert);
        j = martialArts.length;
        flag = true;
      }
    }
    if(flag === true)
    {
      countRight++;
      break;
    }
    martialArts = prompt('Guess again, attempt no. '+ trys).toLowerCase();
    trys++;
  }
  alert('All of the possible answers you could have said are '+martialArtsAnswers);
};

//This will do calculations for the percentage
var calculations = function(){
  var countRightPercent = Math.floor(10/ questions * countRight * 10);
  while(countRight !== 7)
  {
    alert(userName +', You almost had it, You got ' +countRight+' out of 7 right that\'s '+ countRightPercent +'%');
    break;
  }
  if (countRight === 7){
    alert(userName +', That\'s awesome you got the '+ countRight+' out of 7 right that\'s '+ countRightPercent +'%');
  }
};


getUserName();
firstFive();
randomNumber();
martialArtsGuessing();
calculations();
