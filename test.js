// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Check if the number is even or odd
if (randomNumber % 2 === 0) {
    console.log(`The number ${randomNumber} is even.`);
} else {
    console.log(`The number ${randomNumber} is odd.`);
}