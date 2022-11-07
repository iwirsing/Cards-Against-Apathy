//============================== SECTION 4 ==============================

//Once final card has been confirmed as completed, this function will run, and the endgame modal will pop up
//Plug endgameModal() to event where final card has been clicked
/* It will look something like this:

completeCard() {
    [code for going to the next card after clicking 'complete' on the previous card]

    if ([condition for if there are not more cards coming up next in the array]) {
    endgameModal()
};
}
*/

//When you click "Go Back" button, it will reload to the homepage
goBackBtn.addEventListener('click', function(){
    window.location.reload();
})

//============================== SECTION 5 ==============================
//When you click the "Save" button, a form will show up where you can input the name of the workout
saveBtn.addEventListener('click', showSaveName)
function showSaveName() {
}

//When you click the final save button, the cards and name will be saved as a key/value pair
//Then you will be taken to the Saved Workouts screen 
saveDataBtn.addEventListener('click', saveWorkout)
function saveWorkout (){
    addToStorage()
    goToFavorites()
}

//This Function Adds the name/card-set as key/value pair to local storage
function addToStorage () {}

//This Function takes you to the favorites page
function goToFavorites() {}