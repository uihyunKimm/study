fetch("http://localhost:4000/books")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));

function showList(data) {
    // bookList 화면 출력
    data.forEach((book) => {
    let boardTbody = document.querySelector(".boardTbody");
    let tr = `<tr class="boardTbTr">
    <td>${book.id}</td>
    <td colspan="2" class="boardTbTitle">
    ${book.title}
    </td>
    <td>${book.publisher}</td>
    <td>${book.price}</td>
    </tr>`;
    boardTbody.innerHTML += tr;
    });
    }