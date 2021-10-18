const fileList = ['MAGO.mp3', 'New.png', 'New_Video1.mpeg', 'My_First_Video.mp4'] // 배열 선언
const inputList = ['New.png', 'New_Video1.mpeg']
let c = 0

// fileList와 inputList의 중복 개수 구하기
fileList.forEach(function(v){
    inputList.forEach(function(i){
        if(v==i){
            c += 1
        }
    })
})
console.log(c)