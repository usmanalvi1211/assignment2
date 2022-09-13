
const toColonTIme = function(date){
    return date.toTimeString().slice(0,8)
}
console.log(toColonTIme(new Date()))