create database digitalnewsplatform;
use digitalnewsplatform;

create table user(
	userid int primary key auto_increment, 
    fullname varchar(30), 
    username varchar(25), 
    emailid text, 
    password varchar(20), 
    dob date, 
    isadmin boolean default false);

ALTER TABLE user AUTO_INCREMENT=100;
desc user;

insert into user 
	values(0, "Himakar Sandiri", "himakar", "himakar@gmail.com", "1234", "2000-12-27", false);
insert into user 
	values(0, "Akkahshh Agarwaal", "akkahshh", "akkahshh@gmail.com", "1234", "1999-04-03", true);
insert into user 
	values(0, "Lohith G", "lohith", "lohith@gmail.com", "1234", "1999-06-07", false);
select * from user;


create table article(
	articleid int primary key auto_increment, 
	title text);
    
alter table article auto_increment=1000;
desc article;
insert into article values(0, 
	"VVS retires");
select * from article;

create table likes(
	likeid int primary key auto_increment, 
    articleid int, 
    userid int,
    foreign key(userid) references user(userid),
    foreign key (articleid) references article(articleid));
alter table likes auto_increment=1;
desc likes;
insert into likes values(0, 1000, 100);
insert into likes values(0, 1000, 101);
insert into likes values(0, 1000, 102);
insert into likes values(0, 1000, 102);
insert into likes values(0, 1001, 102);
select * from likes;

create table comments(
	commentid int primary key auto_increment, 
    articleid int, 
    userid int, 
    comment varchar(200),
    foreign key(userid) references user(userid),
    foreign key (articleid) references article(articleid));
alter table comments auto_increment=1;
desc comments;
insert into comments values(0, 1000, 100, "Laxman was a fantastic batsman.");
insert into comments values(0, 1000, 101, "Yes definitely.");
insert into comments values(0, 1000, 100, "Right man.");
insert into comments values(0, 1001, 101, "First comment.");
insert into comments values(0, 1001, 102, "Second comment.");
select * from comments;