const repeatString = function(str, num) {
  let result = ''; // decl empty str
  for (let i = 1; i<=num; i++){
    result += str;
  }
  return result;
};
console.log(repeatString('hey', 3));
// Do not edit below this line
// module.exports = repeatString;

