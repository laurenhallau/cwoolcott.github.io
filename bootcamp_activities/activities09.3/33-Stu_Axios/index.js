const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    //axios.get
    axios.get(queryUrl).then(function(response) {
      //console.log(response);
      const repoNames = response.data.map(function(eachRepo) {
        return eachRepo.name;
      });

      const repoString = repoNames.join("\n");

      tempRepoArray = [];
      for (let i = 0; i < response.data.length; i++) {
        tempRepoArray.push(response.data[i].name);
      }

      const repoNewString = tempRepoArray.join("\n");
      console.log(repoNewString);
      var car = [];
      car[0] = "Porsche";
      car[1] = "Mazda";
      car[2] = "Ford";

      const carString = car.join(" and ");
      console.log(carString);
    });

    //fs.writeFile
  });
