// Given a name, return true if the array we have contains that name

const people = ['Helon', 'Keanu', 'Nic'];

function findPersonByName(name) {
  const lowerCasedName = name.toLowerCase();
  // loop over the array
  for (let i = 0; i < people.length; i++) {
    //   check if any of the names match name passed in
    console.log(people[i]);
  }
  // return true if so, or false if not
}

console.log(findPersonByName('hElOn'));
