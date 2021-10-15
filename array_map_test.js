const arr = ['data1', 'data2','data3','data4','data5','data6','data7','data8','data9','data10','data11','data12','data13','data14','data15','data16','data17','data18','data19','data20'];
// data 배열 선언

let arr2 = arr.map(function(item){  // arr 배열을 순회하며 맵핑
    return '<div>' + item + '</div>' ; //<div> </div> 태그 반환
});

console.log(arr2); 
