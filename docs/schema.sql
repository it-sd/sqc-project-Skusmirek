DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS quiz;

CREATE TABLE user (
  userID int,
  userName varchar(200)
);

CREATE TABLE quiz (
  quizID int,
  userID int, 
  quizName varchar(200)
  score
); 

INSERT INTO user (userID, userName)
VALUES (1, 'Zephyr')

INSERT INTO quiz (quizName, score)
VALUES ('Birds', 20)