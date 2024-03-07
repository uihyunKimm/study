CREATE DATABASE UserDB; 
USE UserDB;

CREATE TABLE UserInfo(
id varchar(20) primary key,
password varchar(20) not null,
passwordcheck varchar(20) not null,
name varchar(5) not null,
birth datetime ,
gender varchar(1),  
email varchar(20),
phone varchar(20) not null,
age int check (age>=15)
);

INSERT INTO UserInfo values('abcd','1234','허광한','2020-10-28','남','abc@naver.com','01011112222',20);


select * from UserInfo;