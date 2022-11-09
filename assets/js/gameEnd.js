//============================== SECTION 4 & 5 ==============================

/*Once final card is clicked, the complete button will pop up, but this time it will be "workout Complete"

Which means that once the final card is clicked, the normal complete button will be replaced with the "workout Complete" button
 
Below is one way of doing this:
  completeCard() {
      [code for going to the next card after clicking 'complete' on the previous card]

      if ([condition: there are no more cards coming up next]) {
      [code for replacing normal "complete" button with workout complete button]
  };
  }

Once you click the "Workout Complete!" button, the modal will pop up
*/

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
  if (localStorage.getItem('savedNames')) {
    savedNames = [].concat(localStorage.getItem('savedNames'))
  } else {
    savedNames = []
  }
  savedNames.push(name);
  localStorage.setItem('Saved Workouts', savedNames);


  // save key/value pair [workout name | array of cards drawn] to storage
  let numCardsDrawn = document.getElementsByClassName('card').length;
  console.log(document.getElementsByClassName('card'));
  let cardsDrawn = [];
  for (let i = 0; i < numCardsDrawn; i++) {
    cardsDrawn.push(document.getElementsByClassName('card')[i].innerHTML)
  }

  console.log(cardsDrawn)
  console.log(cardsDrawn.length)
  console.log(name)
  console.log(JSON.stringify(cardsDrawn))
  localStorage.setItem(name, JSON.stringify(cardsDrawn))

  goToFavorites()
})


//This Function takes you to the favorites page (favorites.html)
// function goToFavorites() {
//   document.location.assign('./favorites.html');
//   showFavorites()
// }

//Retrieve Name and exercises

const favoritesStage = document.getElementById('favoritesStage');

function showFavorites() {
  //Append workout name to UI in favorites.html

}



//Append 



//Create button with name of workout

//
