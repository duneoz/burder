DROP DATABASE IF EXISTS burders_db;
CREATE DATABASE burders_db;

USE burders_db;

CREATE TABLE burders
(
	id INT AUTO_INCREMENT PRIMARY KEY,
	burder_name VARCHAR(100) not null,
	devoured BOOLEAN default false,
	date TIMESTAMP
);