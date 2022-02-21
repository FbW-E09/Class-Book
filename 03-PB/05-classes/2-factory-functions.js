// Factory Functions
// A function that makes and returns an object every time it's called.
// The resulting objecst all follow the same "recipe"

function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r},${g},${b})`;
  };
  return color;
}

const firstColor = makeColor(35, 233, 145);
const secondColor = makeColor(35, 200, 130);
console.log(firstColor);
console.log(secondColor);
console.log(firstColor.rgb());
