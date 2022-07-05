const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js?\n', (answer1) => {
  // console.log(`You Entered: ${answer1}`);
  rl.question('Whats your Name? Nicknames are also acceptable :)\n', (answer2) => {
    // console.log(`You Entered: ${answer2}`);
    rl.question('Whats an activity you like doing?\n', (answer3) => {
      // console.log(`You Entered: ${answer3}`);
      rl.question('What do you listen to while doing that?\n', (answer4) => {
        // console.log(`You Entered: ${answer4}`);
        rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)\n', (answer5) => {
          // console.log(`You Entered: ${answer5}`);
          rl.question("What's your favourite thing to eat for that meal?\n", (answer6) => {
            // console.log(`You Entered: ${answer6}`);
            rl.question('Which sport is your absolute favourite?\n', (answer7) => {
              // console.log(`You Entered: ${answer7}`);
              rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer8) => {
                console.log(`\nThank you for all the information, we will be making a profile for you shortly!\n\nMy name is ${answer2} and I think that Node is ${answer1}.\nMy favourite activity is ${answer3}.\nWhile doing that activity, I like to listen to ${answer4}.\nUsually, when I get hungry, my favourite meal of the day is ${answer5} and I am always trying to have some ${answer6} for that meal to treat myself!\nGrowing up, my favourite sport to watch was ${answer7} with family or friends.\nMy superpower is ${answer8}.`);
                rl.close();
              });
            });
          });
        });
      });
    });
  });
});