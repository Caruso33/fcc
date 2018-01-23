function findElement(arr, func) {
  var num = 0;
  let resArr = arr.filter(func)
  // console.log(resArr);
  return resArr[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
