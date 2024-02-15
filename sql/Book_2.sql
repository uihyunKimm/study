CREATE DATABASE BookDB;
USE BookDB;

CREATE TABLE newBook(
bookid INT PRIMARY KEY,
bookname VARCHAR(20),
publisher VARCHAR(20),
price INT
);

/*
INSERT INTO newBook (bookid, bookname, publisher, price)
VALUES (100, '데이터베이스', '한빛아카데미', 27000);
INSERT INTO newBook (bookid, bookname, publisher, price)
VALUES (101, '프로그래밍', '한빛아카데미', 30000);
INSERT INTO newBook (bookid, bookname, publisher, price)
VALUES (102, '데이터 시각화', '생능출판사', 27000);

ALTER TABLE newBook MODIFY bookname VARCHAR(20) NOT NULL;
ALTER TABLE newBook MODIFY publisher VARCHAR(20) NOT NULL;

delete from newbook;
ALTER TABLE newBook MODIFY price INT DEFAULT 10000;

delete from newBook;
INSERT INTO newOrders(orderid, bookid, member, address) VALUES ('p001', 102, '오한솔', '경기');
INSERT INTO newOrders(orderid, bookid, member, address) VALUES ('p002', 107, '김현우', '서울');
INSERT INTO newOrders(orderid, bookid, member, address) VALUES ('p003', 103, '박홍진', '부산');
INSERT INTO newOrders(orderid, bookid, member, address) VALUES ('p004', 102, '김현우', '서울');
INSERT INTO newOrders(orderid, bookid, member, address) VALUES ('p005', 104, '문종헌', '대전');
INSERT INTO newOrders(orderid, bookid, member, address) VALUES ('p006', 105, '김현우', '서울');
INSERT INTO newOrders(orderid, bookid, member, address) VALUES ('p007', 103, '이봉림', '부산');
INSERT INTO newOrders(orderid, bookid, member, address) VALUES ('p008', 102, '정희성', '경기');
INSERT INTO newOrders(orderid, bookid, member, address) VALUES ('p009', 107, '오한솔', '경기');
INSERT INTO newOrders(orderid, bookid, member, address) VALUES ('p010', 103, '김현우', '서울');
*/

select * from neworders;
select * from newbook;

SELECT newBook.bookname, newBook.price FROM newbook, neworders WHERE newOrders.member = '김현우' and newOrders.bookid = newBook.bookid;
select neworders.orderid, neworders.member, newBook.bookname, newBook.price ,neworders.address FROM newbook, neworders
where neworders.bookid = newbook.bookid;

-- 실습 6-1
SELECT replace(bookname, '데이터', 'Data')bookname, publisher, price FROM newBook;

-- 실습 6-2
SELECT bookname AS 제목,
CHAR_LENGTH(bookname) AS 문자수,
LENGTH(bookname)AS 바이트수
FROM newBook
WHERE publisher='한빛아카데미';

-- 실습 6-3
ALTER TABLE newBook
ADD orderdate DATE;

-- 실습 6-4
UPDATE NEWBOOK SET ORDERDATE = '2023-05-12' WHERE BOOKID = 100;
UPDATE NEWBOOK SET ORDERDATE = '2023-05-12' WHERE BOOKID = 101;
UPDATE NEWBOOK SET ORDERDATE = '2023-05-12' WHERE BOOKID = 102;
UPDATE NEWBOOK SET ORDERDATE = '2023-05-12' WHERE BOOKID = 103;
UPDATE NEWBOOK SET ORDERDATE = '2023-05-12' WHERE BOOKID = 104;
UPDATE NEWBOOK SET ORDERDATE = '2023-05-12' WHERE BOOKID = 105;
UPDATE NEWBOOK SET ORDERDATE = '2023-05-12' WHERE BOOKID = 106;
UPDATE NEWBOOK SET ORDERDATE = '2023-05-12' WHERE BOOKID = 107;
UPDATE NEWBOOK SET ORDERDATE = '2023-05-12' WHERE BOOKID = 108;
UPDATE NEWBOOK SET ORDERDATE = '2023-05-12' WHERE BOOKID = 109;
UPDATE NEWBOOK SET ORDERDATE = '2023-05-12' WHERE BOOKID = 110;

-- 실습 6-5
select bookid AS '주문번호', orderdate AS '주문일자', adddate(orderdate, 10) from newBook;

SELECT CONCAT('DATA', 'BASE');
SELECT CONCAT(bookname,':', publisher) FROM Book;
SELECT LOWER('Database SQL'), UPPER('Database SQL');
SELECT LENGTH('Database SQL');
SELECT LENGTH('데이터베이스');
SELECT CHAR_LENGTH ('데이터베이스');
SELECT LTRIM('           데이터베이스          ');
SELECT RTRIM('           데이터베이스          ');
SELECT TRIM('           데이터베이스          ');
SELECT REPLACE('데이터베이스 프로그래밍', '데이터베이스', '웹');

SELECT SYSDATE();
SELECT NOW();

SELECT CURRENT_DATE();
-- SELECT date(NOW()); MONTH(), DAY(), HOUR();
SELECT DATEDIFF('2023-06-05', '2022-06-05');
SELECT ADDDATE('2023-06-05', 10);
SELECT ABS(-80), ABS(80);
SELECT ROUND(12.678, 1);