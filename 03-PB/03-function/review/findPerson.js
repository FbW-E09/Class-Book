// Given a name, return true if the array we have contains that name

const people = ['Keanu', 'Helon', 'Nic'];
// 'hElOn' === 'Helon' --> true
// 'helon' === 'HELON' --> true
// 'helon' === 'helon' --> true

function findPersonByName(name) {
  const lowerCasedName = name.toLowerCase();
  // loop over the array
  for (let i = 0; i < people.length; i++) {
    //   check if any of the names match name passed in
    if (people[i].toLowerCase() === lowerCasedName) {
      return true;
    }
  }
  return false;
  // return true if so, or false if not
}

const findMe = (me, arr) =>
  arr.join(' ').toLowerCase().includes(me.toLowerCase());

console.log(findMe('hELon', people));

const findPerson = (person) => {
  const lowerCasedName = person.toLowerCase();
  for (let i = 0; i < people.length; i++) {
    //   check if any of the names match name passed in
    const currPerson = people[i].toLowerCase();
    if (currPerson === lowerCasedName) {
      return true;
    }
  }
  return false;
};

// console.log(findPerson('hELOn'));
