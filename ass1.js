//
function precise_round(n, r) {
    let int = Math.floor(n).toString()
    if (typeof n !== 'number' || typeof r !== 'number') return 'Not a Number'
    if (int[0] == '-' || int[0] == '+') int = int.slice(int[1], int.length)
    return n.toPrecision(int.length + r)
}
console.log(precise_round(12.375,2));
console.log(precise_round(-10.3079499, 3));
console.log(precise_round(10.49999,0));
console.log(precise_round(10.49999,2));


//#second method
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);


console.log(round(1.005, 2));
console.log(round(1.05, 2));
console.log(round(1.0005, 2));
