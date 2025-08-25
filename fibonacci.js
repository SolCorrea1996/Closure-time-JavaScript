/*I COMPLETED THE DOCUMENTATION FROM MY ASSIGNMENT WITH THEIR RESPECTIVE INFORMATION
Class: CSCI390
Assignment: Closure Timer
Author: Solange Correa
Date: 10-11-2024
This is assignment Closure Timer by "node fibonacci.js" The fibonacci.js file is a JavaScript program designed to calculate Fibonacci numbers using two different methods (recursive and iterative)
 while measuring the execution time of each calculation.It outputs the results in a CSV format, which you can later analyze using tools like Excel.

We could call it node fibonacci.js"
*/


// Import the timer module
var MyTimer = require('./mytimer');
var args = process.argv.slice(2); // Get the command line arguments

// Function to calculate the Fibonacci number recursively
function fibonacciRecursive(n,memo={}) {
    if (n <= 1) {
        return 1; // Base case: return 1 if n is 0 or 1
    } else {
        return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2); // Recursive call
    }
}

// Function to calculate the Fibonacci number iteratively
function fibonacciIterative(n) {
    var num1 = 1;
    var num2 = 1;
    var temp;
    // Loop to calculate the Fibonacci number in an iterative manner
    for (var i = 2; i <= n; i++) {
        temp = num1; // Store the value of num1 temporarily
        num1 = num1 + num2; // Update num1 with the sum of num1 and num2
        num2 = temp; // Update num2 with the old value of num1
    }
    return num1; // Return the nth Fibonacci number
}

// Function to measure execution time and generate CSV output
function measureTimeAndGenerateCSV(method, maxNumber) {
    console.log('Fibonacci Sequence Num,Time Elapsed,Fibonacci Number'); // Print CSV headers
    var timer = MyTimer(); // Create a new timer instance
    var totalElapsed = 0;  // Initialize the total elapsed time

    // Loop through each Fibonacci sequence number up to maxNumber
    for (var i = 1; i <= maxNumber; i++) {
        timer.start(); // Start the timer
        // Calculate the Fibonacci number using the chosen method (recursive or iterative)
        var fibonacciNumber = method === 'recursive' ? fibonacciRecursive(i) : fibonacciIterative(i);
        var timeElapsed = timer.getElapsed(); // Get the time elapsed for this calculation
        totalElapsed += timeElapsed; // Add the elapsed time to the total time

        // Print the Fibonacci sequence number, elapsed time, and the Fibonacci number itself
        console.log(i + ',' + timeElapsed + ',' + fibonacciNumber);
    }

    console.log(',,'); // Print an empty row in the CSV
    console.log('Total Time,' + totalElapsed + ','); // Print the total elapsed time
}

// Process the command line arguments to determine the method and maximum number
if (args.length >= 2) {
    var option = args[0]; // First argument determines the method (-r or -i)
    var maxNumber = parseInt(args[1], 10); // Second argument is the maximum number

    // Check if the maximum number is less than 1
    if (maxNumber < 1) {
        console.error('Error: NUM must be greater than or equal to 1'); // Print error message
        process.exit(1); // Exit with error code 1
    }

    // Check which method to use based on the option provided
    if (option === '-r' || option === '--recursive') {
        measureTimeAndGenerateCSV('recursive', maxNumber); // Call the recursive method
    } else if (option === '-i' || option === '--iterative') {
        measureTimeAndGenerateCSV('iterative', maxNumber); // Call the iterative method
    } else {
        // Print usage message if the option is invalid
        console.error('Usage: fibonacci.js -r NUM | --recursive NUM | -i NUM | --iterative NUM');
        process.exit(1); // Exit with error code 1
    }
} else {
    // Print usage message if not enough arguments are provided
    console.error('Usage: fibonacci.js -r NUM | --recursive NUM | -i NUM | --iterative NUM');
    process.exit(1); // Exit with error code 1
}
