const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answer1, answer2, answer3, answer4, answer5, answer6, answer7;

const question1 = () => {
  return new Promise((resolve) => {
    rl.question("What's your name? Nicknames are also acceptable :)? ", (answer) => {
      answer1 = answer;
      resolve();
    });
  });
};

const question2 = () => {
  return new Promise((resolve) => {
    rl.question("What's an activity you like doing? ", (answer) => {
      answer2 = answer;
      resolve();
    });
  });
};

const question3 = () => {
  return new Promise((resolve) => {
    rl.question("What do you listen to while doing that? ", (answer) => {
      answer3 = answer;
      resolve();
    });
  });
};

const question4 = () => {
  return new Promise((resolve) => {
    rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
      answer4 = answer;
      resolve();
    });
  });
};

const question5 = () => {
  return new Promise((resolve) => {
    rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
      answer5 = answer;
      resolve();
    });
  });
};

const question6 = () => {
  return new Promise((resolve) => {
    rl.question("Which sport is your absolute favourite? ", (answer) => {
      answer6 = answer;
      resolve();
    });
  });
};
const question7 = () => {
  return new Promise((resolve) => {
    rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
      answer7 = answer;
      resolve();
    });
  });
};


const main = async() => {
  await question1();
  await question2();
  await question3();
  await question4();
  await question5();
  await question6();
  await question7();
  console.log(answer1 + " loves " + answer3 + " while " + answer2 + ", devouring " + answer5 + " for " + answer4 + ", prefers " + answer6 + " over any other sport, and is amazing at " + answer7);
  rl.close();
};

main();

