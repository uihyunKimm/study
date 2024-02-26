// 절대값을 구하는 메서드
function abs(number) {
    if (0 < number) {
        return number;
    }
    else {
        return -number;
    }
}

// 원의 넓이를 구하는 메서드
function circleArea(radius) {
return radius * radius * Math.PI;
}

function add(number1, number2) {
    let total = number1 + number2
    return total;
}
function multiple(number1, number2) {
    let total = number1 * number2
    return total;
}

function bigone(number1, number2) {
    return number1 >= number2 ? number1 : number2;
}

const getAverager = (arr) => {
    let size = arr.length;
    let sum = 0;
    
    for(let i = 0; i < size; i++){
        sum += arr[i];
    }
    return sum / size;
}


// const getRandom = () => {
//     let array = [];
//     let bigger = 0;
//     for(let i = 0; i < 10; i++){
//      let random = Math.floor(Math.random() * 100+1);
//         array.push(random);

//         bigger = bigger >= array[1] ? bigger: array[1];

//         console.log(array[i]);
//     }
//     console.log('가장 큰수는 %d 입니다.',bigger);
//     }

    module.exports = { abs, circleArea, add, multiple, bigone, getAverager };


