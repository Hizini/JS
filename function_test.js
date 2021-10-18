//object 배열 선언
const personData = [{
    name: '철수',
    height: 186,
    weight: 87
},
{
    name: '영희',
    height: 166,
    weight: 47
},
{
    name: '진수',
    height: 182,
    weight: 77
},
{
    name: '준형',
    height: 180,
    weight: 101
}]

// // 나이 추가 및 변경 함수 선언
// function setAge(){
//     personData.forEach(function(data){
//         data['age'] = '25'
    
//         if (data.name === '철수'){
//             data['age'] = '27'
//         }
//         if(data.name === '영희'){
//             data['age'] = '21'
//         }
//         if(data.name === '준형'){
//             data['age'] = '70'
//         }
//     })
//     return personData
// }

// // 직업 추가 및 변경 함수 선언
// function setJob(){
//     personData.forEach(function(data){
//         data.job = "개발자"
//         if(data.name === '철수'){
//             data.job = '디자이너'
//         }
//         if(data.name === '영희'){
//             data.job = '보안운영'
//         }
//         if(data.name === '준형'){
//             data.job = '퍼블리셔'
//         }
//     })
//     return personData
// }

// 영희 datail 추가 함수 선언
// function setDetail(){
//     personData[1].detail = {
//         book: ['흥부', '엉', '앙'],
//         price: 3000
//     }
// }

// setJob() // job 함수 호출
// setAge() // age 함수 호출
//  setDetail() // detail 함수 호출

// 배열안의 object elements의 name이 name과 같을때 age 추가
// function setAge(name, age) {
//     personData.forEach(function(data){
//         if(data.name === name) {
//             data.age = age
//         }
//     })
// }

// 배열안의 object elements의 name이 name과 같을때 job 추가
// function setJob(name, job) {
//     personData.forEach(function(data){
//         if(data.name === name) {
//             data.job = job
//         }
//     })
// }

// setAge('철수', 10) // object name이 철수이면, 나이 10 추가
// setJob('영희', '디자이너') // object name이 영희이면, '디자이너' 추가

// 배열안의 object elements의 name이 name과 같을때 detail 추가
// const setDetail = function(name, detail) {
//     personData.forEach(function(data){
//         if(data.name === name){
//             data.detail = detail
//         }
//     })
// }

// setDetail('영희', {book: ['d','dd'], price: 30}) // object name이 영희이면, {book: ['d','dd'], price: 30} 추가



console.log(personData)