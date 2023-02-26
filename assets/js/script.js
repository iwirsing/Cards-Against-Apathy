//============================== SECTION 1 ==============================
//universal variables
var deckIdAll = 'ofaittvibg39';
var clubsDeckID = 'wqck3dcb13lf';
var diamondsDeckID = 'wthr9qecpt85';
var heartsDeckID = 'wfglizdru0in';
var spadesDeckID = '1i8141b79ky0';
var exerName;
var exerInstructions;   
var deckURL = 'https://www.deckofcardsapi.com/api/deck/'

//FUNCTION that draws cards
function drawCardsAPI(cardNum, suit) {

    //clear display and reset 
    $("#rowCards").empty();
    //remove confetti if any   
    for (var i = 0; i < 100; i++) {
    if ($(".confetti-"+i)){
    $(".confetti-"+i).remove();  }
    }
    //reset modal h2
    document.querySelector(".noteName").innerHTML="Pick a name for your workout!";

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

                        for (var i = 0; i < clubsHand.cards.length; i++) {
                            var clubCard = clubsHand.cards[i];
                            displayCards(clubCard, i);
                        }

                    })
                    .catch(error => console.log('error', error))
                ));
    }

    if (suit === "Diamonds") {
        // console.log("Diamonds clicked");
        //create partial deck of diamonds
        var diamondsUrl = deckURL + diamondsDeckID + '/draw/?count=' + cardNum;
        //fill clubs deck
        fetch('https://www.deckofcardsapi.com/api/deck/' + diamondsDeckID + '/return/')
            //shuffle clubs cards
            .then(fetch('https://www.deckofcardsapi.com/api/deck/' + diamondsDeckID + '/shuffle/?cards=AD,2D,3D,4D,5D,6D,7D,8D,9D,0D,JD,QD,KD')
                .then(fetch(diamondsUrl)
                    .then(response => response.json())
                    .then(diamondsHand => {
                        // console.log(diamondsHand);
                        for (var i = 0; i < diamondsHand.cards.length; i++) {
                            var diamondsCard = diamondsHand.cards[i];
                            // console.log(diamondsCard);
                            displayCards(diamondsCard, i);
                        }

                    })
                    .catch(error => console.log('error', error))
                ));
    }

    if (suit === "Hearts") {
        // console.log("Hearts clicked");
        //create partial deck of hearts
        var heartsUrl = deckURL + heartsDeckID + '/draw/?count=' + cardNum;
        //fill clubs deck
        fetch('https://www.deckofcardsapi.com/api/deck/' + heartsDeckID + '/return/')
            //shuffle clubs cards
            .then(fetch('https://www.deckofcardsapi.com/api/deck/' + heartsDeckID + '/shuffle/?cards=AH,2H,3H,4H,5H,6H,7H,8H,9H,0H,JH,QH,KH')
                .then(fetch(heartsUrl)
                    .then(response => response.json())
                    .then(heartsHand => {
                        // console.log(heartsHand);
                        for (var i = 0; i < heartsHand.cards.length; i++) {
                            var heartCard = heartsHand.cards[i];
                            // console.log(heartCard);
                            displayCards(heartCard, i);
                        }

                    })
                    .catch(error => console.log('error', error))
                ));
    }

    if (suit === "Spades") {
        // console.log("Spades clicked");
        //create partial deck of spades
        var spadesUrl = deckURL + spadesDeckID + '/draw/?count=' + cardNum;
        //fill clubs deck
        fetch('https://www.deckofcardsapi.com/api/deck/' + spadesDeckID + '/return/')
            //shuffle clubs cards
            .then(fetch('https://www.deckofcardsapi.com/api/deck/' + spadesDeckID + '/shuffle/?cards=AS,2S,3S,4S,5S,6S,7S,8S,9S,0S,JS,QS,KS')
                .then(fetch(spadesUrl)
                    .then(response => response.json())
                    .then(spadesHand => {
                        // console.log(spadesHand);
                        for (var i = 0; i < spadesHand.cards.length; i++) {
                            var spadesCard = spadesHand.cards[i];
                            // console.log(spadesCard);
                            displayCards(spadesCard, i);
                        }

                    })
                    .catch(error => console.log('error', error))
                ));
    }

    if (suit === "Full Workout") {
        // console.log("Full Workout clicked");
        //create partial deck of clubs
        var deckAllUrl = deckURL + deckIdAll + '/draw/?count=' + cardNum;
        //fill clubs deck
        fetch('https://www.deckofcardsapi.com/api/deck/' + deckIdAll + '/return/')
            //shuffle clubs cards
            .then(fetch('https://www.deckofcardsapi.com/api/deck/' + deckIdAll + '/shuffle/?remaining=false')
                .then(fetch(deckAllUrl)
                    .then(response => response.json())
                    .then(allHand => {
                        // console.log(allHand);
                        for (var i = 0; i < allHand.cards.length; i++) {
                            var allCard = allHand.cards[i];
                            // console.log(allCard);
                            displayCards(allCard, i);
                        }

                    })
                    .catch(error => console.log('error', error))
                ));
    }

}


//FUNCTION that displays cards
function displayCards(card, exerciseIndex) {
    // console.log(card);

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

    // console.log(cardValue, cardImg, cardSuit);

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
            // console.log(result);

            // create cardz for flipping
            var cardContainer = document.createElement("div");
            cardContainer.setAttribute("class", "cardz")

            //create main flipper
            var cardInner = document.createElement("div");
            cardInner.setAttribute("class", "card__inner")

            //create card face front
            var cardFront = document.createElement("div");
            cardFront.setAttribute("class", "card__face card__face--front")

            //create img
            var backCard=document.createElement("img");
            backCard.setAttribute("src","./assets/images/cardBack.png");
            backCard.setAttribute("style","width:250px; height:400px;");

            //append
            cardFront.appendChild(backCard);
            cardInner.appendChild(cardFront);
            
            //create column div 
            var colDiv = document.createElement("div");
            colDiv.setAttribute("class", "column card__face card__face--back")
            colDiv.setAttribute("style", "margin:0 0 0 0; position:relative")
            //create card div
            var cardDiv = document.createElement("div");
            cardDiv.setAttribute("class", "card");
            cardDiv.setAttribute("style", "width:250px; border-radius:15px");
            //create img element
            var cardImgDisplay = document.createElement("img");
            cardImgDisplay.setAttribute("src", cardImg);
            cardImgDisplay.setAttribute('id', 'cardImgDrawn');
            //create card divider
            var cardDivider = document.createElement("div");
            cardDivider.setAttribute("class", "card-divider");
            cardDivider.setAttribute("id", "exerciseDrawn");

            //create div with done
            var doneDiv = document.createElement("div");
            doneDiv.setAttribute("class", "text-block");
            doneDiv.setAttribute("style", "position:absolute;top:150px;left:30%; z-index:7;font-size:2rem;display:none");
            doneDiv.textContent='D O N E';

            if (cardSuit == 'HEARTS') {
                cardDivider.setAttribute("style", "justify-content:center")
                cardDivider.textContent = cardValue + " Minute(s) of " + result[exerciseIndex].name;
            } else {
                cardDivider.setAttribute("style", "justify-content:center")
                cardDivider.textContent = cardValue + " rep(s) of " + result[exerciseIndex].name;
            }

            //create exercise description
            var exerciseText = document.createElement("div");
            exerciseText.textContent = result[exerciseIndex].instructions;
            exerciseText.setAttribute("id", "exerciseTxtDrawn");
            exerciseText.setAttribute("style", "padding:10%; display:none");

            //append to DOM
            cardDiv.appendChild(cardImgDisplay);
            cardDiv.appendChild(cardDivider);
            cardDiv.appendChild(exerciseText);
            colDiv.appendChild(cardDiv);
            colDiv.appendChild(doneDiv);
            cardInner.appendChild(colDiv);
            cardContainer.appendChild(cardInner);

            $("#rowCards").append(cardContainer);

        }
        )
        .catch(error => console.log('error', error));
}


//FUNCTION to submit form
function submitForm(event) {
    event.preventDefault(event);

    //hide workout complete button
    document.querySelector("#workoutComplete").setAttribute("style", "display:none");

    //capture user input # of cards
    var numCards = document.querySelector("#sliderOutput1").value;
    // console.log(numCards);

    //capture the card suit
    var selectedSuit = $('input[name="suitBtn"]:checked').val();
    // console.log("suit selected is " + selectedSuit);

    drawCardsAPI(numCards, selectedSuit);

    
}

$("#submitBtn").on("click", submitForm);

//FUNCTION to show and hide exercise instructions
$(document).on("click", ".card-divider", function (event) {
    event.preventDefault();
    // console.log(event);
    // console.log(event.currentTarget.innerText);
    // console.log(event.target.parentNode.querySelector("#exerciseTxtDrawn"));
    var display = event.target.parentNode.querySelector("#exerciseTxtDrawn");
    display.style.display = display.style.display == "none" ? "block" : "none";
})


//FUNCTION section to gray out cards when done and determine when all workout completed
$(document).on("click", "#cardImgDrawn", function (event) {
    event.preventDefault();
    // console.log(this);

    if (this.classList.contains('grayOut')) {
        //change back to color
        this.classList.remove('grayOut');
        this.parentNode.parentNode.querySelector(".text-block").setAttribute("style", "display:none");
    }
    else {
        //gray out image
        this.setAttribute("class", "grayOut");
        this.parentNode.parentNode.querySelector(".text-block").setAttribute("style", "display:block;position:absolute;top:150px;left:30%; z-index:7;font-size:2rem;");
    }

    //determine workout completed
    //capture how many cards there are
    let numCardsDrawn = document.getElementsByClassName('card').length;
    //capture how many cards are grayed out 
    let numGreyCards = document.getElementsByClassName('grayOut').length;

    //if all cards are grayed out then workout complete, show workout complete button
    if (numCardsDrawn === numGreyCards) {
        // console.log("all cards grayed");
        if (!(typeof on_index === "undefined")) {
            document.querySelector("#workoutComplete").setAttribute("style", "display:block");
        }
    }
    else {
        if (!(typeof on_index === "undefined")) {
            document.querySelector("#workoutComplete").setAttribute("style", "display:none");

            //remove confetti if any
             for (var i = 0; i < 100; i++) {
                if ($(".confetti-"+i)){
                $(".confetti-"+i).remove();  }
                }
        }
    }

})

//FUNCTION to flip open drawn cards once
$(document).on("click",".card__inner",function(){
    this.classList.add('is-flipped');
})

//FUNCTION to press icon and keep it there
var rad = document.querySelectorAll(".radio-button");
var prev = null;
for (var i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function() {
        (prev) ? console.log(prev.value): null;
        if (this !== prev) {
            //change prev setting
            // console.log(this);
            // console.log(this.nextSibling);
            if(prev!==null)
            {
                prev.nextSibling.querySelector(".suits").setAttribute("style","display:inline");
                prev.nextSibling.querySelector(".workout").setAttribute("style","display:none;");
                prev.nextSibling.classList.remove("iconClick");
               
            }

            prev = this;
            
            prev.nextSibling.querySelector(".suits").setAttribute("style","display:none");
            prev.nextSibling.querySelector(".workout").setAttribute("style","display:inline;font-size: 24pt;position: relative;top: -25px;");
            prev.nextSibling.classList.add("iconClick");
            
        }
        // console.log(this);
    });
}
