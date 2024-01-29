fetch("https://jsonplaceholder.typicode.com/todos/1")
//.then(response => console.log(response))
.then(response => response.json()) // 직렬화를 해야 데이터 사용 쉬움
.then(data => console.log(data))
.catch(error => console.log(error));