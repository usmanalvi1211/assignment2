// 12.	Write a JavaScript program to remove elements from an array for
// which the given function returns false. 

let arr = ["usman",25,"awan",false,true,[]];
function removeFalse(arr){
let newArr=[];

for (let k in arr.length)
((k)=>{
    if (k){
        newArr.push(k);
    }
})
return newArr;
}
console.log(removeFalse(arr))