/* This assignment will give you some practice with creating arrays and using their methods. */

/* Please note that his is NOT a function-based challenge (aside from your challenge banner function). Everything should be in the global scope--this means you will benefit from using `for` loops instead of `while`. */


// Challenge 0
//
// Challenge banner time! Write a function that console.logs "####### Challenge n #######", where n is the number passed into the function.
// function challenge(n){
//   console.log ('####### Challenge ' + n + " #######")
// }
function banner(num){
let banner = ''
for (let i = 1; i <= num; i++){
  banner = banner + '#';
}
console.log(banner + ' Challenge ' + num + ' '+ banner);
}
banner(0);
// Call this function before each of the below challenges, passing in the number of the current challenge.
// 
//
// Challenge 1
banner(1)
// Loop through the following array, console.logging out each value.
const students = [
  'Bogdan',
  'Carlos',
  'David',
  'Denis',
  'Jumary',
  'Marc',
  'Deaundre',
  'LaToddra',
  'Michael',
  'Patrick',
  'Sharod',
  'Tyrell',
  'Wilson',
];

// function log(students){
for(let i = 0; i < students.length; i++ ){
  console.log(students[i])
}
// }
// log(students)

// Challenge 2
// Loop through the following array BACKWARDS, console.logging out each value. 64 should be first and 100 last.
const grades = [100, 80, 110, 75, 83, 64];
banner(2)
for(let i = grades.length - 1; i>= 0; i--){
console.log(grades[i])
}

// Challenge 3
// Console.log out only the even numbers in the following array.
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
banner(3)
for(let i = 0; i < positiveNumbers.length; i++){
  if(positiveNumbers[i] % 2 === 0){
  console.log(positiveNumbers[i])

}

}
// Challenge 4
// Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four of them!
const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];
banner(4)
for(let i = 0; i < mixedSignNumbers.length; i++){
if(mixedSignNumbers[i] % 2 === 0 ){
console.log(mixedSignNumbers[i])
}
}
// Challenge 5
// Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
banner(5)
symmetricalCapitals.pop();
symmetricalCapitals.shift(); 
symmetricalCapitals.shift();

for(let i = 0; i < symmetricalCapitals.length; i++){
  
  console.log(symmetricalCapitals[i])
}


// Challenge 6
// Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
banner(6)
const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
fibonacciNumbers.push(4, 20);
fibonacciNumbers.unshift(0);
for(let i = 0; i < fibonacciNumbers.length; i++){
console.log(fibonacciNumbers[i])
}

// Challenge 7
// Make a NEW array with 5 values of your choice, using the same syntax as the arrays from the previous 6 challenges, that is, every value should be placed within the square brackets.  Now console.log out each value individually.
const myCousins = ['Christopher', 'Jasmine', 'Kamile', 'Jonathan', 'Micah'];
banner(7)
for (let i = 0; i < myCousins.length; i++){
  console.log(myCousins[i])

}

// Challenge 8
// Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
const carMakes = [];
banner(8)
 

carMakes.push('Honda');
carMakes.push('Jeep');
carMakes.push('Toyota');
carMakes.push("BMW");
carMakes.push("Chevy")
for (let i =0; i < carMakes.length; i++){
console.log(carMakes[i])
}

// Challenge 9
// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
banner(9)

for(let i = 3; i <= 10; i++){
  console.log(students[i])

}


// Challenge 10
// Loop through the `students` array from Challenge 1, making a COPY of the array, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy indivudally.
banner(10)
let  result = []
for (let i = 3;i <= 10;i++){
  result.push(students[i])
}
console.log(result)
for (let i = 0; i < result.length; i++){
  console.log(result[i])
}

// Challenge 11
// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the two arrays are the same, because `slice` does NOT modify the original array.
banner(11)
const newStudents=students.slice(3,11)
for(let i=0;i < newStudents.length;i++){

console.log(newStudents[i])}

for (let i = 0; i < students.length; i++ ){
  console.log(students[i])
}

// Challenge 12
// Pull the items at the 4th-6th indices (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
banner(12)
dinosaurs.splice(3,3)
for (let i = 0; i < dinosaurs.length; i++){
console.log(dinosaurs[i])
}

// Challenge 13
// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
banner(13)
const newDinosaurs = dinosaurs.join('*')
console.log(newDinosaurs)

// Challenge 14
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
banner(14)
dinosaurs.reverse()
console.log(dinosaurs)

// Challenge 15
// Use .concat to combine the following two arrays into a NEW array you make. Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
const primaries = ['red', 'yellow', 'blue'];
const secondaries = ['orange', 'green', 'purple'];
