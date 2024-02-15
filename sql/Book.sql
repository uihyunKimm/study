-- CREATE DATABASE BookDB;
USE BookDB;

-- CREATE TABLE Book(
-- bookid INT,
-- bookname VARCHAR(20),
-- publisher VARCHAR(20),
-- price INT
-- );

-- INSERT INTO Book (bookid, bookname, publisher, price)
-- VALUES (100, '데이터베이스', '한빛아카데미', 27000);
-- INSERT INTO Book (bookid, bookname, publisher, price)
-- VALUES (101, '파이썬', '한빛아카데미', 22000);
-- INSERT INTO Book (bookid, bookname, publisher, price)
-- VALUES (102, 'JSP 프로그래밍', '생능출판사', 26000);
-- INSERT INTO Book (bookid, bookname, publisher, price)
-- VALUES (103, '자바스크립트', '길벗', 45000);
-- INSERT INTO Book (bookid, bookname, publisher, price)
-- VALUES (104, '데이터베이스 배움터', '생능출판사', 30000);

-- INSERT INTO Book (bookid, bookname, publisher, price)
-- VALUES (105, 'HTML 기초', '한빛아카데미', 37000);
-- INSERT INTO Book (bookid, bookname, publisher, price)
-- VALUES (106, '파이썬 데이터분석', '이지스퍼블리싱', 25000);
-- INSERT INTO Book (bookid, bookname, publisher, price)
-- VALUES (107, 'Chat GPT', '생능출판사', 29000);
-- INSERT INTO Book (bookid, bookname, publisher, price)
-- VALUES (108, 'ReactJS', '이지스퍼블리싱', 41000);
-- INSERT INTO Book (bookid, bookname, publisher, price)
-- VALUES (109, '홈페이지 만들기 기초', '한빛아카데미', 32000);
-- INSERT INTO Book (bookid, bookname, publisher, price)
-- VALUES (110, '데이터 시각화', '생능출판사', 27000);

SELECT * FROM Book;
-- SELECT * FROM Book WHERE price > 25000;
-- SELECT * FROM Book WHERE price BETWEEN 10000 AND 25000;
-- SELECT * FROM Book WHERE publisher IN('길벗', '생능출판사');
-- SELECT * FROM Book WHERE publisher NOT IN('길벗', '생능출판사');
-- SELECT publisher FROM Book WHERE bookname LIKE '데이터베이스';
-- SELECT bookname, publisher FROM Book WHERE bookname LIKE '%데이터베이스%';
-- SELECT bookname FROM Book WHERE bookname LIKE '_이%';
-- SELECT * FROM Book WHERE publisher='길벗' OR publisher='생능출판사';
-- SELECT * FROM Book WHERE bookname LIKE '%데이터%' AND price >= 30000;

-- SELECT * FROM Book ORDER BY bookname ASC;
-- SELECT * FROM Book ORDER BY bookname;

-- CEILING(숫자) : 값보다 큰 정수 중 가장 작은 수
-- FLOOR(숫자) : 값보다 작은 정수 중 가장 큰 수
-- ROUND(숫자,자릿수) : 숫자를 소수점 이하 자릿수에서 반올림
-- TRUNCATE(숫자,자릿수) : 숫자를 소수점 이하 자릿수에서 버림
-- SELECT  bookname;
-- SELECT SUM(price) FROM Book;
-- SELECT SUM(price) AS '가격 총합' FROM Book;

-- SELECT publisher, sum(price) FROM Book GROUP BY publisher HAVING publisher = '생능출판사';
-- SELECT publisher, sum(price) FROM Book GROUP BY publisher HAVING sum(price) > 30000;
-- SELECT publisher, sum(price) FROM Book where price > 20000 GROUP BY publisher HAVING publisher = '한빛아카데미';
-- SELECT distinct publisher FROM book;

SELECT SUM(price) AS '총액' FROM Book WHERE bookname LIKE '%데이터베이스%';
SELECT COUNT(bookname) AS '한빛아카데미' FROM Book WHERE publisher = '한빛아카데미';
SELECT publisher, COUNT(bookname) AS '도서수량' FROM Book WHERE price > 30000 GROUP BY publisher;
SELECT publisher, COUNT(bookname) AS '도서수량' FROM Book WHERE price > 30000 GROUP BY publisher HAVING COUNT(*) >= 2;

UPDATE Book SET price = 23000 WHERE bookid = 101;
DELETE FROM Book WHERE publisher = '길벗';

-- 안 쓰는게 좋은 테이블 속성 변경
ALTER TABLE Book ADD isbn VARCHAR(10); -- 추가
ALTER TABLE Book MODIFY ISBN INT; -- 속성 변경
ALTER TABLE Book CHANGE isbn 일련번호 INT; -- 이름 변경
ALTER TABLE Book DROP column 일련번호; -- 삭제