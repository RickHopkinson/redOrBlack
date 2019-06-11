function createDeck() {
    i = 0;
    newDeck = [];
    while (i < 52) {
        if (i >= 0 && i < 13) {
            newDeck[i] = {
                suit: "Hearts",
                value: i + 1
            }
        } else if (i >= 13 && i < 26) {
            newDeck[i] = {
                suit: "Diamonds",
                value: i - 12
            }
        } else if (i >= 26 && i < 39) {
            newDeck[i] = {
                suit: "Clubs",
                value: i - 25
            }
        } else {
            newDeck[i] = {
                suit: "Spades",
                value: i - 38
            }
        }
        i++
    }
}

let score = 0;
let lives = 3;
let perfectGame = 0


document.getElementById("livesRemaining").innerHTML = lives

document.getElementById("redButton").addEventListener("click", function () {
    if (lives == 0) {
        document.getElementById("score").innerHTML = "You have ran out of lives!";
        document.getElementById("livesRemaining").innerHTML = ""
        console.log("you have ran out of lives")
    } else
    if (score >= 40) {} else {
        randomNumber = randomValue0To51()
        if (newDeck[randomNumber].suit == "Diamonds" || newDeck[randomNumber].suit == "Hearts") {
            (score = newDeck[randomNumber].value + score);
            (perfectGame = perfectGame + 1);
            document.getElementById("livesRemaining").innerHTML = lives
            document.getElementById("score").innerHTML = score;
            document.getElementById("cardDisplay").src = "images/cards/" + newDeck[randomNumber].suit + newDeck[randomNumber].value + ".png";
            document.getElementById("correct").style.display = 'flex';
            setTimeout(function () {
                document.getElementById("cardDisplay").src = "images/cards/blueBack.png";
                document.getElementById("correct").style.display = 'none';
            }, 1 * 1000);
            console.log("winner")
            console.log(newDeck[randomNumber].suit)
            console.log(score)
            console.log(lives, "lives left")
            console.log(perfectGame, "turns")
        } else {
            document.getElementById("cardDisplay").src = "images/cards/" + newDeck[randomNumber].suit + newDeck[randomNumber].value + ".png";
            (lives = lives - 1);
            (perfectGame = perfectGame + 1);
            document.getElementById("livesRemaining").innerHTML = lives;
            document.getElementById("loseLife").style.display = "flex"
            setTimeout(function () {
                document.getElementById("cardDisplay").src = "images/cards/blueBack.png";
                document.getElementById("loseLife").style.display = "none"
            }, 1 * 1000);
            console.log("loser")
            console.log(newDeck[randomNumber].suit)
            console.log(lives, "lives left")
            console.log(perfectGame, "turns")
        }
        if (perfectGame == 4 && score >= 40) {
            document.getElementById("score").innerHTML = "You've won the game in the least amount of turns!";
        } else
        if (score >= 40) {
            document.getElementById("score").innerHTML = "You win!";
            console.log("You have won the game")
        }
    }


})
document.getElementById("blackButton").addEventListener("click", function () {
    if (lives == 0) { //if lives are 0 then you wont continue...
        document.getElementById("score").innerHTML = "You have ran out of lives!"
        document.getElementById("livesRemaining").innerHTML = ""
    } else
    if (score >= 40) {
        /*Do nothing*/ } else {
        randomNumber = randomValue0To51()
        if (newDeck[randomNumber].suit == "Spades" || newDeck[randomNumber].suit == "Clubs") {
            (score = newDeck[randomNumber].value + score);
            (perfectGame = perfectGame + 1);
            document.getElementById("score").innerHTML = score;
            document.getElementById("cardDisplay").src = "images/cards/" + newDeck[randomNumber].suit + newDeck[randomNumber].value + ".png";
            document.getElementById("correct").style.display = 'flex';
            setTimeout(function () {
                document.getElementById("cardDisplay").src = "images/cards/blueBack.png";
                document.getElementById("correct").style.display = 'none';
            }, 1 * 1000);
            console.log("winner")
            console.log(newDeck[randomNumber].suit)
            console.log(score)
            console.log(perfectGame, "turns")
        } else {
            document.getElementById("cardDisplay").src = "images/cards/" + newDeck[randomNumber].suit + newDeck[randomNumber].value + ".png";
            (lives = lives - 1);
            (perfectGame = perfectGame + 1);
            document.getElementById("livesRemaining").innerHTML = lives;
            document.getElementById("loseLife").style.display = "flex"
            setTimeout(function () {
                document.getElementById("cardDisplay").src = "images/cards/blueBack.png";
                document.getElementById("loseLife").style.display = "none"
            }, 1 * 1000);
            console.log("loser")
            console.log(newDeck[randomNumber].suit)
            console.log(lives, "lives left")
            console.log(perfectGame, "turns")
        }
        if (perfectGame == 4 && score >= 40) {
            document.getElementById("score").innerHTML = "You've won the game in the least amount of turns!";
        } else
        if (score >= 40) {
            document.getElementById("score").innerHTML = "You win!";
            console.log("You have won the game")
        }

    }
})

document.getElementById("score").innerHTML = score;
document.getElementById("livesRemaining").innerHTML = lives

createDeck()

//console.log(newDeck)
//console.log(`${newDeck[randomNumber].value} of ${newDeck[randomNumber].suit}`)

let cardsChosen = [];

function randomValue0To51() {
    return (Math.floor(Math.random() * 52))
}

function gameRestart () {
    
}