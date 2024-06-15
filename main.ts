#! /usr/bin/env node

import inquirer from "inquirer";

let user_input: {
  words: "input";
} = await inquirer.prompt([
  {
    name: "words",
    type: "input",
    message:
      "Enter the sentence/paragraph of which's quntity you would like to know.",
  },
]);

let removed_white_spaces = user_input.words.trim(); // removing white spaces from the end

let newArray = removed_white_spaces.split(" "); // replacing space with " " between words

let length_of_sentence = newArray.length; // identifying toal words

// console.log(newArray);

if (length_of_sentence > 10) {
  console.log(`Your inputted paragraph contains ${length_of_sentence} words`);
} 
else if (length_of_sentence < 11 && length_of_sentence > 1) {
  console.log(`Your inputted sentence contains ${length_of_sentence} words`);
}
else if (length_of_sentence === 1) {
  console.log(`Your inputted input contains a single word`);
}
else {
  console.log(`No words found in your input`);
}