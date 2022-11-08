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
goBackBtn.addEventListener('click', function(){
    window.location.reload();
})

//When you click the final save button, the name and the exercise set will be saved as a key/value pair, Name/Cards Drawn
let saveBtn = document.getElementById('saveButton')

saveBtn.addEventListener('click', function () {
//!!!!!!! Currently, function only saves one [cardFace, exercise, exerciseText]. Need to troubleshoot so it saves all from workout
  let name = document.getElementById('workoutName').value;
  let cardsDrawn = []
  let cards = {
    cardFace: document.getElementById('cardImgDrawn').src,
    exercise: document.getElementById('exerciseDrawn').textContent,
    exerciseText: document.getElementById('exerciseTxtDrawn').textContent,
  }
  cardsDrawn.push(cards)
  localStorage.setItem(name,JSON.stringify(cardsDrawn))
  console.log(cardsDrawn)

  //Then you will be taken to the Saved Workouts screen (pending)
  goToFavorites()
})

//This Function takes you to the favorites page
function goToFavorites() {}


//Retrieve favorites


//Append favorites 