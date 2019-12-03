var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "greatBay_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  start();
});

function start() {
  inquirer
    .prompt({
      name: "postOrBid",
      type: "list",
      message: "Would you like to POST or BID",
      choices: ["POST", "BID", "EXIT"]
    })
    .then(function(answer) {
      if (answer.postOrBid == "POST") {
        postAuction();
      }
    });
}

function postAuction() {
  inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "What is the Item?"
      },
      {
        name: "category",
        type: "input",
        message: "What is the Categpry?"
      },
      {
        name: "startingBid",
        type: "input",
        message: "What is the Starting Bid"
      }
    ])
    .then(function(auctionItem) {
      connection.query(
        "INSERT INTO auctions SET ?",
        {
          item_name: auctionItem.item,
          category: auctionItem.category,
          starting_bid: auctionItem.startingBid
        },
        function(err, res) {
          if (err) throw err;
          console.log(res.affectedRows + " inserted!\n");
          // Call updateProduct AFTER the INSERT completes
          start();
        }
      );
    });
}
