// Requiring our movie module exported from movie.js
const movieFunctions = require("./moviefunctions.js");
const inquirer = require("inquirer");

async function main() {
  const getMovie = await inquirer.prompt({
    type: "input",
    name: "movieName",
    message: "What movie do you want information about?"
  });

  const getMovieInfo = await inquirer.prompt(movieFunctions.movieInfo());

  const movieResponse = await movieFunctions.movieApi(
    getMovie.movieName,
    getMovieInfo.movieInfo
  );

  movieFunctions.movieDisplay(getMovieInfo.movieInfo, movieResponse);

  const retry = await inquirer.prompt({
    type: "confirm",
    name: "answer",
    message: "Try Again?"
  });

  if (retry.answer) {
    main();
  } else {
    console.log("\n******** Goodbye! ********\n");
  }
}

main();
