// ***** Object Destructuring  *****

const client = {
  name: "Jack Johnson",
  company: "Jack Company",
  balance: 150
};

// let name = client.name;
// let company = client.company;

let { name, company } = client;

console.log(name, company);

// ***** Array Destructuring *****

const introduction = ["Hello", "I", "am", "Chris"];

// let greeting = introduction[0];
// let firstName = introduction[3];

let [greeting, , , firstName] = introduction;

console.log(greeting, firstName);

// ***** forEach / map *****

const staff = [
  { id: 123, name: "Zack Morris" },
  { id: 534, name: "A.C. Slater" },
  { id: 567, name: "Lisa Turtle" },
  { id: 234, name: "Kelly Kapowski" }
];

let staffIds = [];

for (i = 0; i < staff.length; i++) {
  staffIds.push(staff[i].id);
}

console.log(staffIds);

// ***** ForEach (Get Just Ids) *****

let staffAltId = [];

staff.forEach(function(eachStaff) {
  staffAltId.push(eachStaff.id);
});

console.log(staffAltId);

let staffAltNumber = staff.map(function(eachStaff) {
  return eachStaff.id;
});

console.log(staffAltNumber);
