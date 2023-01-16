// Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

//My Solution
function consonantCount(text) {
  // Set up a counter variable to keep track of the number of consonants
  let consonantCount = 0;

  // Iterate through each character in the text
  for (let char of text) {
    // Check if the character is a consonant
    if (
      /[a-z]/i.test(char) &&
      char.toLowerCase() !== "a" &&
      char.toLowerCase() !== "e" &&
      char.toLowerCase() !== "i" &&
      char.toLowerCase() !== "o" &&
      char.toLowerCase() !== "u"
    ) {
      consonantCount += 1;
    }
  }

  return consonantCount;
}

//Optimized Solution
function consonantCount(text) {
  // Set up a counter variable to keep track of the number of consonants
  let consonantCount = 0;

  // Create a regular expression to match consonants
  const consonantRegex = /[bcdfghjklmnpqrstvwxyz]/gi;

  // Iterate through each character in the text
  for (let char of text) {
    // Check if the character is a consonant
    if (consonantRegex.test(char)) {
      consonantCount += 1;
    }
  }

  return consonantCount;
}
