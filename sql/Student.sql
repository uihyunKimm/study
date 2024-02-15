-- CREATE DATABASE StudentDB;
USE StudentDB;

-- CREATE TABLE StudentInfo(
-- id INT,
-- name VARCHAR(20),
-- age INT,
-- address VARCHAR(20),
-- course VARCHAR(20)
-- );

-- INSERT INTO StudentInfo (id, name, age, address, course) VALUES (1, '문종헌', 24, '서울', '영어');
-- INSERT INTO StudentInfo (id, name, age, address, course) VALUES (2, '오한솔', 22, '부산', '수학');
-- INSERT INTO StudentInfo (id, name, age, address, course) VALUES (3, '정국철', 25, '서울', '음악');
-- INSERT INTO StudentInfo (id, name, age, address, course) VALUES (4, '박기석', 27, '대전', '국어');
-- INSERT INTO StudentInfo (id, name, age, address, course) VALUES (5, '안창범', 20, '광주', '수학');
-- INSERT INTO StudentInfo (id, name, age, address, course) VALUES (6, '박홍진', 22, '부산', '컴퓨터');
-- INSERT INTO StudentInfo (id, name, age, address, course) VALUES (7, '공지훈', 28, '강원', '국어');
-- INSERT INTO StudentInfo (id, name, age, address, course) VALUES (8, '정희성', 30, '제주', '음악');
-- INSERT INTO StudentInfo (id, name, age, address, course) VALUES (9, '이봉림', 34, '대전', '영어');
-- INSERT INTO StudentInfo (id, name, age, address, course) VALUES (10, '김현우', 21, '서울', '컴퓨터');

SELECT id, name FROM studentinfo;
SELECT SUM(age) AS '나이총합' FROM StudentInfo;
SELECT distinct course FROM StudentInfo;
SELECT AVG(age) AS '평균 나이' FROM StudentInfo WHERE course='컴퓨터';
SELECT COUNT(*) AS '수강인원' FROM StudentInfo WHERE course='영어';
SELECT address, COUNT(*) AS '수강인원' FROM StudentInfo GROUP BY address;
SELECT address, AVG(age) AS '퍙균나이' FROM StudentInfo GROUP BY address;
SELECT course, COUNT(*) AS '수강생수' FROM StudentInfo GROUP BY course HAVING AVG(age) >=25;