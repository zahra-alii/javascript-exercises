function convertToCelsius(temp){
  let fanhrenheit = (temp - 32) * 5/9;
  return fanhrenheit;
}
console.log(convertToCelsius(32));


function convertToFahrenheit(temp){
  let celsius = (temp * 9/5) + 32;
  return celsius;
}
console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
