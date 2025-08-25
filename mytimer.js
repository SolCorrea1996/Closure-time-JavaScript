
/*I COMPLETED THE DOCUMENTATION FROM MY ASSIGNMENT WITH THEIR RESPECTIVE INFORMATION
Class: CSCI390
Assignment: Closure Timer
Author: Solange Correa
Date: 10-11-2024
This is assignment Closure Timer by "node mytimer.js" we create a file creates a custom timer using JavaScript closures. This timer provides three main funtionalities to measure and track
elapsed time, like:
start: This method initializes or resets the timer, recording the exact start time.
getElapsed: This method calculates and returns the time elapsed since the last check or since the timer was started.
totalTime: This method return the total time elapsed since the timer was initially started.
We called it by "mytimer.js"
*/

// Timer function using a more traditional style
// Define the MyTimer function that creates a timer using closures
function mytimer() {
    // Variable to store the starting time of the timer
    let initialTime = 0;
    // Variable to store the last elapsed time check
    let lastCheckTime = 0;

    return {
        // Method to start or reset the timer
        start: function () {
            // Record the current time in milliseconds as the start time
            initialTime = Date.now();
            // Reset lastCheckTime to the initial time
            lastCheckTime = initialTime;
        },

        // Method to get the time elapsed since the last check
        getElapsed: function () {
            const currentTime = Date.now(); // Get the current time in milliseconds
            const elapsedSinceLastCheck = currentTime - lastCheckTime; // Calculate time since last check
            lastCheckTime = currentTime; // Update lastCheckTime to the current time for the next call
            return elapsedSinceLastCheck; // Return the elapsed time since the last check
        },

        // Method to get the total time passed since the timer started
        getTime: function () {
            return Date.now() - initialTime; // Return the difference between current time and start time
        }
    };
}

// Export the myCustomTimer function so it can be used in other files
module.exports = mytimer;
