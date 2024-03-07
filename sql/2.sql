USE StudentDB;
/*
CREATE DATABASE StudentDB;
CREATE TABLE Students(
	id	INT,
    name	VARCHAR(20),
    age INT,
    address	VARCHAR(20),
    course	VARCHAR(20)
    );
 
INSERT INTO Students(id, name, age, address, course)values(1, '문종헌', 24, '서울', '영어');
INSERT INTO Students(id, name, age, address, course)values(2, '오한솔', 22, '부산', '수학');
INSERT INTO Students(id, name, age, address, course)values(3, '정국철', 25, '서울', '음악');
INSERT INTO Students(id, name, age, address, course)values(4, '박기석', 27, '대전', '국어');
INSERT INTO Students(id, name, age, address, course)values(5, '안창범', 20, '광주', '수학');
INSERT INTO Students(id, name, age, address, course)values(6, '박홍진', 22, '부산', '컴퓨터');
INSERT INTO Students(id, name, age, address, course)values(7, '공지훈', 28, '강원', '국어');
INSERT INTO Students(id, name, age, address, course)values(8, '정희성', 30, '제주', '음악');
INSERT INTO Students(id, name, age, address, course)values(9, '이봉림', 34, '댜전', '영어');
INSERT INTO Students(id, name, age, address, course)values(10, '김현우', 21, '서울', '컴퓨터');

select * from Students;
select id, name FROM Students;

SELECT * FROM Students WHERE age >= 30 ORDER BY age;
SELECT * FROM Students WHERE course LIKE '컴퓨터' ORDER BY id;
SELECT * FROM Students WHERE name = '박기석';
SELECT * FROM Students WHERE age BETWEEN 20 AND 25 ORDER BY id;
SELECT * FROM Students WHERE age IN(28, 34) ORDER BY id;
SELECT * FROM Students WHERE name like '김%' ORDER BY id;
SELECT * FROM Students WHERE name like '_지%' ORDER BY id;
SELECT * FROM Students ORDER BY age;
SELECT * FROM Students ORDER BY age DESC;
   
DELETE FROM Students;
*/

select * from Students;