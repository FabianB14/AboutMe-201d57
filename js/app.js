'use strict';
//This is a count var to keep count of how many answers are right and how many are worng
var countRight = 0;
var countWrong = 0;
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
}

