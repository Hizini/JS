let n = 10;
let arr = [];

for (let i = 1; i <= n; i++) {
    arr.push(i);
}

//소수를 배열에 넣기
const sosus = arr.filter(num => {
    if (isSosu(num) === true) {
        return true;
    }
})

// 소수인지 아닌지 판별
function isSosu(num) {
    let arr = [];
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= num - 1; i++) {
        arr.push(i);
    }
    let notSosu = arr.some(v => {
        if (num % v === 0) {
            return true;
        }
    });
    return !notSosu;
}