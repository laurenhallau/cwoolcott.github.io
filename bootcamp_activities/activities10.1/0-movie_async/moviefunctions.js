const axios = require("axios");
const choices = ["Released","Genre","Actors","Awards","Plot"];


// creates an object and sets it to bird
var birds = {
  // creates the property "flying" and sets it to true
  flying: true,
  // creates the property "noise" and sets it to "Tweet!"
  noise: "Tweet!",
  // creates the method "makeNoise", prints birds.noise   
  //if flying is true
  makeNoise: function() {
  // i.e. this.flying refers to the flying property of 'this' 
  //particular object
    if (this.flying === true) {
      console.log(this.noise);
    }
  }
};


module.exports = {

	movieInfo: function () {
	    
	    return {
	        type: "rawlist",
	        message: "What Type of Information Do You Want?",
	        name: "movieInfo",
	        choices: choices
	    }
	 },

	movieApi: async function (movieName, movieInfo) {

		const movieTitle = encodeURI(movieName.trim());
		const movieUrl = `https://www.omdbapi.com/?t=${movieTitle}&apikey=trilogy`;
		let res = await axios.get(movieUrl);

		return res.data[movieInfo];
	},

	movieDisplay: function(movieInfo, movieResponse){
		console.log("\n***************** " + movieInfo + " *****************");
	   	console.log(movieResponse);
	   	console.log("****************************************\n");
	}

};
