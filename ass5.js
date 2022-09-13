// 5.	Write a JavaScript program to convert an asynchronous function to return a promise
function resolveAfter2Seconds() {
  return new Promise(function(resolve, reject) {
    setTimeout(function(){
      const name =true;
      if (!name){
        resolve('resolved');}
      else{
        reject('Try again')
      }
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();
// const promisify = func => (...args) =>
//   new Promise((resolve, reject) =>
//     func(...args, (err, result) => (err ? reject(err) : resolve(result)))
//   );
// const delay = promisify((d, cb) => setTimeout(cb, d));
// delay(2000).then(() => console.log('Hi!')); // // Promise resolves after 2s



// array practice.........................
// cat = ["tom","jerry","yellow","pink","brownie"]
// cars = []
// for (var a=0; a<cat.length; a++)
// cars.push(cat[a])
// console.log(cars)


// promis practice.............................................
// function myDisplayer(some) {
//     console.log(some);
//   }
  
//   let myPromise = new Promise(function(myResolve, myReject) {
//     let x =1;
  
//   // some code (try to change x to 5)
  
//     if (x == 0) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });
  
//   myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );  