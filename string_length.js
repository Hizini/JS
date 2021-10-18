let array = ['동해물과', '백두산이', '마르고', '닳도록'] //문자열로 이루어진 배열 선언

// 배열의 원소의 문자열 길이 반환 
let map = array.map(function(v){ 
    return v.length
})
console.log(map)

/////////////////////////

const fileList = ['MAGO.mp3', 'New.png', 'New_Video1.mpeg', 'My_First_Video.mp4'] // 배열 선언

// 배열의 원소중 파일명만 반환 
let map2 = fileList.map(function(v){
     let split = v.split('.') // '.' 으로 나눔
     let fileName = split[0] // '.' 앞부분 저장
     return fileName //'.' 앞부분 출력
})
console.log(map2);
