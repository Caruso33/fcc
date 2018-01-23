function smallestCommons(arr) {
  arr.sort();
  function lcm(num1, num2) { //function to find the lowest common multiple. based on the euclidean algorithm (first finds gcd)
    var a = num1; //variable to store num1 for gcd calc
    var b = num2;
    var arr1 = []; //array to store lcd, gcm
    while (a != 0 && b !=0) { //this while statement to first find the gcd is the meat of the euclidean alg
      if (a <= b) {
        b = b % a;
      }
      else {
        a = a % b;
      }
    }

    var x; //variable to store GCD
    if (a > 0) {
      x = a;
    } else {
      x = b;
    }

    var z; //variable to store LCM.
    z = (num1*num2)/x;

    return z;
  }

  var c = arr[0];
  var d = arr[1];
  var y = lcm(arr[0],arr[1]);
  for (i=arr[0]; i<=arr[1]; i++) {
    y = lcm(c,y);
    c++;
  }

  return y;

}

smallestCommons([1,5]);
smallestCommons([23,18]);
