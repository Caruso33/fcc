//smallest common multiple
function smallestCommons(arr) {
    var rArr = [], brr= [];
    var hiArrNr, loArrNr;
    
    if (arr[0] < arr[1]) {
        hiArrNr = arr[1];
        loArrNr = arr[0];
    } else{
        hiArrNr = arr[0];
        loArrNr = arr[1];
    }
    var iterations = 350000;
    
    for (var i = 1; i < iterations; i++){  
        rArr.push(arr[1] * i);
    }
    console.log(rArr);

    function resArr(array, num){
        var reArr = [];
        for (let i =0; i < iterations; i++){
            (function(j){
                if (array.indexOf(num * j) !== -1 ) reArr.push(num * j);
            })(i);
        }
        console.log("reArr " +reArr + "\tnum " +num);
        return reArr;
    }
    
    for (var k = 1; k < hiArrNr; k++){
        rArr = resArr(rArr, hiArrNr - k);
        console.log("rArr " +rArr);
    }
    console.log(rArr[0]);
    return rArr[0];
}

smallestCommons([1,5]);
smallestCommons([23,18]);