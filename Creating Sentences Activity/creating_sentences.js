// TODO: Create an array variable called "words" with the following elements: 'This', 'is', 'JavaScript', 'Bootcamp!'
// YOUR CODE GOES HERE
var words = ["This ", "is ", "Javascript ", "Bootcamp!"]

// TODO: Create an empty string variable called "sentence".
// YOUR CODE GOES HERE
var sentence = ""

// TODO: 
// 1. Create a function called "createSentence" that takes an array as an argument.
// 2. In the function use a for loop to iterate through each word element of the array.
// 3. Add each word to the "sentence" variable.
// 4. Return the "sentence".
// YOUR CODE GOES HERE
function createSentence (words) {
    for(let i = 0; i < 4; i++)
    {
    sentence += words[i]
    if (i == 3) {return sentence}
    //I'm not sure if this was the intended answer; I decided to use an if statement in the function that only returns the sentence under a condition.
    //I technically did follow all the instructions. Nowhere did it say not to use if statements.
    }
}

// TODO: Call the function "createSentence" using the console.log method.
// YOUR CODE GOES HERE
console.log(createSentence(words))                                           