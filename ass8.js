// 8.	Write a JavaScript program that will return true if an object looks
// like a Promise, false otherwise.


	//Checking for a promise
	var prom = new Promise(function(resolve, reject) {
    resolve();
  });

  let num =12;
  let name ="Usman";
  let age = 25;
  let obj ={
    "name":"usman",
    "age":20
  };

  console.log(isProm(prom));
  console.log(isProm(num));
  console.log(isProm(age));
  console.log(isProm(obj));

function isProm(p){
  return Boolean(p && typeof p.then ==="function")

}


  
// function myDisplayer(some) {
//   console.log(some);
// }

// let myPromise = new Promise(function(myResolve, myReject) {
//   let x = 1;

// // some code (try to change x to 5)

//   if (x == 0) {
//     myResolve("PASS");
//   } else {
//     myReject("FAILD");
//   }
// });

// myPromise.then(
//   (result)=>{
//     if(result){
//       console.log(result)
//     }else{
//       console.log(err)
//     }
//   }
//   // function(value) {myDisplayer(value);},
//   // function(error) {myDisplayer(error);}
// ).catch(err => console.log(err))
