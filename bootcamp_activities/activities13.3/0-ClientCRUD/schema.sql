

-- Drops the clients_db if it already exists --
DROP DATABASE IF EXISTS clients_db;

-- Create the database clients_db and specified it for use.
CREATE DATABASE clients_db;

USE clients_db;

-- Create the table plans.
CREATE TABLE clients
(
  id int NOT NULL
  AUTO_INCREMENT,
  first_name varchar
  (255) NOT NULL,
  last_name varchar
  (255) NOT NULL,
  email varchar
  (255) NOT NULL,
  PRIMARY KEY
  (id)
);

  -- Clients

  INSERT INTO clients
    (first_name, last_name, email)
  VALUES
    ('Bob', 'Dobolina', 'bob@dobalina.com');
  INSERT INTO clients
    (first_name, last_name, email)
  VALUES
    ('Thomas', 'Anderson', 'neo@theone.com');
  INSERT INTO clients
    (first_name, last_name, email)
  VALUES
    ('Edna', 'Mode', 'edna@nocapes.com');
  INSERT INTO clients
    (first_name, last_name, email)
  VALUES
    ('Wednesday', ' Addams', 'weds@addams.com');

  INSERT INTO clients
    (first_name, last_name, email)
  VALUES
    ('Inigo', 'Montoya', 'inigo@missing6.com');

  INSERT INTO clients
    (first_name, last_name, email)
  VALUES
    ('Marge', 'Gunderson', 'margy@ohforsure.com');