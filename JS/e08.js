function showBoard() {
  // bookList.json 파일에 데이터 요청
  fetch("http://localhost:4000/books")
    .then((response) => response.json())
    .then((data) => showList(data))
    .catch((error) => console.log(error));
}

function showList(data) {
  console.log(data);
  // bookList 화면 출력
  data.forEach((book) => {
    let boardTbody = document.querySelector(".boardTbody");
    let tr = `<tr class="boardTbTr">
                  <td>${book.id}</td>
                  <td colspan="2" class="boardTbTitle">${book.title}</td>
                  <td>${book.publisher}</td>
                  <td>${book.price}</td>
              </tr>`;
    boardTbody.innerHTML += tr;
  });
}

// form 태그 찾기
const form = document.querySelector("#save");
const title = document.querySelector("#title");
const publisher = document.querySelector("#publisher");
const price = document.querySelector("#price");

form.addEventListener("submit", (e) => {
  // 디폴트 행동 제거
  e.preventDefault();

  // FormData 객체 생성
  // const formData = new FormData(form);

  // URLSearchParams 객체 생성
  // const bookInfo = new URLSearchParams(formData);

  const newData = {
    title: title.value,
    publisher: publisher.value,
    price: price.value,
  };

  // 서버에 데이터 전송
  fetch("http://localhost:4000/books", {
    method: "POST",
    body: JSON.stringify(newData),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
});
