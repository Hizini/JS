const arr = ['data1', 'data2','data3','data4','data5','data6','data7','data8','data9','data10','data11','data12','data13','data14','data15','data16','data17','data18','data19','data20'];

// '<div>${arr[0]}</div>'



let arr2 = arr.map(function(item){
    return '<div>' + item + '</div>' ;
});

console.log(arr2);