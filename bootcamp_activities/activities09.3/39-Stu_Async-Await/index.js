const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function combineAnimals() {
  try {
  
  //use await readFileAsync for each file.. ie: const hamster = await readFileAsync("hamster.json", "utf8");
  
  
  
//combine results 


// await writeFileAsync the combined file


  } catch(err) {

  }
}

combineAnimals();
