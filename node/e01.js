//1
// let total = 0;
// console.time('duration_sum:');
//     for(i= 1; i <= 1000; i++){
//         total = i + total
//     };
// console.timeEnd('duration_sum:');
// console.log('1부터 1000까지 더한 값: %d', total);

//2

// let length = Number(process.argv.length);
//     console.log(`argv속성 파라미터 수: ${length}`)
// process.argv.forEach(function(item, index) {
//     console.log(`${index} : ${item}`);
// });

//3
let clac = require('./module.js')

// console.log('abs(-273) = %d', clac.abs(-273));
// console.log('circleArea(3) = %d', clac.circleArea(3));

console.log('10 + 30 = %d',clac.add(10, 30));
console.log('12 * 5 = %d',clac.multiple(12, 5));

//4
console.log('큰 수는 %d 입니다',clac.bigone(100, 50));

//5
const array = [15.1, 15.4, 16.1, 17.5, 19.2];
console.log('평균 온도는 %d입니다.', clac.getAverager(array));

//6

// random.getRandom()