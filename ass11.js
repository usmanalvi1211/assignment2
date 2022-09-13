let arr = [4,2,8];
b=arr.map(a => 4*a);
console.log(b)

// 11.	Write a JavaScript program that initializes an array containing the numbers in the specified range where start and end are inclusive and the ratio
// between two terms is step. Returns an error if step equals 1.
const geometricProgression = (end, start = 1, step = 2) =>
  Array.from({ length: Math.floor(Math.log(end / start) / Math.log(step)) + 1 }).map(
    (v, i) => start * step ** i
  );
console.log(geometricProgression(256));
console.log(geometricProgression(256, 3));
console.log(geometricProgression(256, 1, 4));
