// 9.	Write a JavaScript program to get a Boolean determining
// if the passed value is an object or not
// let obj = {"name":"usman","age":25}
// // let obj = null;


// if (obj === typeof obj){
//     console.log(typeof obj,"True")
// }
// else{console.log("False")}




function func1(val){
    return val=== (typeof val);
}

console.log({"name":"usman","age":25})
console.log(func1([]))
console.log(func1(21))
console.log(func1("usman"))

// Original Solution.................................
// const isPrimitive = val => !['object', 'function'].includes(typeof val) || val === null;

// console.log(isPrimitive(null));
// console.log(isPrimitive(50));
// console.log(isPrimitive('Hello!'));
// console.log(isPrimitive(false));
// console.log(isPrimitive(Symbol()));
// console.log(isPrimitive([]));

// Includes Practice.................................
// let usman = "hello usman welcome to My Impact meter"
// let b = usman.includes("welcome")
// console.log(b);