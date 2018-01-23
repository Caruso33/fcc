function steamrollArray(arr) {
  var res = [];
  goDeep(arr);
  function goDeep(ar){

    ar.forEach(function(a){
      if (Array.isArray(a)){
        goDeep(a)
      } else {
        res.push(a);
      }
    })
  }

  return res;
}

steamrollArray([1, [2], [3, [[4]]]]);
