function showBoard() {
  // bookList.json 파일에 데이터 요청
  fetch("http://localhost:4000/books")
  .then((response) => response.json())
  .then((data) => showList(data))
  .catch((error) => console.log(error));
  }
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

      // form 태그 찾기
  const form = document.getElementById("save");
  // submit 이벤트 처리
  form.addEventListener("submit", (e) => {
  // 디폴트 행동 제거(submit 특징 - 1.페이지 이동, 2.데이터 전송)무조건 처음
  e.preventDefault();
  // FormData 객체 생성
  const formData = new FormData(form);
  // URLSearchParams 객체 생성
  const bookInfo = new URLSearchParams(formData);
  });

  // 서버에 데이터 전송
fetch("http://localhost:4000/books", {
  method: "POST",
  body: bookInfo,
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
