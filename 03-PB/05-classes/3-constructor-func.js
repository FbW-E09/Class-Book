// This is a constructor funtion
function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

// If you just call it on it's own you'd get undefined
// console.log(Color(35, 60, 190));

// ///////
// THE NEW OPERATOR
////////

// 1. Creates a blank, plain JavaScript object;
// 2. Links (sets the constructor of) this object to another object;
// 3. Passes the newly created object from Step 1 as the this context;
// 4. Returns this if the function doesn't return its own object.

Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r},${g},${b})`;
};

const color1 = new Color(35, 60, 190);
const color2 = new Color(25, 30, 140);
console.log(color1);
console.log(color1.rgb());
console.log(color2);
console.log(color2.rgb());

// const makeRgb = (r, g, b) => `${r},${g},${b}`;
// let color2 = new makeRgb(35, 90, 190);
// console.log(color2);
