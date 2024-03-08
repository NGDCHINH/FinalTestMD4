CREATE DATABASE `final-test-md4`;
USE `final-test-md4`;
CREATE TABLE task (
	id INT PRIMARY KEY AUTO_INCREMENT,
    _name VARCHAR(255),
    _status TINYINT DEFAULT 0
);
SELECT * FROM task
