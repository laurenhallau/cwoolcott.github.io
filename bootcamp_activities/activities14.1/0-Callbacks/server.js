var orm = require("./config/orm.js");
//var orm = require("./config/orm_callback.js");


 var data = orm.selectWhere("parties", "party_type", "grown-up");

 console.log(data); // Data is undefined. Why?


// Call orm method, passing in the anonymous function(with "res") as the callback.
// orm.selectWhere("parties", "party_type", "grown-up", function(result) {
//   var data = result;
//   console.log(data);
// });