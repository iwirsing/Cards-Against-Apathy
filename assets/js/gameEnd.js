//============================== SECTION 4 & 5 ==============================
//Workout Complete button will open the modal and also show a short confetti animation


//When you click "Go Back" button, it will reload to the homepage
let goBackBtn = document.getElementById('goBack')
goBackBtn.addEventListener('click', function () {
  //window.location.reload();
})


//============================= SAVING DATA ====================================
//When you click the final save button, the name and the exercise set will be saved as a key/value pair, Name/Cards Drawn
let saveBtn = document.getElementById('saveButton')

//LOGIC
//Save key/value pair of Workouts, workout names (append workout names to button)
//Then key/value pair with the workout name and corresponding array of card information
//When button is clicked for the workout name, function will run to retrieve data of the key value pair with the name being the key
//Then the cards will display on the page based on the data retrieved  

saveBtn.addEventListener('click', function () {
  // save key/value pair [workout names | array of workout names]
  let name = document.getElementById('workoutName').value;
  let savedNames;
  if (localStorage.getItem('savedWorkouts')) {
    savedNames = [].concat(localStorage.getItem('savedWorkouts'))
  } else {
    savedNames = []
  }
  savedNames.push(name);
  localStorage.setItem('savedWorkouts', savedNames);

  // save key/value pair [workout name | array of cards drawn] to storage
  let numCardsDrawn = document.getElementsByClassName('card').length;
  let card=document.getElementsByClassName('card');
  console.log(document.getElementsByClassName('card'));
  let cardsDrawn = [];
  for (let i = 0; i < numCardsDrawn; i++) {
    let cardData=[];
    //the link to the card picture
    cardData.push(card[i].children[0].src);
    console.log(card[i].children[0].src);
    //title of workout
    cardData.push(card[i].children[1].innerText);
    console.log(card[i].children[1].innerText);
    //instruction of workout
    cardData.push(card[i].children[2].innerText);
    console.log(card[i].children[2].innerText);
    
    cardsDrawn.push(cardData)
  }

  console.log(cardsDrawn);
  console.log(cardsDrawn.length);
  console.log(name);
  console.log(JSON.stringify(cardsDrawn));
  localStorage.setItem(name, JSON.stringify(cardsDrawn));
  
  goToFavorites();
})


//This Function takes you to the favorites page (favorites.html)
function goToFavorites() {
  document.location.assign('./favorites.html');

  setTimeout(function () {showFavorites()}, 2000);
  
}



//when DOM changes, reset the assigned elements
var oldHref = document.location.href;

window.onload = function() {
    var bodyList = document.querySelector("body")

    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (oldHref != document.location.href) {
                oldHref = document.location.href;
                /* Changed ! your code here */
                
            }
        });
    });
    
    var config = {
        childList: true,
        subtree: true
    };
    
    observer.observe(bodyList, config);
};


//Retrieve Name and exercises

const favoritesStage = document.getElementById('favoritesStage');

function showFavorites() {
  //Append workout name as a button to UI in favorites.html
  let savedWorkouts =localStorage.getItem('savedWorkouts').split(',');
  console.log(savedWorkouts);

  for (var i=0;i<savedWorkouts.length;i++){
    console.log("save "+i)
    let button = document.createElement('div');
    button.textContent = savedWorkouts[i];
    button.setAttribute('class','button savedWorkout');
    console.log(button);
    document.querySelector('#favoriteList').append(button);

  }
}


//listen to favorite buttons
$(document).on("click",".savedWorkout",function(event){
  event.preventDefault();

  //go to location
  // window.location.href="./index.html";
  // document.location.assign('./index.html');  
    
  let keyValue=event.currentTarget.innerText;
  console.log(keyValue);

  //get element
  let cardSaved=JSON.parse(localStorage.getItem(keyValue));
  console.log(cardSaved);

    //empty printing area
  $("#favoriteCards").empty();

    //print card 
  for (var i=0;i<cardSaved.length;i++){
    console.log(cardSaved[i]);
    printSaved(cardSaved[i]);
  }

})

//print out cards for the saved workout
function printSaved(card){
 
  //print
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
  cardImgDisplay.setAttribute("src", card[0]);
  cardImgDisplay.setAttribute('id', 'cardImgDrawn')
  //create card divider
  var cardDivider = document.createElement("div");
  cardDivider.setAttribute("class", "card-divider");
  cardDivider.setAttribute("id", "exerciseDrawn");
  cardDivider.textContent=card[1];
  //create exercise description
  var exerciseText = document.createElement("div");
  exerciseText.textContent = card[2];
  exerciseText.setAttribute("id", "exerciseTxtDrawn")
  exerciseText.setAttribute("style", "padding:10%; display:none")

  cardDiv.appendChild(cardImgDisplay);
  cardDiv.appendChild(cardDivider);
  cardDiv.appendChild(exerciseText);
  colDiv.appendChild(cardDiv);
  $("#favoriteCards").append(colDiv);

}
