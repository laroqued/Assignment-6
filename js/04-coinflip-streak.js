/* 1.	Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet. */
var coinFlip;

/* 2.	Create a do while loop. */
do {
/* 3.	Within the do while loop assign a randomly generated number to coinFlip. You will have to use a Math method to get this number. Also, make sure to round that number off so that you get either a 0 or 1 as the result. */
  coinFlip = Math.floor(Math.random() * 2);


/* 4.	Use a conditional to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window.  */  

  if (coinFlip === 0) {
    console.log("Heads");
  } else if (coinFlip === 1) {
    console.log("Tails");
    break;
  }
//   console.log(`1 or 0: (${coinFlip})`);

/* 5.	Set the condition of the do while loop to end once the coinFlip becomes “Tails”. */
} while (coinFlip === 0); // Keep going as long as coinFlip is 0, until 1 ends the loop



