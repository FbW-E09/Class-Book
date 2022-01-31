// Write a program to get the extension of a file

// getFileExtension('index.html') --> '.html'
// getFileExtension('script.js') --> '.js'
// getFileExtension('webpack.config.js') --> '.js'

// @params
// file --> string
const getFileExtension = (file) => {
  // Each file/string has a period we want to, from the last period, return the remaining string chars
  const fileArr = file.split('.');
  const lastEl = fileArr.length - 1;
  return fileArr[lastEl];
};

const getFileExtension = (file) => file.slice(file.lastIndexOf('.'));

console.log(getFileExtension('index.html'));
console.log(getFileExtension('script.js'));
console.log(getFileExtension('webpack.config.ts'));
