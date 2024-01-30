fetch("http://localhost:4000/books")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));