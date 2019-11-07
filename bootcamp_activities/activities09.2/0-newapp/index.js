var inquirer = require("inquirer");

function startGame() {
  console.log("#####################");
  console.log("Awesome Guessing Game");
  console.log("#####################");

  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your first Name?",
        name: "firstName"
      },
      {
        type: "list",
        name: "roundsNum",
        message: "How many rounds?",
        choices: [1, 2, 3, 4]
      }
    ])
    .then(function(response) {
      console.log(response);
      console.log(response.firstName);
      console.log(response.roundsNum);
    });
}

startGame();
