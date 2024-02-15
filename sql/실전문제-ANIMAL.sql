-- create database animalDB;
use animalDB;

create table ANIMAL_INS(
ANIMAL_ID VARCHAR(20) NOT NULL,
ANIMAL_TYPE VARCHAR(20) NOT NULL,
AINTAKE_CONDITION VARCHAR(20) NOT NULL,
NAME VARCHAR(20) NULL,
SEX_UPON_INTAKE VARCHAR(20) NOT NULL
);


SELECT * FROM ANIMAL_INS;
SELECT NAME, COUNT(*) FROM ANIMAL_INS
GROUP BY NAME
HAVING COUNT(NAME) >= 2 AND NAME IS/*IS = '='*/ NOT NULL
order by NAME ASC;
/*
COUNT(*) : NULL 값 포함
COUNT(열이름) : NULL 값 미 포함
*/

/*
-- 실전문제 6
INSERT INTO ANIMAL_INS VALUES('A0001', 'Dog', 'Injured', 'Raven', 'Spayed Female');
INSERT INTO ANIMAL_INS VALUES('A0002', 'Dog', 'Normal', 'Lucy', 'Spayed Female');
INSERT INTO ANIMAL_INS VALUES('A0003', 'Dog', 'Normal', 'Shadow', 'Neutered Male');
INSERT INTO ANIMAL_INS VALUES('A0004', 'Dog', 'Normal', 'Lucy', 'Spayed Female');
INSERT INTO ANIMAL_INS VALUES('A0005', 'Dog', 'Normal', 'Lucy', 'Spayed Female');
INSERT INTO ANIMAL_INS VALUES('A0006', 'Cat', 'Normal', 'Raven', 'Spayed Female');
*/