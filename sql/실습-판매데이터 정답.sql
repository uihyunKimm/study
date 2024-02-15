-- CREATE DATABASE perchDB;
USE perchDB;

create table 고객(
아이디 varchar(20) PRIMARY KEY,
이름 varchar(10),
나이 INT,
등급 varchar(10),
직업 varchar(20),
적립금 INT default 0
);

create table 제품(
제품번호 char(3) PRIMARY KEY,
제품명 varchar(20),
재고량 INT,
단가 INT,
제조업체 varchar(20)
);

create table 주문(
주문번호 char(3) PRIMARY KEY,
주문고객 varchar(20),
주문제품 char(3),
수량 INT,
배송지 varchar(30),
주문일자 date,
FOREIGN KEY(주문고객) REFERENCES 고객(아이디),
FOREIGN KEY(주문제품) REFERENCES 제품(제품번호)
);

select * from 제품;
/*
-- 고객 테이블 데이터
INSERT INTO 고객 VALUES ('apple', '정소화', 20, 'gold', '학생', 1000);
INSERT INTO 고객 VALUES ('banana', '김선우', 25, 'vip', '간호사', 2500);
INSERT INTO 고객 VALUES ('carrot', '고명석', 28, 'gold', '교사', 4500);
INSERT INTO 고객 VALUES ('orange', '김용욱', 22, 'silver', '학생', 0);
INSERT INTO 고객 VALUES ('melon', '성원용', 35, 'gold', '회사원', 5000);
INSERT INTO 고객 VALUES ('peach', '오형준', NULL, 'silver', '의사', 300);
INSERT INTO 고객 VALUES ('pear', '채광주', 31, 'silver', '회사원', 500);

-- 제품 테이블 데이터
INSERT INTO 제품 VALUES('p01', '그냥만두', 5000, 4500, '대한식품');
INSERT INTO 제품 VALUES('p02', '매운쫄면', 2500, 5500, '민국푸드');
INSERT INTO 제품 VALUES('p03', '쿵떡파이', 3600, 2600, '한빛제과');
INSERT INTO 제품 VALUES('p04', '맛난초콜릿', 1250, 2500, '한빛제과');
INSERT INTO 제품 VALUES('p05', '얼큰라면', 2200, 1200, '대한식품');
INSERT INTO 제품 VALUES('p06', '통통우동', 1000, 1550, '민국푸드');
INSERT INTO 제품 VALUES('p07', '달콤비스킷', 1650, 1500, '한빛제과');

-- 주문 테이블 데이터
INSERT INTO 주문 VALUES('o01', 'apple', 'p03', 10, '서울시 마포구', '2022-01-01');
INSERT INTO 주문 VALUES('o02', 'melon', 'p01', 5, '인천시 계양구', '2022-01-10');
INSERT INTO 주문 VALUES('o03', 'banana', 'p06', 45, '경기도 부천시', '2022-01-11');
INSERT INTO 주문 VALUES('o04', 'carrot', 'p02', 8, '부산시 금정구', '2022-02-01');
INSERT INTO 주문 VALUES('o05', 'melon', 'p06', 36, '경기도 용인시', '2022-02-20');
INSERT INTO 주문 VALUES('o06', 'banana', 'p01', 19, '충청북도 보은군 마포구', '2022-03-02');
INSERT INTO 주문 VALUES('o07', 'apple', 'p03', 22, '서울시 영등포구', '2022-03-15');
INSERT INTO 주문 VALUES('o08', 'pear', 'p02', 50, '강원도 춘천시', '2022-04-10');
INSERT INTO 주문 VALUES('o09', 'banana', 'p04', 15, '전라남도 목포시', '2022-04-11');
INSERT INTO 주문 VALUES('o10', 'carrot', 'p03', 20, '경기도 안양시', '2022-05-22');
*/

-- 문제 1-1
select 아이디, 이름, 등급 from 고객;

-- 문제 1-2
select 이름, 나이, 등급, 적립금 from 고객 where 이름 like '김%';

-- 문제 1-3
select 아이디, 이름, 등급 from 고객 where LENGTH(아이디) = 5 ;

-- 문제 1-4
select 이름, 등급, 나이 from 고객 order by 나이 desc;

-- 문제 1-5
select count(*)as 고객수 from 고객 ;

-- 문제 1-6
select 등급, count(*)as 고객수, avg(적립금) as 평균적립금 from 고객
group by 등급
having avg(적립금) >= 1000;

-- 문제 2-1
select 제조업체 from 제품 group by 제조업체;
select distinct 제조업체 from 제품;

-- 문제 2-2
select 제품명, 단가+500 as 조정단가 from 제품 ;

-- 문제 2-3
select 제품명, 재고량, 단가 from 제품 where 제조업체='한빛제과' ;

-- 문제 2-4
select 주문제품, 수량, 주문일자 from 주문 where 주문고객='apple' and 수량 >= 15 ;

-- 문제 2-5
select avg(단가)as단가 from 제품;

-- 문제 2-6
select 제조업체, count(*) as제품수, max(단가) as최고가 from 제품 group by 제조업체;

-- 문제 2-7
select 제조업체, count(*) as제품수, max(단가) as최고가 from 제품 group by 제조업체 having count(*) >= 3;

select * from 제품;
select * from 고객;
select * from 주문;

-- 문제 3-1
select 제품.제품명 from 주문, 제품 
where 주문.주문고객 = 'banana' 
and 주문.주문제품 = 제품.제품번호;

-- 문제 3-2
select 주문.주문제품, 주문.주문일자
from 주문, 고객
where 고객.나이 >= 30 and 주문.주문고객 = 고객.아이디;

-- 문제 3-3
select 제품.제조업체, sum(주문.수량) as 주문수량
from 제품, 주문 
where 제품.제품번호 = 주문.주문제품 
group by 제품.제조업체;

-- 문제 3-4
select 고객.이름, sum(주문.수량)
from 고객, 주문 
where 고객.아이디 = 주문.주문고객 
group by 고객.이름;

-- 문제 3-5
select 고객.이름, 제품.제품명
from 고객, 제품, 주문
where 고객.아이디 = 주문.주문고객 and 제품.제품번호 = 주문.주문제품
and 제품.단가 = 4500;

-- 문제 3-6
select 고객.이름, 제품.제품명
from 고객, 제품, 주문
where 고객.아이디 = 주문.주문고객 and 제품.제품번호 = 주문.주문제품
order by 고객.이름;

-- 문제 3-7
select *
from 고객, 제품, 주문
where 고객.아이디 = 주문.주문고객 and 제품.제품번호 = 주문.주문제품
order by 고객.이름;