-- tables to be created --two
-- database --nss
-- 1. users -- name,roll_number
-- 2. events -- event_id, event_name, event_category(1-6)
-- 3. attended -- roll_number, event_id, hours


CREATE DATABASE  nss;

USE nss; -- or 
\c nss; --psql

CREATE TABLE IF NOT EXISTS users (
    name VARCHAR(100) NOT NULL,
    roll_number INT PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS events (
    event_id INT PRIMARY KEY,
    event_name VARCHAR(100) NOT NULL,
    event_category INT NOT NULL
);

CREATE TABLE IF NOT EXISTS attended (
    roll_number INT,
    event_id INT,
    hours INT,
    PRIMARY KEY (roll_number, event_id),
    FOREIGN KEY (roll_number) REFERENCES users(roll_number),
    FOREIGN KEY (event_id) REFERENCES events(event_id)
);