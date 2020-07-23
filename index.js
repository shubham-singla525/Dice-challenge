var randomValue1=Math.floor(Math.random()*6)+1;
var imagesRandom1="dice"+randomValue1+".png";
var imageSource1="images/"+imagesRandom1;

document.querySelectorAll("img")[0].setAttribute("src",imageSource1);


var randomValue2=Math.floor(Math.random()*6)+1;
var imageSource2="images/dice"+randomValue2+".png";

document.querySelectorAll("img")[1].setAttribute("src",imageSource2);
//player 1 wins
if (randomValue1 > randomValue2) {
   document.querySelector("h1").innerHTML= "Player 1 Wins";
 }
else if (randomValue2 > randomValue1) {
   document.querySelector("h1").innerHTML= "Player 2 Wins";
}
else{
   document.querySelector("h1").innerHTML= "Draw!";
 }
