
function addTogether() {

  if(!Number.isInteger(arguments[0])
    // isNaN(parseInt(arguments[0]))
  ) {

    return undefined;
  }

  var arg0 = arguments[0];
  if(arguments.length === 1){
    return function(arg){
      if(!Number.isInteger(arg)) {return undefined;}

      return arg + arg0;
    };
  }else {
    if(!Number.isInteger(arguments[1])
      // parseInt(arguments[1])!== parseInt(arguments[1])
    ) {
      return undefined;
    }
    return arguments[0] + arguments[1];
  }
}

addTogether(2,3);
addTogether(2)(3);
addTogether("http://bit.ly/IqT6zt");
addTogether(2, "3")
addTogether(2)([3])
