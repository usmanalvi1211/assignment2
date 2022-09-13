// 7.	Write a JavaScript program that will return 1 if the array is sorted in
// scending order, -1 if it is sorted in descending order or 0 if it is not sorted.

function ascDscArray(array) {
  var asc = false, desc = false;
  for (var i = 1; i < array.length; i++) {
      if (array[0] < array[i]) {
          asc = true;
          
      }
      if (array[0] > array[i]) {
          desc = true;
      }      
  }
  if (asc && desc) return '0';
  return asc ? '1' : '-1';
}

  
console.log(ascDscArray([1,2,3,4,5,6]));
console.log(ascDscArray([15, 7, 3, -8]));
console.log(ascDscArray([4, 20,100,30,1]));





// Entries method practice ..........................................
// var totn_array = ['Tech','On','The','Net'];

// for ([index, element] of totn_array.entries())
// {
//    if (index == 0) element = "totn";
//    console.log(element);
// }