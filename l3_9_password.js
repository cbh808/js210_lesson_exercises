/*
Write a password guessing program that tracks how many times the user enters the wrong password. If the user enters the password wrong three times, log 'You have been denied access.' and terminate the program. If the password is correct, log 'You have successfully logged in.' and end the program.

// password = 'password'

// The program displays a dialog that asks the user to enter a password.
// If the user enters the wrong password, keep asking up to three times. After
// three failures, log the access denied.

What is the password: 123
What is the password: opensesame
What is the password: letmein

// message on the console
You have been denied access.

// If the user enters the right password, report login success.
What is the password: password

// message on the console
You have successfully logged in.

Rules:
user has input the password
programm promts and shows the password that was input by user
a user has three attemps to input correct password and displays each attempt
three wrong passwords cause program to terminate and display denied message
a correct password ends the program and displays success message

Algortihm:

  -declare a variable to store the value of the 'password' to be guessed
  -create a loop
    -declare a counter variable to the value of 1
    -create condition to counter being <= 3
    -increment the counter by 1
    -declare a variable to store the user input
      -evaluate the user input
        - if it matches the value of 'password'
          -log the success message to the console
          -break
    -if the loop ends
      -if there is no match to 'password'
      -log denied access message to the console

*/

let password = 'password';

for (let counter = 1; counter <= 3; counter += 1) {
  let userInput = prompt('What is the password?');
  
  if (userInput === 'password') {
    console.log('You have successfully logged in.'); 
    break
  }
    
  if (counter === 3 && userInput != 'password') {
    console.log('You have been denied access.');
    break;
 }
}

// Alternative with function
let passwordManager = () => {

    let password = 'password';

    for (let counter = 1; counter <= 3; counter += 1) {
      let userInput = prompt('What is the password?');

      if (userInput === 'password') {
        return console.log('You have successfully logged in.'); 
      }

      if (counter === 3 && userInput != 'password') {
        return console.log('You have been denied access.');
     }
    }
}

passwordManager();

// LS alternative
do {
  let guess = prompt('What is the password:');

  if (guess === PASSWORD) {
    break;
  }

  failedAttempts += 1;
} while (failedAttempts < 3);

if (failedAttempts === 3) {
  console.log('You have been denied access.');
} else {
  console.log('You have successfully logged in.');
}