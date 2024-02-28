// 모듈을 추출한다.
const os = require('os');
// 모듈을 사용한다.
console.log('hostname : ', os.hostname());
console.log('type : ', os.type());
console.log('platform : ', os.platform());
console.log('uptime : ', os.uptime());
console.log('totalmem : ', os.totalmem());