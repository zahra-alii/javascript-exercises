const sumAll  = (a,b) => {
  let sum = 0; // declare sum
  for (let i=a; i<=b; i++){
    sum += i;
  }
  return sum;
}
console.log(sumAll(1, 4))

// Do not edit below this line
module.exports = sumAll;
