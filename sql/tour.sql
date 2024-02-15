-- CREATE database tourDB;
USE tourDB;

SELECT * FROM tourTable;

-- 문제 1.1
SELECT distinct 시도명 FROM tourTable;
-- 문제 1.2 
SELECT 시도명 FROM tourTable GROUP BY 시도명;

-- 문제 2.1 :WHERE
SELECT * FROM tourTable WHERE 시도명='경기도';
-- 문제 2.2 :LIKE
SELECT * FROM tourTable WHERE 주소 LIKE '경기%';

-- 문제 3 :COUNT()
SELECT COUNT(*) AS '쇼핑' FROM tourTable WHERE 중분류='쇼핑';
-- 문제 4 :COUNT(), GROUP BY
SELECT 중분류, COUNT(*)AS'관광지 수' FROM tourTable GROUP BY 중분류;
-- 문제 5
SELECT distinct 관광지명, 주소 FROM tourTable WHERE 소분류='테마공원';
-- 문제 6 :COUNT(), GROUP BY
SELECT 소분류,COUNT(검색건수)AS'관광지 수' FROM tourTable WHERE 검색건수 > 600000 GROUP BY 소분류;
-- 문제 7
SELECT * FROM tourTable ORDER BY 검색건수 ASC;
-- 문제 8
SELECT * FROM tourTable ORDER BY 검색건수 ASC LIMIT 40,10 ;