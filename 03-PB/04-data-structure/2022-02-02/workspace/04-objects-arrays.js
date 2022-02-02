let books = [
  {
    title: "The Lottery and Other Stories",
    author: "Shirley Jackson",
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
  },
  {
    title: "Slaughterhouse-Five",
    author: "Kurt Vonnegut",
  },
  {
    title: "The Handmaid's Tale",
    author: "Margaret Atwood",
  },
  {
    title: "The Metamorphosis",
    author: "Franz Kafka",
  },
];

for (let i = 0; i < books.length; i++) {
  /**
   * books: array
   * i: number from 0... books.length
   * books[i]: object, an element from the array
   * books[i].title: string
   */
  // console.log(this[i.title])
  // console.log(books[i.title])
  console.log(books[i].title);
//   console.log("by", books[i].author);
  // print last name first, first name second 
  let fullName = books[i].author.split(" ");
  console.log("by", fullName[1], fullName[0]);
  console.log("------");
}
