let count = 0;
let num = 10;
let sosu=[];

for (let i = 1; i <= num; i++) {
    for (let j = 2; j < i - 1; j++) {
        if (i%j === 0) {
            count += 1;
            console.log(i,j);
            break;
        }
    }
}

sosu = num - count - 1; 
console.log(sosu);