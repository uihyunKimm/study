// 모듈을 추출한다.
const crypto = require('crypto');
// 모듈을 사용한다.
const shaHash = crypto.createHash('sha256');
shaHash.update('crypto_hash');

let output = shaHash.digest('hex');

console.log('crypto_hash : ', output);

const algorithm = "aes-256-cbc";
const key = "sakskgkdlcisjdfuejnairpswi439325"
const iv = "2938573829281085"
const input = "hyun"

// 암호화
const cipher = crypto.createCipheriv(algorithm, key, iv);
let cipheredOutput = cipher.update(input, "utf8", "base64");
cipheredOutput += cipher.final("base64");
// 복호화
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decipheredOutput = decipher.update(cipheredOutput, "base64", "utf8");
decipheredOutput += decipher.final("utf8");
// 출력
console.log("원래 문자열 : " + input);
console.log("암호화 : " + cipheredOutput);
console.log("암호화 해제 : " + decipheredOutput);