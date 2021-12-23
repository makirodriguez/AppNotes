-- to create a new database
CREATE DATABASE task;

-- to use database
use task;

-- creating a new table
CREATE TABLE IF NOT EXISTS item (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  checkbox BINARY
);

CREATE TABLE IF NOT EXISTS folder(
  folderID INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  itemID INT UNSIGNED,
  FOREIGN KEY (itemID) REFERENCES item(id)
  
);

-- to show all tables
show tables;

-- to describe table
describe item;
describe folder;