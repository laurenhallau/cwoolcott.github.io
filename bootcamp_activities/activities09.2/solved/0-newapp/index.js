var inquirer = require("inquirer");
var wins = 0;
var losses = 0;
var rounds;
var currentRound = 1;

function startGame(){
	console.log("###############################################");
    console.log("");
    console.log("Guessing Game");
    console.log("");
    console.log("###############################################");

	inquirer
	  .prompt([
	    {
	      type: "input",
	      message: "What is your first name?",
	      name: "firstName"
	    },
	    {
     	  type: "list",
	      name: "rounds",
	      message: "How many rounds would you like to play?",
	      choices: [1, 2, 3, 4]
	  }
	  ])
	  .then(function(response) {

	  	firstName = response.firstName;
	  	rounds = response.rounds;
	  	
	  
	  	playRound(firstName, rounds) 

	  });

  }

  function playRound(firstName, rounds){
	console.log("###############################################");
    console.log("");
    console.log(firstName + " vs. Machine");
    console.log("Round: " + currentRound + "/" + rounds);
    console.log("");
    console.log("###############################################");

	inquirer
	  .prompt([
	    {
     	  type: "list",
	      name: "numberPick",
	      message: "Pick a number",
	      choices: [1, 2, 3]
	  	}
	  ])
	  .then(function(response) {
		var compPick = Math.round(Math.random() * 3);
	  	
		if (compPick === response.numberPick){
			wins++;
			console.log("###############################################");
			console.log("You Win!");
			console.log("###############################################");
		}else{
			losses++;
			console.log("###############################################");
			console.log("You LOSE");
			console.log("###############################################");
		}

		currentRound++;

		if (currentRound>rounds){
			endGame(firstName);
		}
		else{
			playRound(firstName, rounds);
		}

	  });

  }

  function endGame(firstName){
		console.log("###############################################");
		console.log("GAME OVER!");
		console.log(firstName + ": " + wins);
		console.log("Machine: " + losses);
		console.log("###############################################");
  }


startGame();