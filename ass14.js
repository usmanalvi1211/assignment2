function func1(n){
    fabonicci = [0,1];
    for (i=3; i<=n;i++){
    fabonicci.push(fabonicci[i-3]+fabonicci[i-2])
    }
    console.log( fabonicci)
}

console.log(func1(10))