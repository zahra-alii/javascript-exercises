function removeFromArray(arr, ...args){ // ... takes in limitless # of args
  const newArr = []; // create new arr
  arr.forEach((elem) => { // loop through each elem
    if(!args.includes(elem)) { // if args does NOT include the element we select...
      newArr.push(elem); // push the elem into newArr
    }
  });
  return newArr;
}
console.log(removeFromArray([1, 2, 3, 4], 3))
// Do not edit below this line
module.exports = removeFromArray;
