const arr = ['data1', 'data2','data3','data4','data5','data6','data7','data8','data9','data10','data11','data12','data13','data14','data15','data16','data17','data18','data19','data20'];
// data 배열 선언

let arr2 = arr.map(function(item){  // arr 배열을 순회하며 맵핑
    return `<div> ${item} </div>`; // 템플릿 리터럴 사용 
   // '<div>' + item + '</div>' ; //<div> </div> 태그 반환
});

console.log(arr2); 


const arr5 = [1, 2, 3, 4, 5]
const arr6 = []

// map 사용 예제
const result = arr5.map(item => {
    return item * 3
})
// result = [3, 6, 9, 12, 15]

// forEach 문 사용 예제
arr5.forEach(function (item) {
    arr6.push(item * 3)
})
// arr6 = [3, 6, ,9, 12, 15]