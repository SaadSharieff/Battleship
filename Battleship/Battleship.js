var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;


while (isSunk == false){
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
    if (guess < 0 || guess > 6){
        alert("Please enter a valid number!");
    } else {
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3) {
            if (guess == location1){
                hits = hits + 1;
                location1 = null;
                console.log(location1);
                alert("HIT");
            } else if (guess == location2){
                hits = hits + 1;
                location2 = null;
                alert("HIT");
            } else if (guess == location3){
                hits = hits + 1;
                location3 = null;
                alert("HIT");
            }
            if (hits == 3) {
                isSunk = true;
                alert("You sunk my battleship!");
            }
        } else {
            alert("Miss");
        }

    }
}
var stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + ((3/guesses)*100) + "%";
alert(stats);


//while ship is not sunk
//get the user's guess
//compare the user's input to valid input values
//IF the user's guess is invalid
//tell user to enter a valid number
//else
//add one to guesses
//IF the user's guess matches a location
//add one to the number of hits
//IF number of hits is 3
//SET isSunk to true
//TELL user "you sank my battleship"
