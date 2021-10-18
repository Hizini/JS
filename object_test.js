// object 배열 선언
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

// personData에 직업 추가 및 변경
personData.forEach(function(data){
    data.job = "개발자"
    if(data.name === '철수'){
        data.job = '디자이너'
    }
    if(data.name === '영희'){
        data.job = '보안운영'
    }
    if(data.name === '준형'){
        data.job = '퍼블리셔'
    }
})

// personData에 나이 추가 및 변경
personData.forEach(function(data){
    data['age'] = '25'

    if (data.name === '철수'){
        data['age'] = '27'
    }
    if(data.name === '영희'){
        data['age'] = '21'
    }
    if(data.name === '준형'){
        data['age'] = '70'
    }
})

// personData에 영희 datail 추가
personData[1].detail = {
    book: ['흥부', '엉', '앙'],
    price: 3000
}

console.log(personData);