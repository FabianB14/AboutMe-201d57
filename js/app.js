'use strict';
//This is a count var to keep count of how many answers are right and how many are worng
var countRight = 0;
var countWrong = 0;
<<<<<<< HEAD
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
var randomNumhigh = 'That number is too high, try again.'
var randomNumlow = 'That number is too low, try again'
var trys = 1;
var times = 0;
var nextGuess;
var userName;
var questions = 7;
//Array Section
//answers array for the site visitors
var userAnswersArray = []
var questionsArray= [langQuestion,heightQuestion,loveCodingQuestion,locationQuestion,laptopQuestion];
var correctAnswerArray = [langAnswer,heightAnswer,loveCodingAnswer,locationAnswer,laptopAnswer];
var martialArtsAnswers = ['karate','jiu jitsu','taekwondo','military combatives'];
//This is getting user's name and welcomes the user to the site
alert('Hi, Welcome to paradise!!')
userName = prompt('Just kidding, Enter your name.');

alert('Welcome to my site lets have a short quiz followed by a guessing game.')
for(var i = 0; i < questionsArray.length; i++){
    userAnswersArray.push(prompt(questionsArray[i]).toLocaleLowerCase())
    if(correctAnswerArray[i] === userAnswersArray[i]){
      alert(rightAlert);
      countRight++;
    }
    else if(correctAnswerArray[i] !== userAnswersArray[i].toLocaleLowerCase()){
      alert(wrongAlert)
      countWrong++;
    }
  }
console.log(countRight +' Right');
console.log(countWrong +' Wrong');


// Guessing game starts!!
alert('Now we will have a guessing game. You will be prompted to pick a number. You will be told if the number is too high or too low. You will get 4 chances to guess the correct answer.');
//I've created a random number for the user to guess
var randomNum = Math.floor(Math.random() *15);
console.log('the number is ' + randomNum);
var userNumberGuess = prompt('Guess a number from 1 - 15');
parseInt(userNumberGuess, 10);

while(times < 5){
  
  if(userNumberGuess < randomNum)
  {
    alert(randomNumlow);
  }
  else if(userNumberGuess > randomNum)
  {
    alert(randomNumhigh);
  }
  else{
    alert('Awesome great guess');
    countRight++;
    break
  }
  userNumberGuess = prompt('Guess again!')
  parseInt(userNumberGuess, 10);
  console.log(userNumberGuess);
  times++;
}



// This would be the final question that has multiple answers that could be guessed
var martialArts = prompt('Can you guess one of the Martial Arts I\'ve learned, you only get 6 attempts.').toLowerCase()
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
    break
  }
  martialArts = prompt('Guess again, attempt no. '+ trys).toLowerCase();
  trys++
}
alert('All of the possible answers you could have said are '+martialArtsAnswers)


var countRightPercent = Math.floor(10/ questions * countRight * 10);
// countRightPercent = countRightPercent * 10;
while(countRight !== 7)
{
  alert(userName +', You almost had it, You got ' +countRight+' out of 7 right that\'s '+ countRightPercent +'%')
  break
}
if (countRight === 7){
  alert(userName +', That\'s awesome you got the '+ countRight+' out of 7 right that\'s '+ countRightPercent +'%')
=======
// This will be an array of quiz answers I will use to quiz the visitors

// This is just a lang question and answer prompt alert with some condtionals
var langAnswer = prompt('Do you believe I can speak another language?')
langAnswer.toLowerCase();

if(langAnswer == 'no' || langAnswer == 'n')
{
  var useableLangAnswer = ('That\'s too bad you answerd '+langAnswer+', that\'s wrong ');
  alert(useableLangAnswer);
  countWrong = countWrong + 1;
}
else if(langAnswer == 'yes' || langAnswer == 'y')
{
  var useableLangAnswer = ('That\'s right since you answered '+ langAnswer+ ', seems like you really know me. ');
  alert(useableLangAnswer);
  countRight = countRight +1;
}
console.log(countRight + ' Right');
console.log(countWrong + ' Wrong');

//This is a height question promt and alert
var heightAnswer = prompt('Do you think I am 7ft tall?').toLowerCase();
if(heightAnswer === 'yes' || heightAnswer == 'y')
{
  var useableHeight = ('Sorry, since you answered '+heightAnswer+' that\'s not correct');
  alert(useableHeight);
  countWrong = countWrong + 1;
}
else if(heightAnswer === 'no' || heightAnswer== 'n')
{
  var useableHeight = ('Wow, answering '+heightAnswer+', it\'s amazing that you got that right')
  alert(useableHeight);
  countRight = countRight +1
}
console.log(countRight + ' Right');
console.log(countWrong + ' Wrong');
//This is a question promt and alert about me loving coding.
var loveCodingAnswer = prompt('From what you have seen so far do you believe I am a guy that loves coding?').toLowerCase();
if(loveCodingAnswer === 'yes' || loveCodingAnswer == 'y')
{
  loveCodingAnswer.toUpperCase();
  var useableCodeAnswer = ('Consider me impressed ' +loveCodingAnswer+', is really the answer! ');
  alert(useableCodeAnswer);
  countRight = countRight +1
}
else if( loveCodingAnswer === 'no' || loveCodingAnswer == 'n')
{
  var useableCodeAnswer = (' After all that you replied "'+loveCodingAnswer+'" comon that is soo worng')
  alert(useableCodeAnswer) 
  countWrong = countWrong + 1;
}
console.log(countRight + ' Right');
console.log(countWrong + ' Wrong');
//This is a question regurading location promt and alert
var locationAnswer = prompt('Do you think I\'m from New Orleans').toLowerCase();
if(locationAnswer === 'yes' || locationAnswer == 'y')
{
  locationAnswer.toUpperCase()
  var useableLocationAnswer = ('Awesome, '+locationAnswer+ ' is the answer!')
  alert(useableLocationAnswer)
  countRight = countRight +1;
}
else if(locationAnswer === 'no' || locationAnswer == 'n')
{
  var useableLocationAnswer = (locationAnswer+' is so wrong, sorry.')
  alert(useableLocationAnswer)
  countWrong = countWrong + 1;
}
console.log(countRight + ' Right');
console.log(countWrong + ' Wrong');

//This is a question for what tpye of laptop I am currently using.

var laptopAnswer = prompt('Don\'t you thing I am using a Macbook pro for my laptop?').toLowerCase();
if(laptopAnswer === 'yes' || laptopAnswer == 'y')
{
  var useableLaptopAnswer = ('No way '+laptopAnswer+', is not the answer ')
  alert(useableLaptopAnswer)
  countWrong = countWrong + 1;
}
else if(laptopAnswer === 'no' ||laptopAnswer == 'n')
{
  var useableLaptopAnswer = ('Since you answered '+laptopAnswer+ ' all I have to say is "Nice"')
  alert(useableLaptopAnswer)
  countRight = countRight +1;
}
console.log(countRight + ' Right');
console.log(countWrong + ' Wrong');

if(countRight == 5)
{
  alert('Nice you recieved 100%')
}
else if(countRight == 4)
{
  alert('Good job, you recieved 80%')
}
else if(countRight == 3)
{
  alert('Almost, you recieved 60%')
}
else if(countRight == 2)
{
  alert('You recieved 40%')
}
else if(countRight == 1)
{
  alert('You recieved 10%')
}

else
{
  alert('Aww sorry you got them all worng')
>>>>>>> 0cc74288b466961546ded03a92e23ecc012dbeae
}

