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

//persconData 추가 및 수정 함수 managePersonData 생성
// const managePersonData = (name, data) => { //data는 [[key, value]] 값 설정
//     let index = personData.findIndex(v => v.name === name) // 함수의 name 인자와 personData의 object name이 같을때 personData의 인덱스 값

//     //추가하는 기능
//     if(index === -1) {  // personData 내에 name값이 없으면
//         personData.push({name: name}) // name: name 형태로 오브젝트 추가
//         index = personData.length-1 // data의 값을 동일한 오브젝트에 추가하기 위해 -1인 인덱스 값을 personData의 인덱스 숫자로 변경
//     }

//     //수정하는 기능 (오브젝트 내에 이름은 존재할 때, data 값을 추가하거나, 수정함)
//     data.forEach(v => {
//         personData[index][v[0]] = v[1]  //  v[0]: data의 키 값, v[1]: data의 value 값
//     })
// }
// managePersonData('희진', [['job', 'frontend developer'], ['height', 169]])
// managePersonData('철수', [['job', 'frontend developer'], ['height', 169]])

// managePersonData('갑수', [['height', 160]])

//persconData 추가 및 수정 함수 managePersonData 생성
const managePersonData = (name, key, value) => { 
    let index = personData.findIndex(v => v.name === name) // 함수의 name 인자와 personData의 object name이 같을때 personData의 인덱스 값

    //추가하는 기능
    if(index === -1) {  // personData 내에 name값이 없으면
        personData.push({name: name}) // name: name 형태로 오브젝트 추가
        index = personData.length-1 // data의 값을 동일한 오브젝트에 추가하기 위해 -1인 인덱스 값을 personData의 인덱스 숫자로 변경
    }

    personData[index][key] = value 
    

}

managePersonData('애쉬', 'name', '케이틀린')

console.log(personData)