
// Output : array of indexes of elements whose sum is the target number.
// Input [2, 3, 9, 3, 12], [2, 3, 7, 5, 10]
// Target number 12
// Output : [1, 2], [0, 4]

var arr1 = [2, 3, 9, 3, 12]; 
var arr2 = [2, 3, 7, 5, 10];
var targ = 12;

var result = function (arr, targ) {
  var copiedArr = arr.slice(0, arr.length);
  var value;

  function find(array, targ) {
    for (let i = 1 ; i < array.length ; i++) {
      if (array[0] + array[i] === targ) {
        value = [array[0], array[i]];
        return true;
      }; 
    };
  };

  for (let k = 0 ; k < arr.length ; k++) {
    if (find(copiedArr, targ)) {
      return [arr.indexOf(value[0]), arr.indexOf(value[1])]
    } else {
      copiedArr.splice(0, 1);
    }
  }

};

console.log(result(arr1, targ));
console.log(result(arr2, targ));
