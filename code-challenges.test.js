// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest
 
// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process
 
// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest
 
// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest
 
// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.
 
// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray
 
const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
 "chartreuse",
 "indigo",
 "periwinkle",
 "ochre",
 "aquamarine",
 "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
 
// RED
 // Write the test
 describe("removeFirst", () => {
   it("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
     const colors1 = ["purple", "blue", "green", "yellow", "pink"]
     const colors2 = [
       "chartreuse",
       "indigo",
       "periwinkle",
       "ochre",
       "aquamarine",
       "saffron"
     ]
     expect(removeFirst(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
     expect(removeFirst(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
   })
 })
   // See the test fail
  
   // FAIL  ./code-challenges.test.js
   // removeFirst
   //   ✕ takes in an array, removes the first item from the array and shuffles the remaining content. (1 ms)
  
   // ● removeFirst › takes in an array, removes the first item from the array and shuffles the remaining content.
  
   //   ReferenceError: removeFirst is not defined
  
 // b) Create the function that makes the test pass.
   // PROCESS:
   // input: a array
   // output: a new array that will take the first element off and shuffles its content
     // PSEUDOCODE:
     // Create a method called "removeFirst"
     // Pass an 'array' through the parameters to be able to take in an array
     // Once we are able to filter through the array use the method .shift() to remove the value at the zeroth index
     // Name a new variable called 'shiftedLength' that will be equal to the new arrays length to be able to iterable across each value in the array
     // Name a new variable called 'shuffledArray' that is equal to (Math.floor(Math.random() * shiftedLength) to randomize the array and shuffle its elements depending on each of there index
     // In order to see both of these variables make the array equal to itself in reverse order, this will allow the array to return out of order but still be correct because it contains all of the original elements except for the element at the original zeroth index.
     // Then return the new array
  
   //GREEN 
   // Write the code
     // const removeFirst = (array) => {
     //   array.filter((value) => {
     //    return value.slice(0)
     //   })
     // }
     // console.log(removeFirst(colors1))
     // const removeFirst = (array) => {
     //    currentIndex = array.shift()
     //     return array
     //     //  [ 'blue', 'green', 'yellow', 'pink' ]
     //     }
 
     const removeFirst = (array) => {
         array.shift()
         let shiftedLength = array.length
         let shuffledArray = Math.floor(Math.random() * shiftedLength)
         shiftedLength [array[shiftedLength], array[shuffledArray]] = [
           array[shuffledArray], array[shiftedLength]]
             return array
       }
 
// console.log(removeFirst(colors1))
// console.log(removeFirst(colors2))
 
   // See the test pass
     // PASS  ./code-challenges.test.js
     // removeFirst
     //   ✓ takes in an array, removes the first item from the array and shuffles the remaining content. (1 ms)
  
     // Test Suites: 1 passed, 1 total
     // Tests:       1 passed, 1 total
     // Snapshots:   0 total
     // Time:        0.174 s, estimated 1 s
     // Ran all test suites.
     // ✨  Done in 0.55s.
 
// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.
 
// a) Create a test with expect statements for each of the variables provided.
 
const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31
 
// RED
 // Write the test
 describe("finalTally", () => {
   it("takes in an object that contains up votes and down votes and returns the end tally.", () => {
     const votes1 = { upVotes: 13, downVotes: 2 }
     const votes2 = { upVotes: 2, downVotes: 33 }
     expect(finalTally(votes1)).toEqual(11)
     expect(finalTally(votes2)).toEqual(-31)
   })
 })
 
     // See the test fail
 
     // FAIL  ./code-challenges.test.js
     // removeFirst
     //   ✓ takes in an array, removes the first item from the array and shuffles the remaining content. (1 ms)
     // finalTally
     //   ✕ takes in an object that contains up votes and down votes and returns the end tally.
  
     // ● finalTally › takes in an object that contains up votes and down votes and returns the end tally.
  
     //   ReferenceError: finalTally is not defined
 
 // b) Create the function that makes the test pass.
   // PROCESS:
   // input: an object
   // output: the values of the object added together to return the final value
     // PSEUDOCODE:
       // Create a function called "finalTally"
       // Pass 'keyValues' through the parameters to be able to take in an object
       // In order to access an object use dot notation by calling on the object name and the keys inside. In this case I simply just want to subtract the two values inside one object so I returned both values and subtracted them from each other.
 
 //GREEN 
   // Write the code
  
   const finalTally = (keyValues) => {
     return keyValues.upVotes - keyValues.downVotes
   }
 
   // console.log(finalTally(votes1))
   // console.log(finalTally(votes2))
   // See the test pass
     // PASS  ./code-challenges.test.js
     // removeFirst
     //   ✓ takes in an array, removes the first item from the array and shuffles the remaining content. (1 ms)
     // finalTally
     //   ✓ takes in an object that contains up votes and down votes and returns the end tally.
  
     // Test Suites: 1 passed, 1 total
     // Tests:       2 passed, 2 total
     // Snapshots:   0 total
     // Time:        0.177 s, estimated 1 s
     // Ran all test suites.
     // ✨  Done in 0.72s.
// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.
 
// a) Create a test with an expect statement using the variables provided.
 
const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
 
// RED
 // Write the test
 
 describe("noDupes", () => {
   it("takes in two arrays as arguments and returns one array with no duplicate values.", () => {
     const dataArray1 = ["array", "object", "number", "string", "Boolean"]
     const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
     expect(noDupes(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
   })
 })
 
     // See the test fail
       // FAIL  ./code-challenges.test.js
       // removeFirst
       //   ✓ takes in an array, removes the first item from the array and shuffles the remaining content. (3 ms)
       // finalTally
       //   ✓ takes in an object that contains up votes and down votes and returns the end tally.
       // noDupes
       //   ✕ takes in two arrays as arguments and returns one array with no duplicate values.
    
       // ● noDupes › takes in two arrays as arguments and returns one array with no duplicate values.
    
       //   ReferenceError: noDupes is not defined
  // b) Create the function that makes the test pass.
   // PROCESS:
   // input: two arrays
   // output: one array with none of the same values
     // PSEUDOCODE:
       // Create a function called "noDupes"
       // Pass both arrays into the parameters by using 'array1 and array2'
       // Use the built in method .concat to merge both of the arrays to form one combined array and assign it to a new variable called "comboValues"
       // to return the new array use the spread operator to create a new array by using the built in set collection that does not support an duplicates (...new Set) and I included the new variable 'comboValues' to set a new array using the values of the arrays the function is taking in.
       
     //GREEN   
       // Write the code
         const noDupes = (array1, array2) => {
         let comboValues = array1.concat(array2)
           return [...new Set(comboValues)]
         }
 
         console.log(noDupes(dataArray1, dataArray2))
 
         // See the test pass
           // PASS  ./code-challenges.test.js
           // removeFirst
           //   ✓ takes in an array, removes the first item from the array and shuffles the remaining content. (1 ms)
           // finalTally
           //   ✓ takes in an object that contains up votes and down votes and returns the end tally.
           // noDupes
           //   ✓ takes in two arrays as arguments and returns one array with no duplicate values.
  
           // Test Suites: 1 passed, 1 total
           // Tests:       3 passed, 3 total
           // Snapshots:   0 total
           // Time:        0.172 s, estimated 1 s
           // Ran all test suites.
           // ✨  Done in 0.64s.
  
