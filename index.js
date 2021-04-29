function randomNumber1(){
  var number1 = Math.random()*6;
  number1 = Math.floor(number1) + 1;
  return number1;
}
function randomNumber2(){
  var number2 = Math.random()*6;
  number2 = Math.floor(number2) + 1;
  return number2;
}

var a = randomNumber1();
var b = randomNumber2()


var imgToBeChanged1 = "images/dice" + a + ".png";
var imgToBeChanged2 = "images/dice" + b + ".png";


document.querySelector('img.img1').setAttribute('src', imgToBeChanged1);// TO CHANGE THE IMAGE 1 TO RANDOM

document.querySelector('img.img2').setAttribute('src', imgToBeChanged2);// TO CHANGE THE IMAGE 2 TO RANDOM



//to change the name of the h1
if(a===b){
  document.querySelector('h1').innerHTML = "It's a Draw!!"
}else if (a>b) {
  document.querySelector('h1').innerHTML = "🚩Player 1 Wins!!"
}
else{
  document.querySelector('h1').innerHTML = "Player 2 Wins!🚩"
}
