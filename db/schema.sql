CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100) NOT NULL,
    devoured boolean NOT NULL default 0,
    PRIMARY KEY (id)
);

