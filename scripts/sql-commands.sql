-- File: sql-commands.sql
-- Basic Sql Commands executed via script file
-- Usage: 
-- $ mysql -u root -p < sql-commands.sql
-- # if already running in mysql
-- mysql> source sql-commands.sql

-- list databases 
show databases;

-- creating database
create database user;

-- switch to database
use user;

-- creating table
create table users (username VARCHAR(20), create_date date);

-- droping table
drop table users;

-- creating table with AUTO_INCREMENT field
create table users (user_id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(20), create_date date);

-- list tables
show tables;

-- description of table
explain users;
describe users;

-- Alter table
alter table users add email VARCHAR(100) after username;

alter table users drop email;

alter table users add email varchar(100) after username;

alter table users change username user_name varchar(30);

-- insert values into table
insert into users values ( NULL, 'sivaram', 'sivaram.nyayapati@gmail.com', '2016-06-30' );

insert into users set user_name = 'test', email = 'test@example.com', create_date = '2016-06-30';

insert into users (email, user_name, create_date) values('foo@bar.com', 'foobar', '2016-06-29');
  
insert into users set create_date = now(), user_name = 'some' , email = 'some@mail.com';

-- show lastly inserted record
-- select commands
select last_insert_id();


select now();

select * from users;

select user_name, email from users;

select count(*) from users;

select email from users where user_name = 'sivaram';

select * from users where user_id <= 2;

select * from users where create_date != '2016-06-30';

select * from users where user_id = 1 or user_name = 'sivaram';

select * from users where create_date in('2016-06-30', '2016-07-15');

select * from users where email like '%com%';

select * from users order by create_date;

select * from users limit 2;

select * from users limit 2 offset 1;

-- update record
update users set email = 'new_email@gmail.com', user_name = 'new_name' where user_name = 'sivaram';

-- delete record
delete from users where user_name = 'some';

-- delete table and it keeps the structure
truncate table users;

-- delete database
drop database user;