// ***** Object Destructuring  *****

const client = {
  name: "Jack Johnson",
  company: "Jack Company",
  balance: 150
};

let { name } = client; // Just Name

console.log(name);

// ***** Array Destructuring *****

const introduction = ["Hello", "I", "am", "Chris"];
let [greeting, , , firstName] = introduction;

console.log(greeting, firstName); //Hello Chris

// ***** forEach / map *****

const staff = [
  { id: 123, name: "Zack Morris" },
  { id: 534, name: "A.C. Slater" },
  { id: 567, name: "Lisa Turtle" },
  { id: 234, name: "Kelly Kapowski" }
];

// ***** ForEach (Get Just Ids) *****

const employeeIds = [];
staff.forEach(function(officer) {
  employeeIds.push(officer.id);
});

console.log(employeeIds);

// ***** ...OR... Map (Get Just Ids) *****

const employeeIdsAlt = staff.map(function(officer) {
  return officer.id;
});

console.log(employeeIdsAlt);

// ***** Template Literals *****

const string = `${name} Company and ${firstName} assigned to staff #${
  employeeIdsAlt[0]
}`;
console.log(string);
