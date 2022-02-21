class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }

  rgb() {
    const { r, g, b } = this;
    return `rgb(${r},${g},${b})`;
  }
  rgba() {}

  hex() {}
}

const red = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 255, 255, 'white');

console.log(red);
console.log(white);
console.log(red.rgb());
