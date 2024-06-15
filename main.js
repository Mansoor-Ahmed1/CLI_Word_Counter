#! /usr/bin/env node
import inquirer from "inquirer";
let user_input = await inquirer.prompt([
    {
        name: "words",
        type: "input",
        message: "Enter the word(s)/sentence/paragraph of which's quntity you would like to know."
    }
]);
let removed_white_spaces = user_input.words.trim(); // removing white spaces from the end
let newArray = removed_white_spaces.split(" "); // replacing space with " " between words
let length_of_sentence = newArray.length; // identifying toal words
console.log(newArray);
if (user_input.words.length > 10) {
    console.log(`Your inputted paragraph contains ${length_of_sentence} words`);
}
else {
    console.log(`Your inputted sentence contains ${length_of_sentence} words`);
}
