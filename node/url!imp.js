// 모듈을 추출한다.
const myURL = new URL("https://sub.example.com:8080/p/a/t/h?query=string#hash");
// 모듈을 사용한다.
// console.log(myURL);
console.log(myURL.hostname);
console.log(myURL.port);
console.log(myURL.pathname);//중요
console.log(myURL.search);//중요
console.log(myURL.hash);


//searchParams
const myURL2 = new URL("https://example.org/?bcode=B4250257160&page=300&category=javascript&category=nodejs"
);

console.log(myURL2.searchParams);
console.log(myURL2.searchParams.getAll('category'));
