document.query

/* Random value */ 
var img1Value = Math.floor((Math.random() * 6) + 1);
var img2Value = Math.floor((Math.random() * 6) + 1);

/* Set a random image */ 
document.querySelector(".img1").setAttribute("src", "images/dice" + img1Value + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + img2Value + ".png");

/* Set the player wins in the h1 */
if (img1Value === img2Value) {
    document.querySelector("h1").innerHTML = "Draw!"; 
} else if (img1Value > img2Value) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"; 
} else if (img1Value < img2Value) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"; 
}
