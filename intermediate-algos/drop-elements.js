
function dropElements(arr, func) {

  var res = arr.filter(func);

  var index = arr.indexOf(res[0]);

  if (index === -1) return [];
  return arr.slice(index);

}

dropElements([1, 2, 3], function(n) {return n < 3; });
dropElements([1, 2, 3, 4], function(n) {return n >= 3;})
dropElements([1, 2, 3, 4], function(n) {return n > 5;})
