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

// Generate a random date within the last 10 years
const randomDate = new Date(Date.now() - Math.floor(Math.random() * 10 * 365 * 24 * 60 * 60 * 1000));
console.log(`Random date: ${randomDate.toDateString()}`);

// Generate a random hexadecimal color code
const randomHexColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
console.log(`Random hex color: ${randomHexColor}`);

// Generate a random integer array of length 5
const randomArray = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));
console.log(`Random array: [${randomArray.join(', ')}]`);

// Generate a random boolean value
const randomBoolean = Math.random() < 0.5;
console.log(`Random boolean: ${randomBoolean}`);

// Generate a random floating-point number between 0 and 1 with 2 decimal places
const randomFloat = (Math.random() * 1).toFixed(2);
console.log(`Random float: ${randomFloat}`);