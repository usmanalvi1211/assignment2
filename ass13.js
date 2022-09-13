// // 13.	Write a JavaScript program to iterate over all own properties of an 
// // object in reverse, running a callback for each one.


// const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));
// forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1


// obj = {"name":"usman","age":25,"pro":"prgramming"}

// o = [];
//  obj.forEach(myFunction);
 
//  function myFunction(obj,item)

//  console.log()




// // const drinks = ['Cola', 'Lemonade', 'Coffee', 'Water'];
// // const id = 2;np
// // const removedDrink = drinks[id];
// // const filteredDrinks = drinks.filter((drink, index) => index !== id);
// // console.log(filteredDrinks)

const person = {
    name: 'Emille',
    age: 23
    ,
  };
  
  for (const item in person) {
    console.log(item);
  }