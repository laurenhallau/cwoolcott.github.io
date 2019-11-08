function waitFor(seconds, cb) {
// 1. return new Promise (function(resolve, reject) {
  if (isNaN(seconds) || seconds < 1) {
    // 2. return reject(Error(" ... "));
    return cb(Error("Parameter 'seconds' must be a positive number!"));
  }

  setTimeout(function() {
    cb(null, "Success!"); //3. use resolve("Success")
  }, seconds * 1000);
}

// 4. waitFor now has a promise so we can use .then (function(msg){
waitFor(2, function(err, msg) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(msg);
})
