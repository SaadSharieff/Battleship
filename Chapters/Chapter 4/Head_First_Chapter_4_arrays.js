var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
//scores is an array that holds all the bubble score numbers.

var costs = [.25, .27, .25, .25, .25, .25, .33, .31, .25, .29, .27, .22, .31, .25, .25, .33, .21, .25, .25, .25, .28, .25, .24, .22, .20, .25, .30, .25, .24, .25, .25, .25, .27, .25, .26, .29];

function printAndGetHighScore (scores){
    var highScore = 0;
    //this is our variable that will hold the highscore. We are going to use this to compare to the current index's value and if the current index's value is HIGHER than the current variable value, we are going to set the variable as the index value.

    var output;
    // output is where we will be keeping and printing out our solution # and scores from.



    for (var i = 0; i < scores.length; i++) {

        /*var i = 0;
i is a variable that represented our position in the array index. Currently, it starts at the top.
this is our loop. 

i < scores.length is a conditional statement that will break the for loop once it becomes false. The loop keeps going until the condition stays true. 

i++;
this is how we are going to iterate the value for i so we can keep looping through until we get through the entire length of the array. At the end of every console log i will increase by a value of one.

VERSION 1 used a while loop. VERSION 2 was upgraded to a for loop.
*/
        output = "Bubble solution #" + i + " score: " +scores[i];
        //the output now holds the index number of the bubble solution (i) and the score indicated by the current value of i.

        console.log(output);
        //the console prints out the current value of output. As the loop continues, it will continue to print out the value until it is done printing the last score number.

        if (scores[i] > highScore) {
            //This if statement compares the current index value against the highScore value. If scores[i] is GREATER than highScore, then we enter the condition. If it is NOT GREATER then we do not pay attention to the contents of the condition.
            highScore = scores[i];
            //This is where we set the highScore as the index of scores.
        }

    }

    return highScore;
}



function getBestResults(scores, highScore){
    var bestSolutions = [];
    //We create an empty array to store a list of numbers that correspond with the high scores
    for (var i = 0; i < scores.length; i++){
        //This separate loop iterates and matches the highscore to the scores to find an exact match
        if (scores[i] == highScore){
            //If the condition is met then it pushes the index number to the empty array.
            bestSolutions.push(i);
        }
    }
    return bestSolutions;
}



var highScore = printAndGetHighScore(scores);
console.log("Bubble tests: " + scores.length);
console.log("Highest bubble score: " + highScore);

var bestSolutions = getBestResults(scores, highScore);
console.log("Solutions with the highest score: " + bestSolutions);

function getMostCostEffectiveSolution (scores, costs, highScore){
    var cost = 100;
    var index;
    for (var i = 0; i < scores.length; i++){
        if (scores[i] == highScore){
            if (cost > costs[i]){
                index = i;
                cost = costs[i];
                
            }
        }
    }
    return index;
}

var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective");