//============================== SECTION 1 ==============================
//universal variables
var deckIdAll = '8nlbluqizznt';
var clubsDeckID = '4m4xrszvu5ex';
var diamondsDeckID = 'w03icwg2n6ga';
var heartsDeckID = '4admp62snbza';
var spadesDeckID = 'kjg7a4bfgs5o';
var exerName;
var exerInstructions;
// var exerciseArray=[];

var deckURL = 'https://www.deckofcardsapi.com/api/deck/'

function drawCardsAPI(cardNum, suit) {
    // url for shuffling and putting all cards back: https://www.deckofcardsapi.com/api/deck/8nlbluqizznt/shuffle/?remaining=false
    //url for shuffling the remaining cards: https://www.deckofcardsapi.com/api/deck/8nlbluqizznt/shuffle/?remaining=true
    // url for getting cads: https://www.deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2
    //shuffle cards
    //https://www.deckofcardsapi.com/api/deck/4m4xrszvu5ex/shuffle/?remaining=false

    //clear display
    $("#rowCards").empty();

    //check suit type
    if (suit === "Clubs") {
        //create partial deck of clubs
        var clubsUrl = deckURL + clubsDeckID + '/draw/?count=' + cardNum;
        //fill clubs deck
        fetch('https://www.deckofcardsapi.com/api/deck/4m4xrszvu5ex/return/')
            //shuffle clubs cards
            .then(fetch('https://www.deckofcardsapi.com/api/deck/4m4xrszvu5ex/shuffle/?cards=AC,2C,3C,4C,5C,6C,7C,8C,9C,0C,JC,QC,KC')
                .then(fetch(clubsUrl)
                    .then(response => response.json())
                    .then(clubsHand => {
                        console.log(clubsHand);

                        for (var i = 0; i < clubsHand.cards.length; i++) {
                            var clubCard = clubsHand.cards[i];

                            console.log(clubCard);

                            displayCards(clubCard, i);
                        }

                    })
                    .catch(error => console.log('error', error))
                ));
    }

    if (suit === "Diamonds") {
        console.log("Diamonds clicked");
        //create partial deck of clubs
        var diamondsUrl = deckURL + diamondsDeckID + '/draw/?count=' + cardNum;
        //fill clubs deck
        fetch('https://www.deckofcardsapi.com/api/deck/' + diamondsDeckID + '/return/')
            //shuffle clubs cards
            .then(fetch('https://www.deckofcardsapi.com/api/deck/' + diamondsDeckID + '/shuffle/?cards=AD,2D,3D,4D,5D,6D,7D,8D,9D,0D,JD,QD,KD')
                .then(fetch(diamondsUrl)
                    .then(response => response.json())
                    .then(diamondsHand => {
                        console.log(diamondsHand);
                        for (var i = 0; i < diamondsHand.cards.length; i++) {
                            var diamondsCard = diamondsHand.cards[i];
                            console.log(diamondsCard);
                            displayCards(diamondsCard, i);
                        }

                    })
                    .catch(error => console.log('error', error))
                ));
    }

    if (suit === "Hearts") {
        console.log("Hearts clicked");
        //create partial deck of clubs
        var heartsUrl = deckURL + heartsDeckID + '/draw/?count=' + cardNum;
        //fill clubs deck
        fetch('https://www.deckofcardsapi.com/api/deck/' + heartsDeckID + '/return/')
            //shuffle clubs cards
            .then(fetch('https://www.deckofcardsapi.com/api/deck/' + heartsDeckID + '/shuffle/?cards=AH,2H,3H,4H,5H,6H,7H,8H,9H,0H,JH,QH,KH')
                .then(fetch(heartsUrl)
                    .then(response => response.json())
                    .then(heartsHand => {
                        console.log(heartsHand);
                        for (var i = 0; i < heartsHand.cards.length; i++) {
                            var heartCard = heartsHand.cards[i];
                            console.log(heartCard);
                            displayCards(heartCard, i);
                        }

                    })
                    .catch(error => console.log('error', error))
                ));
    }

    if (suit === "Spades") {
        console.log("Spades clicked");
        //create partial deck of clubs
        var spadesUrl = deckURL + spadesDeckID + '/draw/?count=' + cardNum;
        //fill clubs deck
        fetch('https://www.deckofcardsapi.com/api/deck/' + spadesDeckID + '/return/')
            //shuffle clubs cards
            .then(fetch('https://www.deckofcardsapi.com/api/deck/' + spadesDeckID + '/shuffle/?cards=AS,2S,3S,4S,5S,6S,7S,8S,9S,0S,JS,QS,KS')
                .then(fetch(spadesUrl)
                    .then(response => response.json())
                    .then(spadesHand => {
                        console.log(spadesHand);
                        for (var i = 0; i < spadesHand.cards.length; i++) {
                            var spadesCard = spadesHand.cards[i];
                            console.log(spadesCard);
                            displayCards(spadesCard, i);
                        }

                    })
                    .catch(error => console.log('error', error))
                ));
    }

    if (suit === "Full Workout") {
        console.log("Full Workout clicked");
        //create partial deck of clubs
        var deckAllUrl = deckURL + deckIdAll + '/draw/?count=' + cardNum;
        //fill clubs deck
        fetch('https://www.deckofcardsapi.com/api/deck/' + deckIdAll + '/return/')
            //shuffle clubs cards
            .then(fetch('https://www.deckofcardsapi.com/api/deck/' + deckIdAll + '/shuffle/?remaining=false')
                .then(fetch(deckAllUrl)
                    .then(response => response.json())
                    .then(allHand => {
                        console.log(allHand);
                        for (var i = 0; i < allHand.cards.length; i++) {
                            var allCard = allHand.cards[i];
                            console.log(allCard);
                            displayCards(allCard, i);
                        }

                    })
                    .catch(error => console.log('error', error))
                ));
    }

}

//display drawn cards
function displayCards(card, exerciseIndex) {
    console.log(card);
    //grab important values

    var cardValue = card.value;
    var cardImg = card.image;
    var cardSuit = card.suit;
    var type;

    //card value indicates reps or minutes
    if ((cardValue === "JACK") || (cardValue === "QUEEN") || (cardValue === "KING")) {
        cardValue = '20';
    }
    if (cardValue === "ACE") {
        cardValue = '1';
    }


    // var muscle;
    console.log(cardValue, cardImg, cardSuit);

    // selected suite(s) are matched with specific types of exercises

    if (cardSuit == 'HEARTS') {
        type = 'type=cardio';
    }
    if (cardSuit == 'DIAMONDS') {
        type = 'muscle=abdominals';

    }
    if (cardSuit == 'SPADES') {
        type = 'type=strength';
    }
    if (cardSuit == 'CLUBS') {
        type = 'type=plyometrics';
        // type = 'type=stretching';
    }

    var myHeaders = new Headers();

    myHeaders.append("x-api-key", "R78wAd5UBLglet+gIcUCSQ==qefnWKvG8uC3WfIv");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch('https://api.api-ninjas.com/v1/exercises?' + type, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);

            //create column div 
            var colDiv = document.createElement("div");
            colDiv.setAttribute("class", "column")
            colDiv.setAttribute("style", "margin:10px")
            //create card div
            var cardDiv = document.createElement("div");
            cardDiv.setAttribute("class", "card");
            cardDiv.setAttribute("style", "width:250px");
            //create img element
            var cardImgDisplay = document.createElement("img");
            cardImgDisplay.setAttribute("src", cardImg);
            cardImgDisplay.setAttribute('id', 'cardImgDrawn')
            //create card divider
            var cardDivider = document.createElement("div");
            cardDivider.setAttribute("class", "card-divider");
            cardDivider.setAttribute("id", "exerciseDrawn");
            cardDivider.setAttribute("style", "justify-content:center")
            cardDivider.textContent = cardValue + " Minutes of " + result[exerciseIndex].name;
            //create exercise description
            var exerciseText = document.createElement("div");
            exerciseText.textContent = result[exerciseIndex].instructions;
            exerciseText.setAttribute("id", "exerciseTxtDrawn")
            exerciseText.setAttribute("style", "padding:10%; display:none")


            //append to DOM

            cardDiv.appendChild(cardImgDisplay);
            cardDiv.appendChild(cardDivider);
            cardDiv.appendChild(exerciseText);
            colDiv.appendChild(cardDiv);
            $("#rowCards").append(colDiv);


        }
        )
        .catch(error => console.log('error', error));
}


//submit form
function submitForm(event) {
    event.preventDefault(event);

    //capture user input # of cards
    var numCards = document.querySelector("#sliderOutput1").value;
    console.log(numCards);

    //capture the card suit
    var selectedSuit = $('input[name="suitBtn"]:checked').val();
    console.log("suit selected is " + selectedSuit);

    drawCardsAPI(numCards, selectedSuit);

}

$("#submitBtn").on("click", submitForm);

//show exercise instructions
$(document).on("click", ".card-divider", function (event) {
    event.preventDefault();
    console.log(event);
    console.log(event.currentTarget.innerText);
    console.log(event.target.parentNode.querySelector("#exerciseTxtDrawn"));
    var display = event.target.parentNode.querySelector("#exerciseTxtDrawn");
    display.style.display = display.style.display == "none" ? "block" : "none";
})
