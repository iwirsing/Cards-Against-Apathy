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
  let name = document.getElementById('workoutName').value;

/*IVY PLEASE HELP!!! I'm so sad that I can't figure this out :(
I'm looking through your code for selected cards and I tried multiple things but I can't seem to select the right element
that displays the cards that were drawn. I was trying to grab the array you console logged out on line 84, but I'm not sure it works.
If you are able to find what the right element I should be targeting to save in local storage, please let me know! 
*/
  let cardsDrawn = document.getElementById('rowCards')

  //Setting the key, value pair in storage works. Only storing name, cardsDrawn is either empty string or undefined
  localStorage.setItem(name,cardsDrawn)
  console.log(cardsDrawn)

  //Then you will be taken to the Saved Workouts screen (pending)
  goToFavorites()
})

//This Function takes you to the favorites page
function goToFavorites() {}