firstCard = 0;
secondCard = 0;
cards = [];
cards[0] = firstCard;
cards[1] = secondCard;
sum = firstCard + secondCard;
hasBlackjack = false;
isAlive = false;
message = "";
messageEl = document.getElementById("message-el");
sumEl = document.getElementById("sum-el");
cardsEl = document.getElementById("cards-el");
wins = 0;
losses =0;

function renderGame() {
    cardsEl.innerHTML = "Cards: "
    sumEl.innerHTML = "Sum "
    sum = 0;
    if (isAlive && !hasBlackjack) {
        for (i = 0; i < cards.length; i++) {
            cardsEl.innerHTML += cards[i] + ", ";
        } 
    
        for (i = 0; i < cards.length; i++) {
            sum += cards[i];
        }
        sumEl.innerHTML += sum;
    
        if (sum < 21) {
            message = "Do you want to draw a new card? "; //🙂
        } else if (sum == 21) {
            message = "Wohoo! You've got Blackjack! "; //🥳
            hasBlackjack = true;
            wins++;
        } else {
            message = "You're out of the game! "; //😭
            isAlive = false;
            losses++;
        }
        messageEl.innerHTML = message
        document.getElementById("wins").innerHTML = "Wins: " + wins
        document.getElementById("losses").innerHTML = "Losses: " + losses
    }


}

function newCard() {   
    if (isAlive && !hasBlackjack) {
        num = getRandomCard();
        cards[cards.length] = num;
        sum += num;
        renderGame();
    }
}

function getRandomCard() {
    num = Math.floor(Math.random() * 13) + 1;
    if (num == 1) {
        num = 11
    } else if (num > 9) {
        num = 10
    }
    return num;
}

function startGame() {
    cards = []
    hasBlackjack = false
    isAlive = true;
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    cards[0] = firstCard;
    cards[1] = secondCard;
    renderGame()
}