// player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // get randome number between 1 and 6

var randomDiceImage_1 = "dice"+ randomNumber1 + ".png"; //create image source according to our random number above.

var randomImageSource_1 = "images/" + randomDiceImage_1; //Select the image according to number

var image_1 = document.querySelectorAll("img")[0];

image_1.setAttribute("src",randomImageSource_1);

// player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // get randome number between 1 and 6

var randomDiceImage_2 = "dice"+ randomNumber2 + ".png"; //create image source according to our random number above.

var randomImageSource_2 = "images/" + randomDiceImage_2; //Select the image according to number

var image_2 = document.querySelectorAll("img")[1];

image_2.setAttribute("src",randomImageSource_2);

// Select winner
if (randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 is the Winner"
    
}else if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 is the Winner"
}else{
    document.querySelector("h1").innerHTML = "Match Draw"
}