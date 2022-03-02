class Animal {
  constructor(name, type, color, age, sound) {
    this.name = name;
    this.type = type;
    this.color = color;
    this.age = age;
    this.sound = sound;
  }

  speak() {
    console.log(this.sound);
  }
}

let cat = new Animal("Tom", "cat", "grey", 3, "meow");
let dog = new Animal("Buzz", "dog", "brown", 6, "woof");
let fish = new Animal("Doris", "fish", "blue", 3, "blub");

cat.speak();
dog.speak();
fish.speak();