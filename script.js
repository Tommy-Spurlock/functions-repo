// Practice: ChickenMonkey
// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

// To determine if a number can be evenly divided by 5 or 7, use the JavaScript remainder operator.

// You can start with this simpler version that outputs even numbers to the console and ignores odd numbers. You need to refactor this code to meet the requirements above.


// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//     // Divide the current number by 2, and check if the remainder is 0
//     if (currentNumber  === 0) {
//         console.log(currentNumber) // Only 2, 4, 6 will appear
//     }
// }

function crazyChickenMonkey () {
    for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // Divide the current number by 5 and 7, and check if the remainder is 0
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log("ChickenMonkey") 
} else if (currentNumber % 5 === 0) {
    console.log("Chicken")
} else if (currentNumber % 7 === 0) {
    console.log("Monkey")
}else {
    console.log(currentNumber)
}
}
}
// crazyChickenMonkey()




// Practice: Take a Number - Battle of the Bands
// A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

// Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.


let bandNumber = 1

const takeNumber = function (bandName) {
    /*
        Write your awesome code here. See comments
        below for what should be returned.
    */
  bandNumber += 1
    return `${bandNumber - 1}. ${bandName}`
    

}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console


// Practice: Cookout
// Copy the following objects into your JavaScript file.

const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

// This exercise does not require you to alter this function. But read it. See if you can follow what it takes in, executes, and returns.

// The grill() function. Copy this into your JavaScript as well.

function grill (currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};

// Your task is to iterate over the array of foods and invoke the function for each item so that the cookedFood array contains all of the items after they are cooked.
for(let i=0; i < foods.length; i++) {
    grill(foods[i]) 
}
console.log(cookedFood)


// Practice: Overly Excited
// For this exercise, you need to create a single JavaScript function named addExcitement that will use console.log() to print out a sentence to the browser console.

// Create an addExcitement function that should console.log() rows of words. It should take an array containing the words of a sentence and output them in the developer console.

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        // buildMeUp = buildMeUp + " " + theWordArray[i]
        buildMeUp = `${buildMeUp} ${theWordArray[i]}`

        // Print buildMeUp to the console
        console.log(buildMeUp)
    }

}

// Invoke the function and pass in the array
// addExcitement(sentence)

// Practice: Some words are more exciting than others
// The learning objective of this exercise is to use the JavaScript if statement inside a loop to do one operation when a certain conditions is true, and a different operation if that condition is false.

// Add logic to addExcitement that places an exclamation point (!) after every third word. Read the following English statement and write the equivalent in JavaSript code to make it work.

// If the current value of the counter variable can be evenly divided by 3 (using the JavaScript remainder operator) add a single exclamation point (!) to the current word in the array.

 sentence = ["","The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray) {
    let buildMeUp = ""
    
    for (let i = 0; i < theWordArray.length; i++) {
        /*
            If the current value of `i` divided by 3 has no
            remainder, add an exclamation point to the end of
            the word and then concatenate it to `buildMeUp`.

            Otherwise, just concatenate the word itself.
         */
       
        //  if(i % 3 === 0 && i > 0) {
        //     buildMeUp = `${buildMeUp} ${theWordArray[i]}!`
            
        // } else {
        //     buildMeUp = `${buildMeUp} ${theWordArray[i]}`
 
        // }
        if(i %3 === 0 && i > 0) {
            buildMeUp = `${buildMeUp} ${theWordArray[i]}!`
            
        } else {
            buildMeUp = `${buildMeUp} ${theWordArray[i]}`

        } 
        
     


        // Print buildMeUp to the console
        console.log(buildMeUp)
    }
// return buildMeUp;
}
// const apple = addExcitement(sentence)
// document.querySelector("body").innerHTML =apple


// The learning objective of this exercise is to practice defining and using function arguments.

// Add a new argument to the function so that a developer can specify which character should be displayed instead of it always being an exclamation point.

function addExcitement (theWordArray, specialCharacter) {
    let buildMeUp = ""
    
    for (let i = 0; i < theWordArray.length; i++) {

        if(i %3 === 0 && i > 0) {
            buildMeUp = `${buildMeUp} ${theWordArray[i]}${specialCharacter}`
            
        } else {
            buildMeUp = `${buildMeUp} ${theWordArray[i]}`

        } 
        
    


        // Print buildMeUp to the console
        
        console.log(buildMeUp)
    }


}

addExcitement(sentence, "?")






