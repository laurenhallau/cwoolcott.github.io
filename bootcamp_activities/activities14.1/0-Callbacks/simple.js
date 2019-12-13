// Simple Callback Function

var greetings = {
	//cb is the function being passed in 
	sayHello : function(cb){
		var name = "Chris";
		var message = "How are You?";
		cb(name, message);
	}
}

// anonymous function to be passed as a param into other function
var nameMessageFunction = function(name, message){
	console.log("Hi " + name + '. ' + message);
};

greetings.sayHello(nameMessageFunction)