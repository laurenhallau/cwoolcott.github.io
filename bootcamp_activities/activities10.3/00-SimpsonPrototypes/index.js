// Simpsons Constructor and prototype

Simpsons = function(firstName) {
	this.firstName = firstName
	this.lastName = "Simpson";
};

const homer = new Simpsons("Homer");

//Added a method
Simpsons.prototype.printName = function(justFirst) {
	if (justFirst){
		console.log(this.firstName);
	}
	else{
		console.log(this.firstName + ' ' + this.lastName);
	}
	
};

const lisa = new Simpsons("Lisa");

homer.printName(true);
lisa.printName();
