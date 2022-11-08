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
  //!!!!!!! Currently, function only saves one [cardFace, exercise, exerciseText]. Need to troubleshoot so it saves all from workout

  // // save key/value pair [workout names | array of workout names]
 
  // let savedNames;

  // if(localStorage.getItem('savedNames')) {
  //   savedNames = [].concat(localStorage.getItem('savedNames'))
  // }

  // save key/value pair [workout name | array of cards drawn] to storage
  let name = document.getElementById('workoutName').value;
  let cardsDrawn = []
  let numCardsDrawn = document.getElementsByClassName('cardImgDrawn').length
  console.log(document.getElementsByClassName('cardImgDrawn'))
 
  
for (let i = 0; i < numCardsDrawn; i++) {
  cardsDrawn.push(document.getElementsByClassName('card')[i]) 
  
  //let card = document.getElementsByClassName('card')
  
  //   let card = {
  //     cardFace: document.getElementsByClassName('cardImgDrawn')[i].src,
  //     exercise: document.getElementsByClassName('exerciseDrawn')[i].textContent,
  //     exerciseText: document.getElementsByClassName('exerciseTxtDrawn')[i].textContent,
  //   }
  
  }
console.log(cardsDrawn)
  //cardsDrawn.push(card)

  // console.log(cards)
  console.log(cardsDrawn.length)
  console.log(cardsDrawn)
  console.log(name)
  localStorage.setItem(name, JSON.stringify(cardsDrawn))

  //Append workout name to UI in favorites.html


  //Then you will be taken to the Saved Workouts screen (pending)
  goToFavorites()
})

//This Function takes you to the favorites page (favorites.html)
function goToFavorites() {
  //[code for going to favorites.html];
  showFavorites()
}

//Retrieve Name and exercises

const favoritesStage = document.getElementById('favoritesStage');

function showFavorites() {

}



//Append 



//Create button with name of workout

//
