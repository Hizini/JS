arr = []; 

function sosu(item) {
    for(let i=2; i<=item-1; i++) {
        if(item % i === 0) {
            return false;
        }
    } 
    if(item === 1) {
        return false;
    }
    return true;
}
for(let i=30; i<=50; i++) {
    if(sosu(i) === true) {
        arr.push(i);
    }
}
console.log(arr);