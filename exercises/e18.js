import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  let frequency = [];
  let maxFreq = 0;
  let outPut; 
  for (let item of data.asteroids) {
    let someValue = item.discoveryYear;
    frequency[someValue] = (frequency[someValue] || 0) + 1;
    if (frequency[someValue] > maxFreq) {
      maxFreq = frequency[someValue];
      outPut = someValue;
    }
  } 
    return outPut;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
