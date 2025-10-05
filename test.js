// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Check if the number is even or odd
if (randomNumber % 2 === 0) {
  console.log(`The number ${randomNumber} is even.`);
} else {
  console.log(`The number ${randomNumber} is odd.`);
}

// Generate a random string of 8 characters
const randomString = Math.random().toString(36).substring(2, 10);
console.log(`Random string: ${randomString}`);

// Generate a random RGB color
const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
console.log(`Random color: ${randomColor}`);